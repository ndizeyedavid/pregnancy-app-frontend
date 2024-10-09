import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer"
import axios from "axios"
import { useEffect, useState } from "react";

const Header = ({ action, head, profile }) => {

    const navigate = useNavigate();
    
    function logout() {
        let sure = confirm("Are you sure you want to log out?");
        if (sure) {
            localStorage.removeItem('uid');
            // window.location.href = '/login';
            navigate('/login');
        }
    }

    const [uname, setUname] = useState("User")
    const [uid, setUid] = useState("")


    useEffect(() => {
        function getSession() {
            const localStorageData = localStorage.getItem('uid');

            // Parse the JSON string into a JavaScript object
            const parsedData = JSON.parse(localStorageData);

            // Access the 'uname' property
            const username = parsedData.uname;
            const userId = parsedData.uid;
            setUname(username);
            setUid(userId);

        }

        getSession()
    }, [])

    
    
    const handleForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        // console.log(formObject.note);
        // console.log(uid);
        e.target.reset();
        axios.post(import.meta.env.VITE_BACKEND_URL + '/notes/add', {
            id: uid,
            note: formObject.note
        })
            .then(response => {
                const res = response.data;
                if (res.success) {
                    console.log("success");
                    alert("Note saved");
                    // window.location.reload();
                    navigate('/')

                } else {
                    console.log("erro");
                }
            })
    }

    return (
        <>
            <Drawer />

            <div className="flex items-center justify-between w-full p-5 h-14">

                {action == "drawer" ?
                    <a href="#" onClick={() => document.getElementById('my-drawer').click()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </a>

                    :

                    action != 'bck' ?
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>
                        </Link>
                        :
                        <svg onClick={() => window.history.back()} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>

                }

                <span className="font-[500] text-md">{head}</span>

                {profile == "profile" ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="w-9 h-9">
                            <img src="/images/logo/logo-deep.svg" alt="Profile" className="w-full h-full border-2 border-white rounded-full" />

                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                                <img src="/images/logo/logo-deep.svg" alt="Profile" className="border-2 border-white rounded-full w-14 h-14" />
                                <h3 className="font-[600] text-lg">{uname}</h3>
                            </div>
                            <li>
                                <a href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                                    Settings
                                </a>
                            </li>

                            <li>
                                <a href="#!" onClick={() => logout()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </div>

                    :

                    <div className="dropdown dropdown-end">
                        {profile == "add" ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => document.getElementById('my_modal_3').showModal()} className="transition-all rounded-full cursor-pointer hover:bg-gray-100" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" /></svg>

                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="text-lg font-bold">New Note</h3>
                                        <form method="POST" onSubmit={handleForm} className="mt-4">
                                            <input type="text" placeholder="Enter your note here..." className="w-full p-2 border rounded-lg" name="note" required />
                                            <button type="submit" className="w-full p-0 mt-4 btn bg-[#E91E63] text-white text-lg hover:bg-opacity-70 hover:bg-[#E91E63]">Add</button>
                                        </form>
                                    </div>
                                </dialog>
                            </>
                            :

                            <div tabIndex={0} role="button" className="flex items-center justify-center w-9 h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[30px] h-[30px]" fill="#000"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" /></svg>
                            </div>

                        }

                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li>
                                <a href="#!">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#!">
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>

                }


            </div>
        </>
    )
}

export default Header
