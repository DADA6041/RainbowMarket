// 게시물 추가 : 업로드 페이지
import profileImgSmall from "../../assets/images/profile_small.png";
import sIconMoreVertical from "../../assets/images/s-icon-more-vertical.png";
const Post = () => {
  return (
    <>
      <img src={profileImgSmall} alt="프로필 이미지" />
      <div>
        <div>
          <p>애월읍 위니브 감귤농장</p>
          <p>@ weniv_Mandarin</p>
          <img src={sIconMoreVertical} alt="" />
        </div>
        <p>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
      </div>
    </>
  );
};
export default Post;
