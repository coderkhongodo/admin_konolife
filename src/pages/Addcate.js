import React from "react";
import CustomInput from "../components/CustomInput";

const Addcate = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add category</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter category" />
                    <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
                        Add category
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Addcate;