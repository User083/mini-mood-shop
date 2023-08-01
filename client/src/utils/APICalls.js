import Axios from "axios";
const BASE_URL = "http://localhost:8000";

//PRODUCT CALLS

export async function GetAllProducts() {
  function getAllProducts() {
    return Axios.get(`${BASE_URL}/products`).then((res) => {
      console.log(res);
      return res.data;
    });
  }
  return await getAllProducts();
}

export async function GetProduct(id) {
  function getProduct() {
    return Axios.get(`${BASE_URL}/products/${id}`).then((res) => {
      return res.data;
    });
  }
  return await getProduct();
}

export async function UpdateProduct(id, qty) {
  function updateProduct() {
    return Axios.patch(`${BASE_URL}/cart/${id}`, { quantity: qty }).then(
      (res) => {
        return res.data;
      }
    );
  }
  return await updateProduct();
}

//CART CALLS

export async function GetCart() {
  function getCart() {
    return Axios.get(`${BASE_URL}/cart`).then((res) => {
      return res.data;
    });
  }
  return await getCart();
}

export async function AddToCart(item) {
  function addToCart() {
    return Axios.post(
      `${BASE_URL}/cart`,
      { ...item },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
  }
  return await addToCart();
}

export async function RemoveFromCart(id) {
  function removeFromCart() {
    return Axios.delete(`${BASE_URL}/cart/${id}`);
  }
  return await removeFromCart();
}