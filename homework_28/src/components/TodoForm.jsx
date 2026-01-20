import { Formik, Form, Field, ErrorMessage } from "formik";
import todoValidation from "../validation/todoValidation";

const TodoForm = ({ onAddTodo }) => {
  return (
    <Formik
      initialValues={{ todo: "" }}
      validate={todoValidation}
      onSubmit={(values, { resetForm }) => {
        onAddTodo(values.todo);
        resetForm();
      }}
    >
      <Form>
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
  );
};

export default TodoForm;
