import * as React from 'react';

import { Button } from './styles';

interface Props {
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

function PrimaryButton({ onClick }: Props) {
	return (
		<Button type="submit" onClick={onClick}>Enviar</Button>
	);
}

export { PrimaryButton };
