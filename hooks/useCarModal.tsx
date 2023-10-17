'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CarModalStore } from '@/types';

export const useCarModal = create<CarModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openCarModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'openCarModal'),
  }))
);
