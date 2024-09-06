import { useEffect, useState } from "react";

const BabyStatusSmall = () => {
    const [temperature, setTemperature] = useState(0);
    const [blood_pressure, setBloodPressure] = useState(0);

    useEffect(() => {
        let randomPressure_1 = Math.floor(Math.random() * 105);
        let randomTemperature_1 = Math.floor(Math.random() * 50);
        function generateRandom() {
            if (randomTemperature_1 < 30) {
                randomTemperature_1 = Math.floor(Math.random() * 70);
            }
            if (randomPressure_1 < 90) {
                randomPressure_1 = Math.floor(Math.random() * 105);
            }

            const randomPressure_2 = Math.floor(Math.random() * 99)
            const randomTemperature_2 = Math.floor(Math.random() * 99)
            setBloodPressure(randomPressure_1 + '.' + randomPressure_2);
            setTemperature(randomTemperature_1 + '.' + randomTemperature_2);
        }


        setInterval(generateRandom, 2000);
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
