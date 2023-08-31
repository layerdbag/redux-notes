import React, { useContext } from "react"
import { useCounterValue } from "../CounterContext"

const Display = () => {
  const counter = useCounterValue()
  return <div>{counter}</div>
}


export default Display