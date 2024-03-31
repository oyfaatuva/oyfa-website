import { useParams } from "react-router-dom";

export default function EditMerchTab() {
    const { itemId } = useParams();

    return (
        <>
            {itemId}
        </>
    );
}