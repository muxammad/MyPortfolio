<div className="signBack">
<div className="signCenter">
  <div className="signCenterLeft">
  <div className="signTexts">
    <div className="signing">
      <div className="signUp">
        <h2 className="signUpText">
          Sign Up
        </h2>
      </div>
      <div className="signIn">
        <h2 className="signInText">
          Sign In
        </h2>
      </div>
    </div>
  </div>
    

    <div className="email">
      <label className="inputLabel" >Email Address</label>
      <Input bordered={false} className="emailIn" id="emailIn" name="emailIn" placeholder="Mukhammd" />
    </div>

    <div className="password">
      <label className="inputLabel">Password</label>
      <Input bordered={false} className="emailIn" id="password" name="password" placeholder="Mukhammd" />
    </div>

    <div className="mark">
      <Checkbox className="agree">I agree to the <a className="terms">Terms</a> and <a className="terms">Privacy Policy</a></Checkbox>
    </div>

    <div className="sigBtn">  
      <a>
        <div className="letsBtn">
          <h3>Let's Go!</h3>
        </div>
      </a>
    </div>
    <div>
    <Divider orientation="center">
      <div className="sotIcons">
        <a>
          <div className="sotIcon">
            <GoogleOutlined className="icon" />
          </div>
          
        </a>
        <a>
          <div className="sotIcon">
            <AmazonOutlined className="icon" />
          </div>
        </a>
        <a>
          <div className="sotIcon">
            <InstagramOutlined className="icon" />
          </div>

        </a>
        <a>
          <div className="sotIcon">
            <TwitterOutlined className="icon" />
          </div>
        </a>
      </div>
    </Divider>
    </div>

  </div>


</div>
</div>