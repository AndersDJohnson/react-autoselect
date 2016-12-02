# react-select-on-focus
Select-on-focus fields for ReactJS.

```
import React from 'react'
import {render} from 'react-dom'
import {Input, TextArea} from 'react-select-on-focus'

render(
  <div>
    <Input type="text" width="200" />
    <TextArea rows="3" />
  </div>,
  document.getElementById('app')
)
```

Custom `onFocus`, including cancelling the select by returning false or preventing default:
```
<Input onFocus={() => console.log('focus')} />
<Input onFocus={() => false} />
<Input onFocus={(e) => e.preventDefault()} />
```

