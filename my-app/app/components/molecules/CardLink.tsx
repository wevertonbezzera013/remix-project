import React from 'react' // Import React

import { Link } from '@remix-run/react'
import clsx from 'clsx'

import { Icon } from '../atoms/Icon'

interface CardLinkProps {
  to: string
  iconName: string
  variant?: 'app' | 'admin'
  children: React.ReactNode
}

const textStyle = {
  app: 'text-primary',
  admin: 'text-admin'
}

export const CardLink = ({
  to,
  iconName,
  variant = 'app',
  children
}: CardLinkProps) => {
  return (
    <Link
      to={to}
      className="border-[1px] rounded-md border-card-link-border flex flex-col items-center font-semibold p-5"
    >
      <span className={'rounded-full bg-card-link-bg p-3 flex flex-col'}>
        <Icon
          className={clsx('font-bold', textStyle[variant])}
          name={iconName}
          size={30}
        />
      </span>
      <span className="text-neutral text-semibold mt-3">{children}</span>
      <span className={clsx('font-bold mt-2', textStyle[variant])}>Test</span>
    </Link>
  )
}
