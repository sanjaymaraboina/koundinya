import React, { useState } from "react";

import "./modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
        id: "",
      user: "",
      email: "",
      status: "Active",
      transaction:"",
      phone:"",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.id && formState.user && formState.email && formState.status && formState.transaction && formState.phone) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="id">Id</label>
            <input name="id" onChange={handleChange} value={formState.id} />
          </div>
          <div className="form-group">
            <label htmlFor="user">User</label>
            <textarea
              name="user"
              onChange={handleChange}
              value={formState.user}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <textarea
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <textarea
              name="phone"
              onChange={handleChange}
              value={formState.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="transaction">Transaction</label>
            <textarea
              name="transaction"
              onChange={handleChange}
              value={formState.transaction}
            />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};