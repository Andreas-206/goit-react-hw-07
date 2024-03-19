import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	selectors: {
		selectContacts: state => state.items,
	},
	reducers: {
		addContact(state, action) {
			state.items.push(action.payload)
		},
		deleteContact(state, action) {
			state.items = state.items.filter(el => el.id !== action.payload)
		},
	},
})

export const { addContact, deleteContact } = contactsSlice.actions

export const { selectContacts } = contactsSlice.selectors

export default contactsSlice.reducer
