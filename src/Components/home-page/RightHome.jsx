import React, { Component } from 'react';
import Typical from 'react-typical'
import Section from './Section';

class RightHome extends Component {
    render() {
        return (
            <div className="right-home">
                    <div>
                        <h1 className="typical"> I'am
                                <Typical 
                                    className="typicalText"
                                    steps={[' UI Designer', 1500, ' Freelancer', 1500,' Developer', 1500]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                        </h1>
                    </div>
                    <div>
                        <span className="located-text">
                            LOCATED IN GEORGIA
                        </span>
                    </div>
                    <div>
                        <Section />
                </div>
            </div>
        );
    }
}

export default RightHome;