import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

const TaskForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          descripcion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit,values ,isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>descripcion</label>
            <textarea
              name="descripcion"
              rows="3"
              placeholder="Write descripction"
              onChange={handleChange}
              value={values.descripcion}
            />
            <button type="submit">{isSubmitting ? 'Saving' :'save'}</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TaskForm;
