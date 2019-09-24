import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/login">
        <Button className={styles.button} type="primary">
          Login
        </Button>
      </Link>
    </div>
  );
}
