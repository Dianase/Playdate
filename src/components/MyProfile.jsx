import Dashboard from "./Dashboard";
import MyActivities from "./MyActivities";
import MyPlaces from "./MyPlaces";

export default function MyProfile(){
  const jwt_token = localStorage.getItem("jwt");
  // Make all api call with jwt token in header
  // fetch(`dashboad_url`, { headers: {Authorization: jwt_token}}

  return(
    <>
    <Dashboard/>
    <div className="dash-logo" >
        <span><h2>Hello, welcome to your Xplore Dashboard</h2></span>
        <img src="Xlogobg.png" alt="Xplore logo" className="dash-img" />
      </div>
      <MyActivities/>
      <MyPlaces/>
    </>
  )
}