import React, { useRef, useEffect } from 'react';

let startDate;

if (localStorage.getItem('uid')){
    var this_now_date = JSON.parse(localStorage.getItem('uid')).pregnancyDate;
    this_now_date = this_now_date.split('/');

    startDate = `${this_now_date[2]}-${this_now_date[1]}-${this_now_date[0]}`; // Replace this with your actual start date
}else{
    startDate = "2024-05-7";
}

// console.log(startDate);


const calculateCurrentDay = (startDate) => {
    var scramble = startDate.split('-');
    // console.log(`${scramble[0]}-${scramble[2]}-${scramble[1]}`);
    const start = new Date(`${scramble[0]}-${scramble[2]}-${scramble[1]}`);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    // console.log(startDate);
    
    // console.log("Start", start);
    // console.log("Today ",today);
    
    return Math.min(differenceInDays + 1, 280); // Ensure it doesn't exceed 280 days
};
// console.log(calculateCurrentDay(startDate));

const Weeks = () => {
    const currentDay = calculateCurrentDay(startDate);
    const currentDayRef = useRef(null);

    useEffect(() => {
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentDay]);

    return (
        <>
            {currentDay <= 0 ? 
            
            <div className="flex items-center w-full gap-2 p-2 overflow-x-hidden">
                <div role='alert' className='alert alert-warning'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 stroke-current shrink-0' fill='none' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                  </svg>
                  <span>Alert: Tracking is Over!<br /> You delivery date has reached</span>
                </div>
            </div>
                
                : 
                
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
            }
        </>
    );
};

export default Weeks;
