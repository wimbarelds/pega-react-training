import { Prose } from '../../shared/Prose';
import { Tooltip } from '../../shared/Tooltip';

export function SoortenComponenten2() {
  return (
    <Prose center className="pb-12">
      <h1>Soorten componenten (2/2)</h1>
      <p>Als we een component maken, kunnen we uit een paar types kiezen</p>

      <h2>Custom en Override</h2>
      <ul>
        <li>
          <OutOfTheBoxList type="field" /> - Voor properties, bijvoorbeeld een TextInput
        </li>
        <li>
          <OutOfTheBoxList type="template" /> - Voor views, hier kunnen andere dingen in (zoals
          fields, andere templates of widgets)
        </li>
        <li>
          <OutOfTheBoxList type="widget" /> - Staat los van properties en views, los van de context
          van de pagina (worden vooral gebruikt op landing pages)
        </li>
      </ul>

      <h2>Alleen Override</h2>
      <ul>
        <li>
          <OutOfTheBoxList type="designSystemExtension" /> - Misc. info componenten
        </li>
        <li>
          <OutOfTheBoxList type="infra" /> - Standaard onderdelen van layout
        </li>
      </ul>

      <p>
        <em>
          Deze 'types' zijn wat arbitrair, maar gevolg is wel dat we de laatste 2 types alleen met
          Override componenten kunnen aanpassen.
        </em>
      </p>
    </Prose>
  );
}

const components = {
  field: [
    'AutoComplete',
    'CancelAlert',
    'Checkbox',
    'Currency',
    'Date',
    'DateTime',
    'Decimal',
    'Dropdown',
    'Email',
    'Group',
    'Integer',
    'Multiselect',
    'Percentage',
    'Phone',
    'RadioButtons',
    'RichText',
    'ScalarList',
    'SemanticLink',
    'TextArea',
    'TextContent',
    'TextInput',
    'Time',
    'URL',
    'UserReference',
  ],
  template: [
    'AppShell',
    'BannerPage',
    'CaseSummary',
    'CaseView',
    'CaseViewActionsMenu',
    'Confirmation',
    'DataReference',
    'DefaultForm',
    'Details',
    'FieldGroupTemplate',
    'InlineDashboardPage',
    'ListPage',
    'ListView',
    'MultiReferenceReadOnly',
    'NarrowWide',
    'OneColumn',
    'PromotedFilters',
    'SimpleTable',
    'SingleReferenceReadOnly',
    'SubTabs',
    'TwoColumn',
    'WideNarrow',
    'WssNavBar',
  ],
  widget: [
    'AppAnnouncement',
    'Attachment',
    'CaseHistory',
    'FileUtility',
    'Followers',
    'QuickCreate',
    'SummaryItem',
    'SummaryList',
    'ToDo',
  ],
  designSystemExtension: [
    'AlertBanner',
    'Banner',
    'CaseSummaryFields',
    'DetailsField',
    'FieldGroup',
    'FieldGroupList',
    'FieldValueList',
    'Operator',
    'Pulse',
    'RichTextEditor',
    'WssQuickCreate',
  ],
  infra: [
    'ActionButtons',
    'Assignment',
    'AssignmentCard',
    'Containers',
    'DashboardFilter',
    'DeferLoad',
    'ErrorBoundary',
    'MultiStep',
    'NavBar',
    'Reference',
    'Region',
    'RootContainer',
    'Stages',
    'VerticalTabs',
    'View',
  ],
};

function OutOfTheBoxList({ type }: { type: keyof typeof components }) {
  const title = type[0].toUpperCase() + type.slice(1);
  const items = components[type];
  return (
    <>
      <Tooltip
        tooltip={
          <div className="grid grid-cols-3 gap-4 px-4">
            {items.map((item) => (
              <span key={item} className="flex-1 bg-sky-800 pl-3 pr-5 rounded-sm font-mono">
                {item}
              </span>
            ))}
          </div>
        }
      >
        {title} Componenten
      </Tooltip>
    </>
  );
}
