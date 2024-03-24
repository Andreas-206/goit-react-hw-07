import { useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux'
import { selectContacts } from './redux/selectors'
import { fetchContacts } from './redux/contactsOps'
import './App.css'

const App = () => {
	const dispatch = useDispatch()
	const contacts = useSelector(selectContacts)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<div className='app-container'>
			<h1 className='title'>Phonebook</h1>
			<ContactForm />
			{contacts.length === 0 ? <b>Add contact</b> : <SearchBox />}
			<ContactList />
		</div>
	)
}

export default App
