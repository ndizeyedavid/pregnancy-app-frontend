import React, { useEffect, useRef } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Hcalendar = ({ year = new Date().getFullYear(), month = new Date().getMonth() }) => {
    const activeDateRef = useRef(null);
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = date.getDay();
    const calendarDays = [];

    // Fill in the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    useEffect(() => {
        if (activeDateRef.current) {
            activeDateRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, []);

    return (
        <div className="flex items-center w-full gap-3 p-2 overflow-x-hidden">
            {calendarDays.map((day, index) => {
                const isActiveDate =
                    day === new Date().getDate() &&
                    month === new Date().getMonth() &&
                    year === new Date().getFullYear();

                return (
                    <div
                        key={index}
                        ref={isActiveDate ? activeDateRef : null}
                        className={`w-[48px] h-[70px] p-2.5 ${isActiveDate ? 'active-Hcalendar' : 'bg-white'
                            } shadow-sm rounded-lg flex-col justify-center items-center gap-1 inline-flex`}
                    >
                        <div className="text-center text-[12px] font-normal">
                            {day ? daysOfWeek[(firstDayIndex + index) % 7] : ''}
                        </div>
                        <div className="text-[20px] font-normal text-center">
                            {day || ''}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Hcalendar;
