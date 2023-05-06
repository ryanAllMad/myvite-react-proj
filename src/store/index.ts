import { configureStore, createSlice, createAction } from "@reduxjs/toolkit"

export const reset = createAction("app/reset")

const itemsSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addItem(state: any, action: any) {
      state.push(action.payload)
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    removeItem(state: any, action: any) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    })
  }
})
const store = configureStore({
    reducer: {
      items: itemsSlice.reducer
    }
  })
  export { store }
  export const { addItem, removeItem } = itemsSlice.actions