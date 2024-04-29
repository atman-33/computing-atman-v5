import { siteConfig } from '@/config/site-config';
import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;
  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.lastmod || post.date,
  }));

  const routes = ['', 'blog/tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes];
}
