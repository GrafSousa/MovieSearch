import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: #7159c1;
  border: 0;
  padding: 0 32px;
  margin-left: 8px;
  color: #fff;
  border-radius: 4px;

  transition: background 0.2s;
	&:hover {
		background: ${darken(0.03, '#7159c1')};
	}
`;
