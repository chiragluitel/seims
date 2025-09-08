import { useParams } from "react-router-dom";
import useGetOneProduct from "../../hooks/database/useGetOneProduct";
import type { Product } from "../../types";
import { useEffect, useRef, useState } from "react";
import { sample_product } from "../../constants";
import NonEditingModeScreen from "../../components/WMS/existingProducts/nonEditModeScreen";
import EditingModeScreen from "../../components/WMS/existingProducts/EditingModeScreen";
import SuccessPopUpModal from "../../components/PopUps/SuccessPopup";
import useUpdateOneProduct from "../../hooks/database/useUpdateOneProduct";

const UpdateExistingProductUpdateScreen = () =>{ 
    const {sku} = useParams<{sku: string}>()
    const {product} = useGetOneProduct(sku);
    const formRef = useRef<HTMLFormElement>(null)
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const {updateOneProduct, loading} = useUpdateOneProduct();
    const [isEditMode, setIsEditMode] = useState(false);
    const [toBeUpdatedProduct, setToBeUpdatedProduct] = useState<Product> (sample_product);
    useEffect(()=>{
      if(product){
        setToBeUpdatedProduct(product);
      }
    }, [product])
    console.log('TO BE UPDATED PRODUCT: ', toBeUpdatedProduct)
    const onInputChangeValue = (field: keyof Product, value: string | number) => {
        setToBeUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          [field]: value,
        }));
    };
    const onNestedInputChangeValue = <T extends "location" | "category">(
        field: T,
        nestedField: keyof Product[T],
        value: string
      ) => {
        setToBeUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          [field]: {
            ...prevProduct[field],
            [nestedField]: value,
          },
        }));
      };
    
    const handleProductRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await updateOneProduct(toBeUpdatedProduct)
        if (result?.ok){
          setShowSuccessPopup(true);
          setToBeUpdatedProduct({...sample_product});
          formRef.current?.reset();
        }
    }
    
    return (
        <>
        {(product && !isEditMode) && (<NonEditingModeScreen onEditClick={()=>setIsEditMode(true)} product={product}/>)}

        {(product && isEditMode) && (
            <EditingModeScreen 
            formRef={formRef}
            onInputChange={onInputChangeValue} 
            onNestedInputChange={onNestedInputChangeValue}
            onSubmit={handleProductRegistration}
            product={product} 
            toBeUpdatedProduct={toBeUpdatedProduct}
            loading={loading} 
            />
        )}
        {showSuccessPopup && <SuccessPopUpModal label="Updated one existing item" isOpen={showSuccessPopup} onClose={()=>setShowSuccessPopup(false)} title="Success" /> }
        </>
    )
};
export default UpdateExistingProductUpdateScreen;