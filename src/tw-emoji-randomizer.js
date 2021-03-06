import { html } from "lit";
import { LitTailwindElement } from "./lit-tailwind";

/**
 * Shows a random emoji on a button click.
 */
export class TwEmojiRandomizer extends LitTailwindElement {
  get randomEmoji() {
    const emojis = [
      "😄",
      "😃",
      "😀",
      "😊",
      "😉",
      "😍",
      "😘",
      "😚",
      "😗",
      "😙",
      "😜",
      "😝",
      "😛",
      "😳",
      "😁",
      "😔",
      "😌",
      "😒",
      "😞",
      "😣",
      "😢",
      "😂",
      "😭",
      "😪",
      "😥",
      "😰",
      "😅",
      "😓",
      "😩",
      "😫",
      "😨",
      "😱",
      "😠",
      "😡",
      "😤",
      "😖",
      "😆",
      "😋",
      "😷",
      "😎",
      "😴",
      "😵",
      "😲",
      "😟",
      "😦",
      "😧",
      "😈",
      "👿",
      "😮",
      "😬",
      "😐",
      "😕",
      "😯",
      "😶",
      "😇",
      "😏",
      "😑",
      "👲",
      "👳",
      "👮",
      "👷",
      "💂",
      "👶",
      "👦",
      "👧",
      "👨",
      "👩",
      "👴",
      "👵",
      "👱",
      "👼",
      "👸",
      "😺",
      "😸",
      "😻",
      "😽",
      "😼",
      "🙀",
      "😿",
      "😹",
      "😾",
      "👹",
      "👺",
      "🙈",
      "🙉",
      "🙊",
      "💀",
      "👽",
      "💩",
      "🔥",
      "✨",
      "🌟",
      "💫",
      "💥",
      "💢",
      "💦",
      "💧",
      "💤",
      "💨",
      "👂",
      "👀",
      "👃",
      "👅",
      "👄",
      "👍",
      "👎",
      "👌",
      "👊",
      "✊",
      "✌",
      "👋",
      "✋",
      "👐",
      "👆",
      "👇",
      "👉",
      "👈",
      "🙌",
      "🙏",
      "👏",
      "💪",
      "🚶",
      "🏃",
      "💃",
      "👫",
      "👪",
      "👬",
      "👭",
      "💏",
      "💑",
      "👯",
      "🙆",
      "🙅",
      "💁",
      "🙋",
      "💆",
      "💇",
      "💅",
      "👰",
      "🙎",
      "🙍",
      "🙇",
      "🎩",
      "👑",
      "👒",
      "👟",
      "👞",
      "👡",
      "👠",
      "👢",
      "👕",
      "👔",
      "👚",
      "👗",
      "🎽",
      "👖",
      "👘",
      "👙",
      "💼",
      "👜",
      "👝",
      "👛",
      "👓",
      "🎀",
      "🌂",
      "💄",
      "💛",
      "💙",
      "💜",
      "💚",
      "💔",
      "💗",
      "💓",
      "💕",
      "💖",
      "💞",
      "💘",
      "💌",
      "💋",
      "💍",
      "💎",
      "👤",
      "👥",
      "💬",
      "👣",
      "💭",
      "🐶",
      "🐺",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🐸",
      "🐯",
      "🐨",
      "🐻",
      "🐷",
      "🐽",
      "🐮",
      "🐗",
      "🐵",
      "🐒",
      "🐴",
      "🐑",
      "🐘",
      "🐼",
      "🐧",
      "🐦",
      "🐤",
      "🐥",
      "🐣",
      "🐔",
      "🐍",
      "🐢",
      "🐛",
      "🐝",
      "🐜",
      "🐞",
      "🐌",
      "🐙",
      "🐚",
      "🐠",
      "🐟",
      "🐬",
      "🐳",
      "🐋",
      "🐄",
      "🐏",
      "🐀",
      "🐃",
      "🐅",
      "🐇",
      "🐉",
      "🐎",
      "🐐",
      "🐓",
      "🐕",
      "🐖",
      "🐁",
      "🐂",
      "🐲",
      "🐡",
      "🐊",
      "🐫",
      "🐪",
      "🐆",
      "🐈",
      "🐩",
      "🐾",
      "💐",
      "🌸",
      "🌷",
      "🍀",
      "🌹",
      "🌻",
      "🌺",
      "🍁",
      "🍃",
      "🍂",
      "🌿",
      "🌾",
      "🍄",
      "🌵",
      "🌴",
      "🌲",
      "🌳",
      "🌰",
      "🌱",
      "🌼",
      "🌐",
      "🌞",
      "🌝",
      "🌚",
      "🌑",
      "🌒",
      "🌓",
      "🌔",
      "🌕",
      "🌖",
      "🌗",
      "🌘",
      "🌜",
      "🌛",
      "🌙",
      "🌍",
      "🌎",
      "🌏",
      "🌋",
      "🌌",
      "🌠",
      "⭐",
      "☀",
      "⛅",
      "☁",
      "⚡",
      "☔",
      "❄",
      "⛄",
      "🌀",
      "🌁",
      "🌈",
      "🌊",
      "🎍",
      "💝",
      "🎎",
      "🎒",
      "🎓",
      "🎏",
      "🎆",
      "🎇",
      "🎐",
      "🎑",
      "🎃",
      "👻",
      "🎅",
      "🎄",
      "🎁",
      "🎋",
      "🎉",
      "🎊",
      "🎈",
      "🎌",
      "🔮",
      "🎥",
      "📷",
      "📹",
      "📼",
      "💿",
      "📀",
      "💽",
      "💾",
      "💻",
      "📱",
      "☎",
      "📞",
      "📟",
      "📠",
      "📡",
      "📺",
      "📻",
      "🔊",
      "🔉",
      "🔈",
      "🔇",
      "🔔",
      "🔕",
      "📢",
      "📣",
      "⏳",
      "⌛",
      "⏰",
      "⌚",
      "🔓",
      "🔒",
      "🔏",
      "🔐",
      "🔑",
      "🔎",
      "💡",
      "🔦",
      "🔆",
      "🔅",
      "🔌",
      "🔋",
      "🔍",
      "🛁",
      "🛀",
      "🚿",
      "🚽",
      "🔧",
      "🔩",
      "🔨",
      "🚪",
      "🚬",
      "💣",
      "🔫",
      "🔪",
      "💊",
      "💉",
      "💰",
      "💴",
      "💵",
      "💷",
      "💶",
      "💳",
      "💸",
      "📲",
      "📧",
      "📥",
      "📤",
      "📩",
      "📨",
      "📯",
      "📫",
      "📪",
      "📬",
      "📭",
      "📮",
      "📦",
      "📝",
      "📄",
      "📃",
      "📑",
      "📊",
      "📈",
      "📉",
      "📜",
      "📋",
      "📅",
      "📆",
      "📇",
      "📁",
      "📂",
      "📌",
      "📎",
      "📏",
      "📐",
      "📕",
      "📗",
      "📘",
      "📙",
      "📓",
      "📔",
      "📒",
      "📚",
      "📖",
      "🔖",
      "📛",
      "🔬",
      "🔭",
      "📰",
      "🎨",
      "🎬",
      "🎤",
      "🎧",
      "🎼",
      "🎵",
      "🎶",
      "🎹",
      "🎻",
      "🎺",
      "🎷",
      "🎸",
      "👾",
      "🎮",
      "🃏",
      "🎴",
      "🀄",
      "🎲",
      "🎯",
      "🏈",
      "🏀",
      "⚽",
      "⚾",
      "🎾",
      "🎱",
      "🏉",
      "🎳",
      "⛳",
      "🚵",
      "🚴",
      "🏁",
      "🏇",
      "🏆",
      "🎿",
      "🏂",
      "🏊",
      "🏄",
      "🎣",
      "☕",
      "🍵",
      "🍶",
      "🍼",
      "🍺",
      "🍻",
      "🍸",
      "🍹",
      "🍷",
      "🍴",
      "🍕",
      "🍔",
      "🍟",
      "🍗",
      "🍖",
      "🍝",
      "🍛",
      "🍤",
      "🍱",
      "🍣",
      "🍥",
      "🍙",
      "🍘",
      "🍚",
      "🍜",
      "🍲",
      "🍢",
      "🍡",
      "🍳",
      "🍞",
      "🍩",
      "🍮",
      "🍦",
      "🍨",
      "🍧",
      "🎂",
      "🍰",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
      "🍯",
      "🍎",
      "🍏",
      "🍊",
      "🍋",
      "🍒",
      "🍇",
      "🍉",
      "🍓",
      "🍑",
      "🍈",
      "🍌",
      "🍐",
      "🍍",
      "🍠",
      "🍆",
      "🍅",
      "🌽",
      "🏠",
      "🏡",
      "🏫",
      "🏢",
      "🏣",
      "🏥",
      "🏦",
      "🏪",
      "🏩",
      "🏨",
      "💒",
      "⛪",
      "🏬",
      "🏤",
      "🌇",
      "🌆",
      "🏯",
      "🏰",
      "⛺",
      "🏭",
      "🗼",
      "🗾",
      "🗻",
      "🌄",
      "🌅",
      "🌃",
      "🗽",
      "🌉",
      "🎠",
      "🎡",
      "⛲",
      "🎢",
      "🚢",
      "⛵",
      "🚤",
      "🚣",
      "⚓",
      "🚀",
      "✈",
      "💺",
      "🚁",
      "🚂",
      "🚊",
      "🚉",
      "🚞",
      "🚆",
      "🚄",
      "🚅",
      "🚈",
      "🚇",
      "🚝",
      "🚋",
      "🚃",
      "🚎",
      "🚌",
      "🚍",
      "🚙",
      "🚘",
      "🚗",
      "🚕",
      "🚖",
      "🚛",
      "🚚",
      "🚨",
      "🚓",
      "🚔",
      "🚒",
      "🚑",
      "🚐",
      "🚲",
      "🚡",
      "🚟",
      "🚠",
      "🚜",
      "💈",
      "🚏",
      "🎫",
      "🚦",
      "🚥",
      "⚠",
      "🚧",
      "🔰",
      "⛽",
      "🏮",
      "🎰",
      "♨",
      "🗿",
      "🎪",
      "🎭",
      "📍",
      "🚩",
      "⬆",
      "⬇",
      "⬅",
      "➡",
      "🔠",
      "🔡",
      "🔤",
      "↗",
      "↖",
      "↘",
      "↙",
      "↔",
      "↕",
      "🔄",
      "◀",
      "▶",
      "🔼",
      "🔽",
      "↩",
      "↪",
      "ℹ",
      "⏪",
      "⏩",
      "⏫",
      "⏬",
      "⤵",
      "⤴",
      "🆗",
      "🔀",
      "🔁",
      "🔂",
      "🆕",
      "🆙",
      "🆒",
      "🆓",
      "🆖",
      "📶",
      "🎦",
      "🈁",
      "🈯",
      "🈳",
      "🈵",
      "🈴",
      "🈲",
      "🉐",
      "🈹",
      "🈺",
      "🈶",
      "🈚",
      "🚻",
      "🚹",
      "🚺",
      "🚼",
      "🚾",
      "🚰",
      "🚮",
      "🅿",
      "♿",
      "🚭",
      "🈷",
      "🈸",
      "🈂",
      "Ⓜ",
      "🛂",
      "🛄",
      "🛅",
      "🛃",
      "🉑",
      "㊙",
      "㊗",
      "🆑",
      "🆘",
      "🆔",
      "🚫",
      "🔞",
      "📵",
      "🚯",
      "🚱",
      "🚳",
      "🚷",
      "🚸",
      "⛔",
      "✳",
      "❇",
      "❎",
      "✅",
      "✴",
      "💟",
      "🆚",
      "📳",
      "📴",
      "🅰",
      "🅱",
      "🆎",
      "🅾",
      "💠",
      "➿",
      "♻",
      "♈",
      "♉",
      "♊",
      "♋",
      "♌",
      "♍",
      "♎",
      "♏",
      "♐",
      "♑",
      "♒",
      "♓",
      "⛎",
      "🔯",
      "🏧",
      "💹",
      "💲",
      "💱",
      "©",
      "®",
      "™",
      "〽",
      "〰",
      "🔝",
      "🔚",
      "🔙",
      "🔛",
      "🔜",
      "❌",
      "⭕",
      "❗",
      "❓",
      "❕",
      "❔",
      "🔃",
      "🕛",
      "🕧",
      "🕐",
      "🕜",
      "🕑",
      "🕝",
      "🕒",
      "🕞",
      "🕓",
      "🕟",
      "🕔",
      "🕠",
      "🕕",
      "🕖",
      "🕗",
      "🕘",
      "🕙",
      "🕚",
      "🕡",
      "🕢",
      "🕣",
      "🕤",
      "🕥",
      "🕦",
      "✖",
      "➕",
      "➖",
      "➗",
      "♠",
      "♥",
      "♣",
      "♦",
      "💮",
      "💯",
      "✔",
      "☑",
      "🔘",
      "🔗",
      "➰",
      "🔱",
      "🔲",
      "🔳",
      "◼",
      "◻",
      "◾",
      "◽",
      "▪",
      "▫",
      "🔺",
      "⬜",
      "⬛",
      "⚫",
      "⚪",
      "🔴",
      "🔵",
      "🔻",
      "🔶",
      "🔷",
      "🔸",
      "🔹",
    ];
    return randomItem(emojis);
  }

  get animationClass() {
    const animationClasses = [
      "animate-none",
      "animate-spin",
      "animate-ping",
      "animate-pulse",
      "animate-bounce",
    ];
    return randomItem(animationClasses);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.requestUpdate();
  }

  render() {
    return html`
      <form
        class="text-center border-green-500 border-2 p-4"
        @submit=${this.handleSubmit}
      >
        <h2 class="text-2xl text-green-600">Can you guess next emoji?</h2>
        <div class="p-5 text-6xl my-3">
          <div
            class="${this.animationClass} inline-block relative"
            style="z-index: -1;"
          >
            ${this.randomEmoji}
          </div>
        </div>
        <button class="p-3 bg-green-500 text-white" type="submit">
          Draw emojiii
        </button>
      </form>
    `;
  }
}

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

window.customElements.define("tw-emoji-randomizer", TwEmojiRandomizer);
