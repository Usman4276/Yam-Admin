// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import * as React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Typography, Paper, Divider } from "@mui/material";

//firestore
import { messaging } from "../../firebase";
import { getToken } from "firebase/messaging";
import { db } from "../../firebase";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  arrayUnion,
} from "firebase/firestore";

function Dashboard() {
  const [deviceTokenId, setDeviceTokenId] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const getAllTokens = await getDocs(collection(db, "deviceTokens"));
      const dbTokenData = getAllTokens.docs.map((items) => ({
        id: items.id,
        ...items.data(),
      }));
      let tokenData = {};
      for (let i = 0; i < dbTokenData.length; i++) {
        Object.assign(tokenData, dbTokenData[i]);
      }
      setDeviceTokenId(tokenData.id);
    }
    fetchData();
  }, [deviceTokenId]);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const tokenGet = await getToken(messaging, {
        vapidKey:
          "BEsC6HHX6yHu1MlsgtN3XFmjcoZSEjNcEVlXyGPul6N1NqE1GJvHaBoUFVTbK17hlgGx_V48EeLnxtPRSYgClpg",
      });
      if (tokenGet) {
        console.log("tokenGet == ", tokenGet);
        const updateData = {
          deviceTokens: arrayUnion({ tokenId: tokenGet }),
        };
        if (deviceTokenId) {
          const updDocRef = doc(db, "deviceTokens", deviceTokenId);
          await setDoc(updDocRef, updateData, { merge: true });
        }
        if (deviceTokenId === "") {
          await addDoc(collection(db, "deviceTokens"), {
            deviceTokens: [{ tokenId: tokenGet }],
          });
        }
      } else {
        console.log("No registration token available");
      }
    } else if (permission === "denied") {
      alert("Notification Permission Denied!");
    }
  };
  // React.useEffect(() => {
  //   requestPermission();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} lg={12} mx={"auto"}>
              {/* <Paper
                elevation={5}
                sx={{
                  margin: "0, auto",
                  borderRadius: "1.5rem",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  color="secondary.main"
                  sx={{ pt: 2, textAlign: "center" }}
                >
                  Dashboard
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{ pt: 3, textAlign: "center" }}
                >
                  Coming Soon...
                </Typography>
                <Divider />
              </Paper> */}
              <MDBox
                sx={{
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  color="secondary.main"
                  sx={{ pt: 3, textAlign: "center" }}
                >
                  Coming Soon...
                </Typography>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
