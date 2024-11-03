import React, { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { useStylesFromThemeFunction } from "./UsersSettings.style";

// Define the component using TypeScript and React Functional Component (FC) type
const UserSettings: FC = () => {
  const classes = useStylesFromThemeFunction();

  // Initial state for user roles
  const [roles, setRoles] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
    // Add more default roles if needed
  ]);
  const [newRoleName, setNewRoleName] = useState("");

  // Handler to add a new role
  const handleAddRole = () => {
    if (newRoleName) {
      setRoles([...roles, { id: Date.now(), name: newRoleName }]); // Using timestamp as a unique ID
      setNewRoleName(""); // Reset the input field
    }
  };

  // Handler to delete a role
  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleEditRole = (id: number, name: string) => {
    const updatedRoleName = prompt("Enter new role name:", name);
    if (updatedRoleName) {
      setRoles(
        roles.map((role) =>
          role.id === id ? { ...role, name: updatedRoleName } : role
        )
      );
    }
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
        }}
      >
        <h2>User Settings</h2>
        <p>Manage user roles for your application.</p>
      </div>
      <div className={classes.formWrapper}>
        {/* Role Input Field */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "10px",
          }}
        >
          <label htmlFor="newRole">New Role</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              gap: "10px",
            }}
          >
            <input
              type="text"
              id="newRole"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
              placeholder="Enter role name"
            />
            <Button onClick={handleAddRole}>Add Role</Button>
          </div>
        </div>

        {/* Roles List */}
        <div style={{ width: "100%" }}>
          <h4>Existing Roles</h4>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {roles.map(({ id, name }) => (
              <li
                key={id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <span>{name}</span>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button onClick={() => handleEditRole(id, name)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteRole(id)}>
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
