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

const LoginPreview = () => {  
    return(
        <Wrapper>
            <Container>
                <Title>
                    <h1>SWAPP</h1>
                </Title>
                <FormWrapper>
                    <Form>
                        <WarningBar>Invalid Credentials!</WarningBar>
                        <Input 
                            inputType='text' 
                            placeholder="email"
                        />
                        <Input 
                            inputType='password' 
                            placeholder="password"
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