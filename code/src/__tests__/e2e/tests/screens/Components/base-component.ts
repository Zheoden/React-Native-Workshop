export default abstract class BaseComponent {
  private _selector: string;

  constructor(selector) {
    this._selector = selector;
  }

  /**
   * Wait for the component to be visible or hidden
   *
   * @param {boolean} displayed
   * @return {boolean}
   */
  public waitForDisplayed(displayed = true): boolean {
    return $(this._selector).waitForDisplayed(20000, !displayed);
  }

  /**
   * Whether for the component is visible
   *
   * @return {boolean}
   */
  public isDisplayed(): boolean {
    return $(this._selector).isDisplayed();
  }

  public get self(): WebdriverIO.Element {
    return $(this._selector);
  }
}
