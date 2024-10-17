import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
import { CgCalendarDates } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
const commonSettings: TSetting[] = [
  {
    key: 'selectionModes',
    label: 'Selection modes',
    type: ESetting.RADIOGROUP,
    defaultValue: 'single',
    options: [
      { value: 'single', icon: CiCalendarDate },
      { value: 'multiple', icon: MdOutlineDateRange },
      { value: 'range', icon: CgCalendarDates },
    ],
  },
  {
    key: 'readOnly',
    label: 'Read only',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'selectedMonthColor',
    label: 'Color picker',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'selectedRangeColor',
    label: 'Color range',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'selectedMonthRaduis',
    placeholder: 'selected month(s) border radius',
    type: ESetting.UNITFIELD,
  },
  {
    key: 'language',
    label: 'Language',
    type: ESetting.SELECT,
    defaultValue: 'en',
    options:[{value:'en',label:'English'},{value:'fr',label:'Frensh' },{value:'es',label:'Spanish'}],
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...load(DEFAULT_SETTINGS).filter('style.overflow', 'background','style.fontSize','style.fontWeight'),

  
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow', 'background','style.fontSize','style.fontWeight'),

];

export default Settings;
