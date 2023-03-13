// Core
import Router from "./Core/Router";
// Pages
import { navigation } from "./Pages/navigation/navigation";
import { signUp } from "./Pages/signUp/signUp";
import { signIn } from "./Pages/signIn/signIn";
import { chats } from "./Pages/chats/chats";
import { profile } from "./Pages/profile/profile";
// Styles
import "./styles/style.scss";
// Routings
Router.use("/", navigation)
Router.use("/signup", signUp)
Router.use("/signin", signIn)
Router.use("/chats", chats)
Router.use("/profile", profile)
Router.use("/settings", profile)
Router.use("/settings/password", profile)
Router.start()
