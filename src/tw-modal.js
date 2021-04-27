import { html } from "lit";
import { LitTailwindElement } from "./lit-tailwind";

/**
 * Modal with Tailwind Styles.
 */
export class TwModal extends LitTailwindElement {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
    };
  }

  render() {
    if (this.open) {
      return html`
        <div
          class="fixed flex justify-center items-center inset-0 bg-gray-500 bg-opacity-75"
        >
          <div
            class="z-10 inset-0 overflow-y-auto max-w-md w-full block align-bottom bg-white rounded-lg p-4 text-left shadow-xl transform my-8"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <h2 id="modal-title" class="text-2xl mb-2">I'm a shadow title</h2>
            <div>
              <slot></slot>
            </div>
            <button
              @click=${() => (this.open = false)}
              class="p-2 mt-4 border border-red-400 hover:bg-red-400 text-red-500 hover:text-white"
            >
              Click me to close
            </button>
          </div>
        </div>
      `;
    }
    return "";
  }
}

window.customElements.define("tw-modal", TwModal);
