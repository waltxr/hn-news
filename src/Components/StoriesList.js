import React, { Component } from 'react'
import Story from './Story'
import { List, Search } from 'semantic-ui-react'

class StoriesList extends Component {
  state = {
    query: '',
  }

  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    console.log(this.props.stories);
    const stories = this.props.stories
    .filter( story => story.title.includes(this.state.query))
    .map(story => <Story id={story.id} url={story.url} title={story.title} key={story.id} />)

    return(
      <div>
        <Search onSearchChange={this.handleQueryChange} />
        <List>
        { stories }
        </List>
      </div>
    )
  }

}

export default StoriesList
