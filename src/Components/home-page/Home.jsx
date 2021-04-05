import React, { Component } from 'react';
import LeftHome from './LeftHome';
import RightHome from './RightHome';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <LeftHome />
                <RightHome />
            </div>
        );
    }
}

export default Home;