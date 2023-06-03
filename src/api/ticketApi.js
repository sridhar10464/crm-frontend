import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const ticketUrl = rootUrl + "ticket/";
const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
          headers: {
            // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlhdCI6MTY4NTc4NTA1MiwiZXhwIjoxNjg1ODcxNDUyfQ.-F7dHBSqpD472xPavWXDXqyaQDaHNn27FRD49s_8WZ0"
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(ticketUrl + _id, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
            "Access-Control-Allow-Credentials": "*"
          },
        });
  
        resolve(result);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };