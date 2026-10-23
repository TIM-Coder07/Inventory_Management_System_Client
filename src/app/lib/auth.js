
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function authRequest(endpoint, data) {
  const response = await fetch(`${API_URL}/api/auth/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  // Backend returns { token, user, message }
  if (result.token && result.user) {
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
  }

  return result;
}

export function registerUser(data) {
  return authRequest("register", data);
}

export function loginUser(data) {
  return authRequest("login", data);
}
