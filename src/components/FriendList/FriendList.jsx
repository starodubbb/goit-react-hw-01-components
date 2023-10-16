import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

// "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
