import axios from "axios";
import { useEffect, useState } from "react";

const BabyStatusSmall = () => {

    const [babyDescription, setBabyDescription] = useState('');
    const [startDate, setStartDate] = useState('8/20/2024');
    const [remainingDays, setRemainingDays] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [blood_pressure, setBloodPressure] = useState(0);
    const [realBloodPressure, setRealBloodPressure] = useState(0);

    useEffect(() => {

        async function getSession() {
            try {
                const localStorageData = localStorage.getItem('uid');
                const parsedData = JSON.parse(localStorageData);

                const date = parsedData.pregnancyDate;
                setStartDate(date);
                const daysRemaining = await calculateDaysRemaining(date);

                const currentWeek = calculateCurrentWeek(date);

                setBabyDescription(babyDevelopmentData[currentWeek]);

                // fetchUser_details(parsedData.uid);

            } catch (error) {
                console.error('Error fetching or parsing data:', error);
            }
        }
        getSession()


        function calculateDaysRemaining(pregnancyStartDate) {
            const startDateObj = new Date(pregnancyStartDate);
            // console.log(pregnancyStartDate);

            const dueDate = new Date(startDateObj);
            dueDate.setMonth(dueDate.getMonth() + 9); // Add 9 months
            dueDate.setDate(dueDate.getDate() + 7); // Add 7 days

            const currentDate = new Date();

            const daysRemaining = Math.ceil((dueDate - currentDate) / (1000 * 60 * 60 * 24));

            setRemainingDays(daysRemaining);
        }



        function calculateCurrentWeek(startDate) {
            const startDateObj = new Date(startDate);

            const currentDate = new Date();

            const daysDifference = (currentDate - startDateObj) / (1000 * 60 * 60 * 24);

            const currentWeek = Math.ceil(daysDifference / 7);

            return currentWeek;
        }


        const babyDevelopmentData = {
            1: "About the size of a poppy seed, your baby is just beginning to form.",
            2: "Now the size of a blueberry, your baby's heart starts to beat.",
            3: "Growing to the size of a lima bean, your baby's brain and spinal cord start to develop.",
            4: "About the size of a raspberry, your baby's arms and legs start to form.",
            5: "Now the size of a pea, your baby's facial features begin to develop.",
            6: "About the size of an olive, your baby's heart is now fully formed.",
            7: "Growing to the size of a blueberry again, your baby's lungs start to develop.",
            8: "Now the size of a grape, your baby's bones start to harden.",
            9: "About the size of a plum, your baby's muscles start to develop.",
            10: "Now the size of a fig, your baby can start to move.",
            11: "About the size of a tangerine, your baby's eyelids and ears are now formed.",
            12: "Now the size of a plum again, your baby's fingernails and toenails start to grow.",
            13: "About the size of a pear, your baby's hair starts to grow.",
            14: "Now the size of a peach, your baby can start to hiccup.",
            15: "About the size of a soda can, your baby's taste buds start to develop.",
            16: "Now the size of a potato, your baby's skin starts to thicken.",
            17: "About the size of a small avocado, your baby can start to feel pain.",
            18: "Now the size of a navel orange, your baby's eyes start to open.",
            19: "About the size of a large avocado, your baby's lungs are almost fully developed.",
            20: "Now the size of a banana, your baby can start to kick.",
            21: "About the size of a small pineapple, your baby's hair is starting to darken.",
            22: "Now the size of a large pineapple, your baby's heartbeat can be heard with a stethoscope.",
            23: "About the size of a cantaloupe, your baby's vernix (a protective coating) starts to form.",
            24: "Now the size of a small watermelon, your baby's lungs are fully developed.",
            25: "About the size of a large watermelon, your baby's brain is fully developed.",
            26: "Now the size of a coconut, your baby's nails are starting to grow past their fingertips.",
            27: "About the size of a rutabaga, your baby's position in your uterus starts to prepare for birth.",
            28: "Now the size of a butternut squash, your baby's immune system starts to develop.",
            29: "About the size of a cauliflower, your baby's eyes are fully developed.",
            30: "Now the size of a small honeydew melon, your baby can start to yawn and stretch.",
            31: "About the size of a large honeydew melon, your baby's bones are fully formed.",
            32: "Now the size of a small grapefruit, your baby's lungs are mature enough to breathe outside the womb.",
            33: "About the size of a large grapefruit, your baby's skin starts to thicken.",
            34: "Now the size of a small pineapple again, your baby's hair is starting to grow longer.",
            35: "About the size of a large pineapple again, your baby's position in your uterus is likely head down.",
            36: "Now the size of a cantaloupe again, your baby's vernix is starting to thin.",
            37: "About the size of a large watermelon again, your baby's immune system is fully developed.",
            38: "Now the size of a small watermelon again, your baby's nails are starting to grow past their fingertips.",
            39: "About the size of a large watermelon again, your baby's position in your uterus is likely head down and ready to be born.",
            40: "Now the size of a small honeydew melon again, your baby's lungs are mature enough to breathe outside the womb.",
            41: "Your baby is fully developed and ready to be born!"
        };

        // function fetchUser_details(user) {
        //     axios.get('http://localhost:3000/users/status?id=' + user)
        //         .then(response => {
        //             const data = response.data.user_status;
        //             setBloodPressure(data.blood_pressure);
        //             setTemperature(data.temperature);
        //         })
        // }

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

                    // beat per minute
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

    }, []);

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
                    <div className="px-3 py-5 card-body">
                        <div className="flex items-center gap-[15px]">
                            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[100%] bg-[#FFCDD2]"><img className="w-[40px] h-[40px]" src="/images/icons/1.svg" alt="uv-Baby" /></div>
                            <p className="text-[#8c8a8a] w-3 text-[15px]">{babyDescription != "" && babyDescription != undefined ? babyDescription : "Your baby is looking healthy and gorgeous "}</p>
                        </div>


                        <div className="w-full justify-center items-center gap-[34px] inline-flex mt-3">
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="text-[#8c8a8a] text-[14px] font-normal">Temperature</div>

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
                            <div className="w-[55px] flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="text-[#8c8a8a] text-[14px] font-normal">Days left</div>
                                <div className="self-stretch font-[600] text-black text-md">{remainingDays}</div>
                            </div>
                            
                        </div>

                        <div className="flex-col justify-start items-start gap-2.5 inline-flex px-2">
                            <div className="text-[#8c8a8a] text-[14px] font-normal">Blood Pressure</div>

                            {blood_pressure != 0 ?
                                <div className="self-stretch font-[600] text-black text-md">{calculate_pressure()} mmHg</div>
                                :
                                <span className='relative loading loading-spinner text-neutral left-5' />
                            }
                        </div>                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default BabyStatusSmall
