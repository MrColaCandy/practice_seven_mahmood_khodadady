import React from 'react'
import Button from './components/button'
import Container from './components/container'

const App = () => {
  return (
     <Container>
      <Button>Primary</Button>
      <Button disabled variant={Button.VARIANTS.SECONDARY} >Secondary</Button>
      <Button variant={Button.VARIANTS.DANGER} >Danger</Button>
      <Button variant={Button.VARIANTS.SUCCESS} >Success</Button>
      <Button variant={Button.VARIANTS.WARNING} >Warning</Button>
      <Button variant={Button.VARIANTS.INFO} >Info</Button>
      <Button variant={Button.VARIANTS.DARK} >Dark</Button>

      <Button look={Button.LOOKS.OUTLINED}>Primary</Button>
      <Button look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.SECONDARY} >Secondary</Button>
      <Button look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.DANGER} >Danger</Button>
      <Button look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.SUCCESS} >Success</Button>
      <Button look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.WARNING} >Warning</Button>
      <Button look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.INFO} >Info</Button>
      <Button disabled look={Button.LOOKS.OUTLINED} variant={Button.VARIANTS.DARK} >Dark</Button>

      <Button size={Button.SIZES.LARGE} >Primary</Button>
      <Button size={Button.SIZES.MEDIUM} >Primary</Button>
      <Button size={Button.SIZES.SMALL} >Primary</Button>
     
      
     </Container>
  )
}

export default App