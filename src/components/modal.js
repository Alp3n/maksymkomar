import styled from "styled-components"

const Modal = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Modal

const StyledWrapper = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
`
