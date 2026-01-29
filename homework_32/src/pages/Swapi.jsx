import { useEffect, useState } from "react";
import { List, ListItem, Typography, Button, Stack } from "@mui/material";

export default function Swapi() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  const loadPeople = (pageNumber) => {
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      });
  };

  const clearPeople = () => {
    setPeople([]);
    setPage(1);
  };

  useEffect(() => {
    loadPeople(page);
  }, [page]);

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Characters of Star Wars</Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
        <Button variant="outlined" onClick={clearPeople}>
          Clear
        </Button>
      </Stack>

      <List>
        {people.map((person) => (
          <ListItem key={person.name}>{person.name}</ListItem>
        ))}
      </List>
    </Stack>
  );
}
