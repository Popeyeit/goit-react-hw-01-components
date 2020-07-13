import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  width: 400px;
  height: 100px;
  box-shadow: 0px 0px 3px #000;
  padding: 0 0 0 50px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  position: absolute;
  left: 3%;
  top: 40%;
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 5px;
`;

export const Name = styled.p`
  align-self: center;
  font-size: 30px;
`;
