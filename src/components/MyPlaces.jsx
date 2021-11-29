import { Link } from "react-router-dom"
import '../styles/dash.css'
import { BsFillPlusCircleFill } from "react-icons/bs"


export default function MyPlaces() {

 
  return (
    <div className="my-places" >
    
      <h1>Here are your Favorite Places</h1>
      <p>Add Places</p>
      <Link to="/Places"> <span className="add-btn"><BsFillPlusCircleFill size={70}/></span></Link>
    </div>
  );
}