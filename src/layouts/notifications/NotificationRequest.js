// @mui material components
import Grid from "@mui/material/Grid";

// Material admin panel React components
import MDBox from "components/MDBox";
import MDAlert from "components/MDAlert";
import MDTypography from "components/MDTypography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

// Material admin panel React example components
import * as React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Typography, Paper, Divider, Checkbox, Stack } from "@mui/material";
import DataTable from "examples/Tables/DataTable";

// Data
import notificationsNameTable from "layouts/notifications/data/notificationNameTable";
import approvenotifiNameTable from "layouts/notifications/data/approvenotifiNameTable";

function NotificationRequest() {
  const { columns, rows } = notificationsNameTable();
  const [tabValue, setTabValue] = React.useState(0);

  function handleChange(event, value) {
    setTabValue(value);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} lg={12} mx={"auto"}>
              {/* <Paper elevation={5} sx={{
                margin: "0, auto",
                borderRadius: "1.5rem",
                width: '100%',
                p: 2
              }} >
                <Typography variant="h3" color="secondary.main" sx={{ pt: 2, textAlign: "center" }}>Notification Request</Typography>
                <Divider />
                <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                  <Checkbox defaultChecked color="secondary" />
                  <MDAlert color="info" sx={{
                    width: '90%',
                  }} >
                    <MDTypography variant="body2" color="white">
                      Testing...1
                    </MDTypography>
                  </MDAlert>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                  <Checkbox defaultChecked color="secondary" />
                  <MDAlert color="info" sx={{
                    width: '90%',
                  }} >
                    <MDTypography variant="body2" color="white">
                      Testing...2
                    </MDTypography>
                  </MDAlert>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', pt: 2, pb: 3 }}>
                  <Checkbox defaultChecked color="secondary" />
                  <MDAlert color="info" sx={{
                    width: '90%',
                  }} >
                    <MDTypography variant="body2" color="white">
                      Testing...3
                    </MDTypography>
                  </MDAlert>
                </Stack>
              </Paper> */}
              <Tabs value={tabValue} onChange={handleChange}>
                <Tab label="Pending" />
                <Tab label="Approved" />
              </Tabs>
              <Box sx={{ marginTop: "2rem" }} />
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NotificationRequest;
