import React from "react";
import { Row, Col } from "antd";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <Row>
        <Col span={16}>
          <div className={styles.loginForm}>
            <h1 style={{ textAlign: "left" }}>Logo</h1>
            <div>
              <h1>Sign In To sportzz</h1>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.loginMessage}>
            <h1>Message comes here</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
