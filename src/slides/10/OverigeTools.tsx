import { Prose } from '../../shared/Prose';

/*
# Overige tools

Nu weten jullie en klein beetje over hoe het ongeveer in elkaar zit. Maar...

React Dev Tools
Redux Dev Tools

*/
export function OverigeTools() {
  return (
    <Prose center className="pb-12">
      <h1>Overige tools</h1>
      <p>
        <em>
          p.s. Dit is de laatste slide; het is hier de bedoeling om een beetje beeld te krijgen van
          de werkwijze
        </em>
      </p>
      <h2>Belangrijke tools</h2>
      <ul>
        <li>Chrome extensie: Redux Devtools</li>
        <li>Chrome extensie: React Devtools</li>
        <li>Library: React Query</li>
        <li>Github Actions</li>
      </ul>
      <h2>Niet echt tools, maar...</h2>
      <ul>
        <li>Styling?</li>
      </ul>
    </Prose>
  );
}
