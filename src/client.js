export function createWordPressClient(baseUrl) {
  const api = new URL('/wp-json/wp/v2/', baseUrl);
  async function request(path, params = {}) {
    const url = new URL(path, api);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value)));
    const response = await fetch(url);
    if (!response.ok) throw new Error('WordPress API request failed (' + response.status + ')');
    return response.json();
  }
  return { posts: (params) => request('posts', params), pages: (params) => request('pages', params) };
}
