import React from 'react' // Import React

import clsx from 'clsx'

import { CardLink } from './CardLink'

export interface CardLinkListData {
  route: string
  iconName: string
  label: string
}

interface CardLinkListProps {
  data: CardLinkListData[]
  variant?: 'app' | 'admin'
  className?: string
}

export const CardLinkList = ({
  data,
  variant,
  className
}: CardLinkListProps) => {
  return (
    <div
      className={clsx(
        'grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        className
      )}
    >
      {data.map(item => (
        <CardLink
          key={item.label}
          to={item.route}
          iconName={item.iconName}
          variant={variant}
        >
          {item.label}
        </CardLink>
      ))}
    </div>
  )
}
