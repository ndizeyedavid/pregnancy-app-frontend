import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Bottom from "../components/Bottom";
import { useState } from "react";

const TimelinePage = () => {

    function startDate() {
        const parsedData = JSON.parse(localStorage.getItem('uid'));
        const pregnancy = parsedData.pregnancyDate;
        const d = pregnancy.split('/');
        if (d[0] < 10) {
            const formatedDate = d[2] + '-' + d[1] + '-0' + d[0];
            return formatedDate;
        } else {
            const formatedDate = d[2] + '-' + d[1] + '-' + d[0];
            return formatedDate;
        }
    }
    // const []
    // console.log(startDate());

    return (
        <>
            <Header action="back" head="Timeline" profile="dots" />
            <Timeline firstPregnancyDate="2024-8-20" />
            <Bottom />
        </>
    )
}

export default TimelinePage
