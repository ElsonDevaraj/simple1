import React, { useState } from "react";
import UserCard from "./UserCard";
import PostCard from "./PostCard";
const Dashboard = () => {
  const [users] = useState([
    { id: 1, name: "Elson", bio: "Frontend Developer" },
    { id: 2, name: "Devaraj", bio: "Backend Developer" },
  ]);

  const [posts] = useState([
    {
      id: 1,
      title: "My First Post",
      content: "First Intern  project",
      author: "Elson",
    },
    {
      id: 2,
      title: "Exciting News",
      content: "Just launched my new website!",
      author: "Devaraj",
    },
  ]);

  const [following, setFollowing] = useState([]);

  const handleFollowToggle = (userId, isFollowing) => {
    if (isFollowing) {
      setFollowing([...following, userId]);
    } else {
      setFollowing(following.filter((id) => id !== userId));
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollowToggle={handleFollowToggle}
          />
        ))}
      </div>
      <h3>Posts</h3>
      <div className="post-list">
        {posts
          .filter((post) =>
            following.includes(
              users.find((user) => user.name === post.author).id
            )
          )
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
