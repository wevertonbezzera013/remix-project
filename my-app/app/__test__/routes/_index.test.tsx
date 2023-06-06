import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Index from '~/routes/_index'

describe('<Index />', () => {
  it('should render a component', async () => {
    await act(async () => {
      render(
        <Router>
          <Index />
        </Router>
      )
    })

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
