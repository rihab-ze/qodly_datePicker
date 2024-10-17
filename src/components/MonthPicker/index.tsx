import config, { IMonthPickerProps } from './MonthPicker.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './MonthPicker.build';
import Render from './MonthPicker.render';

const MonthPicker: T4DComponent<IMonthPickerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

MonthPicker.craft = config.craft;
MonthPicker.info = config.info;
MonthPicker.defaultProps = config.defaultProps;

export default MonthPicker;
