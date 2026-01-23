const todoValidation = (values) => {
  const errors = {};

  if (!values.todo) {
    errors.todo = "Field is required";
  } else if (values.todo.length < 5) {
    errors.todo = "Minimum 5 characters";
  }

  return errors;
};

export default todoValidation;
