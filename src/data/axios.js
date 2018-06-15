import axios from "axios";

export default axios.create({
    baseURL: "http://alice.restful.training/api/",
    params: {
        key: "6fc533bdd8aae16136a168983092613a5ce2a025",
    },
    headers: {
        Accept: "application/json",
    },
});