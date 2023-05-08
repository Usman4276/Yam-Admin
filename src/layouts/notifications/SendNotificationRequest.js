// @mui material components
import Grid from "@mui/material/Grid";

// Material admin panel React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material admin panel React example components
import * as React from 'react';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Typography, Paper, Divider, Box } from '@mui/material'

function SendNotificationRequest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} lg={12} mx={'auto'}>
              <Paper elevation={5} sx={{
                margin: "0, auto",
                borderRadius: "1.5rem",
                width: '100%'
              }} >
                <Typography variant="h3" color="secondary.main" sx={{ pt: 2, textAlign: "center" }}>Send Notification Request</Typography>
                <Divider />
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 5, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <MDInput
                    label="Message"
                    multiline
                    rows={5}
                  />
                  <Box sx={{display: 'flex', justifyContent: "center", pb: '1rem' }}>
                    <MDButton variant="contained" color="info">Send</MDButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SendNotificationRequest;
