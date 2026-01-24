import { useDispatch } from "react-redux";
import { clearTodo } from "../swapiActions";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button onClick={() => dispatch(clearTodo())}>Clear</button>
    </div>
  );
};

export default Footer;
