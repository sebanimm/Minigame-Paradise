import styled from "styled-components";

export const Container = styled.div`
  width: 460px;
  display: flex;
  font-size: 40px;
  flex-direction: column;
  margin: auto;
`;

export const Option = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 40px 0;
  margin: 10px 0;
`;

export const Select = styled.img<{ id: string }>`
  opacity: ${({ id }) => (id === "false" ? 0 : 1)};
  width: 40px;
  height: 40px;
`;

export const Text = styled.div`
  text-align: center;
  width: 300px;
`;
