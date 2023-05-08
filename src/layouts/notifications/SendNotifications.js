// @mui material components
import Grid from "@mui/material/Grid";

// Material admin panel React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material admin panel React example components
import * as React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import HistoryIcon from "@mui/icons-material/History";
import {
  Typography,
  Paper,
  Divider,
  Avatar,
  Tooltip,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { green } from "@mui/material/colors";
import MDButton from "components/MDButton";

function SendNotifications() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} lg={12} mx={"auto"}>
              {/* <Paper elevation={5} sx={{
                bgcolor: 'azure',
                margin: "0, auto",
                borderRadius: "1.5rem",
                width: '100%',
                p: 2
              }} >
                <Typography variant="h3" color="secondary.main" sx={{ pt: 2, textAlign: "center" }}>Send Notifications</Typography>
                <Divider />
                <Paper elevation={5} sx={{ m: 2, pt: 1, borderRadius: '0.5rem', pb: 1 }}>
                  <Stack direction="row" spacing={3} sx={{ display: 'flex', alignItems: 'center', pt: 1.5, pb: 1.5, px: 1.5 }}>
                    <Typography variant="h6" color="secondary.main">1</Typography>
                    <MDInput
                      sx={{
                        width: '90%',
                      }}
                      label="Message"
                      multiline
                      focused
                      value={'Testing...1'}
                      rows={3}
                    />
                    <Tooltip title="Send" arrow>
                      <Avatar sx={{ bgcolor: green[500], cursor: 'pointer' }}>
                        <SendIcon />
                      </Avatar>
                    </Tooltip>
                  </Stack>
                </Paper>
                <Paper elevation={5} sx={{ m: 2, pt: 1, borderRadius: '0.5rem', pb: 1 }}>
                  <Stack direction="row" spacing={3} sx={{ display: 'flex', alignItems: 'center', pt: 1.5, pb: 1.5, px: 1.5 }}>
                    <Typography variant="h6" color="secondary.main">2</Typography>
                    <MDInput
                      sx={{
                        width: '90%',
                      }}
                      label="Message"
                      multiline
                      focused
                      value={'Testing...2'}
                      rows={3}
                    />
                    <Tooltip title="Send" arrow>
                      <Avatar sx={{ bgcolor: green[500], cursor: 'pointer' }}>
                        <SendIcon />
                      </Avatar>
                    </Tooltip>
                  </Stack>
                </Paper>
                <Paper elevation={5} sx={{ m: 2, pt: 1, borderRadius: '0.5rem', pb: 1 }}>
                  <Stack direction="row" spacing={3} sx={{ display: 'flex', alignItems: 'center', pt: 1.5, pb: 1.5, px: 1.5 }}>
                    <Typography variant="h6" color="secondary.main">3</Typography>
                    <MDInput
                      sx={{
                        width: '90%',
                      }}
                      label="Message"
                      multiline
                      focused
                      value={'Testing...3'}
                      rows={3}
                    />
                    <Tooltip title="Send" arrow>
                      <Avatar sx={{ bgcolor: green[500], cursor: 'pointer' }}>
                        <SendIcon />
                      </Avatar>
                    </Tooltip>
                  </Stack>
                </Paper>
              </Paper> */}
              <MDBox sx={{ textAlign: "end" }}>
                <MDButton
                  variant="text"
                  color="dark"
                  size="small"
                  sx={{ border: 1 }}
                >
                  <HistoryIcon
                    sx={{
                      marginRight: "6px",
                      width: "25px",
                      height: "25px",
                    }}
                  />{" "}
                  History
                </MDButton>
              </MDBox>
              <MDBox
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <MDBox
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "2rem",
                  }}
                >
                  <MDInput type="text" label="Sender Id" required />
                  <MDInput
                    type="text"
                    multiline
                    rows={5}
                    label="Message"
                    required
                  />
                  <MDButton variant="contained" color="info">
                    Send To
                  </MDButton>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SendNotifications;
