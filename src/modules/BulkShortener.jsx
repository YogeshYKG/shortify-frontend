import { Paper, Typography, TextField, Button } from '@mui/material';

const BulkShortener = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Bulk URL Shortener
    </Typography>
    <TextField
      label="Enter multiple URLs (one per line)"
      multiline
      rows={5}
      fullWidth
      sx={{ mt: 2 }}
    />
    <Button variant="contained" sx={{ mt: 2 }}>
      Shorten All
    </Button>
  </Paper>
);

export default BulkShortener;
