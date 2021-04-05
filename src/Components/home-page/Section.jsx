import React from 'react'
import { Drawer, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import MyWorks from './MyWorks/MyWorks';

class Section extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <>
        <Button 
            onClick={this.showDrawer} 
            className="projectBtn"
        >
            MY PROJECTS
        </Button>

        <Drawer
          title={
            <div className="w-100 sectionClose">
              <div onClick={this.onClose} className="closeBtn">
                <CloseOutlined onClick={this.onClose} />
              </div>
            </div>
          }
          width='100%'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {/* <Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </Button> */}
          {/* <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          > */}
            {/* This is two-level drawer
          </Drawer> */}

          <MyWorks />
        </Drawer>
      </>
    );
  }
}

export default Section