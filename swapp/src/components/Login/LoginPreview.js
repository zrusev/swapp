import React from 'react';

import { 
    Wrapper, 
    Container, 
    Title, 
    FormWrapper,
    Form, 
    WarningBar, 
    Input, 
    Button
} from './components/_index';

import useSignInForm from './hooks/useSignInForm';

const LoginPreview = ({login}) => {  
    const {inputs, handleInputChange, handleSubmit} = useSignInForm(login);

    return(
        <Wrapper>
            <Container>
                <Title>
                    <h1>SWAPP</h1>
                </Title>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <WarningBar>Invalid Credentials!</WarningBar>
                        <Input 
                            inputType='text' 
                            placeholder="email"
                            name="email" 
                            onChange={handleInputChange} 
                            value={inputs.email} 
                            required 
                        />
                        <Input 
                            inputType='password' 
                            placeholder="password"
                            name="password" 
                            onChange={handleInputChange} 
                            value={inputs.password} 
                            required 
                        />
                        <Button 
                            type="submit"
                        >
                            <b>Login</b>
                        </Button>
                    </Form>
                </FormWrapper>
            </Container>
        </Wrapper>
    );
}

export default LoginPreview;