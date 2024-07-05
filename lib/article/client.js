
export async function getAllArticlesByType(search, type, lightResult) {
	try {
		const request = search
			? `${process.env.NEXT_PUBLIC_API_URL}/articles?search=${search}`
			: `${process.env.NEXT_PUBLIC_API_URL}/articles?type=${type}&lightResult=${lightResult}`
		const res = await fetch(request, {
			method: 'GET', next: {revalidate: 120}
		}) || [];

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}


export async function getArticleBySlugAndType(slug, type) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}/${type}`, {
			method: 'GET', next: {revalidate: 120}
		}) || [];

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}