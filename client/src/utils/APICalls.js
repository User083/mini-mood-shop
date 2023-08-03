import Axios from "axios";
const BASE_URL = "http://localhost:8000";

//PRODUCT CALLS

export async function GetAllProducts() {
  function getAllProducts() {
    return Axios.get(`${BASE_URL}/products`).then((res) => {
      return res.data;
    });
  }
  return await getAllProducts();
}

//GET single product by ID

export async function GetProduct(id) {
  function getProduct() {
    return Axios.get(`${BASE_URL}/products/product/${id}`).then((res) => {
      return res.data;
    });
  }
  return await getProduct();
}

export async function GetProductsByCategory(category) {
  function getProductsByCategory() {
    return Axios.get(`${BASE_URL}/products/${category}`).then((res) => {
      return res.data;
    });
  }
  return await getProductsByCategory();
}

export async function GetProductsByCategoryFiltered(category, filter) {
  function getProductsByCategory() {
    return Axios.get(`${BASE_URL}/products/${category}--${filter}`).then(
      (res) => {
        return res.data;
      }
    );
  }
  return await getProductsByCategory();
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
    return Axios.post(`${BASE_URL}/cart`, {
      item: item._id,
      price: item.price,
      quantity: 1,
    })
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
