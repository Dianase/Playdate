import {Link} from "react-router-dom"
import "../styles/dash.css";
import { BsFillPlusCircleFill } from 'react-icons/bs'

export default function MyActivities() {
  return (
    <>
      <div className="my-activities" style={{height: "90vh"}}>
        <h1>Here are your scheduled activities</h1>
        <p>You Have No Scheduled Activities</p>
       <Link to="/CreateEvent"> <span className="add-btn"><BsFillPlusCircleFill size={70}/></span></Link>
      </div>
      
    </>
  );
}
