import React from 'react'
import {render} from 'react-dom'
import {selectOnFocus, Input, TextArea} from '../src/autoselect'

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
    <h1><a href="https://github.com/AndersDJohnson/react-autoselect">react-autoselect</a></h1>
    <table>
      <tbody>
        {[
          <Input type="text" />,
          <TextArea rows="3" />,
          <h2>Custom `onFocus`</h2>,
          [<Input onFocus={() => console.log('focus')} />, 'Logs'],
          [<Input onFocus={() => false} />, 'Return false'],
          [<Input onFocus={(e) => e.preventDefault()} />, 'Prevent default'],
          [<Input onFocus={(e) => e.stopPropagation()} />, 'Stop propagation (no effect)'],
          [<Input onFocus={(e) => e.nativeEvent.stopImmediatePropagation()} />, 'Stop immediate propagation (no effect)'],
          <h2>Custom HOC</h2>,
          <HOC type="text" />,
          <h2>Stateful</h2>,
          <Stateful />
        ].map((e, i) => {
          let m
          if (Array.isArray(e)) {
            m = e[1]
            e = e[0]
          }
          return <tr key={i}>
            <td>
              {React.cloneElement(e, {defaultValue: i})}
            </td>
            <td>{m}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
  ,
  document.getElementById('app')
)
