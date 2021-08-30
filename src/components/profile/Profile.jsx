import { Language, LocationOn, Twitter } from "@material-ui/icons";
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
        <div className="title">
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.url}
          </a>
        </div>
        <div className="desc">{data.bio}</div>
        <div className="repositories" onClick={() => show("repositories")}>
          <span>{data.repositories.totalCount}</span> repositories
        </div>
        <div className="nodes">
          <div
            className="followers"
            onClick={() => data.followers.totalCount > 0 && show("followers")}
          >
            <span>{data.followers.totalCount}</span> followers
          </div>
          <div
            className="following"
            onClick={() => data.following.totalCount > 0 && show("following")}
          >
            <span>{data.following.totalCount}</span> following
          </div>
        </div>
        <div className="location">
          {data.location && (
            <>
              <LocationOn style={{ fontSize: "16px" }} /> {data.location}
            </>
          )}
        </div>
        <div className="handle">
          {data.twitterUsername && (
            <>
              <Twitter style={{ fontSize: "16px" }} />{" "}
              <a
                href={`https://twitter.com/${data.twitterUsername}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.twitterUsername}
              </a>
            </>
          )}
        </div>
        <div className="website">
          {data.websiteUrl && (
            <>
              <Language style={{ fontSize: "16px" }} />{" "}
              <a href={data.websiteUrl}>{data.websiteUrl}</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
