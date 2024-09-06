import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionProvider = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        function verifySession() {
            const itemStr = localStorage.getItem('uid');

            if (!itemStr) {
                // Redirect to login and force a full page reload
                navigate('/login');
                window.location.reload();
                return;
            }

            const item = JSON.parse(itemStr);
            const now = new Date();

            if (now.getTime() > item.expiry) {
                // Remove the expired uid, redirect to login, and force a full page reload
                localStorage.removeItem('uid');
                navigate('/login');
                window.location.reload();
            }
        }

        verifySession();
    }, [navigate]);

    return children;
};

export default SessionProvider;
