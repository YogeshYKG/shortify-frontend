import { Paper, Typography, Switch, FormControlLabel } from '@mui/material';

const ThemeModule = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Theme Settings
    </Typography>
    <FormControlLabel control={<Switch />} label="Dark Mode" />
  </Paper>
);

export default ThemeModule;
