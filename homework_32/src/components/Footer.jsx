import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#1976d2", color: "white", p: 2, textAlign: "center" }}>
      <Typography>© 2026 | My name</Typography>
      <Typography>Email: email@email.com</Typography>
      <Typography>GitHub: github.com/username</Typography>
    </Box>
  );
}
