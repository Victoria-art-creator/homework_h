import { Typography, Card, CardContent, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4">About me</Typography>
      <Typography>
        I am a Fullstack-developer with no work experience
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Skills: </Typography>
          <ul>
            <li>MUI </li>
            <li>HTML, CSS</li>
            <li>REST API</li>
            <li>Next.js, Node.js</li>
          </ul>
        </CardContent>
      </Card>
    </Stack>
  );
}
