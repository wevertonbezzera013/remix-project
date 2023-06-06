import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Administration } from '~/components/pages/Admin'

describe('Administration component', () => {
  test('renders admin title', () => {
    render(
      <Router>
        <Administration />
      </Router>
    )
    const adminTitle = screen.getByRole('heading', { level: 1, name: /admin/i })
    expect(adminTitle).toBeInTheDocument()
  })

  test('renders card link list with correct data', () => {
    render(
      <Router>
        <Administration />
      </Router>
    )
  })
})
