import { Paper, Typography } from '@mui/material';

const AnalyticsModule = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Analytics
    </Typography>
    <Typography>Click count, charts, and traffic breakdown will appear here.</Typography>
    {/* Placeholder for future charts */}
  </Paper>
);

export default AnalyticsModule;
