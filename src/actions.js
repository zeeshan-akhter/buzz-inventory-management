import axios from "axios";
import { inventoryConstants } from "./inventory-constants";

const {
  BASE_URL,
  GET_ALL_ITEMS,
  ADD_ITEM,
  TO_UPDATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SORT_ITEMS,
  GET_ALL_SALES,
  ADD_SALE,
} = inventoryConstants;

const getAllItems = () => async (dispatch) => {
  try {
    const {
      status,
      data: { items },
    } = await axios.get(`${BASE_URL}/items`);
    if (status === 201) {
      dispatch({ type: GET_ALL_ITEMS, payload: items });
    }
  } catch (error) {
    console.log("Error fetching all items:", error);
  }
};

const addItem = (toAddItem) => async (dispatch) => {
  try {
    const {
      status,
      data: { newItem },
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/items`,
      data: toAddItem,
    });
    if (status === 201) {
      dispatch({ type: ADD_ITEM, payload: newItem });
    }
  } catch (error) {
    console.log("Error adding item:", error.response.data);
  }
};

const toUpdateItem = (toUpdateItem) => async (dispatch) => {
  dispatch({ type: TO_UPDATE_ITEM, payload: toUpdateItem });
};

const updateItem = (updatedItem) => async (dispatch) => {
  try {
    const {
      status,
      data: { item },
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/items/${updatedItem._id}`,
      data: updatedItem,
    });
    if (status === 201) {
      dispatch({ type: UPDATE_ITEM, payload: item });
    }
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

const deleteItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/items/${id}`);
    dispatch({ type: DELETE_ITEM, payload: id });
  } catch (error) {
    console.error("Error while deleting item:", error);
  }
};

const sortItems = () => async (dispatch) => {
  dispatch({ type: SORT_ITEMS });
};

const getAllSales = () => async (dispatch) => {
  try {
    const {
      status,
      data: { sales },
    } = await axios.get(`${BASE_URL}/sales`);
    if (status === 201) {
      dispatch({ type: GET_ALL_SALES, payload: sales });
    }
  } catch (error) {
    console.log("Error fetching all sales:", error);
  }
};

const addSale = (itemId, saleQuantity, salePrice) => async (dispatch) => {
  try {
    const {
      status,
      data: { newSale },
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/sales/${itemId}`,
      data: { quantity: saleQuantity, price: salePrice },
    });
    if (status === 201) {
      dispatch({ type: ADD_SALE, payload: newSale });
    }
  } catch (error) {
    console.error("Error adding sale:", error);
  }
};

export {
  getAllItems,
  addItem,
  toUpdateItem,
  updateItem,
  deleteItem,
  sortItems,
  getAllSales,
  addSale,
};
