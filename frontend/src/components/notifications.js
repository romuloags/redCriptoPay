import Toast from 'react-bootstrap/Toast'

const Notifications = ({noProvider}) => {
    return ( 
      <div className="p-3 position-absolute top-50 start-50 translate-middle">  
      <Toast closeButton={false} className="bg-dark border-0 text-light ps-3 p-2" delay={5000} autohide>
      Woohoo, you're reading this text in a Toast!
      </Toast>
      </div>
     );
}
 
export default Notifications;