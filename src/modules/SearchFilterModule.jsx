import { Paper, Typography, TextField, Stack } from '@mui/material';

const SearchFilterModule = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Search & Filter
    </Typography>
    <Stack spacing={2}>
      <TextField label="Search by URL or alias" fullWidth />
      <TextField label="Filter by date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
    </Stack>
  </Paper>
);

export default SearchFilterModule;
