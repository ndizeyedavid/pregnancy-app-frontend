import Header from "../components/Header";
import Weeks from "../components/Weeks";
import BabyStatusFull from "../components/BabyStatusFull";
import Bottom from "../components/Bottom";
import { useState } from "react";
import axios from "axios";

import toast, { Toaster } from 'react-hot-toast';

// import axios from "axios";

const Profile = () => {
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function getSessions() {
        const parsedData = JSON.parse(localStorage.getItem('uid'));
        const pregnancy = parsedData.pregnancyDate;
        const d = pregnancy.split('/');
        if (d[0] < 10) {
            const formatedDate = d[2] + '-' + d[1] + '-0' + d[0];
            return formatedDate;
        } else {
            const formatedDate = d[2] + '-' + d[1] + '-' + d[0];
            return formatedDate;
        }
    }
    function myId() {
        let session = localStorage.getItem('uid');
        let parsedData = JSON.parse(session);
        return parsedData.uid;
    }
    function myUname() {
        let session = localStorage.getItem('uid');
        let parsedData = JSON.parse(session);
        return parsedData.uname;
    }

    const [pregDate, setPregDate] = useState(getSessions());

    const handleForm = (e) => {
        e.preventDefault();
        setSuccess(false);
        setIsLoading(true);
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        axios.post(import.meta.env.VITE_BACKEND_URL + "/users/update?id=" + myId(), formObject)
            .then(response => {
                const data = response.data;
                if (data.success) {
                    setSuccess(true);
                    setIsLoading(false)
                    const jsDate = new Date(formObject.pregDate);

                    const formattedDate = jsDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    });
                    console.log(formattedDate);

                    const now = new Date();
                    const session = {
                        uid: myId(),
                        uname: myUname(),
                        pregnancyDate: formattedDate,
                        expiry: now.getTime() + 86400000,
                    };

                    // console.log(session);

                    localStorage.setItem('uid', JSON.stringify(session))
                    toast.remove();
                }
            })
            .catch(err => {
                console.log("An error occurred");
            })

    }

    let year = pregDate.split('-')[0];

    if (year < 2000) {
        toast('Update your pregnancy date!', {
            icon: '⚠️',
        });
    }


    return (
        <>
            <Toaster />

            <Header action="back" head="Profile" profile="dots" />

            <Weeks />
            <BabyStatusFull />

            {success ?
                <div className="mx-2 mt-2">
                    <div role='alert' className='bg-green-400 alert alert-success'>
                        <span>✅ Pregnancy Date Updated</span>
                    </div>
                </div>
                :
                null
            }
            <div className="p-3 m-2 mt-2 bg-white rounded-md">
                {/* <h3 className="invisible">Pregnancy monitor</h3> */}
                <main className='flex flex-col items-center w-full'>
                    <div className='w-full max-w-sm space-y-5 text-base-content'>
                        <form onSubmit={handleForm} className='mt-8 space-y-5'>

                            <div>
                                <label className='font-medium'>
                                    Initial Birth Date
                                </label>
                                <input type='date' name="pregDate" defaultValue={pregDate} required className='w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none text-base-content/90 focus:border-primary' />
                                {/* <input type='date' defaultValue='2024-12-06' required className='w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none text-base-content/90 focus:border-primary' /> */}

                            </div>
                            {!isLoading ? <button type="submit" className='w-full text-base duration-150 btn btn-primary'>Update</button> : <button type="submit" className='w-full text-base duration-150 btn btn-primary' disabled><span className="loading loading-dots loading-lg"></span></button> }

                        </form>

                    </div>
                </main>
            </div>

            <Bottom />

        </>
    )
}

export default Profile
