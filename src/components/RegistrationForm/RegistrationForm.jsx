import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const handleSumbit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const pswrdFieldId = useId();

  return (
    <Formik
      onSubmit={handleSumbit}
      validationSchema={registerSchema}
      initialValues={initialValues}
    >
      <Form>
        <label htmlFor={nameFieldId}>
          <b>Name</b>
        </label>
        <Field
          id={nameFieldId}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        <ErrorMessage name="name" component="span" className="error" />
        <label htmlFor={emailFieldId}>
          <b>Email</b>
        </label>
        <Field
          id={emailFieldId}
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <ErrorMessage name="name" component="span" className="error" />
        <label htmlFor={pswrdFieldId}>
          <b>Password</b>
        </label>
        <Field
          id={pswrdFieldId}
          name="password"
          type="password"
          placeholder="Enter your password"
        />{' '}
        <ErrorMessage name="password" component="span" className="error" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
