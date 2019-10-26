import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    margin: 2em auto;
    width: 30vw;
    height: auto;
    background: ${props => props.theme.black};
    padding: 0 1em 1em 1em;

    @media screen and (max-width: 1024px) {
        width: 80vw;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.yellow};

    & h1 {
        margin: auto;
    }
`;

const FormWrapper = styled.div`
    background: ${props => props.theme.cardBackground};
    padding: 0.5em;
    border-radius: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    padding: 1.5em 0;
`;

const WarningBar = styled.div`
    margin: 0 3.5em;
    color: red;
    font-size: 1em;
`;

const InputField = styled.input.attrs(props => ({
    type: props.inputType,
}))`
    max-width: 100%;
    height: auto;
    text-indent: 10px;
    background: ${props => props.theme.inputBackground};
    border-color: ${props => props.theme.inputBorderColor};
    color: ${props => props.theme.inputFontColor};
    border-radius: 5px;  

    &:focus {
        background-image: url(./cloud-computing.png);
        background-position: right center;
        background-repeat: no-repeat;
    }
`;

const Input = styled(
    InputField
)`
    margin: 0.8em 4em;
`;

const ButtonField = styled.button`
    width: 5em;
    height: 2.5em;
    margin-left: auto;
    background: ${props => props.theme.buttonBackground};
    border-color: ${props => props.theme.buttonBorderColor};
    color: ${props => props.theme.buttonFontColor};
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
`;

const Button = styled(
    ButtonField
)`
    margin-top: 0.8em;
    margin-right: 4em;
    margin-bottom: 0.8em;
    margin-left: auto;
`;

const LoginComponent = (props) => {   
    return(
        <Wrapper>
            <Container>
                <Title>
                    <h1>SWAPP</h1>
                </Title>
                <FormWrapper>
                    <Form>
                        <WarningBar>Invalid Credentials!</WarningBar>
                        <Input inputType='text' placeholder="email"/>
                        <Input inputType='password' placeholder="password"/>
                        <Button type="submit">
                            <b>Login</b>
                        </Button>
                    </Form>
                </FormWrapper>
            </Container>
        </Wrapper>
    );
}

export default LoginComponent;