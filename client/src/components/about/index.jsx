import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from '@reach/router';
import { Row, Col } from 'react-bootstrap';
import InfoDisplay from '../InfoDisplay';

const About = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <InfoDisplay title="About">
            <Card.Text>
              Looking for that old school feel and challenge but still want to be able to experience some of the newer content? Then look no further than
              Kraken!
              <br />
              If interested in playing on this server, follow the{' '}
              <b>
                <Link to="/install">Installation</Link>
              </b>{' '}
              guide! It will guide you with everything you need to setup the client and start playing today!
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <InfoDisplay title="Server Settings">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Settings</th>
                  <th>Kraken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level Cap</td>
                  <td>
                    75. <br />
                    <i>Note: May be increased at a later date.</i>
                  </td>
                </tr>
                <tr>
                  <td>Expansions</td>
                  <td>
                    Currently only up to ToAU. <br />
                    <i>Note: May be expanded at a later date.</i>
                    <br />
                    RoV and RoE are Enabled. No Spark shops.
                  </td>
                </tr>
                <tr>
                  <td>Exp</td>
                  <td>Era Exp.</td>
                </tr>
                <tr>
                  <td>Movement Speed</td>
                  <td>Era Speed.</td>
                </tr>
                <tr>
                  <td>Fame</td>
                  <td>Era Fame.</td>
                </tr>
                <tr>
                  <td>Auction House</td>
                  <td>
                    Unlimited Listings and no automatic AH returns. <br />
                    <i>Note: May be changed at a later date.</i>
                  </td>
                </tr>
                <tr>
                  <td>Items</td>
                  <td>Removed Out of Era items.</td>
                </tr>
                <tr>
                  <td>Mobs</td>
                  <td>Era settings and levels.</td>
                </tr>
                <tr>
                  <td>Trusts</td>
                  <td>Enabled.</td>
                </tr>
                <tr>
                  <td>Homepoints</td>
                  <td>
                    Town Homepoints outside of cities are available. <br />
                    No Homepoint teleportations.
                  </td>
                </tr>
              </tbody>
            </table>
          </InfoDisplay>
        </Col>
      </Row>

      {/*
      <Row className="mt-3">
        <Col>
          <InfoDisplay title="How can I help?">
            <Card.Text>
              There are several ways to help. You can fill out bug reports,
              report players who are cheating by using the in-game ticketing
              system, volunteer as a staff member, contribute code, et. cetera.
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>
    */}
    </>
  );
};

export default About;
