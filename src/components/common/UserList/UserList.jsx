import { Link } from "react-router-dom";
import defaultProfile from "../../../assets/images/profile_small.png";
import {
  StyledLi,
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledStrong,
  StyledSmall,
  StyledButton,
} from "./styledUserList";

export default function UserList(props) {
  return (
    <StyledLi>
      <StyledLink>
        <StyledImg
          src={defaultProfile}
          alt=""
          style={{ width: `${props.width}` }}
        />
        <StyledDiv>
          <StyledStrong>{props.username}</StyledStrong>
          <StyledSmall>@ {props.accountname}</StyledSmall>
        </StyledDiv>
      </StyledLink>
    </StyledLi>
  );
}
