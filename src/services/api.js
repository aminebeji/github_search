
export const BASE_URL = process.env.VUE_APP_BASE_URL;
export const api = async (url, params = {}) => {

  params = Object.assign(
    {
      mode: "cors",
      cache: "no-cache",
    },
    params
  );

  params.headers = Object.assign(
    {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    },
    params.headers
  );

  let response = await fetch(BASE_URL + url, params);
  let json = (await response.json()) || {};
  if (!response.ok) {
    let errorMessage = json.error || response.status;
    throw new Error(errorMessage);
  }
  return json;
};
