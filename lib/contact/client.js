export async function postContact(data) {
	try {
		const res = await fetch(`${process.env.NEXT_API_URL}/contact`, {
			method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json', 'x-dicodingo-user-key': process.env.NEXT_API_KEY},
		}) || [];

		return res;
	} catch (error) {
		console.log(error);
		return error;
	}
}