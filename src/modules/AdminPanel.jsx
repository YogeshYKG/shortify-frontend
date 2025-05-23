import { Paper, Typography, Button } from '@mui/material';

const AdminPanel = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Admin Panel
    </Typography>
    <Typography>Manage users, moderate links, handle reports.</Typography>
    <Button variant="outlined" sx={{ mt: 2 }}>
      View All Links
    </Button>
    <Button variant="outlined" sx={{ mt: 1 }}>
      Manage Users
    </Button>
  </Paper>
);

export default AdminPanel;
