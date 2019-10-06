import React from "react";
import { Layout } from "antd";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sider from "./Sider/Sider";

const { Content } = Layout;

export default class SiderDemo extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout>
          <Header />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: "100vh",
                margin: "24px 24px 24px 15vw"
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
