import React, { ChangeEvent, FC, useState } from "react";
import { Button } from "react-bootstrap";
import { signOff } from "../../../data-management/cloud/firebase/auth";
import { removeUserFromLocalstorage } from "../../../utils/utilFunctions";
import toast from "react-hot-toast";
import history, { LOGIN_PATH } from "../../common/constants";
import { useStylesFromThemeFunction } from "./ProfileSettings.style";

const ProfileSettings: FC = (props) => {
  const classes = useStylesFromThemeFunction();
  const [profile, setProfile] = useState({
    displayName: "string",
    email: "string",
    phoneNumber: "string",
    role: "string",
    photoURL: "",
  });
  const onSignoutHandler = (events) => {
    events.preventDefault();

    signOff()
      ?.then((res) => {
        removeUserFromLocalstorage();
        toast.success("Sign out successful");
        history.push(LOGIN_PATH);
      })
      .catch((error) => {
        toast.error("Unable to signout ", error);
      });
  };
  function handleFileUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({ ...profile, photoURL: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleUpdateProfile(event: any): void {}

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "10px",
        }}
      >
        <h2>My Profile</h2>
        <Button onClick={onSignoutHandler} variant="danger">
          Sign Out
        </Button>
      </div>
      <p
        style={{
          paddingLeft: "10px",
        }}
      >
        View and update your profile information.
      </p>
      <div className={classes.formWrapper}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {profile?.photoURL && (
            <div>
              <img
                style={{ width: 200, height: 200 }}
                src={profile.photoURL}
                alt={profile.displayName}
              />
            </div>
          )}
          <div>
            <label htmlFor="picture">Upload Picture</label>
            <input id="picture" type="file" onChange={handleFileUpload} />
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="displayName">Name</label>
          <input
            id="displayName"
            value={profile.displayName}
            onChange={(e) =>
              setProfile({ ...profile, displayName: e.target.value })
            }
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            value={profile.phoneNumber}
            onChange={(e) =>
              setProfile({ ...profile, phoneNumber: e.target.value })
            }
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="role">Role</label>
          <input
            id="role"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            readOnly
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Button onClick={handleUpdateProfile}>Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
