import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import ManageResort from "../ManageResort/ManageResort";
import ManageSection from "../ManageSection/ManageSection";
import {
  TabNavigationWrapper,
  TabNavigationComponentWrapper,
} from "./TabNavigation.style";
const TabNavigation = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabNavigationWrapper>
      <TabNavigationComponentWrapper>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            // border: "1px solid red",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "orange",
              },
            }}
          >
            <Tab
              style={{ color: "orange" }}
              value="one"
              label="Manage Resort"
            />
            <Tab style={{ color: "orange" }} value="two" label="Chats" />
            <Tab
              style={{ color: "orange" }}
              value="three"
              label="Resort Bookings"
            />
            <Tab style={{ color: "orange" }} value="four" label="Reports" />
            <Tab style={{ color: "orange" }} value="five" label="Support" />
          </Tabs>
        </Box>
        {value === "one" && <ManageResort />}
        {value === "two" && <h1>This is Block Dates </h1>}
        {value === "three" && <h1>This is Resort Bookings </h1>}
        {value === "four" && <h1>This is Reports </h1>}
        {value === "five" && <h1>This is Support </h1>}
      </TabNavigationComponentWrapper>
    </TabNavigationWrapper>
  );
};

export default TabNavigation;