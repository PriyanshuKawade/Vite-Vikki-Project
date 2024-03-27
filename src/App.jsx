import { useEffect, useState } from 'react'
import { MainApp } from "./styled"
import {Heading,Text,Button, Container, Center, Highlight} from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Store="count";
const [count,setCount]=useState(Number(localStorage.getItem("count") ? localStorage.getItem("count"):0 ));

useEffect(() => {
  localStorage.setItem("count",Number(count));
},[count]);

return(
  <MainApp>
    <Container maxW={['full','container.lg']}>
      <Center>
    <Heading>
      <Highlight query='Guys'
      styles={{px:'2',py:'1',rounded:'full',bg:'red.100'}}
      >
      WELCOME ! Guys
      </Highlight></Heading></Center>
    <Center>
    <Text> This is My React-App</Text></Center>
<Center>    
    <Text color='tomato'>Count Me</Text></Center>
    <Button colorScheme='teal' variant='solid' onClick={()=> setCount((count) => count +1)}>
      Count is {Number(count)}
    </Button>
    </Container>
  </MainApp>
)
 
}
export default App
