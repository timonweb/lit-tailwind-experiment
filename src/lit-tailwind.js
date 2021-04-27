import { css, LitElement, unsafeCSS } from "lit";

let cachedStylesheet = "";

export class LitTailwindElement extends LitElement {
  static get styles() {
    if (!cachedStylesheet) {
      cachedStylesheet = stylesheetToString(document.styleSheets[0]);
    }
    return css`
      ${unsafeCSS(cachedStylesheet)}
    `;
  }
}

const stylesheetToString = (stylesheet) => {
  return stylesheet.cssRules
    ? Array.from(stylesheet.cssRules)
        .map((rule) => rule.cssText || "")
        .join("\n")
    : "";
};
