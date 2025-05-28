import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

const style = {
  borderRadius: '5px',
  padding: '0',
  width: '320px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  fontSize: '20px',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Contact name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field type="text" name="number" placeholder="123-45-67" />
          <ErrorMessage name="number" component="div" />
        </label>
        <Button variant="contained" color="success" sx={style} type="submit">
          Add Contact
          <FaUserPlus size={20} />
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
