import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/logo/light.svg"
          alt="Nexara"
          width={91}
          height={24}
          priority
        />
      ),
    },
    themeSwitch: {
      enabled: false,
    },
    links: [
      {
        text: 'Support',
        url: 'https://t.me/RND_RandoM',
        external: true,
      },
      {
        text: 'Dashboard',
        url: 'https://app.nexara.ru',
        external: true,
      },
    ],
  };
}
