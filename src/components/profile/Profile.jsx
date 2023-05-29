import user from '../profile/user';
import propTypes from 'prop-types';

const { username, tag, location, avatar, stats } = user;

export const Profile = () => {
  return (
    <div
      className="profile"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        textAlign: 'center',
      }}
    >
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="200" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul
        className="stats"
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '10px',
          margin: '0',
          padding: '0',
        }}
      >
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};
