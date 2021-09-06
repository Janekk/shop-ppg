import Cookies from "js-cookie";

export function setToken(token) {
  if (typeof window === "undefined") {
    return;
  }
  if (token) {
    window.localStorage.setItem("token", token);
    Cookies.set("Authorization", token);
  } else {
    window.localStorage.removeItem("token");
    Cookies.remove("Authorization");
  }
}

export function getToken() {
  if (typeof window === "undefined") {
    return false;
  }
  let token = window.localStorage.getItem("token");
  if (!token) {
    token = Cookies.get("Authorization");
    if (token) {
      window.localStorage.setItem("token", token);
    }
  }
  return token;
}
