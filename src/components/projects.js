import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://rlv.zcache.com/diy_custom_notebook_paper_block_with_thin_lines_notepad-rda60e0f945664f4096fef2257e722c32_amb08_8byvr_704.jpg) center / cover'}}>Note Taker</CardTitle>
            <CardText>
            For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bsekis/note-taker">GitHub</a></Button>
              <Button colored><a href="https://limitless-meadow-52901.herokuapp.com/notes">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://filmdaze.net/wp-content/uploads/2019/02/Gary-Cole-Office-Space-Lumbergh.jpg) center / cover'}} >Employee Directory</CardTitle>
            <CardText>
            An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bsekis/employee-directory">GitHub</a></Button>
              <Button colored><a href="https://bsekis.github.io/employee-directory/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://media.timeout.com/images/105636969/image.jpg) center / cover'}} >Birthday Master</CardTitle>
            <CardText>
            Our motivation was to help the users keep track of birthdays of loved ones and facilitate the process of coming up with a gift idea by looking at gifts given to them the previous year
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/llaraama/Birthday-Master">GitHub</a></Button>
              <Button colored><a href="https://desolate-journey-79245.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg) center / cover'}} >Weather Finder</CardTitle>
            <CardText>
              App that allows users to search weather conditions for specific cities using OpenWeather API
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bsekis/weatherhw">GitHub</a></Button>
              <Button colored><a href="https://bsekis.github.io/weatherhw/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

             {/* Project 5 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.internetmatters.org/wp-content/uploads/2020/01/Quiz-1-600x315.png) center / cover'}} >Code Quiz</CardTitle>
            <CardText>
            This is a quiz game where the user has a certain amount of time to answer questions. The game ends once the timer runs out or there are no more questions to answer. Allow users to input their initials for a high score board which is saved in local storage.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/bsekis/code-quiz">GitHub</a></Button>
              <Button colored><a href="https://bsekis.github.io/code-quiz/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )

    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Portfolio</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
