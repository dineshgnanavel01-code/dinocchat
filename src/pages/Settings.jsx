import { useEffect, useState } from "react";
import {
  Bell,
  ChevronRight,
  Globe,
  Lock,
  Moon,
  Palette,
  Shield,
  User,
  Sun,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { logout } = useAuth();

  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => {
    setDark((current) => !current);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto w-full max-w-full space-y-6 p-4 sm:p-6">

        {/* HEADER */}
        <section className="rounded-3xl bg-violet-600 p-6 text-white shadow-xl shadow-violet-500/10 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
              <Palette size={26} />
            </div>

            <div>
              <h1 className="text-3xl font-black">
                Settings
              </h1>

              <p className="mt-1 text-sm text-violet-100">
                Manage your account, appearance and privacy.
              </p>
            </div>
          </div>
        </section>

        {/* APPEARANCE */}
        <SettingsSection
          title="Appearance"
          description="Customize how Dinoc looks on your device."
          icon={Palette}
        >
          <div className="flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:bg-slate-50 dark:hover:bg-slate-800/70">

            <div className="flex min-w-0 items-center gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                {dark ? (
                  <Moon size={20} />
                ) : (
                  <Sun size={20} />
                )}
              </div>

              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Dark mode
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {dark
                    ? "Dark appearance is enabled."
                    : "Use the light appearance."}
                </p>
              </div>
            </div>

            {/* MODERN TOGGLE */}
            <button
              type="button"
              onClick={toggle}
              aria-label={
                dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={dark}
              className={`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-all duration-300 ${
                dark
                  ? "bg-violet-600 shadow-lg shadow-violet-500/30"
                  : "bg-slate-200 shadow-inner"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                  dark
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              >
                {dark ? (
                  <Moon
                    size={14}
                    className="text-violet-600"
                  />
                ) : (
                  <Sun
                    size={14}
                    className="text-amber-500"
                  />
                )}
              </span>
            </button>
          </div>
        </SettingsSection>

        {/* ACCOUNT */}
        <SettingsSection
          title="Account"
          description="Manage your personal account information."
          icon={User}
        >
          <SettingsItem
            icon={User}
            title="Profile information"
            description="Update your name, username and bio."
          />

          <SettingsItem
            icon={Lock}
            title="Password & security"
            description="Manage your password and account security."
          />
        </SettingsSection>

        {/* PRIVACY */}
        <SettingsSection
          title="Privacy & Security"
          description="Control your privacy and account visibility."
          icon={Shield}
        >
          <SettingsItem
            icon={Shield}
            title="Privacy settings"
            description="Control who can see your content."
          />

          <SettingsItem
            icon={Globe}
            title="Discoverability"
            description="Manage how people can find you on Dinoc."
          />
        </SettingsSection>

        {/* NOTIFICATIONS */}
        <SettingsSection
          title="Notifications"
          description="Choose which notifications you receive."
          icon={Bell}
        >
          <SettingsItem
            icon={Bell}
            title="Notification preferences"
            description="Manage likes, comments, messages and follows."
          />
        </SettingsSection>

        {/* ACCOUNT ACTIONS */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-6">

          <h2 className="font-black text-slate-900 dark:text-white">
            Account actions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Actions related to your Dinoc account.
          </p>

          <button
            type="button"
            onClick={logout}
            className="mt-5 flex w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-400">
              <LogOut size={20} />
            </div>

            <div className="flex-1">
              <p className="font-bold text-red-500 dark:text-red-400">
                Log out
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Sign out of your Dinoc account.
              </p>
            </div>

            <ChevronRight
              size={18}
              className="text-slate-400"
            />
          </button>
        </section>

        <p className="pb-6 text-center text-xs text-slate-400">
          Dinoc Settings • © 2026
        </p>
      </div>
    </div>
  );
}

/* =========================================
   SETTINGS SECTION
========================================= */

function SettingsSection({
  title,
  description,
  icon: Icon,
  children,
}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-6">

      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
          <Icon size={19} />
        </div>

        <div>
          <h2 className="font-black text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="text-xs text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {children}
      </div>
    </section>
  );
}

/* =========================================
   SETTINGS ITEM
========================================= */

function SettingsItem({
  icon: Icon,
  title,
  description,
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/70"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-violet-100 group-hover:text-violet-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-violet-500/10 dark:group-hover:text-violet-400">
        <Icon size={19} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-bold text-slate-800 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {description}
        </p>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-500"
      />
    </button>
  );
}