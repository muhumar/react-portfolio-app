import React, {Component} from 'react';
import Projects from './Projects';
import Profiles from './Profiles';
import profile_pic from '../assets/profile.png';
import Title from './Title';

class App extends Component {

    state = {displayBio:false};

    toggleDisplayBio = ()=>{
        this.setState({displayBio:!this.state.displayBio});
    }

    render(){

        return(
            <div>
                <img src={profile_pic} alt="Profile_Picture"  className="profile"/>
                <h1>Hello.</h1>
                <p>My name is Umar.</p>
                 <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                    <div>
                    <p>I live in New York, and code everyday.</p>
                    <p>My favorite language is python and javascript.</p>
                    <p>Besides coding i also love TV shows and traveling.</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>): (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <br/>
                <hr/>
                <Projects/>
                <hr/>
                <Profiles/>
            </div>
        )
    }
}

export default App;