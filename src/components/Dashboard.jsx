

export default function Dashboard(){
  const jwt_token = localStorage.getItem('jwt');

// Make all api call with jwt token in header
// fetch(`dashboad_url`, { headers: {Authorization: jwt_token}}

  
  return (
     
    <div style={{margin:"500px"}}>
      <p>Welcome to your Dashboard</p>
      <h1>My Activities</h1>
    </div>
  )
}