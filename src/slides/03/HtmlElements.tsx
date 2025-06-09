import { Collapse } from '../../shared/Collapse';
import { Prose } from '../../shared/Prose';

export function HtmlElements() {
  return (
    <Prose center className="pb-10">
      <h1>Welke HTML elementen kunnen jullie opnoemen?</h1>

      <div className="compact-list">
        <Collapse title="Basics" prose>
          <ul className="tag-list">
            <li>div</li>
            <li>span</li>
            <li>h1-h6</li>
            <li>p</li>
            <li>ul</li>
            <li>li</li>
            <li>a</li>
            <li>img</li>
          </ul>
        </Collapse>

        <Collapse title="Form fields" prose className="mt-4">
          <ul className="tag-list">
            <li>input</li>
            <li>select</li>
            <li>textarea</li>
            <li>button</li>
          </ul>
        </Collapse>

        <Collapse title="Semantisch" prose className="mt-4">
          <ul className="tag-list">
            <li>header</li>
            <li>footer</li>
            <li>nav</li>
            <li>section</li>
            <li>article</li>
          </ul>
        </Collapse>
      </div>
    </Prose>
  );
}
