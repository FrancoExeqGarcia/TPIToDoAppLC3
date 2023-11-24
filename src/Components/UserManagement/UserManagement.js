import React, { useState, useEffect } from "react";
import useTranslation from "../../custom/useTranslation/useTranslation";

const UserManagement = () => {
  const translate = useTranslation();

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("https://task-minder.onrender.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(translate("error_obtain_user"));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://task-minder.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setUsers([...users, data]);
      setFormData({
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.error(translate("error_add_user"));
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://task-minder.onrender.com/users/${editingUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      const updatedUsers = users.map((user) =>
        user.id === data.id ? data : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
      setFormData({
        email: "",
        password: "",
        role: "",
      });
      setIsEditing(false); 
    } catch (error) {
      console.error(translate("error_edit_user"));
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`https://task-minder.onrender.com/users/${id}`, {
        method: "DELETE",
      });
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error(translate("error_delete_user"));
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      password: "",
      role: user.role,
    });
    setIsEditing(true); 
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setFormData({
      email: "",
      password: "",
      role: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container mt-4">
      <h2>{translate("administer_users")}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}{" "}
            <button
              className="btn btn-sm btn-primary me-2"
              onClick={() => handleEditClick(user)}
            >
              {translate("edit")}
            </button>{" "}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDeleteUser(user.id)}
            >
              {translate("delete")}
            </button>
          </li>
        ))}
      </ul>
      <h3>{isEditing ? translate("edit_admin") : translate("create_admin")}</h3>
      <form onSubmit={isEditing ? handleEditUser : handleAddUser}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {translate("email")}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {translate("password")}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            {translate("user_role")}
          </label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="">{translate("select_role")}</option>
            <option value="user">{translate("user")}</option>
            <option value="sysadmin">{translate("sysadmin")}</option>
            <option value="admin">{translate("admin")}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? translate("save") : translate("register")}
        </button>
        {isEditing && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={handleCancelEdit}
          >
            {translate("cancel")}
          </button>
        )}
      </form>
    </div>
  );
};

export default UserManagement;
