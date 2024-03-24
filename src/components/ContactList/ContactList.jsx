import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/selectors.js'

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts)

	return (
		<ul>
			{contacts.map(contact => (
				<Contact key={contact.id} contact={contact} />
			))}
		</ul>
	)
}

export default ContactList
