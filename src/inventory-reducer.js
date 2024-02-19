import { inventoryConstants } from "./inventory-constants";

const {
  GET_ALL_ITEMS,
  ADD_ITEM,
  TO_UPDATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SORT_ITEMS,
  GET_ALL_SALES,
  ADD_SALE,
} = inventoryConstants;

const initialInventory = {
  items: [],
  sales: [],
  itemToBeUpdated: {},
  toSort: false,
};

const inventoryReducer = (state = initialInventory, { type, payload }) => {
  switch (type) {
    case GET_ALL_ITEMS:
      return { ...state, items: payload };
    case ADD_ITEM:
      return { ...state, items: [...state.items, payload] };
    case TO_UPDATE_ITEM:
      return { ...state, itemToBeUpdated: payload };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(({ _id }) => _id !== payload),
      };
    case SORT_ITEMS:
      return {
        ...state,
        toSort: true,
      };
    case GET_ALL_SALES:
      return { ...state, sales: payload };
    case ADD_SALE:
      return { ...state, sales: [...state.sales, payload] };
    default:
      return state;
  }
};

export { initialInventory, inventoryReducer };
