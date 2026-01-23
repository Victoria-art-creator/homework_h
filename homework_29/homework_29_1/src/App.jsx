import { useSelector } from "react-redux";
import ButtonIncrement from "./components/ButtonIncrement";
import ButtonDecrement from "./components/ButtonDecrement";

function App() {
  const value = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Value: {value}</h1>
      <ButtonDecrement />
      <ButtonIncrement />
    </div>
  );
}

export default App;
