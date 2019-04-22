import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Typography } from "antd";
import { Router, Switch, Route } from "react-router-dom";
import Analysis from "./analysis";
import About from "./about";
import history from "../history";
import Welcome from "./welcome";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.welcomeClick = this.welcomeClick.bind(this);
    this.policyClick = this.policyClick.bind(this);

    this.aboutClick = this.aboutClick.bind(this);
  }

  welcomeClick(e) {
    history.push("/");
    this.setState({
      breadcrumbLevel: 2,
      breadcrumb2: "mainpage"
    });
  }

  policyClick(e) {
    history.push("/analysis");
    this.setState({
      breadcrumbLevel: 2,
      breadcrumb2: "analysis"
    });
  }
  aboutClick(e) {
    history.push("/about");
    this.setState({
      breadcrumbLevel: 2,
      breadcrumb2: "about"
    });
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Title style={{ color: "#e8e8e8" }}>HIV-HCV</Title>
          </Menu>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item onClick={e => this.welcomeClick(e)} key="1">
                <Icon type="home" />
                main page
              </Menu.Item>
              <Menu.Item onClick={e => this.policyClick(e)} key="0">
                <Icon type="bar-chart" />
                analysis
              </Menu.Item>
              <Menu.Item onClick={e => this.aboutClick(e)} key="2">
                <Icon type="info" />
                about
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.breadcrumb2}</Breadcrumb.Item>
              {this.state.breadcrumbLevel === 3 ? (
                <Breadcrumb.Item>{this.state.breadcrumb3}</Breadcrumb.Item>
              ) : null}
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 900
              }}
            >
              <Router history={history}>
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/about" component={About} />
                  <Route path="/analysis" component={Analysis} />
                </Switch>
              </Router>
            </Content>
            <Footer style={{ textAlign: "center" }}>HIV-HCV@2019</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Mainpage;
