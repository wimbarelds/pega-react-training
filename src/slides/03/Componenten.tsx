import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

function Asterisk() {
  return <code className="not-prose text-xs text-red-400 align-super">*</code>;
}

export function Componenten() {
  return (
    <Prose center>
      <h1>Wat is een component?</h1>

      <Collapse title="Spoiler" prose>
        <ul className="compact-list">
          <li>Een herbruikbaar stukje UI, meestal als functie geschreven</li>
          <li>
            Geeft JSX <Asterisk /> terug
          </li>
          <li>Kan props ontvangen en hooks gebruiken</li>
        </ul>
      </Collapse>
    </Prose>
  );
}
