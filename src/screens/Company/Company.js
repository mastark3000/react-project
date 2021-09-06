import React from "react";

import CompanyInner from "./Company/Company";
import Employee from "./Employee/Employee";

export default function Company() {
  return (
    <div className="center">
      {/* called component from other company component */}
      <CompanyInner />
      {/* called component from other employee component */}
      <Employee />
    </div>
  );
}
