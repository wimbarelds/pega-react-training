import { useEffect, useState } from 'react';
import { cn } from '../../shared/cn';

export function Welkom() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const listener = () => setProgress((prev) => prev + 1);
    document.body.addEventListener('click', listener);
    return () => document.body.removeEventListener('click', listener);
  }, []);
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_2fr] flex-1 text-xl">
      <div className="col-start-2 row-start-2 flex flex-col items-start justify-center">
        <a
          href="https://wimbarelds.github.io/pega-react-training/"
          className="font-mono text-3xl mb-10"
        >
          https://wimbarelds.github.io/pega-react-training/
        </a>
        <h1 className="mb-4 text-7xl font-bold">Welkom</h1>
        <p className="text-4xl font-light">Pega + React</p>
        <h2
          className={cn('transition-opacity text-4xl font-bold mt-8 mb-4', {
            'opacity-0': progress < 1,
          })}
        >
          Goed weekend gehad?
        </h2>
        <p className={cn('transition-opacity my-1', { 'opacity-0': progress < 2 })}>
          Goed uitgeslapen?
        </p>
        <p className={cn('transition-opacity my-1', { 'opacity-0': progress < 3 })}>
          Hebben jullie je koffie? Espresso?
        </p>
        <div className={cn('transition-opacity', { 'opacity-0': progress < 4 })}>
          <h2 className="text-4xl font-bold mt-8 mb-4">Heads up</h2>
          <p className="py-1">
            Dit wordt een enorme informatie-dump; als jullie 10% vasthouden is dat mooi.
          </p>
          <p className="py-1">Ik denk dat het belangrijkste aan het einde zit.</p>
        </div>
      </div>

      <div className="col-start-3 row-start-3 flex flex-col items-end justify-end py-2 px-8">
        <p className="text-lg font-semibold">Who am I?</p>
        <p className="mt-1 text-xl font-bold">Wim Barelds</p>
        <p className="text-md">Frontend Expert</p>
      </div>
    </div>
  );
}
