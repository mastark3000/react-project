import React, { useState } from "react";
import Employee from "./Employee/Employee";

// company component for input data and used state for store data
export default function Company() {
  const [data, setData] = useState("");
  return (
    <div className="center">
      <h3>This Is Parent Component</h3>
      {/* input for parent component */}
      <input value={data} onChange={(e) => setData(e.target.value)} />

      <h3>This Is Child Component</h3>
      {/* called component EMPLOYEE and pass data and also pass setdata function for update data */}
      <Employee data={data} setData={setData} />
    </div>
  );
}
