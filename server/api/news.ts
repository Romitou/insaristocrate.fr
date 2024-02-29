import { defineEventHandler } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const response = await axios.get('https://blog.insaristocrate.fr/api/discussions');
  if (!response || !response.data.data || response.data.data.length === 0) {
    return [];
  }

  const news = [];
  for (const post of response.data.data) {
    console.log(post.relationships.firstPost.data.id);
    console.log(response.data.included)
    let content = response.data.included.find(included => included.type === 'posts' && included.id === post.relationships.firstPost.data.id);
    if (content)
      content = content.attributes.contentHtml;
    news.push({
      title: post.attributes.title,
      createdAt: post.attributes.createdAt,
      content,
    })
  }

  return news;
})
