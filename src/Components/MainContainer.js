import React, { Component } from 'react'
import StoriesList from './StoriesList'
import { Container } from 'semantic-ui-react'

class MainContainer extends Component {

  state = {
    stories: []
  }

  getTopArticleIds() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(stories => {
      console.log(stories);
      stories.slice(0,19).map( story => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`, {
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(story => {
          console.log(this.state.stories)
          this.setState({
            stories: this.state.stories.concat(story)
          })
        })
      })
    })
  }

  componentDidMount() {
    this.getTopArticleIds()
  }

  render() {
    console.log(this.state.stories);
    return(
      <Container>
        <StoriesList stories={this.state.stories}/>
      </Container>
    )
  }


}

export default MainContainer
