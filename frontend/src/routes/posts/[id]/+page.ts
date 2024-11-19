import type { PageLoad } from './$types';
import type { Post } from '$lib/types/post';

export const load: PageLoad = async ({ params }) => {
	const response = await fetch("http://localhost:3000/posts/" + params.id);
	const post: Post = await response.json();

	return {
		post
	};
};