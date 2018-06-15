// import our axios config file
import axios from "./axios";

export const getTitles = () => dispatch => {
    axios.get("/articles").then(({ data }) => {
        // for now, just log the response data
        console.log(data);
    });
};