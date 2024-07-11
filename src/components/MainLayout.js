import React, { useState } from 'react';
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { RiCouponLine } from "react-icons/ri";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineBgColors,
} from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'>Khoa</span>
                        <span className='lg-logo'>Handsome</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == "signout") {
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: "",
                            icon: <AiOutlineDashboard className="fs-4" />,
                            label: "Dashboard",
                        },
                        {
                            key: "customers",
                            icon: <AiOutlineUser className="fs-4" />,
                            label: "Customers",
                        },
                        {
                            key: "Catalog",
                            icon: <AiOutlineShoppingCart className="fs-4" />,
                            label: "Catalog",
                            children: [
                                {
                                    key: "product",
                                    icon: <AiOutlineShoppingCart className="fs-4" />,
                                    label: "Add Product",
                                },
                                {
                                    key: "list-product",
                                    icon: <AiOutlineShoppingCart className="fs-4" />,
                                    label: "Product List",
                                },
                                /*{
                                    key: "brand",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Brand",
                                },
                                {
                                    key: "list-brand",
                                    icon: <SiBrandfolder className="fs-4" />,
                                    label: "Brand List ",
                                },*/
                                {
                                    key: "category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Add Category",
                                },
                                {
                                    key: "list-category",
                                    icon: <BiCategoryAlt className="fs-4" />,
                                    label: "Category List",
                                },
                                /*{
                                    key: "color",
                                    icon: <AiOutlineBgColors className="fs-4" />,
                                    label: "Color",
                                },
                                {
                                    key: "list-color",
                                    icon: <AiOutlineBgColors className="fs-4" />,
                                    label: "Color List",
                                },*/
                            ],
                        },
                        {
                            key: "orders",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Orders",
                        },
                        {
                            key: "marketing",
                            icon: <RiCouponLine className="fs-4" />,
                            label: "Marketing",
                            children: [
                                {
                                    key: "coupon",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Add Coupon",
                                },
                                {
                                    key: "coupon-list",
                                    icon: <RiCouponLine className="fs-4" />,
                                    label: "Coupon List",
                                },
                            ],
                        },
                        {
                            key: "blogs",
                            icon: <FaBloggerB className="fs-4" />,
                            label: "Blogs",
                            children: [
                                {
                                    key: "blog",
                                    icon: <ImBlog className="fs-4" />,
                                    label: "Add Blog",
                                },
                                {
                                    key: "blog-list",
                                    icon: <FaBloggerB className="fs-4" />,
                                    label: "Blog List",
                                },
                            ],
                        },
                        {
                            key: "enquiries",
                            icon: <FaClipboardList className="fs-4" />,
                            label: "Enquiries",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between ps-3 pe-5'
                    style={{
                        padding: 0,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-4 align-items-center'>
                        <div><IoIosNotifications className='fs-4' />
                            <span className='badge bg-warning rounded-circle p-1 position-absolute'>
                                97
                            </span>
                        </div>
                        <div className='d-flex gap-3 align-items-center dropdown'>
                            <div>
                                <img className='jack' src='logo.jpg' alt='' />
                            </div>
                            <div role='button'
                                id='dropdownMenuLink'
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <h5 className='mb-0'>Jack97</h5>
                                <p className='mb-0'>trinhphuongtuantran97@gmail.com</p>
                            </div>
                            <div className='dropdown-menu'
                                aria-labelledby='dropdownMenuLink'>
                                <Link className='py-2'>
                                    <a className='dropdown-item py-1 mb-1' style={{ height: "auto", lineHeight: "20px" }} to='/'>Info</a>
                                </Link>
                                <Link className='py-2'>
                                    <a className='dropdown-item py-1 mb-1' style={{ height: "auto", lineHeight: "20px" }} to='/'>Logout</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
export default MainLayout;