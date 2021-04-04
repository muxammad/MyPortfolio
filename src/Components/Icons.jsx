import React, { Component } from 'react';
import { AmazonOutlined, GoogleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'


class Icons extends Component {
    render() {
        const icons = [<TwitterOutlined className="sotIcon" />,<InstagramOutlined className="sotIcon" />,<AmazonOutlined className="sotIcon" />,<GoogleOutlined className='iconClass' />]
        const iconItem = icons.map((icon) => 
        <a>
            <li className="sotIconBorder">
                {icon}
            </li>
        </a>
        )
        return (
            <ul>
                {iconItem}
            </ul>
        );
    }
}

export default Icons;