import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface InitialState {
  userInfo: string
}

function getInitialState(): InitialState {
  return {
    userInfo: '',
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState: getInitialState(),
  reducers: {

    setUserInfo: (state, action: PayloadAction<string>) => {
      state.userInfo = action.payload
    },
    reset: (state) => {
      Object.assign(state, getInitialState())
    },
  },
})

export const { reset, setUserInfo } = globalSlice.actions

export default globalSlice.reducer
