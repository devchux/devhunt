import { LocationOn, Twitter } from "@material-ui/icons";
import imageLink from "../../assets/images/profile.jpg";
import "./css/profile.scss";

const Profile = ({ show, data }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-img-wrapper">
        <div className="profile-img">
          <img src={data.avatarUrl} alt={data.name || data.login} />
        </div>
        <div className="profile-name">
          <h3>{data.name || data.login}</h3>
          <p>{data.login}</p>
        </div>
      </div>
      <div className="details-wrapper">
        <div className="title">Software Engineer</div>
        <div className="desc">
        {data.bio}
        </div>
        <div className="repositories" onClick={() => show("repositories")}>
          <span>{data.repositories.totalCount}</span> repositories
        </div>
        <div className="nodes">
          <div className="followers" onClick={() => show("followers")}>
            <span>{data.followers.totalCount}</span> followers
          </div>
          <div className="following" onClick={() => show("following")}>
            <span>{data.following.totalCount}</span> following
          </div>
        </div>
        <div className="location">
          <LocationOn style={{ fontSize: "16px" }} /> {data.location}
        </div>
        <div className="handle">
          <Twitter style={{ fontSize: "16px" }} /> {data.twitterUsername}
        </div>
      </div>
    </div>
  );
};

export default Profile;
