import { Prose } from '../../shared/Prose';

/*
# Component maken

- Maken
  - Het create command
  - Wat krijgen we dan?
  - Kwaliteit
  - Config - https://docs.pega.com/bundle/constellation-dx-components/page/constellation-dx-components/custom-components/formats.html
  - MUI
  - Wrapper Componenten
- Publiceren
  - Command, en dan?

*/
export function ComponentMaken() {
  return (
    <Prose center className="pb-12">
      <h1>Component maken</h1>
      <p>We gaan nu samen een component maken!</p>

      <h2>Waar gaan we dan naar kijken?</h2>
      <ul>
        <li>Het create command</li>
        <li>Wat krijgen we dan</li>
        <li>
          De <code>config.json</code>
        </li>
        <li>
          <a href="https://v5.mui.com/material-ui/getting-started/" target="_blank">
            MUI
          </a>
        </li>
        <li>Publiceren</li>
        <li>Kwaliteitscontrole (github)</li>
      </ul>

      <h2>Daarna ook nog even...</h2>
      <p>Wrapper componenten</p>
    </Prose>
  );
}
