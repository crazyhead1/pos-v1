// Add a second document with a generated ID.
import {
  Transaction,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseFirestore } from "../../../../services";
import ErrorInterface from "../../../../interfaces/error";
import toast from "react-hot-toast";

export const getDocument = async (
  collectionName: string,
  id: string
): Promise<any> => {
  try {
    const docRef = await getDoc(
      doc(firebaseFirestore.getInstance(), `${collectionName}/${id}`)
    );
    const docData = docRef.exists() ? docRef.data() : null;
    return docData;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as ErrorInterface;
  }
};
export const getDocumentReference = async (
  collectionName: string,
  id: string
): Promise<any> => {
  try {
    const docRef = await doc(
      firebaseFirestore.getInstance(),
      `${collectionName}/${id}`
    );
    return docRef.id ? docRef : null;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as ErrorInterface;
  }
};
export const getDocuments = async (collectionName: string): Promise<any> => {
  try {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore.getInstance(), collectionName)
    );
    const documets = querySnapshot.docs;
    return documets as any[];
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as ErrorInterface;
  }
};

export const getDocumentsReferences = async (
  collectionName: string
): Promise<any> => {
  try {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore.getInstance(), collectionName)
    );
    const documets = querySnapshot.docs.map((doc) => {
      return doc.ref;
    });
    return documets as any[];
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as ErrorInterface;
  }
};

export const addDocument = async (
  collectionName: string,
  data: any
): Promise<any> => {
  try {
    if (data?.id) {
      getDoc(
        doc(firebaseFirestore.getInstance(), `${collectionName}/${data?.id}`)
      )
        .then((existingDocRef) => {
          if (existingDocRef?.data()) {
            toast.error("Record already exists!");
          }
        })
        .catch((error) => console.log(error));
    }
    return await setDoc(
      doc(
        firebaseFirestore.getInstance(),
        collectionName,
        `${collectionName}-${new Date().getTime()}`
      ),
      data
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const getDocumentFromCache = async (path: string): Promise<any> => {
//     try {
//         const docRef = await getDocumentFromCache(path);
//         const docData = docRef.exists() ? docRef.data() : null;
//         return docData;
//     } catch (error: any) {
//         return {
//             message: error.message,
//             stack: error.stack,
//             errorCode: error.code,
//             errorType: error.type,
//             name: error.name,
//         } as Error;
//     }

// }

export const updateDocument = async (
  collectionName: string,
  id: string,
  data: any
): Promise<any> => {
  try {
    const docRef = await updateDoc(
      doc(firebaseFirestore.getInstance(), `${collectionName}/${id}`),
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
    } as ErrorInterface;
  }
};

export const deleteDocument = async (
  collectionName: string,
  id: string
): Promise<any> => {
  try {
    const docRef = await deleteDoc(
      doc(firebaseFirestore.getInstance(), `${collectionName}/${id}`)
    );
    return docRef;
  } catch (error: any) {
    return {
      message: error.message,
      stack: error.stack,
      errorCode: error.code,
      errorType: error.type,
      name: error.name,
    } as ErrorInterface;
  }
};

export const dbTransaction = async (
  firebaseInstance,
  callback: (transaction: Transaction) => Promise<unknown>
) => {
  return await runTransaction(firebaseInstance, callback);
};
