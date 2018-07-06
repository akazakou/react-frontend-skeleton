import { isNil } from 'lodash'
import { Action } from 'redux'

type ReductionsLookupType = { [key: string]: (state: any, ...rest: any[]) => any }

const genericReducer = (initialState: any, reductionLookup: ReductionsLookupType) => {
  return (state: any, { type, ...payload }: Action<string>) => {
    const activeState = isNil(state) ? initialState : state
    const reducer = reductionLookup[type]
    return isNil(reducer) ? activeState : reducer(activeState, payload)
  }
}

export {
  ReductionsLookupType,
  genericReducer
}
