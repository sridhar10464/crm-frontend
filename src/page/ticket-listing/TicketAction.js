
import { getAllTickets, getSingleTicket } from "../../api/ticketApi";
import { 
    fetchSingleTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    fetchTicketFail,
    fetchTicketLoading,
    fetchTicketSuccess,
    searchTickets
} from "./TicketSlice"


export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
       const result = await getAllTickets()
        console.log(result)

        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
};

export const filterSerachTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
  };
  
  //Actions for single ticket only
  export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
      const result = await getSingleTicket(_id);
      dispatch(
        fetchSingleTicketSuccess(
          result.data.result.length && result.data.result[0]
        )
      );
    } catch (error) {
      dispatch(fetchSingleTicketFail(error.message));
    }
  };