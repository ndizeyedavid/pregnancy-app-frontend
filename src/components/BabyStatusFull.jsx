import  axios from "axios";
import { useEffect, useState } from "react";


const BabyStatusSmall = () => {
    const [temperature, setTemperature] = useState(0);
    const [blood_pressure, setBloodPressure] = useState(0);

    useEffect(() => {

        function fetch_userdetails(user){
            // console.log(user);
            
            axios.get(import.meta.env.VITE_BACKEND_URL + '/users/status?id=' + user)
                .then(response => {
                    const data = response.data.user_status;
                    console.log(data);  

                    // Temperature
                    if (data.temperature != 0){
                        setTemperature(data.temperature);
                    }else{
                        setTemperature("N/A")
                    }

                    // Blood pressure
                    if (data.blood_pressure != 0) {
                        setBloodPressure(data.blood_pressure);
                    }else{
                        setBloodPressure("N/A");
                    }
                })
                .catch((err)=>{
                    console.log('An error occured');
                })

        }
        
        // fetch_userdetails(JSON.parse(localStorage.getItem('uid')).uid)
        setInterval(fetch_userdetails(JSON.parse(localStorage.getItem('uid')).uid), 2000);

        
    }, [])
    return (
        <>

            {
                temperature > 50 || blood_pressure > 670 
                
                ?   
                    <div role="alert" className="alert alert-error flex p-5">
                        <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                        </svg>
                        <span>Warning! Sensor data are very high.</span>
                    </div>
                :
                null
            }

        
            <div className="w-full px-2 mt-4">
                <div className="w-full shadow-sm card bg-base-100">
                    <div className="flex-row px-3 py-3 card-body gap-[40px]">
                        <div className="flex items-center justify-center gap-[15px]">
                            <div className="w-[65px] h-[65px] flex items-center justify-center rounded-[100%] bg-[#FFCDD2]"><img className="w-full h-full" src="/images/logo-white.svg" alt="uv-Baby" /></div>
                        </div>

                        <div className="w-full gap-[34px] mt-3  flex justify-between py-8">
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="text-[#8c8a8a] text-[14px] font-normal">Temperaure</div>
                                {temperature != 0 ?
                                    <div className="self-stretch font-[600] text-black text-md">{temperature} °C</div>
                                    :
                                    <span className='relative loading loading-spinner text-neutral left-5' />
                                }
                            </div>
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="text-[#8c8a8a] text-[14px] font-normal">Blood Pressure</div>
                                {blood_pressure != 0 ?
                                    <div className="self-stretch font-[600] text-black text-md">{blood_pressure} kPa</div>
                                    :
                                    <span className='relative loading loading-spinner text-neutral left-7' />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BabyStatusSmall
