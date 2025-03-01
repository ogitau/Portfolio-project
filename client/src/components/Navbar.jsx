import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6 bg-green-600 p-4 rounded-md shadow-md">
        <NavLink to="/records" className="text-white text-lg font-bold">
          <h1>GreenBelt EHRS</h1>
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink
            className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-green-500 hover:bg-green-700 h-9 rounded-md px-3"
            to="/create"
          >
            Create Patient
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
