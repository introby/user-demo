import React from "react";
import {useUsers} from "../hooks/products";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/Error";
import {User} from "../components/User";

export function UsersPage() {

    const {users, error, loading} = useUsers()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loader /> }
            { error && <ErrorMessage error={error}/> }
            { users
                .slice(0, 5)
                .map(user => <User user={user} key={user.id}/>) }
        </div>
    );
}