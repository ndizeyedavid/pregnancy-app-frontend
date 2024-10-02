import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";




const Doctor = () => {
    const [messages, setMessages] = useState([])
    function getUserId() {
        const userId = localStorage.getItem("uid");
        const parsedData = JSON.parse(userId);
        return parsedData.uid
    }

    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());

        e.target.reset();
        axios.post(import.meta.env.VITE_BACKEND_URL + "/users/messages/send", formObject)
            .then(response => {
                const data = response.data;
                setMessages(data);
                // console.log(data);
            })
            .catch(error => {
                console.log('An error occurred');

            })
    }

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + `/users/messages/view?id=${getUserId()}`)
            .then(response => {
                const data = response.data;
                setMessages(data);
                // console.log(data);
            })
    }, [])

    return (
        <>
            <Header action="back" head="Doctor" profile="profile" />

            {/* get Messages */}
            {messages.length != 0 ?
                <div className='w-full h-[84%] overflow-y-auto'>
                    {messages.map((data, index) => (
                        <div key={index}>
                            {data.sender_id == 'admin' ?
                                <div className='chat chat-start'> <div className='chat-bubble'> {data.message} </div> </div>
                                :
                                <div className='chat chat-end'> <div className='bg-[#EC407A] text-gray-100 chat-bubble'>{data.message}</div> </div>
                            }

                        </div>
                    ))}
                </div>
                :
                <div className="flex items-center justify-center w-full h-full"><p>Start a conversation with the doctor</p></div>
            }
            {/* sedning messages */}
            <div className="fixed bottom-0 w-full">
                <form method="POST" onSubmit={handleForm} className="flex items-center justify-between w-full p-3 border-t border-gray-300">

                    <input type="hidden" name="sender_id" value={getUserId()} />

                    <input type="hidden" name="receiver_id" value="admin" />

                    <input type="text" placeholder="Message"
                        className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                        name="message" required />
                    <button>

                    </button>
                    <button type="submit">
                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Doctor
