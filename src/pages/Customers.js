import React, { useEffect, useState } from "react";
import { Table } from "antd";

const columns = [
    {
        title: "S.No",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `J97`,
        address: `Bến tre`,
    });
}

const Customers = () => {
    return (
        <div>
            <h3 className="mb-4 title">Customers</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
};

export default Customers;