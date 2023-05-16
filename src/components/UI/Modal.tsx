import { ReactNode } from "react";
import styled from "styled-components";
import { openScroll } from "../../utils/lock-scroll";

type props = {
  className?: string;
  visible: boolean;
  children: ReactNode;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ className, visible, children, setIsModal }: props) => {
  return (
    <>
      <ModalOverlay
        visible={visible ? 1 : 0}
        onClick={() => {
          setIsModal(false);
          openScroll();
        }}
      />
      <ModalContainer visible={visible ? 1 : 0} className={className}>
        {children}
      </ModalContainer>
    </>
  );
};

const ModalOverlay = styled.div<{ visible: number }>`
  box-sizing: border-box;
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const ModalContainer = styled.div<{ visible: number }>`
  box-sizing: border-box;
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export default Modal;
