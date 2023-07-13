import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TitleState {
	value: string;
}

const initialState: TitleState = {
	value: "Logon"
};

export const titleSlice = createSlice({
	name: "title",
	initialState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
});

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
