import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function JsxExplanation() {
  return (
    <Prose center>
      <h1>Kunnen jullie uitleggen wat JSX is?</h1>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>JSX is eigenlijk HTML maar dan met 'echte' XML</li>
          <li>In JSX kan je naast HTML, ook componenten tonen</li>
          <li>In JSX kan je javascript gebruiken</li>
          <li>Componenten beginnen met hoofdletters</li>
        </ul>
      </Collapse>
    </Prose>
  );
}
