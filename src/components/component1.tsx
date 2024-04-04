import { Button, Link } from '@nextui-org/react';
import React from 'react';

type Props = {};

const Component1 = (props: Props) => {
	return (
		<div className='flex flex-row gap-3'>
			<Button
				href='/1'
				as={Link}
				color='secondary'>
				slug 1
			</Button>
			<Button
				href='/2'
				as={Link}
				color='secondary'>
				slug 2
			</Button>
		</div>
	);
};

export default Component1;
