import { create, State } from 'zustand';

interface ISetCategory {
  category: string;
  removeAllCategory: () => void;
  updateCategory: (newCategory: string) => void;
}

const useStoreCategory = create<ISetCategory>((set) => ({
  category: '',
  removeAllCategory: () => set({ category: '' }),
  updateCategory: (newCategory: string) => set({ category: newCategory }),
}));

export default useStoreCategory;
