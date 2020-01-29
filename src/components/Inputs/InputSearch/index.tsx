import * as React from 'react';

import { Input, Container } from './style';
import { PrimaryButton } from '~/components/Buttons/PrimaryButton';

interface Props {
	placeholder: string;
	onChange: (event: React.ChangeEvent<any>) => void;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

function InputSearch({ placeholder, onChange, onClick }: Props) {
	return (
		<Container>
			<Input
				onChange={onChange}
				placeholder={placeholder}
			/>
			<PrimaryButton onClick={onClick} />
		</Container>
	);
}

export { InputSearch };
