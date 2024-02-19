const SaleCard = ({ sale }) => {
  const { _id, description, quantity, price, item } = sale;

  return (
    <tr key={_id}>
      <td>{item}</td>
      <td>x{quantity}</td>
      <td>{price}/-</td>
      <td>{quantity * price}/-</td>
    </tr>
  );
};

export { SaleCard };
