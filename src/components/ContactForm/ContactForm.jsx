import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsOps.js'
import { validationSchema } from '../../redux/validation'
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid'
import clsx from 'clsx'

const ContactForm = () => {
	const dispatch = useDispatch()
	return (
		<Formik
			initialValues={{
				name: '',
				number: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				const id = nanoid()
				const newContact = {
					name: values.name,
					number: values.number,
					id: id,
				}
				dispatch(addContact(newContact))
				resetForm()
			}}
		>
			{({ errors, touched, values }) => (
				<Form className={css.form}>
					<div className={css.fieldBox}>
						<label className={css.label} htmlFor='name'>
							Name
						</label>
						<Field
							className={clsx(css.field, {
								[css.error]: touched.name && errors.name,
							})}
							id='name'
							name='name'
						/>
						{touched.name && errors.name && (
							<div className={css.errorText}>{errors.name}</div>
						)}
					</div>

					<div className={css.fieldBox}>
						<label className={css.label} htmlFor='number'>
							Number
						</label>
						<Field
							className={clsx(css.field, {
								[css.error]: touched.number && errors.number,
							})}
							id='number'
							name='number'
						/>
						{touched.number && errors.number && (
							<div className={css.errorText}>{errors.number}</div>
						)}
					</div>
					<button type='submit' disabled={!values.name || !values.number}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default ContactForm
