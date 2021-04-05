import Particles from 'react-particles-js';
import React, { Component } from 'react';
import { Button } from 'antd';


class LeftHome extends Component {
    render() {

        return (
            <div className="left-home">
                <Particles className="canvasAnimation"
                    params={{
                        "particles": {
                            "number": {
                                "value": 30
                            },
                            "size": {
                                "value": 1
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        },
                    }}
                />

                <h1 className="user-name">Mukhammad Tukhsanov</h1>
                <span className="user-name temp-text">TEMPLATE</span>
                
        <Button 
            onClick={this.showDrawer} 
            className="aboutBtn"
        >
            ABOUT ME
        </Button>
            </div>
        );
    }
}

export default LeftHome;