import React from "react";

export const LayoutHeader = () => {
    return (
        <div className="bg-white p-8 text-2xl flex justify-between">
            <div>RW</div>
            <button className=" bg-cyan-500 px-4 py-2 rounded-xl">Sign In</button>
        </div>
    )
}

export default LayoutHeader;
