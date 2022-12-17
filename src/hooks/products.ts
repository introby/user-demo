import {useEffect, useState} from "react";
import {IUser} from "../models";
import axios, {AxiosError} from "axios";

export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchUsers() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }

    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return { users, error, loading }
}