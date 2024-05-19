import { siteConfig } from '@/config/site-config';
import { designPatternsDocsAllItems } from '@/config/tech/design-patterns-docs-config';
import { reactDocsAllItems } from '@/config/tech/react-docs-config';
import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;

  const routes = ['', 'about', 'app', 'blog/tags', 'tech', 'tech/react'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}${post.slug}`,
    lastModified: post.lastmod || post.date,
  }));

  const techReactRoutes = reactDocsAllItems.map((item) => ({
    url: `${siteUrl}/tech/react/${item.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const techDesignPatternsRoutes = designPatternsDocsAllItems.map((item) => ({
    url: `${siteUrl}/tech/design-patterns/${item.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [
    ...routes,
    ...blogRoutes,
    ...(techReactRoutes ?? []),
    ...(techDesignPatternsRoutes ?? []),
  ];
}
