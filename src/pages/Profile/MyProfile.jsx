import ProfileItemSection from "../../components/Profile/ProfileItemSection/ProfileItemSection";
import ProfileFeedSection from "../../components/Profile/ProfileFeedSection/ProfileFeedSection";
import ProfileSection from "../../components/Profile/ProfileSection/ProfileSection";
import CommonTopBar from "../../components/TopBar/CommonTopBar/CommonTopBar";
import { Wrapper } from "./styledProfile";
import Login from "../../components/common/Login/Login";
import Modal from "../../components/common/Modal/Modal/Modal";
import { useEffect, useState } from "react";
import LogOutAlert from "../../components/common/Modal/Alert/LogOutAlert";
import useUserContext from "../../hooks/useUserContext";
import ProductModal from "../../components/common/Modal/Modal/ProductModal";

export default function Profile() {
  const { user } = useUserContext();

  const [product, setProduct] = useState(null);
  const [prodModal, setProdModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [postData, setPostData] = useState([]);

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
    if (!user) return;
    fetch(`https://mandarin.api.weniv.co.kr/user/myinfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("getData(/user/myinfo)의 응답 :\n", res);
        setUserInfo(res);
        return res;
      })
      .then((res) => {
        fetch(
          `https://mandarin.api.weniv.co.kr/post/${encodeURI(
            res.user.accountname
          )}/userpost`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(
              `getData(/post/${encodeURI(
                userInfo.user.accountname
              )}/userpost)의 응답 :\n`,
              res
            );
            setPostData(res.post);
          });
      });
  }, []);

  console.log("postData :", postData);

  return (
    <>
      {user ? (
        <>
          <CommonTopBar
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
          <Wrapper>
            {/* 팔로우 등 프로필이 표시되는 섹션 */}
            <ProfileSection data={userInfo.user} isMine={true} />
            {/* 판매 중잉 아이템이 표시되는 섹션 */}
            <ProfileItemSection
              name={userInfo.user.accountname}
              isMine={true}
              prodModal={prodModal}
              setProdModal={setProdModal}
              setProduct={setProduct}
            />
            {/* 쓴 글 목록이 표시되는 섹션 */}
            <ProfileFeedSection
              name={userInfo.user.accountname}
              data={postData}
            />
            <Modal
              modalActive={modalActive}
              setModalActive={setModalActive}
              isLogOut={isLogOut}
              setIsLogOut={setIsLogOut}
            />
            <ProductModal
              prodModal={prodModal}
              setProdModal={setProdModal}
              product={product}
              setProduct={setProduct}
            />
            {isLogOut && (
              <LogOutAlert isLogOut={isLogOut} setIsLogOut={setIsLogOut} />
            )}
          </Wrapper>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
