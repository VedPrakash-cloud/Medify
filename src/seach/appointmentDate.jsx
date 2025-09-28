import { useState } from "react";
import TabList from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = useState("today");

  const slotsDate = {
    today: {
      morning: ["11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 11,
    },
    tomorrow: {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
    "wed-1-oct": {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
    "thu-2-oct": {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
    "fri-3-oct": {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
    "sat-4-oct": {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
    "sun-5-oct": {
      morning: ["10:00 AM", "11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      available: 12,
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderSlots =(slots)=>{
    return (
        <Box>
        {slots.map((time)=>(
        <button key={time} className="mx-2 border border-sky-500 text-sky-500 font-poppins font-semibold p-2 rounded-lg">
            {time}
        </button>
    ))}
    </Box>
    )
  }

  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 480, lg: 680 },
        bgcolor: "background.paper",
        margin:'auto',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile={true}
            aria-label="scrollable tabs always showing buttons"
          >
            {Object.entries(slotsDate).map(([dayKey, dayData]) =>(
                <Tab
                label={
                    <Box>
                        <div>
                            {dayKey.charAt(0).toUpperCase()+ dayKey.slice(1).replace(/-/g, '')}
                        </div>
                        <span>
                            {dayData.available} Slots Available
                        </span>
                    </Box>
                }
                value={dayKey}
                key={dayKey}
                />
            ))}
          </TabList>
        </Box>
          {Object.entries(slotsDate).map(([dayName, dayData]) => (
            <TabPanel value={dayName} key={dayName}>
                <div className="border">
                    <Box sx={{
                        display:'flex',
                        justifyContent:'start',
                        alignItems:'center',
                        margin:'10px'
                    }}>
                        <div>Morning:</div>
                        <div className="border">{renderSlots(dayData.morning)}</div>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'start',
                        alignItems:'center',
                        margin:'10px'
                    }}>
                        <div>Afternoon:</div>
                        <div>{renderSlots(dayData.afternoon)}</div>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'start',
                        alignItems:'center',
                        margin:'10px'
                    }}>
                        <div>Evening:</div>
                        <div>{renderSlots(dayData.evening)}</div>
                    </Box>
                </div>
            </TabPanel>
      ))}
      </TabContext>
    </Box>
  );
}
