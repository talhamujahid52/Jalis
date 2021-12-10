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
            {/* <Tab
              style={{ color: "orange" }}
              value="two"
              label="Manage Section"
            /> */}
          </Tabs>
        </Box>
        {value === "one" && <ManageResort />}
        {/* {value === "two" && <ManageSection />} */}
      </TabNavigationComponentWrapper>
    </TabNavigationWrapper>
  );
};

export default TabNavigation;
