import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Button } from './styles';

interface Props {
	isLoading: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

function PrimaryButton({ onClick, isLoading }: Props) {
	return (
		<Button
			isLoading={isLoading}
			type="submit"
			onClick={onClick}
		>
			{
				isLoading ? (
					<FaSpinner color="#FFF" size={14} />
				) : 'Enviar'
			}
		</Button>
	);
}

export { PrimaryButton };
