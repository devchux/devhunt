import imageLink from "../../assets/images/profile.jpg";
import "./css/profile.scss";

const Profile = ({ show }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-img-wrapper">
        <div className="profile-img">
          <img src={imageLink} alt="" />
        </div>
        <div className="profile-name">
          <h3>Full Name</h3>
          <p>Username</p>
        </div>
      </div>
      <div className="details-wrapper">
        <div className="title">Software Engineer</div>
        <div className="desc">
          export default export default export default export default export
          default export default export default export default export default
          export default{" "}
        </div>
        <div className="repositories" onClick={() => show("repo-list")}>
          <span>0</span> repositories
        </div>
        <div className="nodes">
          <div className="followers" onClick={() => show("followers")}>
            <span>0</span> followers
          </div>
          <div className="following" onClick={() => show("following")}>
            <span>0</span> following
          </div>
        </div>
        <div className="location">Nigeria</div>
        <div className="handle">iAmHe</div>
      </div>
    </div>
  );
};

export default Profile;
