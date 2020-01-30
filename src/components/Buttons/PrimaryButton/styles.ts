import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
	isLoading: boolean;
}

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	
	to {
		transform: rotate(360deg);
	}
`;

export const Button = styled.button<ButtonProps>`
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

	${(props) => props.isLoading
		&& css`
        svg {
          animation: ${rotate} 2s linear infinite;
        }
      `}
`;
