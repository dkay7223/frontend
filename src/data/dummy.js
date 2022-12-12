import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { BsPersonPlus, BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlinePersonRemove } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io';
import avatar3 from './avatar3.png';

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '140',
    textAlign: 'Center',
  },

  {
    field: 'Department',
    headerText: 'Department',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: '_v',
    headerText: '',
    width: '1',
    textAlign: 'Center'
  },
  {
    field: '_id',
    headerText: 'Employee ID',
    width: '160',
    textAlign: 'Center'
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Employees',
    links: [
      {
        name: 'Employees',
        icon: <IoMdContacts />,
      },
    ],
  },
  {
    title: 'Employee Management',
    links: [
      {
        name: 'AddEmployee',
        icon: <BsPersonPlus />
      },
      {
        name: 'RemoveEmployee',
        icon: <MdOutlinePersonRemove />
      },
      {
        name: 'UpdateEmployee',
        icon: <BsFillPersonLinesFill />
      }
    ]
  }
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    Department: 'Sales',
    EmployeeImage:
      avatar3,
  }
];
