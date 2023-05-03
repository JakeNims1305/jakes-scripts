import { css, CSSResultOrNative, html, HTMLTemplateResult, LitElement } from "lit";

export class MyComponent extends LitElement implements IMyComponent {
  static override get styles(): CSSResultOrNative[] {
    return [
      MyComponentStyles,
      css``
    ];
  }

  // Render ------------------------------------------------------------------//
  override render(): HTMLTemplateResult {
    return html``;
  }
}
