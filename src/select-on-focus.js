import React from 'react'
import domInputSelect from 'dom-input-select'
import domEventStopped from 'dom-event-stopped'

function onFocus(props, e) {
  if (domEventStopped(e, props.onFocus)) return false
  domInputSelect(e.target);
}

export function selectOnFocus(WrappedComponent) {
  return function SelectOnFocus(props = {}) {
    return <WrappedComponent {...props} onFocus={onFocus.bind(null, props)} />
  }
}

export const Input = selectOnFocus('input')
export const TextArea = selectOnFocus('textarea')
