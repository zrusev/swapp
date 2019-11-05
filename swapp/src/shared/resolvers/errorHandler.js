const errorHandler = ({ graphQLErrors, networkError }) => {
    const errors = [];

    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => errors.push(message));
    }

    if (networkError && networkError.result && networkError.result.errors) {
        networkError.result.errors.map(({message}) => errors.push(message));
    }

    return errors.join('\n');
}

export default errorHandler;