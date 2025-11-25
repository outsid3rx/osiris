import clsx from 'clsx'
import type { SVGProps } from 'react'

interface IProps extends SVGProps<SVGSVGElement> {
  name: string
}

export const Icon = ({ name, className, ...props }: IProps) => {
  return (
    <svg
      className={clsx(
        'select-none fill-current inline-block text-inherit box-content',
        className,
      )}
      focusable="false"
      aria-hidden
      {...props}
    >
      <use href={`/sprites/sprite.svg#${name}`} />
    </svg>
  )
}
