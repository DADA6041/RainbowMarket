import React from "react";
import styled from "styled-components";
import Follow from "../Follow/Follow";
import ProfileBasic from "../../../../assets/images/profile_big.png";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 110px;
    height: 110px;
    margin: 16px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileImg = styled.div`
  background-image: url(${ProfileBasic});
  background-repeat: none;
  background-size: cover;
`;

export default function ProfileHeader({ userInfo }) {
  return (
    <Header>
      <Follow follow={userInfo.followerCount} tofrom="followers" />
      <img src={userInfo.image} alt="" />
      <Follow follow={userInfo.followingCount} tofrom="followings" />
    </Header>
  );
}
