import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import ProfileDetails from '../components/profile/ProfileDetails';
import ProfileImage from '../components/profile/ProfileImage';
import ProfileStats from '../components/profile/ProfileStats';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {changeProfileImage,changeProfileData} from '../redux/actions/userActions';
const GridWrapper = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px;

`;

const ProfileMain = styled.div`
display:grid;
grid-column-start: 1;
grid-column-end: 5;
border-bottom:  1px solid #6b6f8c;
`;

const Photo = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
`;

const Details = styled.div`
display:grid;

    grid-column-start: 2;
    grid-column-end: 5;
`;
const Stats = styled.div`
    grid-column-start: 1;
    grid-column-end: 5; 
    border-bottom:  1px solid #6b6f8c;
`;

const Radar = styled.div`
    height: 500px;
`;

const Results = styled.div`
    grid-column-start: 1;
    grid-column-end: 5; 
    border-bottom:  1px solid #6b6f8c;
`;


class User extends Component {

    componentDidMount() {


    }
    render() {
        const { user: {
            name,
            secondName,
            testResults,
            group,
            role,
            city,
            imageUrl } } = this.props;
        return (
            <Paper>
                <GridWrapper>
                    <ProfileMain>
                        <Photo ><ProfileImage imageUrl={imageUrl} changeProfileImage={this.props.changeProfileImage}/></Photo>
                        <Details><ProfileDetails changeProfileData={this.props.changeProfileData} name={name} secondName={secondName} role={role} city={city} group={group} /></Details>
                    </ProfileMain>
                    <Stats >
                        <h2>Статистика</h2>
                        <Radar><ProfileStats testResults={testResults} /></Radar>

                    </Stats>
                    <Results>
                        <h2>Результаты тестов</h2>
                    </Results>

                </GridWrapper>
            </Paper>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.credentials
})

export default connect(mapStateToProps, {changeProfileImage,changeProfileData})(User)