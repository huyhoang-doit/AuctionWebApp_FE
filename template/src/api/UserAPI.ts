

interface LoginRequest {
    username: string;
    password: string;
  }

export const login = async (loginRequest: LoginRequest, setError: (message: string) => void) => {
    // end-point
    const URL = `http://localhost:8080/api/v1/auth/authenticate`;

    // call api
    try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginRequest),
        });
    
        if (response.status === 200) {
          const data = await response.json();
          const jwt = data.token;
          localStorage.setItem('token', jwt);
          return true;
        } else if (response.status === 202) {
          throw new Error('Your account is inactive, you need check email to active your account!');
        } else {
          throw new Error('Login failed. Please check your username and password!');
        }
      } catch (error) {
        setError((error as Error).message);
        return false;
      }
};