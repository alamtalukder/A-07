import React, { use } from "react";

const friendsPromise = fetch("/FriendsData.json").then((res) => res.json());
const AllFriends = () => {
  const friendsData = use(friendsPromise);
  console.log(friendsData, "friendsData");
  return (
    <div className="max-w-7xl mx-auto ">
      <h1>Your friends</h1>
      <div className="grid grid-cols-4 gap-5">
        {friendsData.map((friend) => {
            return (
                <div className="">
                    <div className="flex gap-5 card bg-base-200 w-96 inset-shadow-sm">
                        <figure>
                        <img className="border rounded-full"
                            src={friend.picture}
                            alt="picture"
                        />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title">
                            {friend.name}
                            <div className="badge badge-secondary">{friend.tags}</div>
                        </h2>
                        <p>
                            62d ago
                        </p>
                        <div>
                            <button className="btn">{friend.status}</button>
                        </div>
                    </div>
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};

export default AllFriends;
