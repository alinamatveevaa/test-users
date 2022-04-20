import { IUser } from "../interfaces/interface";

export const sortStrings = (field: string) => {
    return (a: IUser, b: IUser) => {
        if (field === 'company') {
           return a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : a.company.name.toLowerCase() < b.company.name.toLowerCase() ? -1 : 0;
        }
        if (field === 'address.city') {
            return a.address.city.toLowerCase() > b.address.city.toLowerCase() ? 1 : a.address.city.toLowerCase() < b.address.city.toLowerCase() ? -1 : 0;
        }
    };
}