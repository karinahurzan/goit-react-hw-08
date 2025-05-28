import { Modal, Box, Button, Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEditableContact,
  selectIsEditModalOpen,
} from '../../redux/contacts/selectors';
import {
  closeEditModal,
  updateEditableContact,
} from '../../redux/contacts/slice';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function EditModal() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  };

  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsEditModalOpen);
  const editableContact = useSelector(selectEditableContact);

  const handleClose = () => {
    dispatch(closeEditModal());
  };

  const handleEditContact = () => {
    if (!editableContact?.id) {
      toast.error('❌ Cannot edit contact: ID is missing!');
      return;
    }

    dispatch(editContact(editableContact));
    handleClose();
  };

  if (!isModalOpen || !editableContact) return null;

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={style}>
        <input
          type="text"
          autoFocus={true}
          value={editableContact.name}
          onChange={e =>
            dispatch(updateEditableContact({ name: e.target.value }))
          }
          sx={{ mb: 2, padding: '3px 8px' }}
        />
        <b>Number</b>
        <input
          type="text"
          value={editableContact.number}
          onChange={e =>
            dispatch(updateEditableContact({ number: e.target.value }))
          }
          sx={{ mb: 2, padding: '3px 8px' }}
        />
        <b>Number</b>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleEditContact}
        >
          Edit
        </Button>
      </Box>
    </Modal>
  );
}
