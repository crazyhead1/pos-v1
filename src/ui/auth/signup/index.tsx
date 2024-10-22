import React, { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { register } from "../../../data-management/cloud/firebase/auth";
import {
  addUserInLocalstorage,
  isEmailValid,
  isStrongPassword,
} from "../../../utils/utilFunctions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg.jpg";

const Signup: FC = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (events) => {
    events.preventDefault();
    const email = events.target.email.value ?? null;
    const password = events.target.password.value ?? null;
    const confirmPassword = events.target.confirmPassword.value ?? null;
    if (!email) {
      toast.error("Email is required!");
      return;
    } else if (!password) {
      toast.error("Password is required!");
      return;
    } else if (!confirmPassword) {
      toast.error("Confirm password is required!");
      return;
    } else if (!isEmailValid(email)) {
      toast.error("Invalid email");
      return;
    } else if (!isStrongPassword(password)) {
      toast.error("Weak password");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Confirm password don't match");
      return;
    }
    register({ email, password, confirmPassword })
      ?.then((res) => {
        addUserInLocalstorage(res.user);
        toast.success("User registeration success ");
      })
      .catch((err) => {
        toast.error("Registration failed!");
      });
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
            <Add /> Signup
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, mx: 12.5 }}
          >
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirmPassword"
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
              Register
            </Button>

            <Grid container>
              <Grid item>
                <Link
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                >
                  {"Already have an account? Login here"}
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

export default Signup;
