import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../appFeatures/formData/formDataSlice';

export const store = configureStore({
  reducer: {
    form: formDataReducer,
  },
});
