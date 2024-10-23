import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import { login } from "../../../data-management/cloud/firebase/auth";
import { addUserInLocalstorage } from "../../../utils/utilFunctions";
import toast from "react-hot-toast";
import history, { USER_TYPES } from "../../common/constants";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg.jpg";

const Login: FC = (props) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(USER_TYPES.EMPLOYEE);
  const handleSubmit = (events) => {
    events.preventDefault();
    const email = events.target.email.value ?? null;
    const password = events.target.password.value ?? null;
    if (!email) {
      toast.error("Email is required!");
      return;
    } else if (!password) {
      toast.error("Password is required!");
      return;
    }
    login({ email, password })
      ?.then((res) => {
        addUserInLocalstorage(res.user);
        toast.success("Login success");
        history.push("/");
        setTimeout(() => window.location.reload(), 50);
      })
      .catch((err) => {
        toast.error("Login failed!");
      });
  };
  const handleTabChange = (_, value) => {
    setSelectedTab(value);
  };
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <LoginIcon /> Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {/* <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="Login as"
              variant="fullWidth"
            >
              <Tab
                icon={<Badge />}
                label="Employee"
                value={USER_TYPES.EMPLOYEE}
              />
              <Tab
                icon={<CorporateFare />}
                label="Organisation"
                value={USER_TYPES.ORGANISATION}
              />

              <Tab
                icon={<AdminPanelSettings />}
                label="Admin"
                value={USER_TYPES.ADMIN}
              />
            </Tabs> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                >
                  {"Don't have an account? Register here"}
                </Link>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
