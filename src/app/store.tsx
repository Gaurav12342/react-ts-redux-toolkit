import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import PostsSlice from '../views/posts/postsSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: PostsSlice
    }
});