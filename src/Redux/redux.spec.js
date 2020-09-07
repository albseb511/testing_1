import * as actions from './action'
import * as types from './actionTypes'
import reducer from './reducer'

describe('actions', () => {
  it('should create an action to increment counter by 1', () => {
    const payload = 1
    const expectedAction = {
      type: types.ADD_COUNTER,
      payload
    }
    expect(actions.addCounter(payload)).toEqual(expectedAction)
  })
  it('should create an action to decrement counter by 1', () => {
    const payload = 1
    const expectedAction = {
      type: types.REDUCE_COUNTER,
      payload
    }
    expect(actions.reduceCounter(payload)).toEqual(expectedAction)
  })
})

describe("counter reducer",()=>{
  it("should return initialState",()=>{
    expect(reducer(undefined,{})).toEqual({
      count: 0
    })
  })
  it("should return 8",()=>{
    expect(reducer({count: 5}, actions.addCounter(3))).toEqual({
      count: 8
    })
  })
})