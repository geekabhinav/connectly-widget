import { SMSIcon, MessengerIcon, InstagramIcon } from "../utils/icons";

export enum MessagingApp {
  SMS = "SMS",
  Messenger = "Messenger",
  Instagram = "Instagram",
}

export const APP_CONFIG = {
  apps: [{
    name: MessagingApp.SMS,
    icon: SMSIcon,
    redirectURL: "https://connectly.com/mock-sms?user=abhinav"
  }, {
    name: MessagingApp.Messenger,
    icon: MessengerIcon,
    redirectURL: "https://connectly.com/mock-messenger?user=abhinav"
  }, {
    name: MessagingApp.Instagram,
    icon: InstagramIcon,
    redirectURL: "https://connectly.com/mock-instagram?user=abhinav"
  }],
  timers: {
    ANIMATION_DURATION: 200,
    MINIMIZE_DELAY: 3000
  }
};
