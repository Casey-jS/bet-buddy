import React from "react";
import { useState, useEffect } from "react";
import NbaAPI from "./nbaAPI";


export default function AfterSignIn(username, password){

    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(true);

    let api = new NbaAPI();
    const validate_user = async () => {
        setLoading(true);
        api.validate_user
    }
}