import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { addItem, toUpdateItem, updateItem } from "../actions";

const AddUpdateNewItem = () => {
  const dispatch = useDispatch();
  const itemToBeUpdated = useSelector(({ itemToBeUpdated }) => itemToBeUpdated);
  const isUpdate = _.isEmpty(itemToBeUpdated);
  const allCategories = [
    "Electronics",
    "Stationery",
    "Food",
    "Furniture",
    "Sports",
    "Clothing",
    "Books",
    "Toys",
    "Other",
  ];
  const initialItemInput = {
    name: "",
    category: allCategories[0],
    quantity: 1,
    price: 0,
  };
  const [itemInput, setItemInput] = useState(
    isUpdate ? initialItemInput : itemToBeUpdated
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const updatedItemInput = {
      _id: itemInput._id,
      name: itemInput.name,
      category: itemInput.category,
      price: itemInput.price,
      quantity: itemInput.quantity,
    };
    isUpdate
      ? dispatch(addItem(itemInput))
      : dispatch(updateItem(updatedItemInput));
    setItemInput(initialItemInput);
    dispatch(toUpdateItem({}));
  };

  useEffect(() => {
    setItemInput(isUpdate ? initialItemInput : itemToBeUpdated);
  }, [isUpdate, itemToBeUpdated]);

  useEffect(() => {
    dispatch(toUpdateItem({}));
  }, []);

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div>
        <label>Item name:</label>
        <input
          type="text"
          value={itemInput.name}
          onChange={(e) => setItemInput({ ...itemInput, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Item category:</label>
        <select
          value={itemInput.category}
          onChange={(e) =>
            setItemInput({
              ...itemInput,
              category: e.target.value,
            })
          }
          required
        >
          {allCategories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Item quantity:</label>
        <input
          type="number"
          min={1}
          value={itemInput.quantity}
          onChange={(e) =>
            setItemInput({ ...itemInput, quantity: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <div>
        <label>Item price:</label>
        <input
          type="number"
          min={0}
          value={itemInput.price}
          onChange={(e) =>
            setItemInput({ ...itemInput, price: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <button type="submit">{isUpdate ? "Add" : "Update"} Item</button>
    </form>
  );
};

export { AddUpdateNewItem };
