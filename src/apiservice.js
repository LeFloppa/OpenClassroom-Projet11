const baseUrl = "http://localhost:3001/api/v1";

// Function to validate user's login information.
export async function validateLogin(loginData) {
  try {
    // Perform a POST request for user login.
    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Function to retrieve the user's profile.
export async function getUserProfile(token) {
  try {
    // Perform a POST request to obtain the user profile.
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the authentication token in the headers.
      },
      body: JSON.stringify(),
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUsername(token, newUsername) {
  try {
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}