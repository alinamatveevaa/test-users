import { useState, FormEvent, ChangeEvent } from "react";
import { IUser } from "../../../interfaces/interface";
import { UserForm } from "./UserForm";

interface IUserFormContainer {
    data: IUser;
    isDisabled: boolean;
}

export function UserFormContainer({data, isDisabled}: IUserFormContainer) {
    const [ value, setValue ] = useState({
        name: data.name,
        username: data.username,
        email: data.email,
        street: data.address.street,
        city: data.address.city,
        zipcode: data.address.zipcode,
        phone: data.phone,
        website: data.website,
        comment: '',
    })

    const [ isError, setIsError ] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const newValue = Object.values(value).slice(0, Object.values(value).length - 1);

        for (let key of newValue) {
            if (key === '') {
                setIsError(true);
                return;
            } 
        }

        console.log(JSON.stringify(value));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue({...value, [event.target.name]:(event.target.value).trim()});
    }

    return (
        <UserForm 
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={value}
            isError={isError}
            isDisabled={isDisabled} 
        />
    )
}