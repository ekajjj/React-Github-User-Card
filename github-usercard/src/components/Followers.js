import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';
import styled from 'styled-components'

const FollowDiv = styled.div`
    width:60%;
    margin: 20px auto;
    padding: 20px 20px;
    display: flex;
    background-color: grey;
    border-radius: 10px;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

// class Followers extends React.Component {
//     constructor(){
//         super()
//             this.state = {
//                 person: []
//             }
//     }
    
//     componentDidMount() {
//         this.fetchUserData();
//     }

//     fetchUserData() {
//         axios.get(`https://api.github.com/users/ekajjj/followers`)
//         .then(res => {
//             this.setState({
//                 person: res.data});
//             })
//         .catch(err => {
//             console.log('Error', err)
//         })
//         console.log('Person this.state', this.state.person);
//     }


//     render() {
//         console.log('Person this.state in render', this.state.person);
//         return (
//             <div className="FollowerCard">
               
                
//             </div>
//         )
//     }
// }

// export default Followers

//redone using props
const Followers = props => {

    return (
        <FollowDiv>
            {props.followerData.map(follower => <FollowerCard key={follower.id} follower={follower}/>)}
        </FollowDiv>
    )
}


export default Followers;
