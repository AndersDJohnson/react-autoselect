import React from 'react'
import {render} from 'react-dom'
import {selectOnFocus, Input, TextArea} from '../src/select-on-focus'

class Stateful extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 'value'
    }
  }
  render() {
    return <Input value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
  }
}

const HOC = selectOnFocus('input')

render(
  <div>
    {[
      <HOC type="text" />,
      <Input type="text" width="200" />,
      <TextArea rows="3" />,
      <Input onFocus={() => console.log('focus')} />,
      <Input onFocus={() => false} />,
      <Input onFocus={(e) => e.preventDefault()} />,
      <Input onFocus={(e) => e.stopPropagation()} />,
      <Input onFocus={(e) => e.nativeEvent.stopImmediatePropagation()} />,
      <Stateful />
    ].map((e, i) => {
      return <div key={i}>{React.cloneElement(e, {defaultValue: i})}</div>
    })}
  </div>,
  document.getElementById('app')
)
