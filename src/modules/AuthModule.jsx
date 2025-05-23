import { Paper, Typography, TextField, Button, Stack } from '@mui/material';

const AuthModule = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Login / Register
    </Typography>
    <Stack spacing={2}>
      <TextField label="Email" type="email" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button variant="contained">Login</Button>
      <Button variant="outlined">Register</Button>
    </Stack>
  </Paper>
);

export default AuthModule;
