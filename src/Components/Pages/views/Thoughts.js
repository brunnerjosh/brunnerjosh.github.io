import React from 'react';
import PageContent from '../PageContainer';

const MEDIUM_USERNAME = 'dourvaris'

export default class Thoughts extends React.Component {

  componentWillMount () {
    // Makes sure not to reload the Medium posts if we already loaded them
    if (this.props.medium && !this.props.medium.stories) {
      this.props.fetchMediumFeed(MEDIUM_USERNAME)
    }
  }

  renderMediumArticle (articles) {
    return articles.map( (article, index) => {
      return (
        <div key={index}>
          <div>{article.title}</div>
          <div>Created: {article.created}</div>
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        </div>
      )
    })
  }

  renderPageContent () {
    return (
      <div>
        <h1>Thoughts</h1>
        <p>I use Medium to write down the majority of my thoughts. Here are my most recent posts:</p>
        <button onClick={this.props.fetchMediumFeed.bind(null, MEDIUM_USERNAME)}>Reload posts</button>
        {this.props.medium.stories && this.renderMediumArticle(this.props.medium.stories.items)}
      </div>
    )
  }

  render () {
    return (
      <PageContent
        rightSide={{
          classes: 'col-xs-12',
          content: this.renderPageContent()
        }}
        />
    )
  }
}
