import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import {
  openDeleteModal,
  openEditModal,
  setContactToDelete,
} from '../../redux/contacts/slice';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(openEditModal(contact));
  };

  const handleDeleteClick = () => {
    dispatch(setContactToDelete(contact.id));
    dispatch(openDeleteModal());
  };

  return (
    <>
      <EditModal />
      <DeleteModal />
      <div>
        <div className={css.contactInfo}>
          <p className={css.contactText}>
            <FaUser size={20} />
            {contact.name}
          </p>
          <p className={css.contactText}>
            <FaPhoneAlt size={20} />
            {contact.number}
          </p>
        </div>
        <div className={css.contactActions}>
          <button
            className={css.editButton}
            onClick={handleEditClick}
            type="button"
          >
            Edit
          </button>
          <button
            className={css.deleteButton}
            onClick={handleDeleteClick}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
