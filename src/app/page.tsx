import Component1 from '@/components/component1';
import { Button, Link } from '@nextui-org/react';

export default function Home() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center h-svh'>
			<Button color='primary'>NextUI-button</Button>
			<Component1 />
			<Button
				href='/helloAPI'
				as={Link}
				color='warning'>
				web API
			</Button>
		</div>
	);
}
