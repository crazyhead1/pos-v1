import {
  addAdmin,
  deleteAdmin,
  getAdmins,
  updateAdmin,
} from "../../data-management/cloud/firebase/firestore/admins";

// Get Admins from the database
export const getAllAdmins = async () => {
  const admins = await getAdmins();
  return admins.map((admin) => admin.data());
};

// Add an Admin to the database
export const addOneAdmin = async (adminData: any) => {
  const adminAdded = await addAdmin(adminData);
  return adminAdded;
};

// Delete an Admin API
export const deleteOneAdmin = async (id: string) => {
  const adminDeleted = await deleteAdmin(id);
  return adminDeleted;
};

// Edit an Admin API
export const editAdmin = async (id: string, adminData: any) => {
  const adminEdited = await updateAdmin(id, adminData);
  return adminEdited;
};
