import { createBrowserHistory } from "history";

export default createBrowserHistory();

export const LOGIN_PATH = "/login";
export const LOCAL_DB_FILE_NAME = "db.json";
export const LOCAL_DB_FILE_PATH = `../../../db/${LOCAL_DB_FILE_NAME}`;
export const DEFAULT_CURRENCY = "PKR";
export const DEFAULT_TAX_RATE = 0.05;
export const DEFAULT_DISCOUNT_RATE = 0.02;
export const CATEGORIES = {
  EMPLOYEES: "employees",
  CUSTOMERS: "customers",
  PRODUCTS: "products",
  ORDERS: "orders",
  SUPPLIERS: "suppliers",
};

export const COLOR_OPACITY = {
  "10": 10,
  "20": 20,
  "30": 30,
  "40": 40,
  "50": 50,
  "60": 60,
  "70": 70,
  "80": 80,
  "90": 90,
  "100": 100,
};

export const GLOBAL_DATE_TIME_FORMAT = "hh:mma DD/MM/YYYY";
export enum USER_TYPES {
  CUSTOMER = "CUSTOMER",
  SUPPLIER = "SUPPLIER",
  EMPLOYEE = "EMPLOYEE",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}
