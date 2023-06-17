import { html, css, LitElement } from 'lit';
import { textFieldStyles } from '../styles/textField.js';

class MyTextField extends LitElement {
  static properties = {
    leftIcon: { type: String , attribute: 'left-icon' },
    rightIcon: { type: String,  attribute: 'right-icon' },
    placeholder: { type: String },
    value: { type: String | Number }
  };

  static styles = textFieldStyles;
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.handleInputChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.handleInputChange);
  }
  handleInputChange(value) {
    this.value = value;
  }
  render() {
    return html`
      <div class="text-field">
      ${this.rightIcon ? html`<i class="text-field__icon-left ${this.rightIcon}"></i>` : ''}
        <input type="text" .value="${this.value}" class="text-field__input" placeholder="${this.placeholder}" type="text" @change=${e => this.handleInputChange(e.target.value)} />
        ${this.leftIcon ? html`<i class="text-field__icon-right ${this.leftIcon}"></i>` : ''}
      </div>
    `;
  }
}

customElements.define('nds-text-field', MyTextField);