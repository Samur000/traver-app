import { configureStore } from '@reduxjs/toolkit';

import { api } from '@/lib/services/api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	},

	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([api.middleware]);
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
