<div className="back">
         <div className="center">
          <div className="left">
            <h1 className="login-text">Login</h1>
            <span className="f-16">Check out and rate my personal blog!</span>
          </div>
          <div className="right">
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
                    <ul>
                        <a>
                          <li className="sotIconBorder">
                              <TwitterOutlined className="sotIcon" />
                          </li>
                        </a>
                        <a>
                          <li className="sotIconBorder">
                              <InstagramOutlined className="sotIcon" />
                          </li>
                        </a>
                        <a>
                          <li className="sotIconBorder">
                              <AmazonOutlined className="sotIcon" />
                          </li>
                        </a>
                        <a>
                          <li className="sotIconBorder">
                              <GoogleOutlined className="sotIcon" />
                          </li>
                        </a>
                    </ul>
                  </div>
              </Form>
            </div>
          </div>
         </div>
       </div>
