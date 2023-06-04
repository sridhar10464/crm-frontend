import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./page/ticket-listing/TicketSlice";
import loginReducer from "./components/login/LoginSlice";
import userReducer from "./page/dashboard/userSlice";


const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
    },
});

export default store;