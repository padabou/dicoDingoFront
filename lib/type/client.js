export async function getAllTypes() {
	try {
		const res = await fetch(`${process.env.NEXT_API_URL}/types`, {
			method: 'GET', next: {revalidate: 1}
		}) || [];

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}