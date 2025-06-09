import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function Hooks() {
  return (
    <Prose center className="pb-10">
      <h1>Hooks</h1>
      <h2>Wie kan vertellen wat hooks zijn?</h2>
      <div className="compact-list">
        <Collapse title="Spoiler" prose>
          <p className="!my-2">Speciale functies die componenten helpen met</p>
          <ul>
            <li>State</li>
            <li>Gedrag</li>
            <li>Optimalisatie</li>
          </ul>
        </Collapse>

        <h2>Welke hooks weten jullie nog?</h2>
        <Collapse title="Spoiler" prose>
          <ul>
            <li>
              <code>useState</code> - voor lokale state
            </li>
            <li>
              <code>useEffect</code> - voor side effects
            </li>
            <li>
              <code>useContext</code> - om data via context beschikbaar te maken
            </li>
            <li>
              <code>useRef</code> - voor state die niet reactive is
            </li>
            <li>
              <code>useMemo</code> - caching / optimalisatie (en dependency arrays)
            </li>
            <li>
              <code>useCallback</code> - vooral voor dependency-array
            </li>
          </ul>
        </Collapse>
      </div>
    </Prose>
  );
}
