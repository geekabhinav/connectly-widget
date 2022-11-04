import { AppConfig } from "../types/types";
import React from "react";

export const defaultConfig: Partial<AppConfig> = {
  selector: undefined,
  accessKey: undefined,
  secret: undefined,
  user: {
    firstName: "Friend",
    lastName: undefined,
    email: undefined,
    username: undefined,
  }
};

export const WidgetContext = React.createContext(defaultConfig);
