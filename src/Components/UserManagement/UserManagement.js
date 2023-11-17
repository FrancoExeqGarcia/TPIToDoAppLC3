import React, { useState, useEffect } from "react";
import useTranslation from "../../custom/useTranslation/useTranslation";

const UserManagement = () => {
  const translate = useTranslation();

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      //https://task-minder.onrender.com/users  link de usuarios
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Error al agregar usuario:", error);
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
      console.error("Error al editar usuario:", error);
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
      console.error("Error al borrar usuario:", error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h2>{translate("administer_users")}</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}{" "}
            <button onClick={() => handleEditClick(user)}>
              {translate("edit")}
            </button>{" "}
            <button onClick={() => handleDeleteUser(user.id)}>
              {translate("delete")}
            </button>
          </li>
        ))}
      </ul>
      <h3>{translate("create_admin")}</h3>
      <form onSubmit={handleAddUser}>
        <div>
          <label htmlFor="username">{translate("username")}</label>
          <input
            type="text"
            id="username"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">{translate("email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">{translate("password")}</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">{translate("register")}</button>
      </form>
      {editingUser && (
        <div>
          <h3>{translate("edit")}</h3>
          <form onSubmit={() => handleEditUser(editingUser)}>
            <div>
              <label htmlFor="edit-username">{translate("username")}</label>
              <input
                type="text"
                id="edit-username"
                name="username"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-email">{translate("email")}</label>
              <input
                type="email"
                id="edit-email"
                name="email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
              />
            </div>
            <button type="submit">{translate("save_changes")}</button>
            <button type="button" onClick={handleCancelEdit}>
              {translate("cancel")}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
