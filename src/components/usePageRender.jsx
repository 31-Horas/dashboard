import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function usePageRender(navigationPath) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://otterboard.med.me:5000/auth/signin', {
          withCredentials: true // Enable sending and receiving cookies
        });

        if (response.status === 200) {
          console.log(response.data);
        } else if (response.status === 201) {
          navigate(navigationPath);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [navigate, navigationPath]);
}

export default usePageRender;