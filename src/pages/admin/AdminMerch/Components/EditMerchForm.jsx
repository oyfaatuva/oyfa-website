import { useOutletContext } from "react-router-dom";

export default function EditMerchForm() {
    const [item] = useOutletContext();

    return (
        <>
            {item.name}
        </>
    );  
}