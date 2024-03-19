import contactsSlice from './contactsSlice'
import filtersSlice from './filtersSlice'

export const rootReducer = {
	contacts: contactsSlice,
	filters: filtersSlice,
}
