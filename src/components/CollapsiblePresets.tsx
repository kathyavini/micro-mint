import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';

import { boldMuted, collapseToggle } from '../styles/App.css';
import { row } from '../styles/recipes.css';
import { button, themeFocus } from '../styles/style.css';

import { initialPresets, Preset } from '../data/initialPresets';

interface CollapsiblePresetsProps {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
}

export const CollapsiblePresets = ({
  setSearchField,
}: CollapsiblePresetsProps) => {
  const [open, setOpen] = useState(true);

  const [presetList, setPresetList] = useState<Preset[]>(initialPresets);

  const presetButtons = presetList.map((item) => (
    <button
      key={item.name}
      className={[button.filled, themeFocus].join(' ')}
      onClick={() => setSearchField(item.searchString)}>
      {item.name}
    </button>
  ));

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className={row()}>
        <h2 className={boldMuted}>Presets:</h2>
        <Collapsible.Trigger asChild>
          <button className={collapseToggle}>
            <span className="material-icons">expand_more</span>
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.CollapsibleContent>
        <div
          className={row({ justify: 'center', gap: 'sm' })}
          style={{ flexFlow: 'row wrap', rowGap: '1rem' }}>
          {presetButtons}
        </div>
      </Collapsible.CollapsibleContent>
    </Collapsible.Root>
  );
};
