import { useRouteError } from "react-router-dom";

import { StyledErrorPage } from "./style";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <StyledErrorPage data-testid='error-page'>
      <h1 data-testid='error-page-heading'>Sorry, an unexpected error has occurred.</h1>
      <p data-testid='error-page-paragraph'>
        <i data-testid='error-page-status'>{error.status} - {error.statusText || error.message}</i>
      </p>
    </StyledErrorPage>
  );
};

export default ErrorPage;