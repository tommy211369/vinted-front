import React from "react";

export default function UserInfos({ data }) {
  return (
    <div className="user">
      <p>{data.product_name}</p>
      <p>{data.product_description}</p>{" "}
      <div className="user-infos">
        {data.owner.account.avatar.secure_url ? (
          <img
            src={data.owner.account.avatar.secure_url}
            alt={data.owner.account.username}
          />
        ) : (
          <div></div>
        )}{" "}
        <p>{data.owner.account.username}</p>
      </div>
    </div>
  );
}
