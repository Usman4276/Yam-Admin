import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"
import { AuthContext } from "context/AuthContext"

// @mui material components
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/BasicLayout"

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Login() {
  const [admin, setAdmin] = useState({
    email: '',
    password: ''
  })
  const [loginError, setLoginError] = useState(false)
  const { dispatchAuth } = useContext(AuthContext)
  const navigate = useNavigate();


  const handleLogIn = (e) => {
    e.preventDefault()

    //check authentication
    signInWithEmailAndPassword(auth, admin.email, admin.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatchAuth({ type: 'LOGIN', payload: user.uid })
        setAdmin({
          email: '',
          password: ''
        })
        navigate("/")
      })
      .catch((error) => {
        setLoginError(true)
      });
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Admin Login
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                value={admin.email}
                onChange={(e) => setAdmin({
                  ...admin,
                  email: e.target.value
                })}
                type="email"
                label="Email"
                fullWidth
                required
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                value={admin.password}
                onChange={(e) => setAdmin({
                  ...admin,
                  password: e.target.value
                })}
                type="password"
                label="Password"
                fullWidth
                required />
            </MDBox>
            {loginError && <MDBox mb={2} p={1}>
              <TextField
                fullWidth
                error
                id="standard-error"
                label="Error"
                defaultValue="Wrong email or password!"
                variant="standard"
              />
            </MDBox>}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit" onClick={handleLogIn}>
                Login
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Login;
