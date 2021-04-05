import { Space } from 'antd';
import React, { Component } from 'react';

class MyWorks extends Component {
    render() {

        const works = [1,2,3,4,5,6,7,8,9,10]
        const workItem = works.map((work)=> 
            <div id={work} className ="work-screen">

            </div>
        )

        return (
            <div className="works-section">
                <center>
                    <h1 className="works-text">
                        My Works
                    </h1>
                    <span className="works-title">
                        some of my best projects 
                    </span>
                </center>
                <Space align ="end" size={[16,16]} className="work-list" wrap>
                    {workItem}
                </Space>
            </div>
        );
    }
}

export default MyWorks;