import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../../services/cloud";
import toast from "react-hot-toast";
import history, { LOGIN_PATH } from "../../../../ui/common/constants";
import { removeUserFromLocalstorage } from "../../../../utils/utilFunctions";

export const register = ({ email, password, confirmPassword }) => {
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        toast.error("Password mismatch");
      }
    }
    return isValid;
  };
  if (validatePassword()) {
    // Create a new user with email and password using firebase
    return createUserWithEmailAndPassword(auth.getInstance(), email, password);
  }
};

export const login = ({ email, password }) => {
  if (!email && !password) {
    toast.error("Email and Password is required");
    return;
  }
  return signInWithEmailAndPassword(auth.getInstance(), email, password);
};

export const signOff = () => {
  return signOut(auth.getInstance());
};

export const sendVerificationEmail = () => {
  sendEmailVerification(auth.getInstance().currentUser)
    .then(() => {
      history.push("/verify-email");
    })
    .catch((err) => alert(err.message));
};
