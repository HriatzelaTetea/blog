import Usericon from "../Components/Widgets/Usericon";
import Button from "../Components/Widgets/Button";
import NavBar from "../Components/Widgets/NavBar";
import Postbox from "../Components/Widgets/Box";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import { useState } from "react";

export default function Home() {
    const [auth, setAuth] = useState("none");

    function handleSetAuth(state) {
        setAuth(state);
    }
    function renderSwitch(auth) {
        switch (auth) {
            case "none":
                break;
            case "login":
                return <Login setAuth={handleSetAuth} />;
            case "SignUp":
                return <SignUp setAuth={handleSetAuth} />;
        }
    }

    return (
        <>
            <NavBar>
                <Button name="Home" />
                <Button name="About" />
                <Button name="Contact" />
                <Button name="Post" />
                <Usericon setAuth={handleSetAuth} />

            </NavBar>
            <Postbox/>
            {renderSwitch(auth)}
        </>
    );
}
