import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  background: #fff;
  
  img {
    max-width: 250px;
    align-self: center;
  }

  strong {
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
    color: #333;
  }

  span {
    font-size: 16px;
  }
`;
