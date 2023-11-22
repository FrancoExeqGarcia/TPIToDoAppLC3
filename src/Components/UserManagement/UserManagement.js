import React, { useState, useEffect } from "react";
import useTranslation from "../../custom/useTranslation/useTranslation";

const UserManagement = () => {
  const translate = useTranslation();

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState(""); // Nuevo estado para el rol seleccionado

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
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://task-minder.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser, role: selectedRole }), // Enviar el rol seleccionado junto con el usuario
      });
      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({ email: "", password: "" });
      setSelectedRole(""); // Resetear el rol seleccionado después de agregar el usuario
    } catch (error) {
      console.error(translate("error_add_user"));
    }
  };

  const handleEditUser = async (editedUser) => {
    try {
      await fetch(`/api/users/${editedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
      });
      const updatedUsers = users.map((user) =>
        user.id === editedUser.id ? editedUser : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
    } catch (error) {
      console.error(translate("error_edit_user"));
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`/api/users/${id}`, {
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
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="container mt-4">
      <h2>{translate("administer_users")}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}{" "}
            <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(user)}>
              {translate("edit")}
            </button>{" "}
            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUser(user.id)}>
              {translate("delete")}
            </button>
          </li>
        ))}
      </ul>
      <h3>{translate("create_admin")}</h3>
      <form onSubmit={handleAddUser}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">{translate("email")}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">{translate("password")}</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">{translate("user_role")}</label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="">{translate("select_role")}</option>
            <option value="user">{translate("user")}</option>
            <option value="sysadmin">{translate("sysadmin")}</option>
            <option value="admin">{translate("admin")}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{translate("register")}</button>
      </form>
        </div>
      )}

export default UserManagement;
