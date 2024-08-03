import React from "react";
// ants design
import { Layout, Menu, Button } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Item from "antd/es/list/Item";

const { Header } = Layout;

function Navbar() {
  return (
    <Layout className="layout container">
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <div className="my-logo">
            On
            <span>
              <img
                src="/public/vecteezy_man-carrying-shopping-bags_24524036.png"
                alt=""
                className=""
                width="50px"
                />
            </span>
            Store
          </div>
        </div>
        <div className="navbar-right">
          <Menu
            className=".ant-menu "
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ marginLeft: "20px", background: "#fff" }}
          >
            <Menu.Item key="1" className="navbar-list">
              Home
            </Menu.Item>
            <Menu.Item key="2" className="navbar-list">
              About
            </Menu.Item>
            <Menu.Item key="3" className="navbar-list">
              Contact
            </Menu.Item>
          </Menu>
          <div
            className="icons"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Button
              type="link"
              style={{ color: "#000" }}
              icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
            />
            <Button
              className=""
              style={{ marginLeft: "10px", background: "#000" }}
              type="primary"
            >
              Sign Up
            </Button>
            <Button type="default" className="" style={{ marginLeft: "10px" }}>
              Sign In
            </Button>
          </div>
        </div>
      </Header>
    </Layout>
  );
}

export default Navbar;
