import { env } from '@/lib/env';
import { links } from '@/contstants';

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t text-xs">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="grid text-center text-xs text-muted-foreground md:text-left">
          <span>Chris Anderson</span>
          <span>All rights reserved.</span>
        </p>

        <p className="text-balance text-center text-muted-foreground md:text-left">
          The source code on{' '}
          <a
            href={env.NEXT_PUBLIC_REPO_LINK}
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-xs text-muted-foreground capitalize hover:text-primary"
              target="_blank"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
