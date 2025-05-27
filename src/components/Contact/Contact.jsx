import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ name, number, id, icons }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const { IoMdContact, FaPhoneAlt } = icons || {};

  return (
    <div>
      <div>
        <h3>
          {IoMdContact && <IoMdContact />} {name}
        </h3>
        <p>
          {FaPhoneAlt && <FaPhoneAlt />} {number}
        </p>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
