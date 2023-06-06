import type { Meta, StoryObj } from '@storybook/react'

import { Administration } from '~/components/pages/Admin'

export default {
  title: 'pages/Administration',
  component: Administration
} as Meta<typeof Administration>

type Story = StoryObj<typeof Administration>

export const Default: Story = { render: () => <Administration /> }
