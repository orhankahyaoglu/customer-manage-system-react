import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

 
  return (
    <div className="App">
      <div className="main-container">
        <h1>Customer Manage System</h1>
        <CustomerForm addNewCustomer={addNewCustomer} />
        {/* BURAYA handleDelete prop'unu ekledik */}
        <CustomerList customers={customers} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;