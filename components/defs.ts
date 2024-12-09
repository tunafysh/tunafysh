import { Dispatch, ReactNode, SetStateAction } from "react"

export interface PageProps {
    title: string;
    status: 'closed' | 'open' | 'indestructible';
    screen: ReactNode;
  }

  export interface TabProps {
    title: string;
    status: 'closed' | 'open' | 'indestructible';
    onClick: () => void;
    setPages: Dispatch<SetStateAction<PageProps[]>>;
    currentPage: number;
  }