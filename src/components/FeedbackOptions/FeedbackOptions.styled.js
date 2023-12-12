import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;

  width: 80px;
  height: 40px;
  padding: 4px 14px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  font-weight: 700;
  background-color: bisque;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(161, 161, 218);
    color: bisque;
    scale: 1.2;
  }
`;
