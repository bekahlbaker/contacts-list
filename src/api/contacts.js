// URLS
const BASE_URL = `https://randomuser.me/api/`;
const GET_CONTACTS = count => `${BASE_URL}?results=${count}`;

// API calls
export const getContacts = async count => {
  const response = await fetch(GET_CONTACTS(count));
  return response.json();
};
