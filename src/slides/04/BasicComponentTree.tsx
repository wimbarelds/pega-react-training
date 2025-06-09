import html from './component-tree.html?raw';

export function BasicComponentTree() {
  return (
    <div
      className="py-3 px-6 bg-slate-950 overflow-hidden rounded-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
