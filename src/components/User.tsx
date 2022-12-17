import {IUser} from "../models";
import {useState} from "react";

interface UserProps {
    user: IUser
}

export function User({ user }: UserProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <p>{ user.name }</p>
            <p className="font-bold">{ user.username }</p>
            <button
                className={ btnClasses.join(' ') }
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide details' : 'Show details'}
            </button>

            {details && <div>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
                <p>Streeet: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>Company: {user.company.name}</p>
            </div>}
            <p>Site: <span style={{ fontWeight: 'bold'}}>{ user.website }</span></p>


        </div>
    )
}