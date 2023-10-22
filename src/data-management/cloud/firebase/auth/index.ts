import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../../../../services/cloud";
import toast from "react-hot-toast";
import history, { LOGIN_PATH } from "../../../../ui/common/constants";

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
    createUserWithEmailAndPassword(auth.getInstance(), email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        toast.error("Login failed! ", err);
      });
  }
};

export const signOff = (): void => {
  signOut(auth.getInstance())
    .then((res) => {
      localStorage.removeItem("tkn");
      history.push(LOGIN_PATH);
    })
    .catch((error) => {
      toast.error("Unable to signout ", error);
    });
};

export const sendVerificationEmail = () => {
  sendEmailVerification(auth.getInstance().currentUser)
    .then(() => {
      history.push("/verify-email");
    })
    .catch((err) => alert(err.message));
};
