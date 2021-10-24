import {store} from "react-notifications-component";

type NotificationType = "danger" | "success" | "info" | "warning" | "default";

export const addNotification = (title: string, type: NotificationType, message?: string) => {
  store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
};