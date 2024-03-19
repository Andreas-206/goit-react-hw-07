import * as Yup from 'yup'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Invalid number!')
		.max(50, 'Too Long!')
		.required('Required'),
	number: Yup.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.min(10, 'Invalid number!')
		.max(12, 'Too Long!')
		.required('Required'),
})
