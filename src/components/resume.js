import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ben Ekis</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Stack Web Developer with a background in management, team leading an unmatched work ethic. Effective at combining creativity and problem solving to develop user-friendly applications. Known amongst peers for an unflappable drive to succeed paired with an attention to detail no matter the complexity of the project.  </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>9301 Plashet Lane Mint Hill, NC 28227</p>
            <h5>Phone</h5>
            <p>(585)-259-0058</p>
            <h5>Email</h5>
            <p>bsekis21@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2012}
              schoolName="State University of New York at Purchase College"
              schoolDescription="B.A. Liberal Studies:Arts, National Society of Leadership and Success"
               />

               <Education
                 startYear={2004}
                 endYear={2006}
                 schoolName="Monroe Community College"
                 schoolDescription="A.S., Communication and Media Arts"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Butcher"
              jobDescription="-Provided high quality customer service daily through effective communication and problem-solving skills to meet customer needs.
              -Responsible for maintaining the presentation of the meat department
              -Maintained high quality standards and safety through the execution of company policies and guidelines"
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Security Advisor"
                jobDescription="-Sold and installed ADT residential security systems based on customers needs. 
                -Responsible for providing excellent customer service and driving customer loyalty, quality and overall satisfaction.
                -Other duties include servicing, programming, configuring, dismantling, reconstructing, converting, and trouble-shooting existing security and site automation solutions including, but not limited to, fire and carbon monoxide detection, networking, hosted video solutions, and access control.
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
