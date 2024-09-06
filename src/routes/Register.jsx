// "use client";
import { Link } from "react-router-dom"
import { useState } from "react"
import ConfettiExplosion from 'react-confetti-explosion';
import axios from "axios"
const Register = () => {
    const [loading, setLoading] = useState(false)
    const [isVisPswd, setVisPswd] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)
    const [error, setError] = useState("")
    function visPswd(st) {
        setVisPswd(st);
        if (st) {
            document.getElementById('pswd').type = 'text';
        } else {
            document.getElementById('pswd').type = 'password';
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('')

        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        if (formObject.phone.length != 10) {
            setError('Invalid phone number')
            setLoading(false);
        } else {

            axios.post(import.meta.env.VITE_BACKEND_URL + '/users/register', formObject)
                .then(response => {
                    setLoading(false);
                    e.target.reset();

                    if (response.data.status === 409) {
                        setError(response.data.message);
                    } else {
                        setDisplayModal(true);
                    }
                })
                .catch(error => {
                    setError('Registration failed. Code: 0X512')
                    setLoading(false);
                    console.error(error)
                });
        }
    }

    return (
        <>
            {error == "" ? null : <div className="absolute w-full px-2 mt-3"> <div className="p-4 text-red-700 bg-red-100 border-l-4 border-red-500 " role="alert"> <p className="font-bold">{error}</p> </div> </div>}

            {displayModal ?
                <div
                    className="fixed z-0 inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">

                    <ConfettiExplosion particleCount="300" className="relative left-48" />
                    <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">

                        <div className="my-8 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="inline w-14 " fill="#ec407a"><path d="m438-452-58-57q-11-11-27.5-11T324-508q-11 11-11 28t11 28l86 86q12 12 28 12t28-12l170-170q12-12 11.5-28T636-592q-12-12-28.5-12.5T579-593L438-452ZM326-90l-58-98-110-24q-15-3-24-15.5t-7-27.5l11-113-75-86q-10-11-10-26t10-26l75-86-11-113q-2-15 7-27.5t24-15.5l110-24 58-98q8-13 22-17.5t28 1.5l104 44 104-44q14-6 28-1.5t22 17.5l58 98 110 24q15 3 24 15.5t7 27.5l-11 113 75 86q10 11 10 26t-10 26l-75 86 11 113q2 15-7 27.5T802-212l-110 24-58 98q-8 13-22 17.5T584-74l-104-44-104 44q-14 6-28 1.5T326-90Z" /></svg>
                            <h4 className="mt-4 text-lg font-semibold text-gray-800">Hooray🎉 Welcome a board</h4>
                            <p className="mt-4 text-sm text-gray-600">Now you do have to login to verify your account</p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Link to="/login" className="text-white btn btn-success">Continue</Link>
                        </div>

                    </div>
                </div >

                :

                null
            }


            <div className="flex flex-col items-center justify-center w-full mt-[72px]">
                <div className="flex flex-col items-center gap-[20px]">
                    <img src="/images/logo/logo-pink.svg" alt="logo" className="w-[100px] h-[100px]" />
                    <p className="text-2xl font-bold text-center text-black">Hello Beatiful🌺</p>
                </div>


                <form onSubmit={handleForm} method="POST" className="w-full px-10 mt-[29px] flex flex-col gap-[17px]">

                    <label className='w-full form-control'>
                        <div className='label'>
                            <span className='text-black text-[16px] font-[500] label-text'>Enter your name</span>
                        </div>
                        <div className="flex items-center p-[0.6rem] bg-white rounded-lg gap-x-3" style={{ border: '0.2px solid rgba(0, 0, 0, 0.2)' }}>
                            <div className="w-full">
                                <input required type="text" name="name" className="w-full text-sm bg-transparent outline-none" placeholder="Enter your name here" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C8A8A"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                        </div>
                    </label>

                    <label className='w-full form-control'>
                        <div className='label'>
                            <span className='text-black text-[16px] font-[500] label-text'>Enter your phone number</span>
                        </div>
                        <div className="flex items-center p-[0.6rem] bg-white rounded-lg gap-x-3" style={{ border: '0.2px solid rgba(0, 0, 0, 0.2)' }}>
                            <div className="w-full">
                                <input required type="number" name="phone" className="w-full text-sm bg-transparent outline-none" placeholder="07********" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C8A8A"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                        </div>
                    </label>

                    <label className='w-full form-control'>
                        <div className='label'>
                            <span className='text-black text-[16px] font-[500] label-text'>Create your password</span>
                        </div>
                        <div className="flex items-center p-[0.6rem] bg-white rounded-lg gap-x-3" style={{ border: '0.2px solid rgba(0, 0, 0, 0.2)' }}>
                            <div className="w-full">
                                <input required type="password" id="pswd" name="password" className="w-full text-sm bg-transparent outline-none" placeholder="**********" />
                            </div>
                            {!isVisPswd ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => visPswd(true)} height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C8A8A"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => visPswd(false)} height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C8A8A"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg>}
                        </div>
                    </label>

                    {loading ?
                        <button className="w-full h-[40px] min-h-[40px] font-normal text-[15px] btn bg-[#ec407a] text-white hover:bg-[#ec407a] hover:bg-opacity-85" disabled><span className="loading loading-spinner loading-md"></span></button>
                        :
                        <button className="w-full h-[40px] min-h-[40px] font-normal text-[15px] btn bg-[#ec407a] text-white hover:bg-[#ec407a] hover:bg-opacity-85">Register</button>
                    }

                    <p className="text-center text-[15px]">Already have an account? <Link to="/login" className="text-[#ec407a] hover:underline">Login</Link></p>

                </form>
            </div>
        </>
    )
}

export default Register
