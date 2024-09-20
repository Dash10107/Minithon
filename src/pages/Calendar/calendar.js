import Header from '@/components/Header';
import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from '@/events';
import localFont from "next/font/local";

const localizer = momentLocalizer(moment);

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-regular' 
});

const CalendarComponent = () => {
  const { setNeonDark, neonDark } = useContext(ThemeContext);

  const components = {
    event: (props) => {
      const { title } = props;

      // Simple styling for the event text
      const eventStyle = {
        backgroundColor: '#3174ad', // Light soothing background
        color: '#FFF', // Darker text for contrast
        padding: '10px',
        margin: '5px',
        borderRadius: '8px',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

      return (
        <div style={eventStyle}>
          {title}
        </div>
      );
    },
  };

  const dayPropGetter = (date) => {
    let backgroundColor = '#ffffff'; // Default background for weekdays
    
    if (date.getDay() === 0 || date.getDay() === 6) { 
      backgroundColor = '#f8f8f8'; // Light grey for weekends
    }
    
    return {
      style: {
        backgroundColor,
        borderRadius: '8px',
        padding: '10px',
        border: '1px solid #f09877',
        margin: '5px',
      },
    };
  };

  return (
    <>
      <div id="container" className={`${neonDark && "bg-[#0d0d0d] text-white"}`}>
        <Header 
          text1={"The winner for Minithon is"} 
          text2={"Zucky the Lizard"} 
          linktext={"profiles"}
          setNeonDark={setNeonDark}
          neonDark={neonDark}
          tabs={[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Events", link: "/Events/event" },
            { name: "Profile", link: "/Auth/profile" },
            { name: "Calendar", link: "/Calendar/calendar", underline: true },
        ]} 
        />

        <div className="h-[60vh] w-full">
          <Calendar
            events={events} 
            components={components}
            localizer={localizer}
            defaultView="month" 
            defaultDate={new Date()} 
            dayPropGetter={dayPropGetter}  
          />
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;
