import Dashboard from "./Dashboard";
import MyActivities from "./MyActivities";
import MyPlaces from "./MyPlaces";
import '../styles/profile.css'


export default function MyProfile(){
  

  return(
    <>
    <Dashboard/>
    <div className="profile-heading">
        <h4 className="welcome-msg">Welcome to your Xplore Dashboard</h4>
        <img src="Xlogobg.png" alt="Xplore logo" className="dash-img" />
      </div>
      <MyActivities/>
      <MyPlaces/>
    </>
  )
}