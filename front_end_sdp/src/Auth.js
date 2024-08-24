import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const Auth = {
    async userLogin(email, password) {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/app_auth/`, {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
            });

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

    async userReg(email, password, username) {
      console.log(username)
        try {
            const response = await axios.post(`${API_BASE_URL}/api/register/`, {
                email,
                password,
                username,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
            });

            if (response.status === 200) {
                // Store the JWT token in localStorage
                return true;
            }
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },

    async SpcBeginnerAns(qn1, qn2, qn3, qn4, qn5, game_type, game_name) {
        try {
            const token = localStorage.getItem('jwtToken'); // Use localStorage
            const username = localStorage.getItem('userName'); // Use localStorage
  
            const formData = new FormData();
            formData.append('qn1', qn1);
            formData.append('qn2', qn2);
            formData.append('qn3', qn3);
            formData.append('qn4', qn4);
            formData.append('qn5', qn5);
            formData.append('game_type', game_type);
            formData.append('game_name', game_name);
    
            const response = await axios.post(
                `${API_BASE_URL}/api/spcbgnr/`,
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data', 
                    },
                    params: {
                        username: username,
                    },
                }
            );
    
            if (response.status === 200) {
                return true;
            }
        } catch (error) {
            console.error('Failed to add Answer:', error);
            return false;
        }
    },
    async SpcIntermediateAns(qn1, qn2, qn3, game_type, game_name) {
      try {
          const token = localStorage.getItem('jwtToken'); // Use localStorage
          const username = localStorage.getItem('userName'); // Use localStorage

          const formData = new FormData();
          formData.append('qn1', qn1);
          formData.append('qn2', qn2);
          formData.append('qn3', qn3);
          formData.append('game_type', game_type);
          formData.append('game_name', game_name);
  
          const response = await axios.post(
              `${API_BASE_URL}/api/spcntmdt/`,
              formData, 
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data', 
                  },
                  params: {
                      username: username,
                  },
              }
          );
  
          if (response.status === 200) {
              return true;
          }
      } catch (error) {
          console.error('Failed to add Answer:', error);
          return false;
      }
  },

    async SpcAdvancedAns(qn1, qn2, game_type, game_name) {
      try {
          const token = localStorage.getItem('jwtToken'); // Use localStorage
          const username = localStorage.getItem('userName'); // Use localStorage

          const formData = new FormData();
          formData.append('qn1', qn1);
          formData.append('qn2', qn2);
          formData.append('game_type', game_type);
          formData.append('game_name', game_name);

          const response = await axios.post(
              `${API_BASE_URL}/api/spcadvanced/`,
              formData, 
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data', 
                  },
                  params: {
                      username: username,
                  },
              }
          );

          if (response.status === 200) {
              return true;
          }
      } catch (error) {
          console.error('Failed to add Answer:', error);
          return false;
      }
  },

    async QLbBeginnerAns(qn1, qn2, qn3, game_type, game_name) {
      try {
          const token = localStorage.getItem('jwtToken'); // Use localStorage
          const username = localStorage.getItem('userName'); // Use localStorage

          const formData = new FormData();
          formData.append('qn1', qn1);
          formData.append('qn2', qn2);
          formData.append('qn3', qn3);
          formData.append('game_type', game_type);
          formData.append('game_name', game_name);

          const response = await axios.post(
              `${API_BASE_URL}/api/quabeginner/`,
              formData, 
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data', 
                  },
                  params: {
                      username: username,
                  },
              }
          );

          if (response.status === 200) {
              return true;
          }
      } catch (error) {
          console.error('Failed to add Answer:', error);
          return false;
      }
  },
    async QLbIntermediateAns(qn1, qn2, qn3, game_type, game_name) {
      try {
          const token = localStorage.getItem('jwtToken'); // Use localStorage
          const username = localStorage.getItem('userName'); // Use localStorage

          const formData = new FormData();
          formData.append('qn1', qn1);
          formData.append('qn2', qn2);
          formData.append('qn3', qn3);
          formData.append('game_type', game_type);
          formData.append('game_name', game_name);

          const response = await axios.post(
              `${API_BASE_URL}/api/quaintermediate/`,
              formData, 
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data', 
                  },
                  params: {
                      username: username,
                  },
              }
          );

          if (response.status === 200) {
              return true;
          }
      } catch (error) {
          console.error('Failed to add Answer:', error);
          return false;
      }
  },
    async QLbAdvancedAns(qn1, qn2, qn3, game_type, game_name) {
      try {
          const token = localStorage.getItem('jwtToken'); // Use localStorage
          const username = localStorage.getItem('userName'); // Use localStorage

          const formData = new FormData();
          formData.append('qn1', qn1);
          formData.append('qn2', qn2);
          formData.append('qn3', qn3);
          formData.append('game_type', game_type);
          formData.append('game_name', game_name);

          const response = await axios.post(
              `${API_BASE_URL}/api/quaadvanced/`,
              formData, 
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'multipart/form-data', 
                  },
                  params: {
                      username: username,
                  },
              }
          );

          if (response.status === 200) {
              return true;
          }
      } catch (error) {
          console.error('Failed to add Answer:', error);
          return false;
      }
  },
};



export default Auth;
