import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function JsxExplanation() {
  return (
    <Prose center>
      <h1>Kunnen jullie uitleggen wat JSX is?</h1>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>JSX is eigenlijk HTML maar dan met 'echte' XML</li>
          <li>In JSX kun je naast HTML, ook componenten tonen</li>
          <li>In JSX kun je javascript gebruiken</li>
          <li>Componenten beginnen met een hoofdletter</li>
        </ul>
      </Collapse>
    </Prose>
  );
}
