import { User } from "firebase/auth";
import toast from "react-hot-toast";

export const generateNextInvoiceNumber = (initialNumber = "AAA0000000") => {
  if (!/^[A-Z]{3}\d{7}$/.test(initialNumber)) {
    throw new Error('Invalid input format. It should be like "AAA0000000".');
  }

  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let currentLetters = initialNumber.slice(0, 3);
  let currentNumber = parseInt(initialNumber.slice(3), 10);

  return function () {
    const number = currentNumber.toString().padStart(7, "0");
    const sequentialNumber = `${currentLetters}${number}`;

    currentNumber++;

    if (currentNumber > 9999999) {
      currentNumber = 0;

      // Increment the alphabet characters
      let carry = 1;
      for (let i = 2; i >= 0; i--) {
        let index = LETTERS.indexOf(currentLetters[i]);
        index += carry;
        if (index >= LETTERS.length) {
          index = 0;
          carry = 1;
        } else {
          carry = 0;
        }
        currentLetters =
          currentLetters.substring(0, i) +
          LETTERS[index] +
          currentLetters.substring(i + 1);
      }
    }

    return sequentialNumber;
  };
};

export const isEmailValid = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailPattern.test(email);
};

export const isStrongPassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

export const addUserInLocalstorage = (user: User) => {
  user
    .getIdToken()
    .then((res) => {
      localStorage.setItem("tkn", res);
      localStorage.setItem("uid", user.uid);
      user?.email && localStorage.setItem("email", user.email);
      user?.photoURL && localStorage.setItem("photoURL", user.photoURL);
    })
    .catch((error) => toast.error("Unable to generate idToken"));
};
export const setOrganisationInLocalStorage = (organisationEmail: string) => {
  console.log({ organisationEmail });
  if (organisationEmail)
    localStorage.setItem(
      "org",
      `${organisationEmail?.split("@")[0]}_${
        organisationEmail?.split("@")[1]?.split(".")[0]
      }`
    );
};
export const removeUserFromLocalstorage = () => {
  localStorage.removeItem("tkn");
  localStorage.removeItem("uid");
  localStorage.removeItem("email");
  localStorage.removeItem("photoURL");
  localStorage.removeItem("org");
};

export const isAuthenticated = () => {
  if (!localStorage.getItem("tkn")) {
    return false;
  }
  return true;
};

export const isAdmin = (admins) => {
  const currentUserEmail = localStorage.getItem("email") ?? "";
  if (!currentUserEmail && admins.length <= 0) {
    return false;
  } else if (admins.includes(currentUserEmail)) {
    return true;
  }
  return false;
};

export const isOrganisation = (organisations) => {
  const currentUserEmail = localStorage.getItem("email") ?? "";
  if (!currentUserEmail && organisations.length <= 0) {
    return false;
  } else if (
    organisations.find((item) => item?.email?.includes(currentUserEmail))
  ) {
    return true;
  }
  return false;
};
