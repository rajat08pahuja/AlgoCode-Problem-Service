const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurnDownService = require("turndown");

function sanitizeMarkdown(markdownContent) {
  // 1. convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
  // 2. sanitize the html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  // 3. convert html to markdown
  turndownService = new TurnDownService();
  const sanitizeMarkdown = turndownService.turndown(sanitizedHtml);
  return sanitizeMarkdown;
}

module.exports = sanitizeMarkdown;
