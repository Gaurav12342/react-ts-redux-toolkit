import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodos } from "../../interface/todos";
export const initialState: ITodos = {
    todos: [],
    loading: false,
    error: ""
}

export const fetchTodos: any = createAsyncThunk("user/todos", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.data
    }).catch((error) => {
        return error
    });
});
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true;
            state.todos = [];
            state.error = ""
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
            state.error = ""
        });
        builder.addCase(fetchTodos.rejected, (state, action: any) => {
            state.loading = false;
            state.todos = [];
            state.error = action.error.message
        });
    }
});

export const status = (state: any) => state.loading;
export const todoList = (state: any) => state.todos;
export default todoSlice.reducer;