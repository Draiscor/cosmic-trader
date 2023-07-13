import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";

const store = configureStore({
	reducer: {
		title: titleReducer
	}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
