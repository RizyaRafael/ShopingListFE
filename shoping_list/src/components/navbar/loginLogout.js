'use client'
import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
export default function LoginLogout() {
    const { isLoggedIn, logout } = useContext(AuthContext)
    if (isLoggedIn === null) {
        return <div>Loading...</div>
    }
    return (
        <>
            {isLoggedIn ? (
                <div onClick={logout}>Logout</div>
            ) : (
                <>
                    <a className="btn" href="/login">Login</a>
                    <a className="btn" href="/register">Register</a>
                </>
            )}
        </>
    )
}