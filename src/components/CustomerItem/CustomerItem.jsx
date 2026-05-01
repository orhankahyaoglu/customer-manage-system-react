import './CustomerItem.css';
// Parametre kısmına handleDelete ekle
const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img src={customer.avatar} alt="" className="customer-avatar" />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      {/* Butona onClick olayını ekle */}
      <button 
        className="delete-button" 
        onClick={() => handleDelete(customer.id)}
      >
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;