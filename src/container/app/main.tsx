import React from "react";
import { RouterProvider } from "react-router-dom";
import { APP_ROUTER } from "./routes";
import { AppConfig } from "../../types/types";
import { WidgetContext } from "../../config/context";

export const Main: React.FC<{ config: Partial<AppConfig> }> = ({ config }) => {
  return <WidgetContext.Provider value={config}>
    <main>
      <RouterProvider router={APP_ROUTER}/>
    </main>
  </WidgetContext.Provider>;
}
