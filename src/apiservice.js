const baseUrl = "http://localhost:3001/api/v1";

export async function validateLogin(loginData) {
  try {
    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Invalid login credentials.");
      } else if (response.status === 500) {
        throw new Error("Server error, please try again later.");
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    }

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserProfile(token) {
  try {
    const response = await fetch(`${baseUrl}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
