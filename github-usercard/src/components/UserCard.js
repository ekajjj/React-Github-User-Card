import React from 'react';
import axios from 'axios';
import styled from 'styled-components'


const WrapperDiv = styled.div`
    width:50%;
    margin: 20px auto;
    padding: 20px 20px;
    text-color: black;
    display: flex;
    background-color: darkgrey;
    border-radius: 10px;
    justify-content: space-between;
    
`

const RoundedImg = styled.img `
    border-radius: 50%;
    width: 200px;
    height: 200px;
    
`

const InnerRight = styled.div `
    width: 50%;
    text-align: right;
`

//redone using props

const UserCard = (props) => {

    return (
            <WrapperDiv> 
                <div> 
                    <RoundedImg src={props.userData.avatar_url ? props.userData.avatar_url : null} alt="profile image of the currently selected user"/>
                    <h3>{props.userData.name}</h3>
                </div>
                <InnerRight>
                    <p>Username: {props.userData.login}</p> 
                    <p>Bio: {props.userData.bio}</p>
                    <p>Total followers: {props.userData.followers} </p>
                    <p>Total following: {props.userData.following}</p>
                    <p>Public repos: {props.userData.public_repos}</p>
                    <a href={props.userData.html_url}><p>GitHub Link</p></a>
                </InnerRight>
            </WrapperDiv>
    )
}

export default UserCard;


// class UserCard extends React.Component {
//     constructor(){
//         super()
//             this.state = {
//                 user: []
//             }
//     }
    
//     componentDidMount() {
//         this.fetchUserData();
//     }

//     fetchUserData() {
//         axios.get(`https://api.github.com/users/ekajjj`)
//         .then(res => {
//             const user = res.data;
//             this.setState({ user });
//             console.log('res', res)
//           })
//         .catch(err => {
//             console.log('Error', err)
//         })
//     }


//     render() {
//         return (<div>
//         {this.state.user.map(user => (
//             <p>Hello, {user.name} from {user.followers}!</p>
//         ))}
//         </div>);
//     }

    // render() {
    //     return (
    //         <div className="userCard">
    //             <img src={this.state.user.avatar_url} alt="github profile" />
    //             <h1>{this.state.user.name}</h1>
    //             <h3>GitHub handle: <a href={this.state.user.html_url}>{this.state.user.login}</a></h3>
    //             <p>Followers: {this.state.user.followers}</p>
    //             <p>Following: {this.state.user.following}</p>
    //             <p>{this.state.user.bio}</p>
    //         </div>
    //     )
    // }
// }
