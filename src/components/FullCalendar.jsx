import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';

const FullCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <div className="w-full h-[300px] flex items-center justify-center mt-5 " autoFocus>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}

export default FullCalendar
