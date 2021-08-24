import UserCard from "../../shared/components/Card";
import NoResult from "./NoResult";
import { nanoid } from 'nanoid'
import './css/result.scss';

const Result = ({ searchResults: { nodes, userCount }, setProfile }) => {
  if (nodes.length === 0) return <NoResult />;

  return (
    <div className="result-wrapper">
      <p>{userCount} developer{userCount > 1 && 's'} found.</p>
      <div className="grid-wrapper">
        {nodes.map(({ avatarUrl, name, login }) => (
          <div className="grid-item" key={nanoid()}>
            <UserCard
              imageUrl={avatarUrl}
              name={name}
              login={login}
              profile={setProfile}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
