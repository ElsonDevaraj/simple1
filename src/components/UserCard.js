import React, { useState } from "react";
const UserCard = ({ user, onFollowToggle }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    onFollowToggle(user.id, !isFollowing);
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <button onClick={handleFollowToggle}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
