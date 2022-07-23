import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import posts from "../../resource/posts.json";
import { IPosts } from '../../interface/posts';
const initialState: IPosts[] = posts;
export const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: {
            reducer(state, action: PayloadAction<IPosts>) {
                state.push(action.payload)
            },
            prepare(firstName: string, lastName: string) {
                return {
                    payload: {
                        id: nanoid(),
                        firstName,
                        lastName
                    }
                }
            }
        },
        deletePosts: (state, action) => {
            state.splice(action.payload, 1);
        },
        updatePosts: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
});
export const getAllPosts = (state: { posts: IPosts[] }) => state.posts;
export const { addPosts, deletePosts } = PostsSlice.actions;
export default PostsSlice.reducer;