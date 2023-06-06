import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Import the MemoryRouter
import { CardLink } from '~/components/molecules/CardLink'

describe('<CardLink />', () => {
  it('should render correctly', () => {
    const to = '/dashboard'
    const iconName = 'FaFileInvoiceDollar'
    const label = 'Dashboard'

    const { container } = render(
      <MemoryRouter>
        {' '}
        {/* Wrap the component with MemoryRouter */}
        <CardLink to={to} iconName={iconName}>
          {label}
        </CardLink>
      </MemoryRouter>
    )

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
