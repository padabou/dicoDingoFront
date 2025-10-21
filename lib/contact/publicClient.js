export async function postContact(data) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api-front/contact`, {
			method: 'POST', body: JSON.stringify(data)
		}) || [];

		return res;
	} catch (error) {
		console.log(error);
		return error;
	}
}