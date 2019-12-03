import React from 'react';
import { Link } from 'react-router-dom';



class ReceiveMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
        }
      }
    
      componentDidMount() {
        // Promise.all([
          fetch(`http://localhost:8000/api/messages/`)
          // fetch(`http://localhost:8000/api/message?received_message=${localStorage.received_message}`)
        // ])
        .then(response => response.json())
        .then(data => {
          this.setState({
            messages: data
          })
        })
      }
    
    render() {
    
        return (
        <>
            <section>
                <header>
                    <h4>Message Received</h4>
                </header>
                <p>[ placeholder for the responseAlert]</p>
            </section>
            <section>
                <Link to='/response-message'><button>Respond</button></Link>
                <Link to='/send-message'><button>Got it!</button></Link>
            </section>
        </>
            )
        }
    }


export default ReceiveMessage;