import React from "react";
import { Row, Col } from "antd";
import styles from "./SignupPage.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function SignupPage() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className={styles.signupMessage}>
            <h1>Message comes here</h1>
          </div>
        </Col>
        <Col span={16}>
          <div className={styles.signupForm}>
            <h1 style={{ textAlign: "left" }}>sportzz</h1>
            <div>
              <h1>Sign In To sportzz</h1>
            </div>
            <Link to="/login">
              <Button className={styles.button} type="primary">
                Login
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
