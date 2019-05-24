import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

class Story extends Component {

  render() {
    return(
      <List.Item>
        <a href={this.props.url} target='_blank'>{this.props.title}</a>
      </List.Item>
    )
  }
}

export default Story
