import "./assets/styles/app.scss";
import * as React from "react";
import ReactDOM from "react-dom";
import { AppConfig, __IN_DEBUG__ } from "./types/types";
import { Main } from "./container/app/main";

class WidgetApp {
  public readonly config: Partial<AppConfig>;
  private readonly rootSelector = "connectly-wrapper";

  constructor(config: Partial<AppConfig>) {
    if (!config) {
      throw new Error("No config was provided");
    }
    this.config = config;
    this.reattachWrapperElement();
    return this;
  }

  public init = () => {
    ReactDOM.render(<React.StrictMode><Main config={this.config}/></React.StrictMode>, document.querySelector(this.selectorToId()));
  }

  private selectorToId = (): string => `#${this.rootSelector}`;

  private reattachWrapperElement = () => {
    const oldRoot = document.querySelector(this.selectorToId());
    if (oldRoot) {
      oldRoot.remove();
    }
    const rootElem = document.createElement("div");
    rootElem.setAttribute("id", this.rootSelector);
    document.querySelector("body")?.appendChild(rootElem);
  }
}

if (__IN_DEBUG__) {
  new WidgetApp({ accessKey: "xyz", user: { firstName: "Localhost" } }).init();
}

export { WidgetApp };
