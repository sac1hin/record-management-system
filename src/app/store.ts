import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "../feature/records/recordSlice";


export const store = configureStore({
    reducer : {
        records: recordReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
