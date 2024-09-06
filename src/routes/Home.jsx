import Header from "../components/Header";
import Hcalendar from "../components/Hcalendar";
import BabyStatusSmall from "../components/BabyStatusSmall";
import Options from "../components/Options";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.length === 0 && (window.location.pathname != '/login' || window.location.pathname != '/register')) {
            navigate('/login');
        }
        function getSession() {
            const localStorageData = localStorage.getItem('uid');

            // Parse the JSON string into a JavaScript object
            const parsedData = JSON.parse(localStorageData);

            const pregnancy_date = parsedData.pregnancyDate;


            let year = pregnancy_date.split('/')[2]
            if (year < 2000) {
                // <Navigate to='/profile' />
                navigate('/profile');

            }


        }

        getSession()
    }, [])
    return (
        <>
            <Header action="drawer" head="Home" profile="profile" />
            <Hcalendar />
            <BabyStatusSmall />
            <Options />
            <Bottom />
        </>
    )
}

export default Home
