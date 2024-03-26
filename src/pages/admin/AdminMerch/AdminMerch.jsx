import axiosClient from "../../../utils/axiosClient";

export default function AdminMerch() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {              
            const body = {
                name: "ItemA",
                category: "TestItem",
                price: 12.00,
                stock: 10,
                description: "Test Item added through API"
            };

            const response = await axiosClient.post('/merch', body);
            const data = await response.data;
            console.log(response);
        
            if (data.status === 200) {
                alert('Sucessfully inserted');
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
            <button onClick={handleSubmit}>Create Test Merch Item</button>
        </>
    );
}