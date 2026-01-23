import { useDispatch } from "react-redux";
import { counter } from "../redux/slices/counterSlice";

const ButtonDecrement = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(counter.actions.decrement());
  };

  return <button onClick={handleClick}>-</button>;
};

export default ButtonDecrement;
