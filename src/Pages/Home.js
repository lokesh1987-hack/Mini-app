import React, { useState } from "react";
import GraphPage from "./GraphPage";
import TablesPage from "./TablesPage";
import { Button } from "@mui/material";

function Home() {
  const [state, setState] = useState("table");
  return (
    <div>
      <div class="jumbotron bg-light">
        <p class="pb-5 pt-5 text-center">
          <Button
            variant="contained"
            className="me-2"
            onClick={() => setState("table")}
          >
            My Table
          </Button>
          <Button variant="contained" onClick={() => setState("Graph")}>
            Chart
          </Button>
        </p>
      </div>
      <div>{state === "table" ? <TablesPage /> : <GraphPage />}</div>
    </div>
  );
}

export default Home;
