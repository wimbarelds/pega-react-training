import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function MoreJsx() {
  return (
    <Prose center>
      <h1>More JSX</h1>
      <h2>Hoe gebruik je arrays en condities in JSX?</h2>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>
            Gebruik <code>{`someArray.map(item => (...)`}</code> om lijsten te renderen
          </li>
          <li>
            Denk aan een unieke <code>key</code> bij elk item
          </li>
          <li>
            Voor condities:
            <ul>
              <li>
                <code>{`show && <p>...</p>`}</code>
              </li>
              <li>
                <code>{`condition ? <A /> : <B />`}</code>
              </li>
            </ul>
          </li>
          <li>
            Geen <code>if</code> of <code>for</code> direct in JSX — gebruik ze erbuiten
          </li>
          <li>
            Voorkom dat er te veel logica in je JSX komt, je wil zo veel mogelijk dat je het direct
            snapt
          </li>
        </ul>
      </Collapse>
    </Prose>
  );
}
