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
import { login } from "../../../data-management/cloud/firebase/auth";
import { addUserInLocalstorage } from "../../../utils/utilFunctions";
import toast from "react-hot-toast";
import history from "../../common/constants";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg-center.png";

const Login: FC = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (events) => {
    events.preventDefault();
    console.log({ email: events.target.email.value });
    console.log({ password: events.target.password.value });
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
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
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
