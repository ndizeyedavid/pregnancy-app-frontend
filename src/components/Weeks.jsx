import React, { useRef, useEffect } from 'react';

// Example start date
const startDate = "2024-03-01"; // Replace this with your actual start date

const calculateCurrentDay = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return Math.min(differenceInDays + 1, 280); // Ensure it doesn't exceed 280 days
};

const Weeks = () => {
    const currentDay = calculateCurrentDay(startDate);
    const currentDayRef = useRef(null);

    useEffect(() => {
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentDay]);

    return (
        <div className="flex items-center w-full gap-2 p-2 overflow-x-hidden">
            {Array.from({ length: 280 }, (_, index) => (
                <div
                    key={index}
                    className={`w-[48px] h-[48px] px-[20px] p-2.5 shadow-sm rounded-full flex-col justify-center items-center gap-1 flex ${index + 1 === currentDay ? 'bg-[#EC407A] text-white' : 'text-[#8c8a8a]'
                        }`}
                    ref={index - 2 === currentDay ? currentDayRef : null}
                >
                    <div className="text-center text-[18px] w-full h-full items-center justify-center flex font-normal">
                        {index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Weeks;
