import React, {useEffect} from 'react';
import {FiXCircle, FiAlertCircle, FiInfo, FiCheckCircle} from 'react-icons/fi';
import {ToastMessage, useToast} from '../../../hooks/ToastContext';
import {Container} from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24}/>,
  error: <FiAlertCircle size={24}/>,
  success: <FiCheckCircle size={24}/>,
}

const Toast: React.FC<ToastProps> = ({message, style}) => {
  const {removeToast} = useToast();

  useEffect(
    () => {
      const timer = setTimeout(() => {
        removeToast(message.id);
      }, 5000);

      return () => {
        clearTimeout(timer);
      }
    }, [message.id, removeToast]
  );

  return (
    <Container 
      type={message.type} 
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      
      <div>
        <strong>{message.title}</strong>
        {message.description && (<p>{message.description}</p>)}
      </div>
      <button onClick={() => removeToast(message.id)}>
        <FiXCircle size={16} />
      </button>
    </Container>
  );
}

export default Toast;