import React from "react";
import { createMemoryRouter } from "react-router-dom";
import { Expanded } from "../expanded";
import { Minimized } from "../minimized";
import { Menu } from "../menu";
import { Chat } from "../chat";

export enum WidgetRoutes {
  expanded = "expanded",
  minimized = "minimized",
  menu = "menu",
  chat = "chat",
}

export const APP_ROUTER = createMemoryRouter([
  {
    path: "/",
    id: WidgetRoutes.expanded,
    element: <Expanded />
  },
  {
    path: `/${WidgetRoutes.minimized}`,
    id: WidgetRoutes.minimized,
    element: <Minimized/>
  },
  {
    path: `/${WidgetRoutes.menu}`,
    id: WidgetRoutes.menu,
    element: <Menu/>
  },
  {
    path: `/${WidgetRoutes.chat}/:appName`,
    id: WidgetRoutes.chat,
    element: <Chat/>
  },
]);

