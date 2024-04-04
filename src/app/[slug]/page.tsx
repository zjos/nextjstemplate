import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};

const page = (props: Props) => {
	const slug = props.params.slug;
	return <div>page {slug}</div>;
};

export default page;
