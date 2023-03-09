import React from "react";
import Reset from "./resetPassword";
import Reg from "./registration";
import Login from "./Login";

export default function Register() {
    return (
        <div>
            {Reg()}
            {Login()}
            {Reset()}
        </div>
    )
}