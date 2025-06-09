import { Prose } from '../../shared/Prose';

/*
# Componenten

Soorten componenten

- Custom SDK
- Custom Constellation
- Override SDK

Inhoud van een component

- Code -> Gebruikt in Portal
- JSON -> Gebruikt in Pega App Studio

Soorten componenten, maar dan anders:

- Field (bijvoorbeeld een TextInput voor Achternaam)
- Template (Een container om andere dingen in te zetten)
- Widget (contextloos, vooral landing pages)

*/
export function SoortenComponenten1() {
  return (
    <Prose center>
      <h1>Soorten componenten (1/2)</h1>
      <p>Custom Constellation / Custom SDK / Override SDK?</p>
      <h2>Custom Constellation / Custom SDK</h2>
      <div className="p-4 flex flex-col items-center justify-center bg-gray-900 rounded-2xl">
        <div className="text-yellow-200 text-3xl font-mono">Custom-Constellation ~= Custom SDK</div>
        <div className="italic text-sm mt-2">Min of meer</div>
      </div>
      <p>
        Overal waar je in Pega een component kan selecteren, is het een Custom Constellation /
        Custom SDK component.
      </p>
      <h2>Override SDK</h2>
      <p>
        De meeste componenten zijn "Override SDK", dat zijn vooral veel views, maar ook bijvoorbeeld
        de pagina layout.
      </p>
    </Prose>
  );
}
