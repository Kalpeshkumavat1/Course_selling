import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function UserProfile(){
    const {username}=useParams();
    const {data,loading,err}=useFetch(`http://localhost:5000/user/profile/${username}`);
    if (loading) return <div>Loading...</div>;
    if (err) return <div>Error: {err}</div>;
    if (!data) return <div>User not found. Please sign up!</div>;
    return (
        <>
        <div className="userprofile">
            <h1>User Information</h1>
            <p>Email: {data.email}</p>
            <p>Username: {username}</p>
        </div>
        </>
    )
}
export default UserProfile;