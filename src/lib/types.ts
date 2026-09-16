export type MenuItem = {
    label: string;
    action?: () => void;
    children?: MenuItem[];
    page?: Page;
};

export type Page = {
    label: string;
    scrollable: boolean;
    content: React.ReactNode;
    action?: () => void;
    menu?: MenuItem[];
};

export type MenuScreen = MenuItem[];

export type Screen = MenuScreen | Page;
