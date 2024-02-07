import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import MonthPickerSettings, { BasicSettings } from './MonthPicker.settings';

export default {
  craft: {
    displayName: 'MonthPicker',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(MonthPickerSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'MonthPicker',
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
    selectedMonthColor: '#228be6',

    selectedRangeColor: 'rgba(34,139,230,.12)',
    selectedMonthRaduis: '',
    language: 'en',
    selectionModes: 'single',
  },
} as T4DComponentConfig<IMonthPickerProps>;

export interface IMonthPickerProps extends webforms.ComponentProps {
  readOnly: boolean;
  selectedMonthColor: string;
  selectedMonthRaduis: any;
  selectedRangeColor: string;
  language: 'en' | 'fr' | 'es';
  selectionModes: 'single' | 'multiple' | 'range';
}
