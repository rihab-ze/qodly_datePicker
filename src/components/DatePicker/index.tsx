import config, { IDatePickerProps } from './DatePicker.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './DatePicker.build';
import Render from './DatePicker.render';

const DatePicker: T4DComponent<IDatePickerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

DatePicker.craft = config.craft;
DatePicker.info = config.info;
DatePicker.defaultProps = config.defaultProps;

export default DatePicker;
