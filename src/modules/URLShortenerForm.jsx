import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { QRCodeSVG } from "qrcode.react";

import { verifyUrl } from "../utils/verifyUrl";
import { ShortifyUrl } from "../utils/shortifyUrl";
import useSnackbar from "../utils/SnackbarUtils";

const URLShortenerForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [copied, setCopied] = useState(false);

  const theme = useTheme();
  const { showMessage, SnackbarComponent } = useSnackbar();

  const handleShortClick = () => {
    ShortifyUrl(longUrl, setShortUrl, showMessage);
  };

  const handleVerifyUrlClick = () => {
    verifyUrl(longUrl, showMessage); // Use new snackbar utility
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    showMessage("Short Url Copied!");
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        borderRadius: 4,
        background:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(12px)",
        boxShadow: `0 8px 30px rgba(0,0,0,0.1)`,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        🔗 Shortify Your Link
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        mb={2}
      >
        Paste your long URL and get a short, shareable one instantly.
      </Typography>

      <TextField
        fullWidth
        label="Enter full URL (https://...)"
        variant="outlined"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        error={urlError}
        helperText={urlError ? "Please enter a valid URL." : ""}
      />
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="text"
          onClick={handleVerifyUrlClick}
          sx={{ mt: 2, mb: -2 }}
        >
          ✅ Verify your URL?
        </Button>
      </Box>

      <Button
        variant="contained"
        size="large"
        fullWidth
        onClick={handleShortClick}
        sx={{
          mt: 3,
          py: 1.5,
          fontWeight: "bold",
          background: "linear-gradient(to right, #2196f3, #21cbf3)",
        }}
      >
        🚀 Shorten URL
      </Button>

      {shortUrl && (
        <>
          <Divider sx={{ my: 4 }} />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            py={1}
            bgcolor={theme.palette.action.hover}
            borderRadius={2}
            sx={{ wordBreak: "break-word" }}
          >
            <Typography
              component="a"
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              color="primary"
            >
              {shortUrl}
            </Typography>
            <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
              <IconButton
                onClick={handleCopy}
                color={copied ? "success" : "default"}
              >
                {copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          <Box display="flex" justifyContent="center" mt={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: "transparent" }}>
              <QRCodeSVG value={shortUrl} size={180} />
            </Paper>
          </Box>
        </>
      )}

      {SnackbarComponent}
    </Paper>
  );
};

export default URLShortenerForm;
