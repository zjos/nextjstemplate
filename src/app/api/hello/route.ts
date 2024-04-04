import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	console.log('🚀 ~ GET ~ request:', request)
	return NextResponse.json({ message: 'Hallo vanuit Next.js via een GET-verzoek!' }, { status: 200 });
}

export async function POST(request: Request) {
	return NextResponse.json({ message: 'Hallo vanuit Next.js via een POST-verzoek!' });
}
