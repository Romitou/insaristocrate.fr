import { defineEventHandler } from 'h3';
import axios from 'axios';

const cfHeaders = {
  'CF-Access-Client-Id': '2caa37f6eb1823e2a79331533603bb41.access',
  'CF-Access-Client-Secret': 'd91d489421934259bbd677d3457f4bf53914d2c9a381dde77c4d42a410d49a66'
};

export default defineEventHandler(async (event) => {
  let response;
  try {
    response = await fetch('https://blog.insaristocrate.fr/api/discussions', { headers: cfHeaders });
  } catch (e) {
    console.log(e);
    return [];
  }
  if (!response || !response.ok) {
    return [];
  }
  const data = await response.json()
  if (!data || !data.data || !data.data.length === 0) {
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
      const data = await postResponse.json()
      if (!data || !data.data || !data.data.length === 0) {
        return [];
      }
      content = data.included.find(included => included.type === 'posts' && included.id === data.data.relationships.posts.data[0].id);
    } catch (e) {
      console.log(e);
      continue;
    }

    if (content)
      content = content.attributes.contentHtml;
    news.push({
      title: post.attributes.title,
      slug: post.attributes.slug,
      createdAt: post.attributes.createdAt,
      content,
      readingTime: readingTime(content)
    })
  }

  return news;
})

function readingTime(text: string): number {
  const wpm = 180;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}
