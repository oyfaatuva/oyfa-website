import axios from "axios";

export default function AdminMerch() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://oyfaatuva.com/api/index.php', {
                name: "addMerch",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                param: {
                    name: "example",
                    category: "example",
                    price: "10",
                    stock: "2",
                }
            });
            const data = await response.data;
        
            if (data.status === 200) {
                
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
            <button onClick={handleSubmit}>Button</button>
        </>
    );
}