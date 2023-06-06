import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardLinkList } from '~/components/molecules/CardLinkList';
import { Route } from '~/utils/ui/Route';
import { MemoryRouter } from 'react-router-dom';

const data = [
  {
    route: Route.appUsers,
    iconName: 'FaFileContract',
    label: 'users',
  },
  {
    route: Route.logs,
    iconName: 'FaArrowLeft',
    label: 'logs',
  },
];

describe('<CardLinkList />', () => {
    beforeEach(() => {
      render(
        <MemoryRouter> {/* Wrap the component with MemoryRouter */}
          <CardLinkList data={data} />
        </MemoryRouter>
      );
    });
  
    it.each(data)('should render $label', ({ label, route }) => {
      const labelSpan = screen.getByText(label);
      expect(labelSpan).toBeInTheDocument();
      expect((labelSpan.parentElement as HTMLAnchorElement).href).toBe(`http://localhost${route}`);
    });
});
