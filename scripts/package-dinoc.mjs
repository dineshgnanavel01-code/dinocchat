import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "src");
const staging = "/home/ubuntu/dinoc-package/Dinoc";
const archive = "/home/ubuntu/dinoc-exact-jsx-structure.zip";

fs.rmSync(path.dirname(staging), { recursive: true, force: true });
fs.mkdirSync(staging, { recursive: true });

for (const directory of ["components", "pages", "context", "data"]) {
  fs.cpSync(path.join(source, directory), path.join(staging, "src", directory), { recursive: true });
}
fs.mkdirSync(path.join(staging, "src"), { recursive: true });
fs.copyFileSync(path.join(source, "App.jsx"), path.join(staging, "src", "App.jsx"));
fs.copyFileSync(path.join(source, "main.jsx"), path.join(staging, "src", "main.jsx"));

const css = fs.readFileSync(path.join(source, "index.css"), "utf8")
  .replaceAll("\\", "\\\\")
  .replaceAll("`", "\\`")
  .replaceAll("${", "\\${");
const mainPath = path.join(staging, "src", "main.jsx");
let main = fs.readFileSync(mainPath, "utf8").replace('import "./index.css";\n', "");
main = `const globalStyles = String.raw\`${css}\`;\nconst styleTag = document.createElement("style");\nstyleTag.textContent = globalStyles;\ndocument.head.appendChild(styleTag);\n${main}`;
fs.writeFileSync(mainPath, main);

fs.rmSync(archive, { force: true });
const { execFileSync } = await import("node:child_process");
execFileSync("zip", ["-qr", archive, "Dinoc"], { cwd: "/home/ubuntu/dinoc-package" });
console.log(archive);
