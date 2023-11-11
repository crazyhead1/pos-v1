// export const EMPLOYEES_COLLECTION = "employees";
// export const CUSTOMERS_COLLECTION = "customers";
// export const PRODUCTS_COLLECTION = "products";
// export const ORDERS_COLLECTION = "orders";
// export const SUPPLIERS_COLLECTION = "suppliers";
// export const CATEGORIES_COLLECTION = "categories";
// export const SUB_CATEGORIES_COLLECTION = {
//   EMPLOYEES: "categories_employees",
//   CUSTOMERS: "categories_customers",
//   PRODUCTS: "categories_products",
//   ORDERS: "categories_orders",
//   SUPPLIERS: "categories_suppliers",
// };
// export const STORES_COLLECTION = `${localStorage.getItem("org")}/stores`;
// export const LOGS_COLLECTION = `${localStorage.getItem("org")}/logs`;
// export const TOWNS_COLLECTION = `${localStorage.getItem("org")}/towns`;
// export const AREAS_COLLECTION = `${localStorage.getItem("org")}/areas`;
// export const SALES_ROUTES_COLLECTION = `${localStorage.getItem(
//   "org"
// )}/sales-routes`;
export const ORGANISATIONS_COLLECTION = "organisations";
export const ADMINS_COLLECTION = "admins";

export const EMPLOYEES_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-employees`
  : "employees";
export const CUSTOMERS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-customers`
  : "customers";
export const PRODUCTS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-products`
  : "products";
export const ORDERS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-orders`
  : "orders";
export const SUPPLIERS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-suppliers`
  : "suppliers";
export const CATEGORIES_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-categories`
  : "categories";
export const SUB_CATEGORIES_COLLECTION = {
  EMPLOYEES: "categories_employees",
  CUSTOMERS: "categories_customers",
  PRODUCTS: "categories_products",
  ORDERS: "categories_orders",
  SUPPLIERS: "categories_suppliers",
};
export const STORES_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-stores`
  : "stores";
export const LOGS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-logs`
  : "logs";
export const TOWNS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-towns`
  : "towns";
export const AREAS_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-areas`
  : "areas";
export const SALES_ROUTES_COLLECTION = localStorage.getItem("org")
  ? `${localStorage.getItem("org")}-sales-routes`
  : "sales-routes";
