import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RankingWrapper = styled.div`
  overflow-y: scroll;
  flex: auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  margin: 30px 0;
  width: 786px;
  height: 50px;
  background-color: #9ea4aa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  input {
    background-color: #9ea4aa;
    width: 80%;
    height: 80%;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 174px;
  height: 50px;
  background-color: #9ea4aa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
`;

export const Form = styled.form`
  width: 990px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
