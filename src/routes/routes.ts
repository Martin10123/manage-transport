import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage";
import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  hiddenInNav?: boolean;
}

const HomePage = lazy(() => import("@/modules/homepage/pages/HomePage"));
const GaragePage = lazy(() => import("@/modules/garage/pages/GaragePage"));
const DetailsTaxiGarage = lazy(
  () => import("@/modules/garage/pages/DetailsTaxiGarage")
);
const ProfilePage = lazy(() => import("@/modules/profile/pages/ProfilePage"));
const InformationTaxi = lazy(
  () => import("@/modules/homepage/pages/InformationTaxi")
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
    to: "/taxi/:taxiId",
    path: "taxi/:taxiId",
    Component: InformationTaxi,
    name: "Información de taxi",
    hiddenInNav: true,
  },
  {
    to: "/garage",
    path: "garage",
    Component: GaragePage,
    name: "Taller",
  },
  {
    to: "/garage/:taxiId",
    path: "garage/:taxiId",
    Component: DetailsTaxiGarage,
    name: "Detalle de taxi",
    hiddenInNav: true,
  },
  {
    to: "/profile",
    path: "profile",
    Component: ProfilePage,
    name: "Perfil",
  },
];
