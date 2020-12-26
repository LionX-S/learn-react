import React, { PureComponent } from 'react';
import styled from 'styled-components';

const InputMain = styled.input`
  color:${props => props.theme.themeColor}
`;
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        <InputMain type='text'/>
      </div>
    )
  }
}
