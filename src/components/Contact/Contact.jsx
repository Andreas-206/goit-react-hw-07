import { IoMdPerson } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa'
import { deleteContact } from '../../redux/contactsOps.js'
import { useDispatch } from 'react-redux'
import css from './Contact.module.css'

const Contact = ({ contact }) => {
	const dispatch = useDispatch()
	const onDelete = () => {
		dispatch(deleteContact(contact.id))
	}
	return (
		<li className={css.contact}>
			<div className={css.info}>
				<div className={css.row}>
					<IoMdPerson />
					{contact.name}
				</div>
				<div className={css.row}>
					<FaPhone />
					{contact.number}
				</div>
			</div>
			<button onClick={onDelete}>Delete</button>
		</li>
	)
}

export default Contact
