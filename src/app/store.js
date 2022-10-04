
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/useSlice';
export const store = configureStore({
  reducer: {
    user: userReducer, 
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});



