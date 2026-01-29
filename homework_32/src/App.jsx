import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Todo from "./pages/Todo.jsx";
import Swapi from "./pages/Swapi.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4, minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/swapi" element={<Swapi />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
