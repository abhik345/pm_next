const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const NEXT_PUBLIC_API_FORM_URL = process.env.NEXT_PUBLIC_API_FORM_URL;

export const fetchData = async (endpoint, options = {}) => {
  const url = `${NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, { method: 'GET', ...options });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const SubmitForm = async (endpoint) => {
  const url = `${NEXT_PUBLIC_API_FORM_URL}${endpoint}`;
  try {
    const response = await fetch(
      url,
      {method: 'POST'}
    );
    if (!response.ok) {
      throw new Error(`failed to Submit the form ${url}`)
    }
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}
