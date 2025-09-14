import IconSun from "/images/icon-sun.svg";
import IconMoon from "/images/icon-moon.svg";

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-purple-100-hover',
            textColor: 'text-gray-600',
        },
        todo: {
            backgroundColor: 'bg-gray-50',
            borderColor: 'border-purple-100-hover',
            textColor: 'text-navy-850',
        },
        icon: IconMoon,
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-navy-950',
            textColor: 'text-purple-600',
        },
        todo: {
            backgroundColor: 'bg-navy-900',
            borderColor: 'border-purple-800',
            textColor: 'text-purple-300-dark',
        },
        icon: IconSun,
    },
};