import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./page/ticket-listing/TicketSlice";

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    },
});

export default store;