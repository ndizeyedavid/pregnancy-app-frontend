import axios from "axios"
import Note from "./Note"
import { useEffect, useState } from "react";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        function myId() {
            let session = localStorage.getItem('uid');
            let parsedData = JSON.parse(session);
            return parsedData.uid;
        }
        axios.get(import.meta.env.VITE_BACKEND_URL + '/notes/view?id=' + myId()).then((response) => {
            const data = response.data.data;

            if (data.length > 0) {
                setNotes(data);
            }
        });
    }, []);

    return (
        <>
            <div className="w-full h-full p-3 mt-7">
                <div className="w-full flex flex-col gap-[20px] p-3 overflow-y-auto bg-white rounded-md shadow-sm">
                    <h2 className="text-black font-[450]">Notes Created</h2>

                    <div className="flex flex-col gap-[30px]">

                        {notes.length == 0 ?
                            'No notes created'

                            :
                            notes.map(note => <Note id={note.id} key={note.id} title={note.note} />)
                            // notes.map(note => console.log(note))
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
