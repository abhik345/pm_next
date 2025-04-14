const NEXT_PUBLIC_API_BASE_URL = "https://api.pramodmaloo.com/wp-json/wp/v2";

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

// export const fetchData2= async(endpoint,options={})=>{
//   const url=`${NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
//   try {
//     const response = await axios.get(url,{method:'GET',...options});
//     if(!response.ok){
//       throw new Error(`Failed to fetch data from ${url}`);
//     }
//     return response
//   } catch (error) {
//     console.error(error);
//   }
// }

