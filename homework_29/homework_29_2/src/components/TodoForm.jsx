import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";
import todoValidation from "../validation/todoValidation";

const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="todo-form-wrapper">
      <Formik
        initialValues={{ todo: "" }}
        validate={todoValidation}
        onSubmit={(values, { resetForm }) => {
          dispatch(addTodo(values.todo));
          resetForm();
        }}
      >
        <Form className="todo-form">
          <div>
            <Field name="todo" type="text" placeholder="Enter todo..." />
            <ErrorMessage
              name="todo"
              component="div"
              style={{ color: "red", fontSize: 14 }}
            />
          </div>

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TodoForm;
