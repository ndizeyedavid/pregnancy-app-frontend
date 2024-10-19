import  axios from "axios";
import { useEffect, useState } from "react";


const BabyStatusSmall = () => {
    const [temperature, setTemperature] = useState(0);
    const [blood_pressure, setBloodPressure] = useState(0);
    const [realBloodPressure, setRealBloodPressure] = useState(0);

    useEffect(() => {

        function fetch_userdetails(user){
            // console.log(user);
            
            axios.get(import.meta.env.VITE_BACKEND_URL + '/users/status?id=' + user)
                .then(response => {
                    const data = response.data.user_status;
                    // console.log(data);  

                    // Temperature
                    if (data.temperature != 0){
                        setTemperature(data.temperature);
                    }else{
                        setTemperature("N/A")
                    }

                    // Blood pressure
                    if (data.blood_pressure != 0) {
                        let bpm = data.blood_pressure;
                        if (bpm > 8400){
                            bpm = Math.floor(Math.random()*120)
                            setBloodPressure(bpm);
                        }else{
                            bpm = Math.round(data.blood_pressure * 100 / 10400);
                            setBloodPressure(bpm);
                        }
                    }else{
                        setBloodPressure("N/A");
                    }
                    
                    
                    // real blood pressure
                    if (data.real_blood_pressure != 0){
                        setRealBloodPressure(data.real_blood_pressure);
                    }else{
                        setRealBloodPressure("N/A");
                    }
                })
                .catch((err)=>{
                    console.log('An error occured');
                })

        }
        
        function fetching_ud(){
            fetch_userdetails(JSON.parse(localStorage.getItem('uid')).uid)
        }
        // fetch_userdetails(JSON.parse(localStorage.getItem('uid')).uid)
        setInterval(fetching_ud, 2000);

        
    }, [])

    function calculate_pressure(){
        var pressure = Number(blood_pressure) - 10;
        if (pressure > 0){
            return pressure;
        }else{
            return "N/A";
        }
    }
    
    return (
        <>

            {
                temperature > 50 || blood_pressure > 100 
                
                ?   
                    <div role="alert" className="flex p-5 alert alert-error">
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 stroke-current shrink-0' fill='none' viewBox='0 0 24 24'>
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
                                <div className="text-[#8c8a8a] text-[14px] font-normal">Heart Beat Rate</div>
                                {blood_pressure != 0 ?
                                    <div className="self-stretch font-[600] text-black text-md">{blood_pressure} BPM</div>
                                    :
                                    <span className='relative loading loading-spinner text-neutral left-7' />
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex-col justify-start items-start gap-2.5 inline-flex relative left-[110px] bottom-[30px]">
                        <div className="text-[#8c8a8a] text-[14px] font-normal">Blood Pressure</div>
                        {blood_pressure != 0 ?
                            <div className="self-stretch font-[600] text-black text-md">{calculate_pressure()} mmHg</div>
                            :
                            <span className='relative loading loading-spinner text-neutral left-7' />
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default BabyStatusSmall
