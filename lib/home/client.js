
export async function getHomeData() {
	const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
		method: 'GET', next: { revalidate: 20 }
	}) || [];

	return res.json();
}