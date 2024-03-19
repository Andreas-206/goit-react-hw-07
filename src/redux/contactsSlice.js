import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOps'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContactSuccess(state, action) {
			state.items.push(action.payload)
		},
		deleteContact(state, action) {
			state.items = state.items.filter(contact => contact.id !== action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(addContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false
				state.items.push(action.payload)
			})
			.addCase(addContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(deleteContact.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false
				state.items = state.items.filter(
					contact => contact.id !== action.payload
				)
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error

export default contactsSlice.reducer
