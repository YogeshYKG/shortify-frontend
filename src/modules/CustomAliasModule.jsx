import { Paper, Typography, TextField, Button } from '@mui/material';

const CustomAliasModule = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Custom Alias
    </Typography>
    <TextField fullWidth label="Custom alias (e.g., /promo)" sx={{ mt: 1 }} />
    <Button variant="contained" sx={{ mt: 2 }}>
      Create Custom Link
    </Button>
  </Paper>
);

export default CustomAliasModule;
