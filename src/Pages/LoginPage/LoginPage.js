import React from "react";
import { Row, Col } from "antd";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function LoginPage() {
  return (
    <div>
      <Row>
        <Col span={16}>
          <div className={styles.loginForm}>
            <h1 style={{ textAlign: "left" }}>Sportzz</h1>
            <div>
              <h1>Sign In To sportzz</h1>
            </div>
            <Link to="/signup">
              <Button className={styles.button} type="primary">
                Signup
              </Button>
            </Link>
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
