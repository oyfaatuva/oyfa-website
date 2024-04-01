import { useState } from "react";
import axiosClient from "../../../../utils/axiosClient";

export default function CreateMerchForm() {

    //Single state variable for form data
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        stock: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleOnBlur = (e) => {
        const { id } = e.target;
        if (!e.target.validity.valid) {
            e.target.value = '';
            setFormData(prevState => ({
                ...prevState,
                [id]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {              
            const exampleFormData = {
                name: "ItemA",
                category: "TestItem",
                price: 12.00,
                stock: 10,
                description: "Test Item added through API"
            };

            const response = await axiosClient.post('/merch', formData);
            const data = await response.data;
        
            if (data.status === 200) {
                alert('Sucessfully inserted');
                window.location.reload();
            }
            else {
                alert('Could not insert');
            }        
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('No longer authenticated. Please login again')
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form_input" maxLength="50" required/>
            <input type="text" id="category" name="category "value={formData.category} onChange={handleChange} placeholder="Category" className="form_input" maxLength="50" required/>
            <input type="number" step="0.01" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form_input" min="0" max="999" onBlur={handleOnBlur} required/>
            <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="form_input" min="0" max="999" onBlur={handleOnBlur} required/>
            <textarea  type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Descrition" className="form_input" maxLength="600" required/>
            <button type="submit" className="button">CREATE</button>
        </form>
    );
}