import React from 'react';

import Particles from 'react-particles-js';


class Landing extends React.Component {
    render() {
      return (
        <section id="landingParticles" className="landing-section">
            <Particles 
                params={{ 
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 5
                        }
                    }
                
                }}
                style={{
                    width: '100%',
                }}
             /> 

        </section> 
    )}; 
}
   
export default Landing;
