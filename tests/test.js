const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("site/index.html", "utf8");
const css = fs.readFileSync("site/style.css", "utf8");
const js = fs.readFileSync("site/app.js", "utf8");

assert.ok(html.includes('id="task-form"'));
assert.ok(html.includes('id="task-input"'));
assert.ok(html.includes('id="task-list"'));
assert.ok(html.includes('id="task-count"'));

assert.ok(css.includes(".done"));
assert.ok(js.includes('addEventListener("submit"'));
assert.ok(js.includes('classList.toggle("done")'));

console.log("All automated tests passed!");
