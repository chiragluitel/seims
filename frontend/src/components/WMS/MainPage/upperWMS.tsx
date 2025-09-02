import { FiClipboard, FiDollarSign, FiDownload, FiSend, FiUpload, FiUser } from "react-icons/fi";
import OptionCard from './optionCard';

const UpperWMS = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <OptionCard
                label="New Product Registration" 
                navigateTo="/newproduct" 
                icon={<FiClipboard />}
            />
            <OptionCard 
                label="Update Existing Product" 
                navigateTo="/updateproduct" 
                icon={<FiUpload />}
            />
            <OptionCard 
                label="Stock Receive" 
                navigateTo="/receivestock"  
                icon={<FiDownload />}
            />
            <OptionCard 
                label="Stock Dispatch" 
                navigateTo="/stockdispatch" 
                icon={<FiSend />}
            />
            <OptionCard 
                label="New User Registration" 
                navigateTo="/newuser"
                icon={<FiUser />}
            />
            <OptionCard 
                label="Sale Products" 
                navigateTo="/sale"
                icon={<FiDollarSign />}
            />
        </div>
    )
}

export default UpperWMS;
