import React from 'react';
import GroupCell from '../components/GroupCell';

export const renderGroupsList = (items) => {
    let friends = null;
  if (items !== undefined && items !== null && items.length !== 0) {
        friends = items.map((friend) => (
            <GroupCell
                photo = {friend.photo_100}
                nameF = {friend.first_name}
                nameL = {friend.last_name}

                />
        ));
   }
    console.log(friends);
    return friends;
};