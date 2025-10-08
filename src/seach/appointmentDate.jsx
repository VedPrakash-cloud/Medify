/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from "react";
import TabList from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import ConfirmAppointment from './Modal';


export default function AppointmentDate({hospital}) {
  const [value, setValue] = useState("today");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const slotsDate = {
      morning: ["11:00 AM", "11:30 AM"],
      afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
      evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const weekSlots = useMemo(()=>{
    const days = [];
    const today = new Date();

    for(let i = 0; i < 7; i++){
      const current = new Date();
      current.setDate(today.getDate() + i);

      const dayName = 
      i === 0
      ? "Today"
      : i === 1
      ?"Tomorrow"
      : current.toLocaleDateString("en-US", {weekday: "short"})

      const formattedDate = current.toLocaleDateString("en-US",{
        month: "short",
        day:"numeric"
      });

      days.push({
        key: dayName.toLowerCase(),
        label: i <= 1 ? dayName :`${dayName}, ${formattedDate}`,
        actualDate: current.toLocaleDateString("en-US", {weekday:"short", month:"short", day:"numeric"}),
        slots:{...slotsDate},
      })
    }
    return days;
  },[slotsDate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openModal = (dayLabel, time)=>{
    setSelectedSlot({date:dayLabel, time});
    setIsModalOpen(true);
  }

  const renderSlots =(slots, dayLabel)=>{
    return (
        <Box>
          <div
          className="flex gap-1 md:gap-5 text-xs md:text-base text-nowrap">
        {slots.map((time)=>(
            <button key={time} onClick={()=>openModal(dayLabel.actualDate, time)} className="border border-sky-500 text-sky-500 font-poppins font-semibold p-1 rounded-lg">
              {time}
            </button>
    ))}
    </div>
    </Box>
    )
  }

  return (
    <Box
      sx={{
        maxWidth: { xs: 380, sm: 520, lg: 750 },
        bgcolor: "background.paper",
        margin:'auto',
      }}
    >
      <TabContext value={value}>
        <Box >
          <TabList
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={true}
            allowScrollButtonsMobile={true}
            >
            {weekSlots.map((day) =>(
                <Tab
                label={
                    <Box
                    sx={{
                      display:"flex",
                      flexDirection:"column",
                      width:'170px',
                      fontFamily:"poppins"
                    }}>
                        <div>
                            {day.label}
                        </div>
                        <span className="text-green-600 text-xs">
                            {
                              day.slots.morning.length +
                              day.slots.afternoon.length +
                              day.slots.evening.length}{" "}
                              Slots Available
                        </span>
                    </Box>
                }
                value={day.key}
                key={day.key}
                />
            ))}
          </TabList>
        </Box>
          {weekSlots.map((day) => (
            <TabPanel value={day.key} key={day.key}>
                <div className="h-auto my-5">
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        margin: '10px',
                    }}>
                        <div
                        className="flex items-center gap-2 md:gap-5 border-b pb-3 w-full">Morning:{renderSlots(day.slots.morning, day)}</div>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'start',
                        alignItems:'center',
                        margin:'10px'
                    }}>
                        <div
                        className="flex items-center gap-2 md:gap-5 border-b pb-5 w-full">Afternoon:{renderSlots(day.slots.afternoon, day)}</div>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'start',
                        alignItems:'center',
                        margin:'10px'
                    }}>
                        <div
                        className="flex items-center gap-2 md:gap-5 border-b pb-5 w-full">Evening:{renderSlots(day.slots.evening, day)}</div>
                    </Box>
                </div>
            </TabPanel>
      ))}
      </TabContext>

      {/*Modal Component*/}
      <ConfirmAppointment
      isOpen = {isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      slot={selectedSlot}
      hospital={hospital}
      />
    </Box>
  );
}
