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
