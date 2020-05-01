import React, {Component} from 'react';
import socialProfiles from '../data/socialProfiles';

const SocialProfile = (props) => {

    const {title, image, link} = props.socialProfile;
    return(
        <span>
            {/* <h5>{title}</h5> */}
            <a href={link} target="_blank"><img src={image} alt="profile" style={{width:35, height:35, margin:30}}/></a>
        </span>
        )
}

const SocialProfiles = () => (
            <div>
                <h2>Social media.</h2>
                <div>
                    {socialProfiles.map(profile=>(
                        <SocialProfile key={profile.id} socialProfile={profile} />
                    ))}
                </div>
            </div>
)

export default SocialProfiles;