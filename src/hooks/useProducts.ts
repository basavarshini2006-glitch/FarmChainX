import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Product {
  id: string;
  name: string;
  qty: string;
  date: string;
  location: string;
  status: string;
  quality: number;
}

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });
};