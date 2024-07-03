import { ButtonContainer } from "./styles";

const Button = ({label, onClick}) => {
  console.log(onClick);  
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  