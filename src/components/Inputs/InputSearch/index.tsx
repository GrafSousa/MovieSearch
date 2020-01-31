import * as React from 'react';

import { Input, Container } from './style';
import { PrimaryButton } from '~/components/Buttons/PrimaryButton';

interface Props {
  value: string | number | string | undefined;
	placeholder: string;
	isLoading: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

function InputSearch({ placeholder, onChange, onClick, isLoading, value }: Props) {
	return (
		<Container>
			<Input
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<PrimaryButton onClick={onClick} isLoading={isLoading} />
		</Container>
	);
}

export { InputSearch };
