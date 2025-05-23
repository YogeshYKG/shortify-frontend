import { Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { ContentCopy, Delete } from '@mui/icons-material';

const URLHistory = () => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      URL History
    </Typography>
    <List>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="copy">
              <ContentCopy />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </>
        }
      >
        <ListItemText
          primary="shortify.app/xyz123"
          secondary="https://example.com/very/long/link"
        />
      </ListItem>
      {/* More items can be mapped here */}
    </List>
  </Paper>
);

export default URLHistory;
