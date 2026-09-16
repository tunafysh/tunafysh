import type { MenuItem } from "@/lib/types";

function AboutMe() {
    return <p>test</p>;
}

function Ninja() {
    return <p>test</p>;
}

function Jade() {
    return <p>test</p>;
}

export const menu: MenuItem = {
    label: "iPod",
    children: [
        {
            label: "Projects",
            children: [
                {
                    label: "Ninja",
                    page: {
                        label: "Ninja",
                        scrollable: true,
                        content: <Ninja />,
                        menu: [
                            {
                                label: "Visit the GitHub repo",
                                action: () => {
                                    window.open(
                                        "https://github.com/your-user/your-repo",
                                        "_blank",
                                    );
                                },
                            },
                        ],
                    },
                },
                {
                    label: "JADE",
                    page: {
                        label: "JADE",
                        scrollable: true,
                        content: <Jade />,
                        menu: [
                            {
                                label: "Visit the GitHub repo",
                                action: () => {
                                    window.open(
                                        "https://github.com/your-user/your-repo",
                                        "_blank",
                                    );
                                },
                            },
                        ],
                    },
                },
                {
                    label: "Cashly",
                    page: {
                        label: "Cashly",
                        scrollable: true,
                        content: <p>test</p>,
                        menu: [
                            {
                                label: "Visit the site",
                                action: () => {
                                    window.open(
                                        "https://cashly.tunafysh.dev/",
                                        "_blank",
                                    );
                                },
                            },
                            {
                                label: "Visit the GitHub repo",
                                action: () => {
                                    window.open(
                                        "https://github.com/your-user/your-repo",
                                        "_blank",
                                    );
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            label: "About Me",
            page: {
                label: "About Me",
                scrollable: true,
                content: <AboutMe />,
            },
        },
        {
            label: "Blog",
            action: () => {
                window.location.href = "/blog";
            },
        },
    ],
};
