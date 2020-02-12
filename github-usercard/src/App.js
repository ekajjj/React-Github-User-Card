import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      // userData and followerData array
      followerData: []
    }
  }

  componentDidMount() {
    this.fetchGitData();
    this.fetchFollowerData();
  }

  fetchGitData = () => {
    axios.get(`https://api.github.com/users/ekajjj`).then(
      (res) => {
        console.log('info.data: ', res.data);
        this.setState({ userData: res.data }) 
        })
      .catch(
        (err) => {
          console.log('the error is: ' + err);
        })
  }

    fetchFollowerData = () => {
      axios.get(`https://api.github.com/users/ekajjj/followers`).then(
        (result) => {
          console.log('FollowerData ', result.data)
          this.setState( {followerData: result.data} )
        })
        .catch(
          (error) => {
            console.log(error)}
            )
    }
 
  render() {
  return (
    <div className="App">
        <h1>Github User Card via React</h1>
      <h2>{this.state.userData.login}</h2>
      <UserCard userData={this.state.userData}/>

      <h3>Followers: </h3>
      <Followers followerData={this.state.followerData}/>
    </div>
  );
};
} 

export default App;