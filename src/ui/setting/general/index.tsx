import React, { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { signOff } from "../../../data-management/cloud/firebase/auth";
import { removeUserFromLocalstorage } from "../../../utils/utilFunctions";
import toast from "react-hot-toast";
import history, { LOGIN_PATH } from "../../common/constants";

const GeneralSettings: FC = (props) => {
  const onSignoutHandler = (events) => {
    events.preventDefault();

    signOff()
      ?.then((res) => {
        console.log({ res }, "logout");
        removeUserFromLocalstorage();
        toast.success("Sign out successful");
        history.push(LOGIN_PATH);
      })
      .catch((error) => {
        toast.error("Unable to signout ", error);
      });
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        color="error"
        sx={{ mt: 3, mb: 2 }}
        onClick={onSignoutHandler}
      >
        Sign out
      </Button>
    </div>
  );
};

export default GeneralSettings;
