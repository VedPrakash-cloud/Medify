import Ask from "../assets/Ask.svg";
import {useState} from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close'

export default function QNA() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (e, isExpanded)=>{
        setExpanded(isExpanded ? panel : false);
    };


  return (
    <div className="h-full flex flex-col font-poppins py-6 px-10">
      <h1 className="text-[#2AA7FF] text-sm font-semibold m-3">
        Get Your Answer
      </h1>
      <p className="text-[#1B3C74] text-4xl font-semibold m-2">
        Frequently Asked Questions
      </p>
      <div className="flex items-center h-[400px]">
        <img src={Ask} alt="Q&A.svg" className="object-contain h-full w-full "/>


        {/*Accordian start here */}
        <div className="w-[600px] max-w-2xl text-start mr-20">
            <Accordion
            expanded = {expanded === "panel1"}
            onChange={handleChange('panel1')}
            disableGutters
            elevation={0}>
          <AccordionSummary
            expandIcon={expanded === "panel1" ? <Close className="text-[#2AA7FF]" /> : <Add className="text-[#2AA7FF]" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{color:'#1B3C74', fontWeight:'bold',fontSize:14, fontFamily:'poppins'}} component="span">Why choose our medical for your family?</Typography>
          </AccordionSummary>
          <AccordionDetails className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, recusandae officia. Explicabo, ducimus. Non molestiae sequi consequatur quia, exercitationem
          </AccordionDetails>
        </Accordion>
        <Accordion
        expanded = {expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="text-sm"
        disableGutters
        elevation={0}>
          <AccordionSummary
            expandIcon={expanded === 'panel2' ? <Close className="text-[#2AA7FF]"/> : <Add className="text-[#2AA7FF]" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{color:'#1B3C74', fontWeight:'bold',fontSize:14, fontFamily:'poppins'}} component="span">Why we are different from others?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, recusandae officia. Explicabo, ducimus. Non molestiae sequi consequatur quia, exercitationem
          </AccordionDetails>
        </Accordion>
        <Accordion
        expanded = {expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="text-sm"
        disableGutters
        elevation={0}>
          <AccordionSummary
            expandIcon={expanded === 'panel3' ? <Close className="text-[#2AA7FF]" /> : <Add className="text-[#2AA7FF]" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography sx={{color:'#1B3C74', fontWeight:'bold',fontSize:14, fontFamily:'poppins'}} component="span">Trusted & experience senior care & love</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, recusandae officia. Explicabo, ducimus. Non molestiae sequi consequatur quia, exercitationem
          </AccordionDetails>
        </Accordion>
        <Accordion
        expanded = {expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="text-sm"
        disableGutters
        elevation={0}>
          <AccordionSummary
            expandIcon={expanded === 'panel4' ? <Close className="text-[#2AA7FF]" /> : <Add className="text-[#2AA7FF]" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography sx={{color:'#1B3C74', fontWeight:'bold',fontSize:14, fontFamily:'poppins'}} component="span">How to get appointment for emergency cases?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, recusandae officia. Explicabo, ducimus. Non molestiae sequi consequatur quia, exercitationem
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
    </div>
  );
}
