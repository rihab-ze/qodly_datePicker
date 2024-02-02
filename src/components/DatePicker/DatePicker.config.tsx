import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import DatePickerSettings, { BasicSettings } from './DatePicker.settings';

export default {
  craft: {
    displayName: 'DatePicker',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(DatePickerSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'DatePicker',
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
    multipleDate: false,
    readOnly: false,
    style: {
      height: '350px',
      width: '350px',
      borderRadius: '4px',
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      padding: '8px',
      backgroundColor: 'white',
    },
    selectedDateColor: '#228be6',
    selectedRangeColor: 'rgba(34,139,230,.12)',
    selectedDateRaduis: '',
    rangeDate: false,
    language: 'en',
    selectionModes: 'single',
  },
} as T4DComponentConfig<IDatePickerProps>;

export interface IDatePickerProps extends webforms.ComponentProps {
  multipleDate: boolean;
  readOnly: boolean;
  selectedDateColor: string;
  selectedDateRaduis: any;
  selectedRangeColor: string;
  rangeDate: boolean;
  language: 'en' | 'fr' | 'es';
  selectionModes: 'single' | 'multiple' | 'range';
}
