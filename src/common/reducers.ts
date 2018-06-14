import { ActionData } from './store'
import { isNil } from 'lodash'

type ReductionsLookupType = { [key: string]: (state: any, ...rest: any[]) => any }

const genericReducer = (initialState: any, reductionLookup: ReductionsLookupType) => (state: any, { type, payload }: ActionData) => {
  const activeState = isNil(state) ? initialState : state
  const reducer = reductionLookup[type]
  return isNil(reducer) ? activeState : reducer(activeState, payload)
}

export {
  ReductionsLookupType,
  genericReducer
}
