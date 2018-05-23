import React from 'react'; 

import { Select, Radio } from 'antd';
const Option = Select.Option;

class MultiSelect extends React.Component {

  render() {

    const { options = [], value, onChange, placeholder } = this.props;

    const children = [];

    for (let i = 0; i < options.length; i++) {
      children.push(
        <Option
          key={options[i].value}
        >
          {options[i].name}
        </Option>
      );
    } 

    return (
      <div className="tj-react-multi-select">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
          {children}
        </Select>
      </div>
    )
  }
}

export default MultiSelect;