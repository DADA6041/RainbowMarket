import styled from "styled-components";

export const ModalWrapper = styled.section`
  /* 모달창 외부 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;

  /* 모달창 내부 */
  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 36px 0 10px;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
  }
  ul::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 16px;
    transform: translateX(-50%);
  }
  li {
    /* margin-top: 16px; */
    height: 46px;
    padding-left: 26px;
    display: flex;
    width: 100%;
    bottom: 0;
  }

  button {
    display: flex;
    color: red;
    font-weight: 400;
    line-height: 17.53px;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`;