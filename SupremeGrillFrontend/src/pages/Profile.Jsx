import axios from "axios";
import ProfileForm from "../components/ProfileForm";
import "../styles/Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <h1> Profile</h1>
      <ProfileForm />
    </div>
  );
};
export default Profile;
