import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <div class="jumbotron bg-light">
        <p class="lead pb-5 pt-5 text-center">
          <Button variant="contained" className="me-2" color="primary">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/tables"
            >
              My Table
            </Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/graphs"
            >
              Graph
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Home;
