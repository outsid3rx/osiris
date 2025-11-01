import { Loader2Icon } from 'lucide-react'
import { ComponentProps } from 'react'

import { cn } from '@/shared/shadcn/lib/utils'

function Spinner({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
