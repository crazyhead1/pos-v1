// Add a second document with a generated ID.
import { set, get, remove, update, ref } from "firebase/database";
import { firebaseDatabase } from "../../../../services";
import Error from "../../../../interfaces/error";

export const writeWithUserID = async (
  path: string,
  id: string,
  data: Object
): Promise<any> => {
  try {
    const docRef = await set(
      ref(firebaseDatabase.getInstance(), `${path}/${id}`),
      data
    );
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};
export const writeWithPath = async (
  path: string,
  data: Object
): Promise<any> => {
  try {
    const docRef = await set(ref(firebaseDatabase.getInstance(), path), data);
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};

export const updateWithPath = async (
  path: string,
  data: Object
): Promise<any> => {
  try {
    const docRef = await update(
      ref(firebaseDatabase.getInstance(), path),
      data
    );
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};
export const updateWithUserID = async (
  path: string,
  id: string,
  data: Object
): Promise<any> => {
  try {
    const docRef = await update(
      ref(firebaseDatabase.getInstance(), `${path}/${id}`),
      data
    );
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};

export const removeWithPath = async (path: string): Promise<any> => {
  try {
    const docRef = await remove(ref(firebaseDatabase.getInstance(), path));
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};
export const removeWithUserID = async (
  path: string,
  id: string
): Promise<any> => {
  try {
    const docRef = await remove(
      ref(firebaseDatabase.getInstance(), `${path}/${id}`)
    );
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};

export const getWithPath = async (path: string): Promise<any> => {
  try {
    const snapShot = await get(ref(firebaseDatabase.getInstance(), path));
    return snapShot?.toJSON();
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};
export const getWithUserID = async (path: string, id: string): Promise<any> => {
  try {
    const snapShot = await get(
      ref(firebaseDatabase.getInstance(), `${path}/${id}`)
    );
    return snapShot;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as Error;
  }
};
