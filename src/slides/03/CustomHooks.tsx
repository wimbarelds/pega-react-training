import Code from '../../shared/Code';
import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';
import customHook from './customHookExample.ts?raw';

export function CustomHooks() {
  return (
    <Prose center className="pb-10">
      <h1>Hebben jullie iets geleerd over custom hooks?</h1>

      <Collapse title="Voorbeeld">
        <Code code={customHook} />
      </Collapse>
    </Prose>
  );
}
