import { Prose } from '../../shared/Prose';

export function Agenda() {
  return (
    <Prose center className="font-bold">
      <h1>Agenda</h1>
      <ol>
        <li>Welkom</li>
        <li>Agenda</li>
        <li>Quiz / Refresher</li>
        <li>
          Waarom deze training?
          <ul className="ps-1 font-normal m-0! *:m-0!">
            <li>Hoe werkt een "normale" React App?</li>
            <li>Hoe werkt een Pega React App?</li>
          </ul>
        </li>
        <li>Soorten Pega React Apps</li>
        <li>
          Componenten
          <ul className="ps-1 font-normal m-0! *:m-0!">
            <li>Soorten componenten</li>
            <li>Inhoud van een component</li>
          </ul>
        </li>
        <li>Pega's libraries</li>
        <li>
          Een component maken
          <ul className="ps-1 font-normal m-0! *:m-0!">
            <li>Config</li>
            <li>Publiceren</li>
          </ul>
        </li>
        <li>ConstellationJS API</li>
        <li>Overige nuttige tools (React Dev Tools, Redux Dev Tools)</li>
      </ol>
    </Prose>
  );
}
