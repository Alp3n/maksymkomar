import React from "react"
import { CartContextProvider } from "./src/context/cartContext"

export const wrapRootElement = ({ element }) => (
  <CartContextProvider>{element}</CartContextProvider>
)
