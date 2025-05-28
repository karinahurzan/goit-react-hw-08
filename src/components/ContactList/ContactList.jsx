import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <section className={css.sectionContacts}>
      <div className="container">
        {contacts.length > 0 ? (
          <ul className={css.list}>
            {contacts.map(contact => (
              <li key={contact.id} className={css.item}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.message}>No contacts found</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
