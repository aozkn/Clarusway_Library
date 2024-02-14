import React from "react";
import {
  LoginContainer,
  FormContainer,
  LoginHeader,
  StyledBtn,
  StyledForm,
  StyledLoginInput,
} from "./Login.style";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(true);
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <LoginHeader>Login Here</LoginHeader>
          <StyledLoginInput type="text" placeholder="username" required />
          <StyledLoginInput type="password" placeholder="password" required />
          <StyledBtn>Login</StyledBtn>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
