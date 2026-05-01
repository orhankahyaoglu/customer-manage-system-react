import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

/*const customerData = [
    {
        id: 1,
        customerName: "Emin Başyayan",
    },
    {
        id: 2,
        customerName: "Maya Bern",
    },
    {
        id: 3,
        customerName: "Bora Kalem",
    },
    {
        id: 4,
        customerName: "Cem Varak",
    },
];
*/

function CustomerList({ customers, handleDelete }) {
    return (
        <ul className="customer-list">
            {customers.map((customer) => (
                <CustomerItem 
                    key={customer.id} 
                    customer={customer} 
                    handleDelete={handleDelete} // Buradan ilet
                />
            ))}
        </ul>
    );
}

export default CustomerList;