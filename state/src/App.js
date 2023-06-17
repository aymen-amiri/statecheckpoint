
import React from 'react';
import './app.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Aymen Amiri',
        bio: 'my bio doesnt say much',
        imgSrc: '/me.jpg',
        profession: 'Student'
      },
      show: false,
      mountedTime: null
    };
  }
  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className="container">
        <h1>Profile</h1>
        <button onClick={this.toggleShow} className="toggle-button">
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} className="profile-image" />
            <p>{person.profession}</p>
          </div>
        )}
        <p className="mounted-time">Time since component mount: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
