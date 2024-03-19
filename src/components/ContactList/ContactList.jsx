import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'
import { Register } from '../../redux/standart.js'
import { useMemo } from 'react'

const ContactList = () => {
	const name = useSelector(selectNameFilter)
	const contacts = useSelector(selectContacts)

	const filterContacts = useMemo(() => {
		if (!name) {
			return contacts
		}
		return contacts.filter(elem =>
			Register(elem.name).toLowerCase().includes(Register(name).toLowerCase())
		)
	}, [contacts, name])

	return (
		<ul>
			{filterContacts.map(contact => (
				<Contact key={contact.id} contact={contact} />
			))}
		</ul>
	)
}

export default ContactList
