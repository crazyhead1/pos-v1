import Login from "../auth/login";
import ResetPassword from "../auth/reset-password";
import Signup from "../auth/signup";
import VerifyEmail from "../auth/verify-email";
import Inventory from "../inventory";
import Order from "../order";
import { POSEngine } from "../pos-engine";
import Setting from "../setting";
import Users from "../users";

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/verify-email",
    name: "Verify Email",
    component: VerifyEmail,
  },
];

export const organizationRoutes = [
  ...authRoutes,
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
  ...authRoutes,
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
