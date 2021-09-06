import React from "react";

export default function Employee({ data, setData }) {
  return (
    <div>
      {/* used data which is recieved by props data and also setdata function for update data */}
      <input value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
}
