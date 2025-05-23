import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

import URLShortenerForm from './modules/URLShortenerForm';
import URLHistory from './modules/URLHistory';
import AnalyticsModule from './modules/AnalyticsModule';
import AuthModule from './modules/AuthModule';
import CustomAliasModule from './modules/CustomAliasModule';
import ThemeModule from './modules/ThemeModule';
import BulkShortener from './modules/BulkShortener';
import SearchFilterModule from './modules/SearchFilterModule';
import AdminPanel from './modules/AdminPanel';

const ShortifyApp = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">🔗 Shortify</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <URLShortenerForm />
          </Grid>
          <Grid item xs={12}>
            <SearchFilterModule />
          </Grid>
          <Grid item xs={12}>
            <URLHistory />
          </Grid>
          <Grid item xs={12}>
            <AnalyticsModule />
          </Grid>
          <Grid item xs={12}>
            <CustomAliasModule />
          </Grid>
          <Grid item xs={12}>
            <BulkShortener />
          </Grid>
          <Grid item xs={12}>
            <AuthModule />
          </Grid>
          <Grid item xs={12}>
            <ThemeModule />
          </Grid>
          <Grid item xs={12}>
            <AdminPanel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShortifyApp;
