import Code from '../../shared/Code';
import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';
import propsExample from './propsExample.tsx?raw';

export function Props() {
  return (
    <Prose center className="pb-10">
      <h1>Hoe geef je data door tussen componenten?</h1>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>
            Van ouder naar kind via <strong>props</strong>
          </li>
          <li>Kinderen kunnen callbacks ontvangen om iets terug te melden</li>
          <li>
            Bij veel niveaus: gebruik <code>context</code>
          </li>
          <li>Props zijn read-only (kan niet muteren in kindcomponent)</li>
        </ul>
      </Collapse>

      <Collapse title="Example" className="mt-4">
        <Code code={propsExample} />
      </Collapse>
    </Prose>
  );
}
