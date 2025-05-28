import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactToDelete,
  selectIsDeleteModalOpen,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { closeDeleteModal } from '../../redux/contacts/slice';
import { Modal, Box, Button, Typography } from '@mui/material';

export default function DeleteModal() {
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

  const id = useSelector(selectContactToDelete);

  const isModalOpen = useSelector(selectIsDeleteModalOpen);

  const handleClose = () => {
    dispatch(closeDeleteModal());
  };

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
    handleClose();
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Delete contact?
        </Typography>
        <Button
          variant="contained"
          color="success"
          type="button"
          onClick={handleDeleteClick}
        >Yes</Button>
        <Button
          variant="contained"
          color="error"
          type="button"
          onClick={handleClose}
        >No</Button>
      </Box>
    </Modal>
  );
}
