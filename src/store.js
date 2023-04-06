import { configureStore } from '@reduxjs/toolkit';
import InvoiceSlice from './redux/InvoiceSlice';

export const store = configureStore({
  reducer: {
    invoices: InvoiceSlice,
  },
});
