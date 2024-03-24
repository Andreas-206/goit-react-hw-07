import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOps'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.items = action.payload
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
					contact => contact.id !== action.payload.id
				)
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

// export const selectFilteredContacts = createSelector(
// 	selectContacts,
// 	selectNameFilter,
// 	(contacts, name) => {
// 		if (!name.trim()) return contacts

// 		return contacts.filter(contact =>
// 			contact.name.toLowerCase().includes(name.toLowerCase())
// 		)
// 	}
// )

// export const selectContacts = state => state.contacts.items
// export const selectLoading = state => state.contacts.loading
// export const selectError = state => state.contacts.error

export default contactsSlice.reducer
