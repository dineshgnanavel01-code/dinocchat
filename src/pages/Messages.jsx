
import { useState } from "react";
import {
  ArrowLeft,
  CheckCheck,
  MessageCircle,
  MoreVertical,
  Search,
  Send,
  Smile,
  Phone,
  Video,
  Info,
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function Messages() {
  const { conversations = [], sendMessage } = useApp();

  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const chat = conversations.find(
    (item) => item.id === selected
  );

  const filteredConversations = conversations.filter((item) =>
    item.user.name.toLowerCase().includes(search.toLowerCase())
  );

  const submit = (event) => {
    event.preventDefault();

    const text = message.trim();

    if (!text || selected === null) return;

    sendMessage(selected, text);
    setMessage("");
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white text-slate-900 dark:bg-black dark:text-white">
      <div className="mx-auto h-[calc(100vh-4rem)] max-w-7xl overflow-hidden md:p-3">
        <div className="flex h-full overflow-hidden md:rounded-2xl md:border md:border-slate-200 md:dark:border-slate-800">

          {/* CHAT LIST */}
          <aside
            className={`${
              selected !== null ? "hidden md:flex" : "flex"
            } w-full shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-black md:w-330px lg:w-380px`}
          >
            <div className="px-5 pb-4 pt-6">
              <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">
                  Messages
                </h1>

                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  <MessageCircle size={22} />
                </button>
              </div>

              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search"
                  className="
                    h-10
                    w-full
                    rounded-xl
                    border-none
                    bg-slate-100
                    pl-10
                    pr-4
                    text-sm
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:ring-2
                    focus:ring-violet-500/20
                    dark:bg-slate-900
                    dark:text-white
                  "
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-2 pb-4">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((item) => {
                  const active = item.id === selected;
                  const lastMessage = item.messages?.at(-1);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelected(item.id)}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                        active
                          ? "bg-slate-100 dark:bg-slate-900"
                          : "hover:bg-slate-50 dark:hover:bg-slate-950"
                      }`}
                    >
                      <div className="relative shrink-0">
                        <img
                          src={item.user.avatar}
                          alt={item.user.name}
                          className="
                            h-14
                            w-14
                            rounded-full
                            object-cover
                            ring-1
                            ring-slate-200
                            dark:ring-slate-800
                          "
                        />

                        <span
                          className="
                            absolute
                            bottom-0
                            right-0
                            h-3.5
                            w-3.5
                            rounded-full
                            border-2
                            border-white
                            bg-emerald-500
                            dark:border-black
                          "
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-sm font-semibold">
                            {item.user.name}
                          </p>

                          <span className="shrink-0 text-[10px] text-slate-400">
                            {lastMessage?.time || ""}
                          </span>
                        </div>

                        <p className="mt-1 truncate text-xs text-slate-400">
                          {lastMessage?.text || "Start a conversation"}
                        </p>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="px-5 py-16 text-center">
                  <Search
                    size={28}
                    className="mx-auto mb-3 text-slate-300 dark:text-slate-700"
                  />

                  <p className="text-sm font-medium text-slate-500">
                    No conversations found
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* CHAT WINDOW */}
          <section
            className={`${
              selected !== null ? "flex" : "hidden md:flex"
            } min-w-0 flex-1 flex-col bg-white dark:bg-black`}
          >
            {chat ? (
              <>
                {/* CHAT HEADER */}
                <header
                  className="
                    flex
                    h-70px
                    shrink-0
                    items-center
                    justify-between
                    border-b
                    border-slate-200
                    px-4
                    dark:border-slate-800
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full
                        transition
                        hover:bg-slate-100
                        md:hidden
                        dark:hover:bg-slate-900
                      "
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <div className="relative">
                      <img
                        src={chat.user.avatar}
                        alt={chat.user.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <span
                        className="
                          absolute
                          bottom-0
                          right-0
                          h-2.5
                          w-2.5
                          rounded-full
                          border-2
                          border-white
                          bg-emerald-500
                          dark:border-black
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <h2 className="truncate text-sm font-bold">
                        {chat.user.name}
                      </h2>

                      <p className="text-[11px] text-slate-400">
                        Active now
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <Phone size={19} />
                    </button>

                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <Video size={20} />
                    </button>

                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <Info size={19} />
                    </button>

                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <MoreVertical size={19} />
                    </button>
                  </div>
                </header>

                {/* CHAT CONTENT */}
                <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-8">
                  <div className="mx-auto max-w-3xl">
                    <div className="mb-8 flex flex-col items-center text-center">
                      <img
                        src={chat.user.avatar}
                        alt={chat.user.name}
                        className="
                          h-20
                          w-20
                          rounded-full
                          object-cover
                          ring-2
                          ring-slate-200
                          dark:ring-slate-800
                        "
                      />

                      <h3 className="mt-3 text-sm font-bold">
                        {chat.user.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        {chat.user.username
                          ? `@${chat.user.username}`
                          : "Dinoc user"}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        Active now
                      </p>
                    </div>

                    <div className="mb-5 text-center">
                      <span className="text-[10px] font-medium text-slate-400">
                        Today
                      </span>
                    </div>

                    <div className="space-y-2">
                      {chat.messages.map((item) => (
                        <div
                          key={item.id}
                          className={`flex ${
                            item.fromMe
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`flex max-w-[78%] flex-col sm:max-w-[60%] ${
                              item.fromMe
                                ? "items-end"
                                : "items-start"
                            }`}
                          >
                            {/* MESSAGE BUBBLE - NO GRADIENT */}
                            <div
                              className={`rounded-[22px] px-4 py-2.5 text-sm leading-5 ${
                                item.fromMe
                                  ? "rounded-br-md bg-violet-600 text-white"
                                  : "rounded-bl-md bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
                              }`}
                            >
                              {item.text}
                            </div>

                            <div
                              className="
                                mt-1
                                flex
                                items-center
                                gap-1
                                px-1
                                text-[9px]
                                text-slate-400
                              "
                            >
                              {item.time}

                              {item.fromMe && (
                                <CheckCheck
                                  size={12}
                                  className="text-violet-500"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* MESSAGE INPUT */}
                <form
                  onSubmit={submit}
                  className="
                    shrink-0
                    border-t
                    border-slate-200
                    bg-white
                    p-3
                    dark:border-slate-800
                    dark:bg-black
                  "
                >
                  <div className="mx-auto flex max-w-3xl items-center gap-2">
                    <button
                      type="button"
                      className="
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        rounded-full
                        transition
                        hover:bg-slate-100
                        hover:text-violet-600
                        dark:hover:bg-slate-900
                      "
                    >
                      <Smile size={21} />
                    </button>

                    <div
                      className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        dark:border-slate-800
                        dark:bg-slate-900
                      "
                    >
                      <input
                        value={message}
                        onChange={(event) =>
                          setMessage(event.target.value)
                        }
                        placeholder="Message..."
                        className="
                          h-11
                          min-w-0
                          flex-1
                          bg-transparent
                          text-sm
                          outline-none
                          placeholder:text-slate-400
                        "
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!message.trim()}
                      className="
                        grid
                        h-11
                        w-11
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-violet-600
                        text-white
                        shadow-lg
                        shadow-violet-500/20
                        transition
                        hover:bg-violet-700
                        hover:scale-105
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                    >
                      <Send size={17} strokeWidth={2.5} />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* EMPTY STATE */
              <div className="m-auto px-6 text-center">
                <div
                  className="
                    mx-auto
                    grid
                    h-20
                    w-20
                    place-items-center
                    rounded-full
                    border
                    border-slate-300
                    dark:border-slate-700
                  "
                >
                  <MessageCircle size={36} />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  Your messages
                </h2>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
                  Send private messages to your friends
                  and start conversations.
                </p>

                <button
                  type="button"
                  className="
                    mt-5
                    rounded-lg
                    bg-violet-600
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-violet-700
                  "
                >
                  Send message
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
