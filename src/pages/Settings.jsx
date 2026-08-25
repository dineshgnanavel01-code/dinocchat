// Warm Editorial Community: settings are presented like a considered preferences sheet, with plain language and soft, non-alarming controls.

import { Bell, ChevronRight, Eye, LockKeyhole, Moon, ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const accountItems = [{ label: "Profile information", description: "Name, handle, and photo", icon: UserRound }, { label: "Password & security", description: "Keep your account safe", icon: ShieldCheck }];

export default function Settings() {
  const [privateAccount, setPrivateAccount] = useState(false);
  const [emailNotes, setEmailNotes] = useState(true);
  const [quietMode, setQuietMode] = useState(false);
  return <main className="page-grid single-page-grid"><section className="narrow-page settings-page"><div className="page-intro"><div><span className="eyebrow">Make it yours</span><h1>Settings</h1></div></div><div className="settings-card"><div className="settings-group"><span className="eyebrow">Account</span>{accountItems.map(({ label, description, icon: Icon }) => <button className="settings-row" key={label} onClick={() => toast(`${label} is coming soon`, { description })}><span className="settings-icon"><Icon size={17} /></span><span><strong>{label}</strong><small>{description}</small></span><ChevronRight size={17} /></button>)}</div><div className="settings-divider" /><div className="settings-group"><span className="eyebrow">Preferences</span><div className="settings-row"><span className="settings-icon"><Bell size={17} /></span><span><strong>Notifications</strong><small>Choose what reaches you</small></span><button className={`toggle ${emailNotes ? "is-on" : ""}`} onClick={() => setEmailNotes((value) => !value)} aria-label="Toggle notification emails"><span /></button></div><div className="settings-row"><span className="settings-icon"><LockKeyhole size={17} /></span><span><strong>Privacy</strong><small>Control who sees your notes</small></span><button className={`toggle ${privateAccount ? "is-on" : ""}`} onClick={() => setPrivateAccount((value) => !value)} aria-label="Toggle private account"><span /></button></div><div className="settings-row"><span className="settings-icon"><Moon size={17} /></span><span><strong>Quiet mode</strong><small>Fewer visual interruptions</small></span><button className={`toggle ${quietMode ? "is-on" : ""}`} onClick={() => setQuietMode((value) => !value)} aria-label="Toggle quiet mode"><span /></button></div></div></div><div className="settings-footnote"><Eye size={16} /><p>Your choices are saved on this device for now.</p></div></section></main>;
}
