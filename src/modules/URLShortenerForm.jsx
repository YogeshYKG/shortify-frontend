import { Paper, Typography, TextField, Button } from '@mui/material';

const URLShortenerForm = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6">Shorten a URL</Typography>
    <TextField fullWidth label="Enter long URL" sx={{ mt: 2 }} />
    <Button variant="contained" sx={{ mt: 2 }}>Shorten</Button>
  </Paper>
);
export default URLShortenerForm;
