import { siteConfig } from '@/config/site-config';
import { reactDocsConfig } from '@/config/tech/react-docs-config';
import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;

  const routes = ['', 'blog/tags', 'tech', 'tech/react'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.lastmod || post.date,
  }));

  const techReactRoutes = reactDocsConfig.sidebarNav[0]?.items.map((item) => ({
    url: `${siteUrl}/${item.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes, ...(techReactRoutes ?? [])];
}
