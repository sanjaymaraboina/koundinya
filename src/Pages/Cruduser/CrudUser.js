import React from "react";
import "./crudUser.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export const CrudUser = ({ rows, deleteRow, editRow}) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Id</th>
            <th>User</th>
            <th className="expand">Email</th>
            <th>Status</th>
            <th>Transaction Value</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
        {rows.map((row, idx) => {
            

            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td className="user">{row.user}</td>
                <td className="expand">{row.email}</td>
                <td className="status">{row.status}</td>
                <td className="value">{row.transaction}</td>
                <td className="phone">{row.phone}</td>

                <td className="fit">
                  <span className="actions">
                    <MdDelete
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <MdEdit
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


