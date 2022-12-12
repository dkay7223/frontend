import React, { useState } from "react";
import Axios from "axios";
import Employees from "./Employees";

const UpdateEmployee = () => {
  //console.log("Function called");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [title, setDesignation] = useState("");
  const [dept, setDepartment] = useState("");
  const [empImg, setImagelink] = useState("");
  const [employee, setEmployee] = useState({});
  const [disabledFields, setDisabledFields] = useState(true);

  const getEmployee = () => {
    if (id == "") {
      alert("Enter an ID");
    } else {
      Axios.get(`http://20.123.9.150:5000/employees/${id}`).then((response) => {
        if (response.data == null) {
          alert("Enter valid ID");
          setDisabledFields(true);
        } else {
          setEmployee(response.data);
          setName(employee.Name);
          setDesignation(employee.Title);
          setDepartment(employee.Department);
          setImagelink(employee.EmployeeImage);
          setDisabledFields(false);
        }
      });
    }
  };

  const updateEmp = () => {
    if (name === "" && title === "" && dept === "" && empImg === "") {
      alert("Nothing changed!!!");
    } else {
      Axios.patch(`http://20.123.9.150:5000/employees/update/${id}`, {
        Name: name,
        Title: title,
        Department: dept,
        EmployeeImage: empImg,
      }).then((response) => {
        alert(response.data);
        //console.log(response.data);
      });
    }
  };
  return (
    <div>
      <div class="bg-grey-lighter flex flex-col mt-10">
        <div classname="m-2 md:m-10 mt-24 p-2 md:p-10">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">update Employee</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-2"
              Name="Employee ID"
              placeholder="Employee Id"
              onChange={(event) => {
                //console.log(event.target.value);
                setId(event.target.value);
              }}
            />

            <button
              class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
              onClick={getEmployee}
            >
              <div class="absolute inset-0 w-3 bg-gray-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">
                Get Details by ID
              </span>
            </button>

            {disabledFields ? (
              <>
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4 mt-4"
                  Name="Employee Name"
                  placeholder="Employee Name"
                  disabled
                  value=""
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setName(event.target.value);
                  }}
                />
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="Designation"
                  placeholder="Designation"
                  disabled
                  value=""
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setDesignation(event.target.value);
                  }}
                />
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="Department"
                  placeholder="Department"
                  disabled
                  value=""
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setDepartment(event.target.value);
                  }}
                />
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="image link"
                  placeholder="Image link"
                  disabled
                  value=""
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setImagelink(event.target.value);
                  }}
                />
                <button
                  class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow cursor-not-allowed disabled"
                  disabled
                  cursor-not-allowed
                >
                  <div class="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-black group-hover:text-white">
                    Update Employee
                  </span>
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4 mt-4"
                  Name="Employee Name"
                  placeholder={`Current Name: ${employee.Name}`}
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setName(event.target.value);
                  }}
                />

                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="Designation"
                  placeholder={`Current Designation:${employee.Title}`}
                  onChange={(event) => {
                    // //console.log(event.target.value);
                    setDesignation(event.target.value);
                  }}
                />

                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="Department"
                  placeholder={`Current Department: ${employee.Department}`}
                  onChange={(event) => {
                    //console.log(event.target.value);
                    setDepartment(event.target.value);
                  }}
                />
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  Name="image link"
                  placeholder={`IMG: ${employee.EmployeeImage}`}
                  onChange={(event) => {
                    //console.log(event.target.value);
                    setImagelink(event.target.value);
                  }}
                />
                <button
                  class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                  onClick={updateEmp}
                >
                  <div class="absolute inset-0 w-3 bg-cyan-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-black group-hover:text-white">
                    Update Employee
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Employees />
    </div>
  );
};

export default UpdateEmployee;
