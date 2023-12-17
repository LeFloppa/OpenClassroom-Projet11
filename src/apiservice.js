const baseUrl = 'http://localhost:3001/api/v1';
  
export async function validateLogin(loginData) {
    try {
      const response = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  export async function getUserProfile(token) {
    try {
      const response = await fetch(`${baseUrl}/user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(),
      });
  
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }