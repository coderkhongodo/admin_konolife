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
        title: "Comment",
        dataIndex: "comment",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `J97`,
        comment: 'Hàng không tốt',
        status: `Incomplete`,
    });
}

const Categorylist = () => {
    return (
        <div>
            <h3 className="mb-4 title">Category list</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
};

export default Categorylist;