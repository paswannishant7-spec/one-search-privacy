import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, isAbsolute, join, normalize, relative, resolve } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number.parseInt(process.env.PORT || "3000", 10);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".xml": "application/xml; charset=utf-8",
};

function resolveRequest(pathname) {
  const decoded = decodeURIComponent(pathname);
  const safePath = normalize(decoded)
    .replace(/^(\.\.[/\\])+/, "")
    .replace(/^[/\\]+/, "");
  const base = join(root, safePath || "index.html");
  const candidates = [base];

  if (!extname(base)) {
    candidates.push(`${base}.html`, join(base, "index.html"));
  }

  for (const candidate of candidates) {
    const resolved = resolve(candidate);
    const fromRoot = relative(root, resolved);
    if (fromRoot.startsWith("..") || isAbsolute(fromRoot)) continue;
    if (existsSync(resolved) && statSync(resolved).isFile()) return resolved;
  }

  return join(root, "404.html");
}

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
  const file = resolveRequest(url.pathname);
  const status = file.endsWith("404.html") ? 404 : 200;
  const extension = extname(file).toLowerCase();
  response.writeHead(status, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "Cache-Control": url.pathname.startsWith("/_next/")
      ? "public, max-age=31536000, immutable"
      : "no-cache",
  });
  createReadStream(file).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static site ready at http://127.0.0.1:${port}`);
});
