import { defineEventHandler } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const response = await fetch('https://blog.insaristocrate.fr/api/discussions');
  if (!response || !response.ok) {
    return [];
  }
  const data = await response.json()
  if (!data || !data.data || !data.data.length === 0) {
    return [];
  }

  const news = [];
  for (const post of data.data) {
    let content = data.included.find(included => included.type === 'posts' && included.id === post.relationships.firstPost.data.id);
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
