import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IState } from "../interfaces/interface";
import { sortStrings } from "../utils/sortStrings";

const initialState: IState = {
	users: [],
    isLoading: true,
    error: false,
    disabled: false,
    err: null,
}

export const getUsers = createAsyncThunk(
    "getUsers",
    //@ts-ignore
    async (users, {rejectWithValue}) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!res.ok) {
                return rejectWithValue(res.status)
            }
            return res.json();
        } catch(error) {
            //@ts-ignore
            throw rejectWithValue(error.message);
        }
})

const usersSlice = createSlice({
	name: "usersSlice",
	initialState,
	reducers: {
        sortByValue(state, action) {
            //@ts-ignore
            state.users = state.users.sort(sortStrings(action.payload))
        },
        setDisabled(state, action) {
            state.disabled = action.payload;
        }
	},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state: IState) => {
                state.isLoading = true;
                state.err = null;
            })
            .addCase(getUsers.fulfilled, (state: IState, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.err = null;
            })
            .addCase(getUsers.rejected, (state: IState, action) => {
                state.isLoading = false;
                state.error = true;
                //@ts-ignore
                state.err = action.error;
            })
    }
});
 
export const { sortByValue, setDisabled } = usersSlice.actions;
export default usersSlice.reducer;