import { defineEventHandler } from 'h3';

const cfHeaders = {
  'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID || '',
  'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET || ''
};

export default defineEventHandler(async (event) => {
  let response;
  try {
    response = await fetch('https://blog.insaristocrate.fr/api/discussions', { headers: cfHeaders });
  } catch (e) {
    console.error(e);
    return [];
  }
  if (!response || !response.ok) {
    return [];
  }
  const data = await response.json();
  if (!data || !data.data || data.data.length === 0) {
    return [];
  }

  const news = [];
  for (const post of data.data) {
    let postResponse;
    let content;
    try {
      postResponse = await fetch(`https://blog.insaristocrate.fr/api/discussions/${post.attributes.slug}?bySlug=true`, { headers: cfHeaders });
      if (!postResponse || !postResponse.ok) {
        return [];
      }
      const data = await postResponse.json();
      if (!data || !data.data || data.data.length === 0) {
        return [];
      }
      content = data.included.find(included => included.type === 'posts' && included.id === data.data.relationships.posts.data[0].id);
    } catch (e) {
      console.error(e);
      continue;
    }

    if (content) content = content.attributes.contentHtml;
    news.push({
      title: post.attributes.title,
      slug: post.attributes.slug,
      createdAt: post.attributes.createdAt,
      content,
      readingTime: readingTime(content)
    });
  }

  return news;
});

function readingTime(text: string): number {
  const wpm = 180;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
