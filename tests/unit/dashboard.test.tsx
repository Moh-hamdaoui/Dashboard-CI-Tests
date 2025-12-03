import { render, screen } from '@testing-library/react';
import Dashboard from '../../app/dashboard/page';

test('affiche "Mes évènements"', () => {
  render(<Dashboard />);
  expect(screen.getByText('Mes évènements')).toBeInTheDocument();
});
