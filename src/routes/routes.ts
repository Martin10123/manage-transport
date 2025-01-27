import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage";
import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const HomePage = lazy(() => import("@/modules/homepage/pages/HomePage"));
const GaragePage = lazy(() => import("@/modules/garage/pages/GaragePage"));
const SettingsPage = lazy(
  () => import("@/modules/settings/pages/SettingsPage")
);

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: DashboardPage,
    name: "Dashboard",
  },
  {
    to: "/home",
    path: "home",
    Component: HomePage,
    name: "Inicio",
  },
  {
    to: "/garage",
    path: "garage",
    Component: GaragePage,
    name: "Taller",
  },
  {
    to: "/settings",
    path: "settings",
    Component: SettingsPage,
    name: "Configuraciones",
  },
];
