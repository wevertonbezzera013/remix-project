import type { Meta, StoryObj } from '@storybook/react'

import { CardLink } from '~/components/molecules/CardLink'

export default {
  title: 'molecules/CardLink',
  component: CardLink
} as Meta<typeof CardLink>

type Story = StoryObj<typeof CardLink>

export const Default: Story = {
  render: () => (
    <CardLink to="/dashboard" iconName="FaUserAlt">
      Test
    </CardLink>
  )
}