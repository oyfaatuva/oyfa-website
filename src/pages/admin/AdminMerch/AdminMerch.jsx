import { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import axiosClient from "../../../utils/axiosClient";
import MerchGallery from "../../merch/Components/MerchGallery";

const IMAGE_DIR = 'images/merch/'

export default function AdminMerch() {
    const loaderData = useLoaderData();

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

    const handleNumberInput = (e) => {
        if (!e.target.validity.valid) {
            e.target.value = e.target.value;
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
            console.log(response);
        
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
        <>
            <Suspense
                fallback={<p>Loading merchandise...</p>}
            >
                <Await
                    resolve={loaderData.merch}
                    errorElement={
                        <p>Error loading merchanise</p>
                    }
                >
                    {(merch) => (
                        <>
                            <MerchGallery merch={merch} imageDir={IMAGE_DIR}/>
                            {merch.map((merchItem, index) => (
                                merchItem.name + ' '+ merchItem.stock
                            ))}
                        </>
                    )}
                </Await>
            </Suspense>

            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form_input" maxLength="50" required/>
                <input type="text" id="category" name="category "value={formData.category} onChange={handleChange} placeholder="Category" className="form_input" maxLength="50" required/>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form_input" min="0" max="999" required/>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="form_input" min="0" max="999" onInput={handleNumberInput} required/>
                <textarea  type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Descrition" className="form_input" maxLength="600" required/>
                <button type="submit" className="button">CREATE</button>
            </form>
        </>
    );
}