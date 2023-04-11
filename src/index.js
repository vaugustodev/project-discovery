import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import discoveryLoader from './loaders/discoveryLoader';
import profileSettingsLoader from './loaders/profileSettingsLoader';
import rootLoader from "./loaders/rootLoader";
import signInLoader from "./loaders/signInLoader";
import GlobalStyle from './styles/GlobalStyle';
import ProfileSettings, { profileSettingsRoute } from "./routes/ProfileSettings";
import App, { appRoute } from "./routes/App";
import Discovery, { discoveryRoute } from "./routes/Discovery";
import ErrorPage from "./routes/ErrorPage";
import SignIn, { signInRoute } from "./routes/SignIn";
import SignUp, { signUpRoute } from "./routes/SignUp";
import reportWebVitals from './reportWebVitals';
import { StyledRootContainer } from './style';

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: signInRoute,
    loader: signInLoader,
    element: <SignIn />,
  },
  {
    path: signUpRoute,
    element: <SignUp />,
  },
  {
    path: appRoute,
    element: <App />,
    children: [
      {
        path: discoveryRoute,
        loader: discoveryLoader,
        element: <Discovery />,
      },
      {
        path: profileSettingsRoute,
        loader: profileSettingsLoader,
        element: <ProfileSettings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StyledRootContainer>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StyledRootContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
