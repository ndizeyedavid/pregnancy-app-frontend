import Header from "../components/Header";
import FullCalendar from "../components/FullCalendar";
import Notes from "../components/Notes";
import Bottom from "../components/Bottom";
import { useEffect } from "react";

const Calendar = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header action="drawer" head="Calendar" profile="add" />
            <FullCalendar />
            <Notes />
            <Bottom />

        </>
    )
}

export default Calendar
