import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Record {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface RecordState {
  value: Record[];
}

const initialState: RecordState = {
  value: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St",
    },
  ],
};

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<Record>) => {
      state.value.push(action.payload);
    },
    deleteRecord: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(
        (record) => record.id !== action.payload
      );
    },
  },
});

export const { addRecord, deleteRecord } = recordSlice.actions;

export const getRecords = (state: RootState) => state.records.value;

export default recordSlice.reducer;
