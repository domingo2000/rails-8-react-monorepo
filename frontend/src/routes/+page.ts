import type { PageLoad } from './$types';
import type { Post } from '$lib/types/post';

export const load: PageLoad = async ( { fetch }) => {
	const response = await fetch('http://localhost:3000/posts');
	const posts: Post[] = await response.json();

	return {
		posts
	};
};
