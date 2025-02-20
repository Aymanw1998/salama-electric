import axios from "axios";

// const API_BASE_URL = process.env.URL_S || "https://sportapp-server.onrender.com/api";
const API_BASE_URL = "https://salama-electric-server.onrender.com"
export const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// פונקציה להגדרת טוקן בבקשות
export const setAuthToken = (token) => {
  if (token) {
    apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete apiService.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

apiService.interceptors.response.use(
  response => response, // מחזיר את התגובה כרגיל אם אין שגיאות
  error => {
    if (!error.response) {
     //console.error('Network error:', error);
      // alert('שגיאת רשת: אנא בדוק את החיבור שלך.');
    } else {
      const { status, data } = error.response;
      console.log(data);
      switch (status) {
        case 400:
          // alert(`שגיאת בקשה: ${data.message || 'בקשה לא חוקית'}`);
          break;
        case 401:
          // alert('שגיאה: אין לך הרשאה לגשת למשאב זה.');
          // אפשר להפנות לדף התחברות אם צריך
          break;
        case 403:
          // alert('גישה נדחתה.');
          break;
        case 404:
          // alert('המשאב לא נמצא.');
          break;
        case 500:
          // alert('שגיאה בשרת. נסה שוב מאוחר יותר.');
          break;
        default:
          // alert(`שגיאה בלתי צפויה (קוד: ${status})`);
      }
    }

    return//console.log(error);
  }
);


export const getAllPostAPI = async() => {
  try{
    const res = await apiService.get("/api/post")
   //console.log("getAllPost res", res);
    return res.data
  }
  catch(err){
   //console.log(err);
    return null;
  } 
}
export const createPostAPI = async(name, msg) => {
  try{
  const res = await apiService.post("/api/post", {name: name, msg:msg})
  return res.data;
  } catch(err){
   //console.log(err);
    return null;
  }
} 
export const updatePostAPI = async(id, msg) => {
  try{
  const res = await apiService.put("/api/post/"+id, {msg: msg})
  return res.data
  } catch(err){
   //console.log(err);
    return null;
  }
}
export const deletePostAPI = async(id) => {
  try{
  const res = await apiService.delete("/api/post/"+id)
  return res.data;
  } catch(err){
   //console.log(err);
    return null;
  }
} 
