import React from 'react';
import CountUp from 'react-countup';
import { MDBCard, MDBCardBody, MDBRow } from 'mdbreact';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className="col-md-12 pt-5 container pb-5">

            <MDBRow className="col-md-12">
                <MDBCard className="col-md-3 mx-auto cardWidth mb-3">
                    <MDBCardBody>
                    <p className="font-weight-light">Zachorowania</p>
                    <h4 className="infected">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </h4>
                    <p>{new Date(lastUpdate).toLocaleDateString('pl-PL')}</p>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="col-md-3 mx-auto cardWidth mb-3">
                    <MDBCardBody>
                    <p className="font-weight-light">Wyzdrowienia</p>
                    <h4 className="recovered">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </h4>
                    <p>{new Date(lastUpdate).toLocaleDateString('pl-PL')}</p>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="col-md-3 mx-auto cardWidth mb-3">
                    <MDBCardBody>
                    <p className="font-weight-light">Zgony</p>
                    <h4 className="deaths">
                    <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                    </h4>
                    <p>{new Date(lastUpdate).toLocaleDateString('pl-PL')}</p>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

        </div>
    )
}

export default Cards;