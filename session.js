import {useNavigate} from 'react-router-dom'
function verifySession() {
    const navigate = useNavigate();
      if (window.location.pathname != '/login' && window.location.pathname != '/register') {
        // if (window.location.pathname != '/login') {
        let session = localStorage.getItem('uid');
        if (!session) {
          navigate('/login');
          return;
        }

        const item = JSON.parse(session);
        const now = new Date();

        if (now.getTime() > item.expiry) {
          localStorage.removeItem('uid');
          return;
        }

      }

    }
    setInterval(verifySession, 1000);