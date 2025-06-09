import htmlSdk from './component-tree-sdk.html?raw';
import htmlConstellation from './component-tree-constellation.html?raw';

interface Props {
  portal: 'sdk' | 'constellation';
}

export function ComponentTree({ portal }: Props) {
  if (portal === 'sdk')
    return (
      <div
        className="p-3 bg-slate-950 overflow-hidden rounded-lg"
        dangerouslySetInnerHTML={{ __html: htmlSdk }}
      />
    );
  return (
    <div
      className="py-3 px-6 bg-slate-950 overflow-hidden rounded-lg"
      dangerouslySetInnerHTML={{ __html: htmlConstellation }}
    />
  );
}
