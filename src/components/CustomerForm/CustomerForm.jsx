import { useState } from "react";
import "./CustomerForm.css"

const CustomerForm = ({ addNewCustomer }) => {
    const [customerName, setCustomerName] = useState("");
    
    const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length === 0) return;

    const randomId = Math.floor(Math.random() * 1000); // Rastgele bir sayı
    const newCustomer = {
        id: randomId,
        customerName: customerName,
        // Her kullanıcıya özel, ID'ye bağlı bir resim linki oluşturuyoruz
        avatar: `https://i.pravatar.cc/150?u=${randomId}` 
    };

    addNewCustomer(newCustomer);
    setCustomerName("");
};
    
    return (
        <form className='customer-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="customer-input"
                placeholder='Add a new customer'
                value={customerName} // Inputun sıfırlanması için gerekli
                onChange={(e) => setCustomerName(e.target.value)}  
            />
            <button type="submit">
                <i className="bi bi-plus-lg"></i>
            </button>
        </form>
    );
};

export default CustomerForm;