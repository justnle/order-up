import React from 'react';
import { SquareTables, CircleTables, RectangleTables } from '../../components/FloorPlan';
import { Container, Row, Col } from '../../components/Grid';

class FloorPlans extends React.Component {





    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <div className="col-sm">
                            <RectangleTables />
                        </div>

                        <div className="col-sm">
                            <RectangleTables />
                        </div>
                        
                        <div className="col-sm">
                            <SquareTables />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm">
                            <CircleTables />
                        </div>

                        <div className="col-sm">
                            <CircleTables />
                        </div>
                        <div className="col-sm">
                            <SquareTables />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm">
                            <CircleTables />
                        </div>

                        <div className="col-sm">
                            <CircleTables />
                        </div>
                        <div className="col-sm">
                            <SquareTables />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FloorPlans;