import React, { Component } from 'react';
import { AmazonOutlined, GoogleOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'


class Icons extends Component {
    render() {

        const iconList = {
            margin: 0,
            display: 'flex',
        }

        const sotIconBorder = {
                marginLeft: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #4f46a9',
                borderRadius: '50%',
                width: '30px',
                height: '30px'
        }

        const sotIconItem = {
                color: '#4f46a9'
        }

        const icons = [<TwitterOutlined className="sotIcon" />,<InstagramOutlined className="sotIcon" />,<AmazonOutlined className="sotIcon" />,<GoogleOutlined className='iconClass' />]
        const iconItem = icons.map((icon, i) => 
        <a style={sotIconItem} key={i} >
            <li style={sotIconBorder} >
                {icon}
            </li>
        </a>
        )
        return (
            <ul style={iconList}>
                {iconItem}
            </ul>
        );
    }
}

export default Icons;