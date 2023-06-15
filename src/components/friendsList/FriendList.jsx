import PropTypes, { object } from 'prop-types';

import { FriendsItem } from './FriendList.styled';
import { FriendStatus } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsItem key={id}>
            <FriendStatus status={isOnline ? 'true' : 'false'} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendsItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(object),
};
