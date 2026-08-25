import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Saved from "./pages/Saved";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* PROTECTED */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/messages"
            element={<Messages />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/saved"
            element={<Saved />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}