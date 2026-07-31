export async function fetchWordPressPosts(endpoint) {
  const response = await fetch(new URL('/wp-json/wp/v2/posts', endpoint));
  if (!response.ok) throw new Error('WordPress API request failed');
  return response.json();
}
