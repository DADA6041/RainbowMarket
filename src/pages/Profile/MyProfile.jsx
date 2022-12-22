import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import LogOutAlert from "../../components/common/Modal/Alert/LogOutAlert";
import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const token = localStorage.getItem("token");
  const { getData } = useFetch();

  const [modalActive, setModalActive] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const [userInfo, setUserInfo] = useState({
    user: {
      _id: "",
      username: "",
      accountname: "",
      intro: "",
      image: "",
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  });

  useEffect(() => {
    getData(`/user/myinfo`, setUserInfo, token).catch((err) => alert(err));
  }, []);

  return (
    <>
      {!token ? (
        <Login />
      ) : (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection data={userInfo.user} isMine={true} />
            {/* 판매 중잉 아이템이 표시되는 섹션 */}
            <ProfileItemSection name={userInfo.user.accountname} />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection />
            <Modal
              modalActive={modalActive}
              setModalActive={setModalActive}
              isLogOut={isLogOut}
              setIsLogOut={setIsLogOut}
            />
            {isLogOut && (
              <LogOutAlert isLogOut={isLogOut} setIsLogOut={setIsLogOut} />
            )}
          </Wrapper>
        </>
      )}
    </>
  );
}