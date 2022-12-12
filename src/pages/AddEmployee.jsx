import React, { useState } from "react";
import Axios from "axios";
import Employees from "./Employees";


const AddEmployee = () => {
  console.log("Function called");
  const [Name, setName] = useState("");
  const [Title, setDesignation] = useState("");
  const [Department, setDepartment] = useState("");
  const [EmployeeImage, setImagelink] = useState("");
 
  const createEmployee = () => {
    if (
      Name === "" ||
      Title === "" ||
      Department === "" ||
      EmployeeImage === ""
    ) {
      alert("Enter values!!!");
    } else {
      Axios.post("http://20.123.9.150:5000/employees/addemployee", {
        Name,
        Title,
        Department,
        EmployeeImage
      }).then((response) => {
        alert(response.data);
      });
    }
  };

  return (
    <div>
      <div class="bg-grey-lighter flex flex-col mt-10 w-auto">
        <div classname="m-2 md:m-10 mt-24 p-2 md:p-10 w-auto">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-auto">
            <h1 class="mb-8 text-3xl text-center">Add Employee</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              Name="Employee Name"
              placeholder="Employee Name"
              onChange={(event) => {
                console.log(event.target.value);
                setName(event.target.value);
              }}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              Name="Designation"
              placeholder="Designation"
              onChange={(event) => {
                console.log(event.target.value);
                setDesignation(event.target.value);
              }}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              Name="Department"
              placeholder="Department"
              onChange={(event) => {
                console.log(event.target.value);
                setDepartment(event.target.value);
              }}
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              Name="image link"
              placeholder="Image link"
              onChange={(event) => {
                console.log(event.target.value);
                setImagelink(event.target.value);
              }}
            />
            <button
              class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={createEmployee}
            >
              <div class="absolute inset-0 w-3 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">
                Add Employee
              </span>
            </button>
          </div>
        </div>
      </div>
      <Employees />
    </div>
  );
};

export default AddEmployee;
