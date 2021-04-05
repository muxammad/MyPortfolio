import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Icons from './Icons';

const layout = {
    labelCol: { span: 4 },
};

const prime = {
    color: '#4f46a9'
}

const right = {
    width: '100%',
    padding: '2.5rem'
}

const or = {
    color: '#757575',
    fontSize: '14px'
}

const checkbox = {
  color: '#757575',
}

const check = {
  margin: '1rem 0'

}

const sotIcons = {
    display: 'flex',
    justifyContent: 'space-between'
}

class Right extends Component {
    render() {
        return (
                <div style={right}>
                    <Form {...layout} >
                        <Form.Item>
                        <Input size="large" placeholder="Email" />
                        </Form.Item>
                        
                        <Input size="large" placeholder="Password" />

                        <Checkbox style={check}>
                        <span style={checkbox}>
                            Keep me login on this device
                        </span>
                        </Checkbox>

                        <Form.Item>
                        <Button size="large" className="signBtn">Sign In</Button>
                        <span style={or} >Or <a style={prime} href="#" >Create New Account</a></span>
                        </Form.Item>
                        <div style= {sotIcons} >
                            <span style={or} >Or connect with</span>
                            <Icons />
                        </div>
                    </Form>
                    </div>
        );
    }
}

export default Right;