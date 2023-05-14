// Core
import Router from "./Core/Router";
// Pages
import { signUp } from "./Pages/signUp/signUp";
import { signIn } from "./Pages/signIn/signIn";
import { chats } from "./Pages/chats/index";
import { profile } from "./Pages/profile/profile";
// Styles
import "./styles/style.scss";
// Routings
Router.use("/", signIn);
Router.use("/sign-up", signUp);
Router.use("/messenger", chats);
Router.use("/profile", profile);
Router.use("/settings", profile);
Router.use("/settings/password", profile);
Router.start();
