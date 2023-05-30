import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabe value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;