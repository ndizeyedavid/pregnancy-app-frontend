import axios from "axios";
import { useNavigate } from "react-router-dom";


const Note = ({ title, id }) => {
    const navigate = useNavigate();

    function deleteNote(id) {
        console.log('Ready delete', id);
    
        axios.get(import.meta.env.VITE_BACKEND_URL + "/notes/delete?id=" + id)
            .then(response => {
                console.log("Deleted");
                // window.location.reload();
                navigate('/')
            })
            .catch(err => {
                console.log("an error occurred");
    
            })
    
    }
    

    return (
        <>
            <div className="inline-flex items-center justify-center w-full h-3">
                <div className="w-2.5 h-2.5 bg-[#ec407a] rounded-full mr-2" />
                <div className="grow shrink basis-0 text-[#8c8a8a] text-[15px]">{title} </div>
                <div className="relative w-[20px] h-[20px]">

                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteNote(id)} viewBox="0 -960 960 960" className="w-full h-full" fill="#000"><path d="M320-440h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                </div>
            </div>
        </>
    )
}

export default Note
