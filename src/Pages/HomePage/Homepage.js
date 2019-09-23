import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}
