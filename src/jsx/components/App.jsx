import { useDispatch, useSelector } from 'react-redux';
import { addCash, deleteCash } from '../redux/cash/actions';
import { addCustomer, deleteCustomer } from '../redux/customers/actions';

const App = () => {
  const dispatch = useDispatch();

  const cash = useSelector(state => state.cash);
  const customers = useSelector(state => state.customers);

  const handleAddCash = () => {
    const addAmount = Number(prompt('Enter cash amount to add:'));
    dispatch(addCash(addAmount));
  };

  const handleDeleteCash = () => {
    const deleteAmount = Number(prompt('Enter cash amount to delete:'));
    dispatch(deleteCash(deleteAmount));
  };

  const handleAddCustomer = () => {
    const customer = {
      name: prompt('Enter customer name:'),
      id: Date(),
    };
    dispatch(addCustomer(customer));
  };
  const handleRemoveCustomer = id => {
    dispatch(deleteCustomer(id));
  };
  const handleGetCustomers = () => {};
  return (
    <div>
      <h1>{cash}</h1>
      <button onClick={handleAddCash}>Add Cash</button>
      <button onClick={handleDeleteCash}>Delete Cash</button>
      <button onClick={handleAddCustomer}>Add Customer</button>
      <button onClick={handleGetCustomers}>Delete Customer</button>

      {customers.length ? (
        <div>
          {customers.map(customer => (
            <div
              onClick={() => handleRemoveCustomer(customer.id)}
              key={customer.id}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>No elements!</div>
      )}
    </div>
  );
};

export default App;
