import cookie from "react-cookies";

export const authorized = async () => {
  const checkAuthorizedResponse = await fetch("/auth", {
    method: "POST",
    headers: {
      Authorization: cookie.load("token"),
    },
  });
  const res = await checkAuthorizedResponse.json();
  if (res.logged_in) {
    return true;
  }
  return false;
};
