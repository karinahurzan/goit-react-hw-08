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
import css from './EditModal.module.css';

export default function EditModal() {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsEditModalOpen);
  const editableContact = useSelector(selectEditableContact);

  const handleClose = () => {
    dispatch(closeEditModal());
  };

  const handleEditContact = () => {
    if (!editableContact?.id) {
      toast.error('Cannot edit contact: ID is missing!');
      return;
    }

    dispatch(editContact(editableContact));
    handleClose();
  };

  if (!isModalOpen || !editableContact) return null;

  return (
    <div className={css.modaloverlay} onClick={handleClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <h3>Edit contact</h3>
        <label className={css.labelName}>
          Name
          <input className={css.inputName}
            type="text"
            autoFocus
            value={editableContact.name}
            onChange={e =>
              dispatch(updateEditableContact({ name: e.target.value }))
            }
          />
        </label>
        <label className={css.labelName}>
          Number
          <input className={css.inputName}
            type="text"
            value={editableContact.number}
            onChange={e =>
              dispatch(updateEditableContact({ number: e.target.value }))
            }
          />
        </label>
        <div className={css.buttons}>
          <button
            className={css.buttonSave}
            type="button"
            onClick={handleEditContact}
          >
            Save
          </button>
          <button
            className={css.buttonCancel}
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
