import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import YearPickerSettings, { BasicSettings } from './YearPicker.settings';

export default {
  craft: {
    displayName: 'YearPicker',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(YearPickerSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'YearPicker',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    readOnly: false,
    style: {
      height: '250px',
      width: '300px',
      borderRadius: '4px',
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      padding: '8px',
      backgroundColor: 'white',
    },
    selectedYearColor: '#228be6',
    selectedRangeColor: 'rgba(34,139,230,.12)',
    selectedYearRaduis: '',
    selectionModes: 'single',
  },
} as T4DComponentConfig<IYearPickerProps>;

export interface IYearPickerProps extends webforms.ComponentProps {
  readOnly: boolean;
  selectedYearColor: string;
  selectedYearRaduis: string;
  selectedRangeColor: string;
  selectionModes: 'single' | 'multiple' | 'range';
}
