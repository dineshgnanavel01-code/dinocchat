import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser =
        localStorage.getItem("dinoc_user");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    } catch {
      localStorage.removeItem("dinoc_user");
      return null;
    }
  });

  // SIGN UP
  const signup = async (name) => {
    if (!name || !name.trim()) {
      throw new Error("Please enter your name.");
    }

    const cleanName = name.trim();

    const username = cleanName
      .toLowerCase()
      .replace(/\s+/g, "");

    const newUser = {
      id: Date.now().toString(),
      name: cleanName,
      username,
      email: `${username}@dinoc.app`,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        cleanName
      )}&background=7c3aed&color=fff`,
    };

    localStorage.setItem(
      "dinoc_account",
      JSON.stringify(newUser)
    );

    localStorage.setItem(
      "dinoc_user",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return newUser;
  };

  // LOGIN
  const login = async (name) => {
    if (!name || !name.trim()) {
      throw new Error("Please enter your name.");
    }

    const savedAccount =
      localStorage.getItem("dinoc_account");

    if (!savedAccount) {
      throw new Error(
        "No account found. Please create an account first."
      );
    }

    const account = JSON.parse(savedAccount);

    const enteredName = name
      .trim()
      .toLowerCase();

    const accountName = account.name
      .trim()
      .toLowerCase();

    const accountUsername = account.username
      .trim()
      .toLowerCase();

    if (
      enteredName !== accountName &&
      enteredName !== accountUsername
    ) {
      throw new Error(
        "Account not found. Please check your name."
      );
    }

    const loggedInUser = {
      id: account.id,
      name: account.name,
      username: account.username,
      email: account.email,
      avatar: account.avatar,
    };

    localStorage.setItem(
      "dinoc_user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);

    return loggedInUser;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("dinoc_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth() must be used inside <AuthProvider>"
    );
  }

  return context;
}