import Inventory from "../inventory";
import Order from "../order";
import { POSEngine } from "../pos-engine";
import Setting from "../setting";
import Users from "../users";

export const organizationRoutes = [
  {
    path: "/organization/pos",
    name: "POS",
    component: POSEngine,
  },
  {
    path: "/organization/inventory",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/organization/orders",
    name: "Orders",
    component: Order,
  },
  {
    path: "/organization/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/organization/settings",
    name: "Settings",
    component: Setting,
  },
];

export const adminRoutes = [
  {
    path: "/organization/pos",
    name: "POS",
    component: POSEngine,
  },
  {
    path: "/organization/inventory",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/organization/orders",
    name: "Orders",
    component: Order,
  },
  {
    path: "/organization/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/organization/settings",
    name: "Settings",
    component: Setting,
  },
];
