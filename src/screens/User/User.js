import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function User() {
  const [empData, setEmpData] = useState([]);

  // useeffect for call api on component load
  useEffect(() => {
    // fetch data from api
    async function getData() {
      const data = await Axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      );

      console.log(data.data);

      setEmpData(data.data.data);
    }

    getData();
  }, []);

  // http://dummy.restapiexample.com/api/v1/employees
  return (
    <div className="center">
      <h1 style={{ textAlign: 'center'}}>Employee Data</h1>
      <table width="100%">
        <tbody>
          <tr className="bold">
            <td>ID</td>
            <td>NAME</td>
            <td>SALARY</td>
            <td>AGE</td>
          </tr>

          {empData.length > 0 ? (
            // use map function for render all data from api
            empData.map((list, i) => {
              return (
                <tr key={i}>
                  <td>{list.id}</td>
                  <td>{list.employee_name}</td>

                  <td>{list.employee_salary}</td>
                  <td>{list.employee_age}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                {/* loading untill data is not received */}
                <h4>Loading...</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
