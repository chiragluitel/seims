import { useState } from "react";
import NewUserRegistrationForm from "../../components/NewUserForm";
import type { User } from "../../types";

const NewUserRegistration = () =>{
    const [toBeUpdatedUser, setToBeUpdatedUser] = useState<User>({
        name: 'chirag',
        organisation: 'chirag',
        job_title: 'chirag',
        hashed_password: ''
    });
    
    
    const onInputChangeValue = (field: keyof User, value: string ) => {
        setToBeUpdatedUser((prevUser) => ({
          ...prevUser,
          [field]: value,
        }));
    };
    return (
        <>
            <NewUserRegistrationForm user={toBeUpdatedUser} onInputChange={onInputChangeValue}/>
        </>
    )
};

export default NewUserRegistration