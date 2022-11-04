import React, { useRef, useMemo, useContext, useState } from "react";
import { CloseIcon } from "../../utils/icons";
import "./index.scss";
import { WithAnimateProps, withAnimate } from "../../components/withAnimation";
import { WidgetContext } from "../../config/context";
import { useParams } from "react-router-dom";

type ChatProps = WithAnimateProps;
const defaultMessage = (firstName: string) => `Welcome to connectly chat, ${firstName}!`;

const ChatInternal: React.FC<WithAnimateProps> = ({ navigate }) => {
  const { appName } = useParams();
  const config = useContext(WidgetContext);
  const [messages, setMessages] = useState<string[]>([defaultMessage(config.user?.firstName ?? "World")]);
  const [isSending, setIsSending] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSend = React.useCallback(() => {
    if (isSending) {
      return;
    }

    const val = textAreaRef.current?.value;
    if (val) {
      textAreaRef.current.value = "";
      setIsSending(true);
      // Mocking async action (network call)
      setTimeout(() => {
        setIsSending(false);
        setMessages([...messages, val]);
      }, 3000);
    }
  }, [textAreaRef, isSending, setIsSending, setMessages, messages]);

  const goToExpanded = React.useCallback(() => {
    setTimeout(() => navigate("/"), 100);
  }, [navigate]);

  return useMemo(() => {
    return <div className="chat-container">
      <div className="chat-header">
        <h4 className="chat-title">Send message via {appName}</h4>
        <a onClick={goToExpanded}>
          <img src={CloseIcon} alt="close chat"/>
        </a>
      </div>
      <div className="chat-body">
        {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </div>
      <div className="chat-input">
        <textarea ref={textAreaRef} readOnly={isSending} placeholder={isSending ? "Mocking network call..." : "Type your message here"} name="message" cols={5} rows={2}></textarea>
        <a href="#" onClick={onSend}>{isSending ? "..." : "Send"}</a>
      </div>
    </div>
  }, [goToExpanded, appName, onSend, textAreaRef, isSending, messages]);
}

export const Chat = withAnimate<ChatProps>(ChatInternal, "chat")
