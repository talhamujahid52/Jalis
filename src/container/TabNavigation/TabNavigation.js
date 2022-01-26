import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ManageResort from "../ManageResort/ManageResort";
import ManageSection from "../ManageSection/ManageSection";
import MessagesScreen from "../../container/Messages/Messages";
import ManageServices from "../ManageServices/ManageServices";
import {
  TabNavigationWrapper,
  TabNavigationComponentWrapper,
} from "./TabNavigation.style";
import { useHistory } from "react-router-dom";
import { Messages } from "settings/constant";
const TabNavigation = () => {
  const [value, setValue] = React.useState("one");
  const [switchSections, setSwitchSections] = React.useState(true);
  const history = useHistory();
  const changeSections = () => {
    setSwitchSections(!switchSections);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   setSwitchSections(true);
  // }, []);

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
              onClick={() => {
                setSwitchSections(true);
              }}
            />
            {/* <Tab
              style={{ color: "orange" }}
              value="six"
              label="Manage Services"
              onClick={() => {
                setSwitchSections(true);
              }}
            /> */}
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
        {value === "one" &&
          (switchSections ? (
            <ManageResort changeSections={changeSections} />
          ) : (
            <ManageSection changeSections={changeSections} />
          ))}
        {/* {value === "two" && <h1>This is Block Dates </h1>} */}
        {value === "two" && <MessagesScreen />}

        {value === "three" && <h1>This is Resort Bookings </h1>}
        {value === "four" && <h1>This is Reports </h1>}
        {value === "five" && <h1>This is Support </h1>}
        {/* {value === "six" &&
          (switchSections ? (
            <ManageServices changeSections={changeSections} />
          ) : (
            <ManageSection changeSections={changeSections} />
          ))} */}
        {/* {value === "six" && <ManageServices />} */}
      </TabNavigationComponentWrapper>
    </TabNavigationWrapper>
  );
};

export default TabNavigation;
