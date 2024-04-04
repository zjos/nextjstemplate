import React from 'react';

type Props = {};

const page = async (props: Props) => {
	const getresult = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/hello', { method: 'GET', cache: 'no-cache' });
			// console.log('🚀 ~ getresult ~ response:', response)
			const data = await response.json();
			const result = JSON.stringify(data.message);

			return (
				<>
					<h1>Resultaat GET</h1>
					<div>{result}</div>
				</>
			);
		} catch (error) {
			console.error('Er is een fout opgetreden bij het ophalen van gegevens:', error);
			return <div>Er is een fout opgetreden bij het ophalen van gegevens.</div>;
		}
	};

	const postresult = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/hello', { method: 'POST', cache: 'no-cache' });
			// console.log('🚀 ~ getresult ~ response:', response)
			const data = await response.json();
			const result = JSON.stringify(data.message);

			return (
				<>
					<h1>Resultaat POST</h1>
					<div>{result}</div>
				</>
			);
		} catch (error) {
			console.error('Er is een fout opgetreden bij het ophalen van gegevens:', error);
			return <div>Er is een fout opgetreden bij het ophalen van gegevens.</div>;
		}
	};

	return (
		<>
			{getresult()}
			<br />
			{postresult()}
		</>
	);
};

export default page;
