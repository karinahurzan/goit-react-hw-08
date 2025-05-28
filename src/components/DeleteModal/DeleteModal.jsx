import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactToDelete,
  selectIsDeleteModalOpen,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { closeDeleteModal } from '../../redux/contacts/slice';
import css from './DeleteModal.module.css';

export default function DeleteModal() {
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
    <>
      {isModalOpen && (
        <div className={css.modaloverlay} onClick={handleClose}>
          <div className={css.modal}>
            <h3>Delete contact?</h3>
            <div className={css.buttons}>
              <button
                type="button"
                onClick={handleDeleteClick}
                className={css.buttonYes}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={handleClose}
                className={css.buttonNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
