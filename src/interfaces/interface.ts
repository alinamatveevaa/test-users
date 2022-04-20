export interface IState {
    users: IUser[],
    isLoading: boolean,
    error: boolean,
    disabled: boolean,
    err: null,
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string,
    },
    phone: string,
    website: string,
    company: {
        name: string,
    }
}