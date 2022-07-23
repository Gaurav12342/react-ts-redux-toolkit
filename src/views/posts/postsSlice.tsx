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
        }
    }
});
export const getAllPosts = (state: { posts: IPosts[] }) => state.posts;
export const { addPosts } = PostsSlice.actions;
export default PostsSlice.reducer;