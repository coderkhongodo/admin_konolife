import React from "react";
import CustomInput from "../components/CustomInput";
const Resetpas = () => {
    return (
        <div className="py-5" style={{ background: "#f0faff", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center">Forgot Password</h3>
                <p className="text-center">
                    Please enter your registered email to get a reset password mail.
                </p>
                <form action="">
                    <CustomInput type="password" label="New Password" id="pass" />
                    <CustomInput type="password" label="Confirm Password" id="confirmpass" />
                    <button
                        className="border-0 px-3 py-2 text-white fw-bold w-100"
                        style={{ background: "#2bbef9" }}
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Resetpas