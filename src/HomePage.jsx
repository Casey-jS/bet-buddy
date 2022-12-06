import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function HomePage(){

    const {user, setUser} = useContext(UserContext)
    return <React.Fragment>
                <h1>This is the home page!</h1>
                {user !== "" ? JSON.stringify(user) : <></> }
            </React.Fragment>

}