import React from "react";
import { Column } from "@ant-design/plots";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
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
        title: "Product",
        dataIndex: "product",
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
        product: 'Thuốc tránh thai',
        address: `Bến tre`,
    });
}
const Dashboard = () => {
    const data = [
        {
            type: "Jan",
            sales: 38,
        },
        {
            type: "Feb",
            sales: 52,
        },
        {
            type: "Mar",
            sales: 61,
        },
        {
            type: "Apr",
            sales: 145,
        },
        {
            type: "May",
            sales: 48,
        },
        {
            type: "Jun",
            sales: 66,
        },
        {
            type: "July",
            sales: 38,
        },
        {
            type: "Aug",
            sales: 12,
        },
        {
            type: "Sept",
            sales: 97,
        },
        {
            type: "Oct",
            sales: 69,
        },
        {
            type: "Nov",
            sales: 50,
        },
        {
            type: "Dec",
            sales: 39,
        },
    ];
    const config = {
        data,
        xField: "type",
        yField: "sales",
        color: ({ type }) => {
            return "#ffd333";
        },
        label: {
            //position: "",
            style: {
                fill: "#FFFFFF",
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: "Month",
            },
            sales: {
                alias: "Income",
            },
        },
    };
    return (
        <div>
            <h3 className="mb-4 title">Dashboard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3  roudned-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1997</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red"><BsArrowDownRight />97%</h6>
                        <p className="mb-0 desc">Compared to April 1997</p>
                    </div>
                </div>
                <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3  roudned-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1997</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="green"><BsArrowUpRight />97%</h6>
                        <p className="mb-0 desc">Compared to April 1997</p>
                    </div>
                </div>
                <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3  roudned-3">
                    <div>
                        <p className="desc">Total</p> <h4 className="mb-0 sub-title">$1997</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="red"><BsArrowDownRight />97%</h6>
                        <p className="mb-0 desc">Compared to April 1997</p>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-3 justify-content-between">
                <div className="mt-4 flex-grow-1">
                    <h3 className="mb-5 title">Income Statics</h3>
                    <div>
                        <Column {...config} />
                    </div>
                </div>
                <div className="mt-4 flex-grow-1">
                    <h3 className="mb-5 title">Recent Orders</h3>
                    <div>
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dashboard;