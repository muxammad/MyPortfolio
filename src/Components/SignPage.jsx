import React, { Component } from 'react';
import Center from './Center';

class SignPage extends Component {
    render() {

        const back = {
            borderRadius: '.4rem',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

        return (
            <>
            <div style={back} className="back">
                <Center />
            </div>   
            
            </>
        );
    }
}

export default SignPage;