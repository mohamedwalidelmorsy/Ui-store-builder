import AuthContent from '@/components/marketing/AuthContent'

export const metadata = {
  title: 'Sign In — StoreBuilders',
  description: 'Sign in or create your StoreBuilders account to start building your online store.',
  openGraph: {
    title: 'Sign In — StoreBuilders',
    description: 'Access your StoreBuilders dashboard.',
    type: 'website',
  },
}

export default function AuthPage() {
  return <AuthContent />
}
