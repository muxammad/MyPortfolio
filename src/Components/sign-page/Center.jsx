import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';


class Center extends Component {
    render() {
        const center = {
            position: 'relative',
            borderRadius: '.4rem',
            boxShadow: '0 0 4px 0 rgb(0 0 0 / 20%)',
            backgroundColor: '#fff',
            maxWidth: '680px',
            width: '94%',
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'flex',
            overflow: 'hidden',
        }

        return (
            <div className="center" style={center}>
                <Left />
                <Right />
             </div>
        );
    }
}

export default Center;