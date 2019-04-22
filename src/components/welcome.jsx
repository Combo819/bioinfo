import React, { Component } from "react";
import { Row, Col} from "antd";
import Title from "antd/lib/typography/Title";
import { Typography } from "antd";
import welcomeUPImg from "../images/WechatIMG407.jpeg";
import welcomeDownImg from '../images/WechatIMG516.jpeg'

const { Paragraph } = Typography;
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <img width={"250px"} src={welcomeUPImg} />
        </div>
        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="space-around"
          align="top"
        >
          <Col>
            <Title>Overview</Title>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "15px" }}
          type="flex"
          justify="center"
          align="top"
        >
          <Col span={12}>
            <Paragraph style={{fontSize:20}}>
            Hepatitis C Virus (HCV) is a blood borne pathogen which commonly co-transmits with the Human Immunodeficiency Virus (HIV). It is common for one person to be infected with both pathogens. Given that neither pathogen has significant symptoms until a decade or more of infection many are not aware that they are infected.
            </Paragraph>
            <Paragraph style={{fontSize:20}}>
            Molecular Epidemiology is the practice of using Biotechnologies and molecular techniques in for epidemiological analysis. We are concerned with using molecular epidemiology methods to detect HIV infection with existing HCV data. Given the characteristics of HCV and HIV such a model would be useful to detect people who are unaware of their infection status. Co-infection is also a significant indicator of high-risk public health relevant behavior such as Opioid use.

            </Paragraph>
            <Paragraph style={{fontSize:20}}>
            We developed a model using molecular data for the GHOST project to detect HIV using the HCV population. HCV is known to exist as a closely related set of variants which evolves in the host to evade immunological pressure and maintain infection. HIV infection perturbs the host immune system sufficiently to alter the dynamics of the HCV infection. We use machine learning to detect the patterns of HCV population structure indicative of HIV infection
            </Paragraph>
          </Col>
        </Row>
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>
          <img width={"250px"} src={welcomeDownImg} />
        </div>
      </div>
    );
  }
}

export default Welcome;
