import { useEffect, useState } from "react";
import Verifier from "../components/Verifier";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Verify = () => {
    const navigate = useNavigate();


    const [isVerified, setIsVerified] = useState(false);
    const [uid, setUid] = useState('');
    
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
    
  return (
    <>
      {!isVerified ? <Verifier /> : navigate('/')}

    </>
  )
}

export default Verify
