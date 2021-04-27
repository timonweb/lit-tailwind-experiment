import { html, LitElement } from "lit";

/**
 * Opens a modal when slotted element is clicked.
 */
export class TwModalInvoker extends LitElement {
  static get properties() {
    return {
      target: { type: String },
    };
  }

  handleClick(e) {
    e.preventDefault();
    const modal = document.querySelector(`tw-modal${this.target}`);
    modal.open = true;
  }

  render() {
    return html` <slot @click="${this.handleClick}"></slot> `;
  }
}

window.customElements.define("tw-modal-invoker", TwModalInvoker);
