import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <Button color="inherit" component={Link} to="/">
          Main
        </Button>
        <Button color="inherit" component={Link} to="/todo">
          Todo
        </Button>
        <Button color="inherit" component={Link} to="/swapi">
          Swapi
        </Button>
      </Toolbar>
    </AppBar>
  );
}
