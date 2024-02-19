import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../actions";

const AddNewSale = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items);
  const initialSaleInput = {
    itemName: items[0]?.name,
    itemId: items[0]?._id,
    quantity: 1,
    price: 0,
  };
  const [saleInput, setSaleInput] = useState(initialSaleInput);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addSale(saleInput.itemId, saleInput.quantity, saleInput.price));
    setSaleInput(initialSaleInput);
  };

  useEffect(() => {
    setSaleInput({
      itemName: items[0]?.name,
      itemId: items[0]?._id,
      quantity: 1,
      price: 0,
    });
  }, [items]);

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div>
        <label>Sale item:</label>
        <select
          onChange={(e) => {
            const [_id, name] = e.target.value.split(",");
            setSaleInput({
              ...saleInput,
              itemName: name,
              itemId: _id,
            });
          }}
          required
        >
          {items.map(({ _id, name }) => (
            <option value={`${_id},${name}`} key={_id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sale quantity:</label>
        <input
          type="number"
          min="1"
          value={saleInput.quantity}
          onChange={(e) =>
            setSaleInput({ ...saleInput, quantity: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <div>
        <label>Sale price:</label>
        <input
          type="number"
          min="0"
          value={saleInput.price}
          onChange={(e) =>
            setSaleInput({ ...saleInput, price: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <button type="submit">Add Sale</button>
    </form>
  );
};

export { AddNewSale };
