import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function LoadingData() {
  return (
    <Prose center className="pb-10">
      <h1>Hoe haal je data op van een server?</h1>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>
            Met <code>fetch</code>, <code>axios</code> of een andere HTTP-client
          </li>
          <li>
            Vaak binnen <code>useEffect</code> in combinatie met <code>useState</code>
          </li>
          <li>
            Naast <code>useState</code> voor data, vaak ook voor loading of errors
          </li>
          <li>Maar er zijn veel lastige edge cases</li>
          <li>Maar meestal gebruikt men hier een library voor</li>
        </ul>
      </Collapse>
    </Prose>
  );
}
