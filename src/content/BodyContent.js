import React from 'react'
import { Home } from './Home'
import { Turnip } from './Turnip'
import { TableButtons } from './TableButtons'

const BodyContent = ({index}) => {
    switch (index){
      case "Home":
        return <Home />
      case "Turnips":
        return <Turnip />
      case "Bugs":
      case "Fish":
        return <TableButtons actualIndex={index} />
      default:
        return <div>Rendering error. Please try later or contact the webmaster...</div>
    }
  }

  export { BodyContent }