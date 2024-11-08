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

export async function getTypeWithArticle(type) {
	try {
		const request = `${process.env.NEXT_API_URL}/types/${type}?withArticles=${true}`
		const res = await fetch(request, {
			method: 'GET', next: {revalidate: 1}
		}) || [];

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}