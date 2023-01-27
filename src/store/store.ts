import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducers = combineReducers({})

export const setupStore = () => {
  return configureStore({
     reducer: rootReducers
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof rootReducers>
export type AppDispatch = AppStore['dispatch']