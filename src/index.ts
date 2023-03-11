// Core
import render from "./Core/render";
import Router from "./Core/Router";
// Pages
import navigation from "./Pages/navigation/navigation";
import signUp from "./Pages/signUp/signup";
import authPage from "./Pages/authPage/authPage";
import errorPage from "./Pages/ErrorPage/errorPage";
import chatsPage from "./Pages/chatsPage/chatsPage";
import profilePage from "./Pages/profilePage/profilePage";
// Styles
import "./styles/style.scss";
// Routings
Router.use('/', navigation)
Router.use('/signup', signUp)
Router.start()
