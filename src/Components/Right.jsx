import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Icons from './Icons';

const layout = {
    labelCol: { span: 4 },
};

class Right extends Component {
    render() {
        return (
                <div className="right-top">
                    <Form {...layout} >
                        <Form.Item>
                        <Input size="large" placeholder="Email" />
                        </Form.Item>
                        
                        <Input size="large" placeholder="Password" />

                        <Checkbox className="check">
                        <span className="checkbox">
                            Keep me login on this device
                        </span>
                        </Checkbox>

                        <Form.Item>
                        <Button size="large" className="signBtn">Sign In</Button>
                        <span className="or">Or <a>Create New Account</a></span>
                        </Form.Item>
                        <div className="sotIcons">
                            <span className="or">Or connect with</span>
                            <Icons />
                        </div>
                    </Form>
                    </div>
        );
    }
}

export default Right;