import React from "react";
import Reset from "./resetPassword";
import Reg from "./registration";
import Login from "./Login";


export default function Register() {
    return (
        <div>
            <div className="container-fluid ms-5">
                <div className="row justify-content-center">
                <div
                className="col-lg-6 col-md-6 col-sm-12"
                >
                    {Reg()}
                </div>
                <div
                className="col-lg-6 col-md-6 col-sm-12"
                >
                    {Login()}
                    {Reset()}
                </div>
                </div>
            </div>
        </div>
    )
}