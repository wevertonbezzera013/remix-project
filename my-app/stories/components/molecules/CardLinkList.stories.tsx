import type { Meta, StoryObj } from '@storybook/react'

import { CardLinkList } from '~/components/molecules/CardLinkList'
import { Route } from '~/utils/ui/Route'

export default {
  title: 'molecules/CardLinkList',
  component: CardLinkList
} as Meta<typeof CardLinkList>

type Story = StoryObj<typeof CardLinkList>

export const Default: Story = {
  render: () => (
    <CardLinkList
      data={[
        {
          route: Route.appUsers,
          iconName: 'FaFileContract',
          label: 'Users'
        },
        {
          route: Route.logs,
          iconName: 'FaArrowLeft',
          label: 'Sistema'
        }
      ]}
    />
  )
}
