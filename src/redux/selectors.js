import { createSelector } from '@reduxjs/toolkit'
import { selectNameFilter } from './filtersSlice'

export const selectContacts = state => state.contacts.items
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error
export const Register = value => value.toLocaleLowerCase()

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, name) => {
		if (!name.trim()) return contacts

		return contacts.filter(contact =>
			Register(contact.name).includes(Register(name))
		)
	}
)
