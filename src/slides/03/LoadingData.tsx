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

      <Collapse title="Spoiler 2" prose className="mt-8">
        <img src="race-condition.png" alt="" className="max-w-[800px]"></img>
        <p className="text-2xl text-center font-bold">
          Meestal gebruikt men daarom een library voor data-fetching
        </p>
      </Collapse>
    </Prose>
  );
}
