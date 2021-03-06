import styled from "styled-components";
 
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 500px;
  height: auto;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 14px;
  padding: 20px;

    & p {
      margin:10px 0;
    }
`;
