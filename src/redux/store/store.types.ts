// Product
export enum TypeProductStatus {
  AVAILABLE = "AVAILABLE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISCONTINUED = "DISCONTINUED",
}

export interface IProduct {
  name: string;
  unitsInStock: string;
  quantitySold?: string;
  taxPerUnit?: string;
  unitPrice: string;
  supplierId?: string;
  supplierName?: string;
  status: TypeProductStatus;
  mfg?: string;
  exp?: string;
  startedOn?: string;
  discontinuedOn?: string;
  category?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}

// Order
export interface IOrderStatus {
  CONFIRMED: "CONFIRMED";
  IN_PROCESS: "IN_PROCESS";
  DELIVERED: "DELIVERED";
  CANCELLED: "CANCELLED";
  NOT_RESPONDED: "NOT_RESPONDED";
  PENDING: "PENDING";
  DRAFTED: "DRAFTED";
}

export interface IOrderType {
  SALES: "SALES";
  PURCHASE: "PURCHASE";
}

export interface IOrder {
  numberOfItems?: string;
  invoiceId: string;
  productList?: IProduct[];
  total?: string;
  totalPayable?: string;
  tax?: string;
  discount?: string;
  customerId?: string;
  employeeId?: string;
  status: IOrderStatus;
  type?: IOrderType;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// User
export interface IUserStatus {
  CONFIRMED: "CONFIRMED";
  IN_PROCESS: "IN_PROCESS";
  DELIVERED: "DELIVERED";
  CANCELLED: "CANCELLED";
  NOT_RESPONDED: "NOT_RESPONDED";
  PENDING: "PENDING";
  DRAFTED: "DRAFTED";
}

export interface IUserType {
  SALES: "SALES";
  PURCHASE: "PURCHASE";
}

export interface User {
  fullName: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  contact1?: string;
  contact2?: string;
  email?: string;
  address?: IUserStatus;
  role: IUserType;
  userId?: string;
  compensation?: string;
  compensationDurationInDays?: string;
  startDate?: string;
  endDate?: string;
  Description?: string;
  totalOrdersPlaced?: string;
  totalAmountSpent?: string;
  companyName?: string;
  createdAt?: string;
  updatedAt?: string;
}

// State
export interface IState {
  productList?: IProduct[];
  loading: boolean;
  error: string;
}

export interface IStateSelector {
  data: IState;
}
