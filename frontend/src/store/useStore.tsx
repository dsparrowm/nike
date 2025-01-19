import { create } from 'zustand';

interface CoinBalance {
    Bitcoin: number;
    Ethereum: number;
    Usdt: number;
    Usdc: number;
}

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    balances: CoinBalance;
}

interface AdminUser {
    id: number;
    name: string;
    email: string;
}

interface StoreState {
    activeComponent: string;
    setActiveComponent: (component: string) => void;
    user: User;
    setUser: (user: User) => void;
    activeAdminComponent: string;
    setActiveAdminComponent: (component: string) => void;
    adminUser: AdminUser;
    setAdminUser: (user: AdminUser) => void;
    userEmail: string;
    setUserEmail: (email: string) => void;
}

const initialUser: User = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    balances: {
        Bitcoin: 0,
        Ethereum: 0,
        Usdt: 0,
        Usdc: 0,
    },
};

const initialAdminUser: AdminUser = {
    id: 0,
    name: "",
    email: "",
};

export const useStore = create<StoreState>((set) => ({
    activeComponent: "Overview",
    setActiveComponent: (component: string) => set({ activeComponent: component }),
    user: initialUser,
    setUser: (user: User) => set({ user }),
    activeAdminComponent: "Dashboard",
    setActiveAdminComponent: (component: string) => set({ activeAdminComponent: component }),
    adminUser: initialAdminUser,
    setAdminUser: (user: AdminUser) => set({ adminUser: user }),
    userEmail: "",
    setUserEmail: (email: string) => set({ userEmail: email }),
}));

