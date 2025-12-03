import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../../app/dashboard/page';

describe('Dashboard integration test', () => {
  test('affiche le titre et les événements', () => {
      render(<Dashboard />);
  
      expect(screen.getByText('Mes évènements')).toBeInTheDocument();
  
      const eventCards = screen.getAllByRole('listitem');
      expect(eventCards.length).toBe(3);
  
      eventCards.forEach((card) => {
        expect(card).toHaveTextContent('Concert');
        expect(card).toHaveTextContent(/Décembre 2025/);
      });
    });
  });