import UserCard from "../../shared/components/Card";
import NoResult from "./NoResult";
import { nanoid } from "nanoid";
import "./css/result.scss";

const Result = ({ searchResults: { nodes, userCount }, setProfile }) => {
  if (!nodes || nodes.length === 0) return <NoResult />;

  return (
    <div className="result-wrapper">
      <p>
        {userCount} developer{userCount > 1 && "s"} found.
      </p>
      <div className="grid-wrapper">
        {nodes.reverse().map(
          ({
            __typename,
            avatarUrl,
            name,
            login,
            repositories,
            followers,
            following,
          }) => {
            if (__typename.toLowerCase() !== "user") return null;
            return (
              <div className="grid-item" key={nanoid()}>
                <UserCard
                  imageUrl={avatarUrl}
                  name={name}
                  login={login}
                  profile={setProfile}
                  repositories={repositories.totalCount}
                  followers={followers.totalCount}
                  following={following.totalCount}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Result;
