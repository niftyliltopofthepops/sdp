import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const Auth = {
    async userLogin(email, password) {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/app_auth/`, {
            email,
            password,
            
        },
        {
              headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*'
            },
          }
        );
  
        if (response.status === 200) {
          // Store the JWT token in localStorage
          localStorage.setItem('jwtToken', response.data.token);
          localStorage.setItem('userName', response.data.username);
          return true;
        }
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },
  
};

export default Auth;
