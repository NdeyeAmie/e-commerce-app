import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: #FFC0CB;
color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Formulaire d'information</Title>
      <Desc>Obtenez des mises à jour opportunes de vos produits préférés</Desc>
      <InputContainer>
      <Input placeholder='your email'/>
      <Button>
        <Send/>
      </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
