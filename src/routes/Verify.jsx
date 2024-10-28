import { useEffect, useState } from "react";
import Verifier from "../components/Verifier";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Verify = () => {
    const navigate = useNavigate();


    const [isVerified, setIsVerified] = useState(false);
    const [uid, setUid] = useState('');
    const [error, setError] = useState(false);
    
    function getSession() {
        const localStorageData = localStorage.getItem('uid');

        // Parse the JSON string into a JavaScript object
        const parsedData = JSON.parse(localStorageData);

        const id = parsedData.uid;

        if (uid == ''){
            setUid(id);
        }
    }

    useEffect(()=>{
      function checkVerify(){
        axios.get(import.meta.env.VITE_BACKEND_URL + '/users/verify/'+uid)
            .then(response => {
                const data = response.data;
                console.log(data);
                
                setIsVerified(data[0].verified == 1 ? true : false)
            })
      }

      setInterval(checkVerify, 2000)
    }, [])
    
    getSession()

    function retry(){
      setError(false);
      isVerified ? navigate('/') : setError(true)
    }
    
  return (
    <>
      {error ? <div className="absolute top-0 w-full p-5 z-[9999999999999999999]">
        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p class="font-bold">Not yet verified</p>
          <p>Please wait for your doctor to verify you</p>
        </div>
      </div> : null}

      {!isVerified ? <Verifier onclick={retry} /> : navigate('/')}
    </>
  )
}

export default Verify
