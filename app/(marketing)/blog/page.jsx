import BlogContent from '@/components/marketing/BlogContent'

export const metadata = {
  title: 'Blog — StoreBuilders',
  description:
    'Tips, guides, and strategies to grow your e-commerce store on Shopify, eBay, and more.',
  openGraph: {
    title: 'Blog — StoreBuilders',
    description: 'Tips, guides, and strategies to grow your e-commerce store.',
    type: 'website',
  },
}

export default function BlogPage() {
  return <BlogContent />
}
