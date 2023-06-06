import React from 'react' // Import React
import { Route } from '~/utils/ui/Route'
import { CardLinkList } from '../molecules/CardLinkList'

export const routeList = () => [
  { route: Route.appUsers, iconName: 'FaUsers', label: 'users' },
  { route: Route.logs, iconName: 'FaFileContract', label: 'logs' }
]

export const Administration = () => {
  return (
    <article>
      <h1>Admin</h1>
      <CardLinkList className="mt-7" data={routeList()} />
    </article>
  )
}
