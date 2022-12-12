import Axios from "axios";
import React, { useState } from "react";
import Employees from "./Employees";
const RemoveEmployee = () => {
  const [id, setId] = useState("");
  const deleteEmp = () => {
    if (id == "") {
      alert("Enter an ID!");
    } else {
      try {
        Axios.delete(`http://20.123.9.150:5000/employees/remove/${id}`).then(
          (response) => {
            alert(response.data);
          }
        );
      } catch (error) { alert("Couldn't Delete!");}
    }
  };

  return (
    <div>
      <div class="bg-grey-lighter flex flex-col mt-10 w-auto">
        <div classname="m-2 md:m-10 mt-24 p-2 md:p-10 w-auto">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-auto">
            <h1 class="mb-8 text-3xl text-center">Remove Employee</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              Name="employee ID"
              placeholder="Employee ID"
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <button
              class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={deleteEmp}
            >
              <div class="absolute inset-0 w-3 bg-gray-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">
                Remove Employee
              </span>
            </button>
          </div>
        </div>
      </div>
      <Employees />
    </div>
  );
};

export default RemoveEmployee;
