import axios from "axios";

const productUrl = `https://localhost:44303/api/products`;

let getProductList = () => {
    const config = {
        method: "GET",
        url: productUrl,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

let addProduct = (payload) => {
    const config = {
        method: "POST",
        data: payload,
        url: productUrl,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
}

let getProductById = (id) => {
    const config = {
        method: "GET",
        url: productUrl + id,
        crossdomain: true,
        header: { "Content-Type": "application/json" } 
    };

    return axios(config)
}

let updateProduct = (payload, id) => {
    const config = {
        method: "PUT",
        data: payload,
        url: productUrl + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
}

let deleteProduct = (id) => {
    const config = {
        method: "DELETE",
        url: productUrl + id, 
        crossdomain: true,
        headers: { "Content-Type": "application/json"}
    };
    return axios(config)
}
export default { getProductList, addProduct, getProductById, updateProduct, deleteProduct }