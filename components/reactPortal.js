import { createPortal } from "react-dom";
import createWrapperAndAppendToBody from "../utils/createWrapperAndAppendToBody";

export default function ReactPortal({ children, wrapperId = "portal-wrapper"}) {
   let modalWrapper = document.getElementById(wrapperId);

   if (!modalWrapper) {
      modalWrapper = createWrapperAndAppendToBody(wrapperId);
   }
  return createPortal(children, modalWrapper);
}
