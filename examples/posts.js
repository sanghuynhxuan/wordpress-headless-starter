import { createWordPressClient } from '../src/client.js';
import { toPostPreview } from '../src/query.js';
const endpoint = process.env.WP_URL;
if (!endpoint) throw new Error('Set WP_URL to a WordPress site URL.');
const client = createWordPressClient(endpoint);
const posts = await client.posts({ per_page: 5, _fields: 'id,slug,title,excerpt,date_gmt' });
console.table(posts.map(toPostPreview));
