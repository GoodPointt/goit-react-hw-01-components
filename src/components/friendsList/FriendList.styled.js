import { styled } from 'styled-components';

export const ListOfFriends = styled.ul``;

export const FriendsItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #e0e0e0;
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 0px 50px 15px rgba(188, 188, 188, 0.282);
    transform: scale(1.2);
    border-radius: 20px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
