import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./page/ticket-listing/TicketSlice";
import loginReducer from "./components/login/LoginSlice";
import userReducer from "./page/dashboard/userSlice";
import newTicketReducer from "./components/Add-token-form/AddTokenSlice";

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
    },
});

export default store;