import { useState } from "react";
import ProductIdInput from "../../components/WMS/stockReceive/productIdInput";
import SearchResults from "../../components/WMS/stockReceive/searchResult";
import useGetOneProduct from "../../hooks/database/useGetOneProduct";
import { FiEdit, FiMinus, FiPlus } from "react-icons/fi";
import PopupModal from "../../components/PopUps/PopupModal";
import OpenPopUpButton from "../../components/buttons/openPopUpButton";

const StockReceive = () =>{
    const [productId, setProductId] = useState('')
    const [isFirstSearch, setIsFirstSearch] = useState(true)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isSubtractModalOpen, setIsSubtractModalOpen] = useState(false)
    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
       setProductId(formData.get('productId') as string);
       setIsFirstSearch(false);
    }  

    const onAddStockSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const quantity = formData.get('productQuantity');
        console.log('Reached Submission Processing with product quantity: ', quantity)
        setIsAddModalOpen(false)
    }
    const onSubtractSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        //Additional validation, and writing to DB required.
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const quantity = formData.get('productQuantity');
        console.log('Reached Submission Processing with product quantity: ', quantity)
        setIsSubtractModalOpen(false)
    }
    const handleAddOpenModal = () => {
        setIsAddModalOpen(true);
    };
    
    const handleAddCloseModal = () => {
        setIsAddModalOpen(false);
    }; 
    const handleSubOpenModal = () => {
        setIsSubtractModalOpen(true);
    };
    
      const handleSubCloseModal = () => {
        setIsSubtractModalOpen(false);
    }; 

    const {product} = useGetOneProduct(productId);
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold mb-6"> Receive Stock </h1>
                <ProductIdInput onSubmit={onSearchSubmit} />
                {isFirstSearch && (<h1 className="text-xl font-semibold text-black text-left mt-5">Enter Product ID or Scan Barcode</h1>)}
                
                {!isFirstSearch && (product ? (
                    <div className="w-full p-6 bg-white rounded-2xl shadow-lg mt-8 space-y-4 flex flex-col items-start">
                        <h1 className="text-xl font-semibold text-green-600 text-left">Successfully Retrieved Data!</h1>
                        <SearchResults productId={product.id} />
                        <div className="flex space-x-2 mt-4 w-full">
                            <OpenPopUpButton onClick={()=>handleAddOpenModal()} icon={<FiPlus />} label="Add Stock" />
                            <OpenPopUpButton onClick={()=>handleSubOpenModal()} icon={<FiMinus />} label="Subtract Stock" />
                            <OpenPopUpButton onClick={()=>handleSubOpenModal()} icon={<FiEdit />} label="Update Details" />
                        </div>
                        <PopupModal isOpen={isAddModalOpen} onClose={() => handleAddCloseModal()} onSubmit={onAddStockSubmit} label="Enter Amount" title="Add Stock" />
                        <PopupModal isOpen={isSubtractModalOpen} onClose={() => handleSubCloseModal()} onSubmit={onSubtractSubmit} label="Enter Amount" title="Remove Stock" />
                    </div>
                ) : (
                    <div className="text-center text-lg text-red-500 mt-12">
                        No Result Found, please try a different ID.
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default StockReceive ;