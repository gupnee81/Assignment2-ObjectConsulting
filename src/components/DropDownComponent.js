import React from 'react';
import DropDownStyle from '../styles/DropDownStyles';

const renderSelectOptions = (element) => (
    <option key={element.value} value={element.value}>
        {element.text}
    </option>
);

class DropDownComponent extends React.Component {
    render() {
        const {id, name, text, displayElements, defaultValue } = this.props;
        return (
            <span>
                <DropDownStyle.Label htmlFor={id}>{text}</DropDownStyle.Label>
                <div>
                    <DropDownStyle.Select
                        id={id}
                        name={name}
                        defaultValue={defaultValue}
                        onChange={this.props.handleChange}
                    >
                        {displayElements.map(renderSelectOptions)}
                    </DropDownStyle.Select>
                </div>
        </span>
        );
      }
}

export default DropDownComponent;