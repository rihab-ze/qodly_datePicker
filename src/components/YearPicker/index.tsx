import config, { IYearPickerProps } from './YearPicker.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './YearPicker.build';
import Render from './YearPicker.render';

const YearPicker: T4DComponent<IYearPickerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

YearPicker.craft = config.craft;
YearPicker.info = config.info;
YearPicker.defaultProps = config.defaultProps;

export default YearPicker;
