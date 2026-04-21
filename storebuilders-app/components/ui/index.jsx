import * as React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Button
const buttonVariants = {
  default: 'bg-[#38C695] text-white hover:bg-[#2da97c]',
  outline: 'border border-current bg-transparent hover:bg-white/10',
  ghost: 'bg-transparent hover:bg-white/10',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
}
const buttonSizes = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1.5 text-xs',
  lg: 'px-6 py-3 text-base',
}

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 cursor-pointer',
        buttonVariants[variant] ?? buttonVariants.default,
        buttonSizes[size] ?? buttonSizes.default,
        className
      )}
      {...props}
    />
  )
)
Button.displayName = 'Button'

// Card
export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-lg border bg-white shadow-sm', className)} {...props} />
))
Card.displayName = 'Card'

export const CardHeader = React.forwardRef(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6 rounded-t-lg', className)}
    style={{ background: 'linear-gradient(135deg, #1D3A63 0%, #2a4d7a 100%)', ...style }}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-lg font-semibold leading-none', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-gray-500', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-5', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

// Input
export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38C695] disabled:opacity-50',
      className
    )}
    {...props}
  />
))
Input.displayName = 'Input'

// Label
export const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props} />
))
Label.displayName = 'Label'

// Badge
export const Badge = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', className)}
    {...props}
  />
))
Badge.displayName = 'Badge'

// Checkbox
export const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange?.(e.target.checked)}
    className={cn('h-4 w-4 rounded border-gray-300 text-[#38C695] focus:ring-[#38C695] cursor-pointer', className)}
    {...props}
  />
))
Checkbox.displayName = 'Checkbox'

// Tabs
const TabsContext = React.createContext({ value: '', onValueChange: () => {} })

export const Tabs = ({ value, onValueChange, defaultValue, className, children, ...props }) => {
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const controlled = value !== undefined
  const current = controlled ? value : internal
  const setCurrent = controlled ? onValueChange : setInternal
  return (
    <TabsContext.Provider value={{ value: current, onValueChange: setCurrent }}>
      <div className={cn('', className)} {...props}>{children}</div>
    </TabsContext.Provider>
  )
}

export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('inline-flex rounded-md bg-gray-100 p-1', className)} {...props} />
))
TabsList.displayName = 'TabsList'

export const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => {
  const { value: current, onValueChange } = React.useContext(TabsContext)
  return (
    <button
      ref={ref}
      onClick={() => onValueChange(value)}
      className={cn(
        'px-3 py-1.5 text-sm font-medium rounded transition-all',
        current === value ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = 'TabsTrigger'

export const TabsContent = React.forwardRef(({ className, value, ...props }, ref) => {
  const { value: current } = React.useContext(TabsContext)
  if (current !== value) return null
  return <div ref={ref} className={cn('mt-2', className)} {...props} />
})
TabsContent.displayName = 'TabsContent'

// Progress
export const Progress = React.forwardRef(({ className, value = 0, ...props }, ref) => (
  <div ref={ref} className={cn('w-full bg-gray-200 rounded-full h-2', className)} {...props}>
    <div className="bg-[#38C695] h-2 rounded-full transition-all" style={{ width: `${value}%` }} />
  </div>
))
Progress.displayName = 'Progress'

// Select (simple native wrapper)
export const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const controlled = value !== undefined
  const current = controlled ? value : internal
  const setCurrent = controlled ? onValueChange : setInternal
  return React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { value: current, onValueChange: setCurrent }) : child
  )
}

export const SelectTrigger = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => (
  <select
    ref={ref}
    value={value}
    onChange={(e) => onValueChange?.(e.target.value)}
    className={cn('flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38C695]', className)}
    {...props}
  >
    {children}
  </select>
))
SelectTrigger.displayName = 'SelectTrigger'

export const SelectValue = () => null
export const SelectContent = ({ children }) => <>{children}</>
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>
