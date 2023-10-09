import { app } from "./config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

export const analytics = getAnalytics(app);

export const firestore = (function () {
  let instance;

  function createInstance() {
    return getFirestore(app);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export const database = (function () {
  let instance;

  function createInstance() {
    return getDatabase(app);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export const auth = (function () {
  let instance;

  function createInstance() {
    return getAuth(app);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export const storage = (function () {
  let instance;

  function createInstance() {
    return getStorage(app);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
