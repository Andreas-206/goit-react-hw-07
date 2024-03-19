import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux'
import { selectError, selectLoading } from './redux/contactsSlice'
import { fetchContacts } from './redux/contactsOps'
import './App.css'

const App = () => {
	const [contacts, setContacts] = useState([
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	])

	const [filter, setFilter] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

	const handleFilterChange = event => {
		setFilter(event.target.value)
	}

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	)

	const addContact = (newContact, actions) => {
		setContacts([...contacts, newContact])
		actions.resetForm()
	}

	const deleteContact = id => {
		setContacts(contacts.filter(contact => contact.id !== id))
	}

	const isLoading = useSelector(selectLoading)
	const error = useSelector(selectError)

	return (
		<div className='app-container'>
			<h1 className='title'>Phonebook</h1>
			<ContactForm onSubmit={addContact} />
			<SearchBox value={filter} onChange={handleFilterChange} />
			{isLoading && !error && <b>Loading...</b>}
			{error && <b>Please try again later</b>}
			<ContactList contacts={filteredContacts} onDelete={deleteContact} />
		</div>
	)
}

export default App
