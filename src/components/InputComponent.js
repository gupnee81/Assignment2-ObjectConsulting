import React from 'react';
import InputStyles from '../styles/InputStyles';

class DropDownComponent extends React.Component {
    render() {
        const {id, name, text, displayElements, defaultValue } = this.props;
        return (
            <span>
                <InputStyles.Label htmlFor={id}>{text}</InputStyles.Label>
                <div>
                    <InputStyles.Input
                        id={id}
                        name={name}
                        defaultValue={defaultValue}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    >
                    </InputStyles.Input>
                </div>
        </span>
        );
      }
}

export default DropDownComponent;