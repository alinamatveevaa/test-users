import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IState } from "../../interfaces/interface";
import { UserDetail } from "./UserDetail";

export function UserDetailContainer() {
    const id = useParams().id;
	const users = useSelector((state: IState) => state.users);

	const user = users.find((item) => {
		return item.id.toString() === id;
	})

	const [ isDisabled, setIsDisabled ] = useState(true);

    const handleClick = () => {
        setIsDisabled(false);
    }

    return (
		<>
			{user && <UserDetail user={user} handleClick={handleClick} isDisabled={isDisabled} /> }
		</>
    )
}
