import React from 'react';
import GroupCell from '../components/GroupCell';

export const renderGroupsList = (items) => {
    let friends = null;
    if (items !== undefined && items !== null && items.length !== 0) {
        friends = items.map((friends) => (
            <GroupCell
                photo = {friends.photo_100}
                />
        ));
    }
    return friends;
};