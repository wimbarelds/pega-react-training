import { useEffect, useState } from 'react';
import { cn } from '../shared/cn';
import { QuickBar } from './Nav/QuickBar';
import { SlideNav } from './Nav/SlideNav';
import { useNavTriggers } from './Nav/useNavTriggers';

export function Nav() {
  const [open, setOpen] = useState(false);

  const bgClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.remove('overflow-auto');
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.add('overflow-auto');
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  useNavTriggers();

  return (
    <div
      onClick={bgClick}
      className={cn('fixed inset-0 px-4 py-2 pointer-events-none isolate', {
        'pointer-events-auto before:-z-10 before:bg-slate-800 before:absolute before:inset-0 before:opacity-80 transition-opacity':
          open,
      })}
    >
      <QuickBar {...{ open, setOpen }} />
      <SlideNav {...{ open, setOpen }} />
    </div>
  );
}
