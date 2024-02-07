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
    key: 'selectedYearColor',
    label: 'selected date(s) color',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'selectedRangeColor',
    label: 'selected date(s) range color',
    type: ESetting.COLOR_PICKER,
  },
  {
    key: 'selectedYearRaduis',
    placeholder: 'selected date(s) border radius',
    type: ESetting.UNITFIELD,
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
