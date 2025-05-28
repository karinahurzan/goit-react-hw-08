import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { Button } from '@mui/material';
import {
  openDeleteModal,
  openEditModal,
  setContactToDelete,
} from '../../redux/contacts/slice';
import EditModal from '../Modals/EditModal';
import DeleteModal from '../Modals/DeleteModal';

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
        <div>
          <p>
            <FaUser size={20} />
            {contact.name}
          </p>
          <p>
            <FaPhoneAlt size={20} />
            {contact.number}
          </p>
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={handleEditClick}
            size="small"
            type="button"
            color="primary"
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={handleDeleteClick}
            size="small"
            type="button"
            color="error"
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
