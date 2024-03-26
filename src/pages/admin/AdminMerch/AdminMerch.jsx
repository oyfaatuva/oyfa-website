import axios from "axios";

export default function AdminMerch() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {
                name: 'ItemA',
                category: 'TestItem',
                price: 12.00,
                stock: 10,
                description: 'Test Item added through API'
            };

            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            };

            const response = await axiosClient.post('/merch', body, { headers });
            const data = await response.data;
        
            if (data.status === 200) {
                alert('Sucessfully inserted');
            }
            else {
                alert('Could not insert');
            }        
        } catch (error) {
            console.error('An error occurred:', error);
        }

    };

    return (
        <>
            <button onClick={handleSubmit}>Create Test Merch Item</button>
        </>
    );
}