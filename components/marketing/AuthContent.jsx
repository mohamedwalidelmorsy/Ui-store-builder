'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Checkbox,
} from '@/components/ui'
import { Eye, EyeOff, Mail, Lock, Shield, CheckCircle2, AlertCircle } from 'lucide-react'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('signin')

  // Sign In State
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signInShowPassword, setSignInShowPassword] = useState(false)
  const [signInErrors, setSignInErrors] = useState({})
  const [signInLoading, setSignInLoading] = useState(false)

  // Sign Up State
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('')
  const [signUpShowPassword, setSignUpShowPassword] = useState(false)
  const [signUpShowConfirmPassword, setSignUpShowConfirmPassword] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [signUpErrors, setSignUpErrors] = useState({})
  const [signUpLoading, setSignUpLoading] = useState(false)

  const calculatePasswordStrength = (password) => {
    if (!password) return { strength: 0, label: '', color: '' }
    let strength = 0
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong']
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-[#38C695]', 'bg-[#38C695]']
    return {
      strength,
      label: labels[strength - 1] || 'Very Weak',
      color: colors[strength - 1] || 'bg-red-500',
      percentage: (strength / 5) * 100,
    }
  }
  const passwordStrength = calculatePasswordStrength(signUpPassword)

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateSignIn = () => {
    const errors = {}
    if (!signInEmail) errors.email = 'Email is required'
    else if (!validateEmail(signInEmail)) errors.email = 'Please enter a valid email'
    if (!signInPassword) errors.password = 'Password is required'
    setSignInErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateSignUp = () => {
    const errors = {}
    if (!signUpEmail) errors.email = 'Email is required'
    else if (!validateEmail(signUpEmail)) errors.email = 'Please enter a valid email'
    if (!signUpPassword) errors.password = 'Password is required'
    else if (signUpPassword.length < 8) errors.password = 'Password must be at least 8 characters'
    if (!signUpConfirmPassword) errors.confirmPassword = 'Please confirm your password'
    else if (signUpPassword !== signUpConfirmPassword) errors.confirmPassword = 'Passwords do not match'
    if (!termsAccepted) errors.terms = 'You must accept the terms and conditions'
    setSignUpErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    if (!validateSignIn()) return
    setSignInLoading(true)
    setTimeout(() => { setSignInLoading(false); alert('Sign in successful!') }, 2000)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!validateSignUp()) return
    setSignUpLoading(true)
    setTimeout(() => { setSignUpLoading(false); alert('Account created successfully!') }, 2000)
  }

  const handleSocialLogin = (provider) => alert(`Redirecting to ${provider} login...`)

  const SocialButton = ({ provider, icon, bgColor, hoverColor, textColor }) => (
    <Button
      type="button"
      variant="outline"
      className={`w-full h-12 text-base font-medium transition-all duration-300 ${bgColor} ${hoverColor} ${textColor} border border-gray-200 hover:border-gray-300`}
      onClick={() => handleSocialLogin(provider)}
    >
      {icon}
      <span className="ml-2">Continue with {provider}</span>
    </Button>
  )

  const GoogleIcon = (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
  const FacebookIcon = (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
  const TwitterIcon = (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
  const TikTokIcon = (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )

  const TrustBadges = () => (
    <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <CheckCircle2 className="h-4 w-4 text-[#38C695] flex-shrink-0" />
        <span>We&apos;ll never post to your account</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-4 w-4 text-[#38C695] flex-shrink-0" />
        <span>Your data is secure and encrypted</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-sm border border-gray-200 bg-white">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#38C695]/20 rounded-full ring-2 ring-[#38C695]/50">
                <Shield className="h-10 w-10 text-[#38C695]" strokeWidth={2.5} />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-center text-white">
              Welcome to Storebuilders.io
            </CardTitle>
            <CardDescription className="text-center text-white/80">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 p-1">
                <TabsTrigger value="signin" className="text-base">Log In</TabsTrigger>
                <TabsTrigger value="signup" className="text-base">Create Account</TabsTrigger>
              </TabsList>

              {/* Sign In */}
              <TabsContent value="signin" className="space-y-4">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-gray-700">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-[#38C695]" />
                      <Input id="signin-email" type="email" placeholder="Enter your email" className="pl-10 h-12 text-base" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} autoFocus />
                    </div>
                    {signInErrors.email && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signInErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-gray-700">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-[#38C695]" />
                      <Input id="signin-password" type={signInShowPassword ? 'text' : 'password'} placeholder="Enter your password" className="pl-10 pr-10 h-12 text-base" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
                      <button type="button" onClick={() => setSignInShowPassword(!signInShowPassword)} className="absolute right-3 top-3.5 text-[#38C695]">
                        {signInShowPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {signInErrors.password && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signInErrors.password}</p>}
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="text-sm text-[#38C695] font-medium">Forgot Password?</button>
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-semibold bg-[#38C695] text-white" disabled={signInLoading}>
                    {signInLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or continue with</span></div>
                </div>

                <div className="space-y-3">
                  <SocialButton provider="Google" bgColor="bg-gray-50" hoverColor="hover:bg-gray-100" textColor="text-gray-700" icon={GoogleIcon} />
                  <SocialButton provider="Facebook" bgColor="bg-[#1877F2]/10" hoverColor="hover:bg-[#1877F2]/20" textColor="text-[#1877F2]" icon={FacebookIcon} />
                  <SocialButton provider="Twitter" bgColor="bg-[#1DA1F2]/10" hoverColor="hover:bg-[#1DA1F2]/20" textColor="text-[#1DA1F2]" icon={TwitterIcon} />
                  <SocialButton provider="TikTok" bgColor="bg-[#69C9D0]/10" hoverColor="hover:bg-[#69C9D0]/20" textColor="text-[#69C9D0]" icon={TikTokIcon} />
                </div>
                <TrustBadges />
              </TabsContent>

              {/* Sign Up */}
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-700">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-[#38C695]" />
                      <Input id="signup-email" type="email" placeholder="Enter your email" className="pl-10 h-12 text-base" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} autoFocus />
                    </div>
                    {signUpErrors.email && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signUpErrors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-700">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-[#38C695]" />
                      <Input id="signup-password" type={signUpShowPassword ? 'text' : 'password'} placeholder="Create a password" className="pl-10 pr-10 h-12 text-base" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                      <button type="button" onClick={() => setSignUpShowPassword(!signUpShowPassword)} className="absolute right-3 top-3.5 text-[#38C695]">
                        {signUpShowPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {signUpPassword && (
                      <div className="space-y-2 mt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Password strength:</span>
                          <span className={`font-medium ${passwordStrength.strength <= 2 ? 'text-red-400' : passwordStrength.strength === 3 ? 'text-yellow-400' : 'text-[#38C695]'}`}>{passwordStrength.label}</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full transition-all duration-300 ${passwordStrength.color}`} style={{ width: `${passwordStrength.percentage}%` }} />
                        </div>
                      </div>
                    )}
                    {signUpErrors.password && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signUpErrors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-gray-700">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-[#38C695]" />
                      <Input id="signup-confirm-password" type={signUpShowConfirmPassword ? 'text' : 'password'} placeholder="Confirm your password" className="pl-10 pr-10 h-12 text-base" value={signUpConfirmPassword} onChange={(e) => setSignUpConfirmPassword(e.target.value)} />
                      <button type="button" onClick={() => setSignUpShowConfirmPassword(!signUpShowConfirmPassword)} className="absolute right-3 top-3.5 text-[#38C695]">
                        {signUpShowConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {signUpErrors.confirmPassword && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signUpErrors.confirmPassword}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" checked={termsAccepted} onCheckedChange={setTermsAccepted} className="mt-1" />
                      <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                        I agree to the <button type="button" className="text-[#38C695] underline">Terms of Service</button> and <button type="button" className="text-[#38C695] underline">Privacy Policy</button>
                      </Label>
                    </div>
                    {signUpErrors.terms && <p className="text-sm text-red-400 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{signUpErrors.terms}</p>}
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-semibold bg-[#38C695] text-white" disabled={signUpLoading}>
                    {signUpLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200" /></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or sign up with</span></div>
                </div>

                <div className="space-y-3">
                  <SocialButton provider="Google" bgColor="bg-gray-50" hoverColor="hover:bg-gray-100" textColor="text-gray-700" icon={GoogleIcon} />
                  <SocialButton provider="Facebook" bgColor="bg-[#1877F2]/10" hoverColor="hover:bg-[#1877F2]/20" textColor="text-[#1877F2]" icon={FacebookIcon} />
                  <SocialButton provider="Twitter" bgColor="bg-[#1DA1F2]/10" hoverColor="hover:bg-[#1DA1F2]/20" textColor="text-[#1DA1F2]" icon={TwitterIcon} />
                  <SocialButton provider="TikTok" bgColor="bg-[#69C9D0]/10" hoverColor="hover:bg-[#69C9D0]/20" textColor="text-[#69C9D0]" icon={TikTokIcon} />
                </div>
                <TrustBadges />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-600 mt-6">
          By continuing, you agree to our{' '}
          <button className="text-[#38C695] underline transition-colors">Terms of Service</button>{' '}
          and{' '}
          <button className="text-[#38C695] underline transition-colors">Privacy Policy</button>
        </p>
      </div>
    </div>
  )
}
