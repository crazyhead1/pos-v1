import React, { FC, useState } from "react";
import {
  CURRENCIES,
  TIMEZONES,
  UNITS_BY_REGION,
  useStylesFromThemeFunction,
} from "./InventorySettings.style";
import { Button } from "react-bootstrap";

// Define the component using TypeScript and React Functional Component (FC) type
const InventorySettings: FC = (props) => {
  const classes = useStylesFromThemeFunction(); // Style hook, consider using with theme provider

  // Initial state for profile settings
  const [profile, setProfile] = useState({
    currency: "USD", // Default currency
    timezone: "UTC", // Default timezone
    units: "metric", // Default measurement units
  });

  // Placeholder function for refreshing settings
  function onRefreshHandler(event: any): void {
    // Implement the function, e.g., re-fetch user settings from server
    throw new Error("Function not implemented.");
  }

  // Placeholder function for updating settings
  function handleUpdateSettings(event: any): void {
    // Implement with API call to update profile settings on server
    throw new Error("Function not implemented.");
  }

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
        <h2>Inventory Settings</h2>
        <Button onClick={onRefreshHandler}>Refresh</Button>{" "}
        {/* Refresh button */}
      </div>

      <p
        style={{
          paddingLeft: "10px",
        }}
      >
        View and update your inventory standards.
      </p>

      <div className={classes.formWrapper}>
        {/* Currency Selection Field */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="currency">Currency</label>
          <select
            id="currency"
            value={profile.currency}
            onChange={(e) =>
              setProfile({ ...profile, currency: e.target.value })
            }
          >
            {CURRENCIES.map(({ code, name }) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        {/* Timezone Selection Field */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="timezone">Timezone</label>
          <select
            id="timezone"
            value={profile.timezone}
            onChange={(e) =>
              setProfile({ ...profile, timezone: e.target.value })
            }
          >
            {TIMEZONES.map(({ code, name }) => (
              <option key={code} value={code}>
                {code} - {name}
              </option>
            ))}
          </select>
        </div>

        {/* Units Selection Field */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <label htmlFor="units">Units</label>
          <select
            id="units"
            value={profile.units}
            onChange={(e) => setProfile({ ...profile, units: e.target.value })}
          >
            {UNITS_BY_REGION.map(({ region, units }) => (
              <optgroup label={region} key={region}>
                {units.map(({ code, name }) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Update Profile Button */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Button onClick={handleUpdateSettings}>Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default InventorySettings;
