/*
See this link for potential to load more than 10 items in RSS feed
https://help.medium.com/hc/en-us/articles/225170228-Setting-full-and-partial-RSS-feeds-for-publications-and-profiles
*/
import React from 'react';
import moment from 'moment';
import className from 'classnames';
import Theme from '../../Theme';
import Icon from '../../Icon/Icon';
import Constants from '../../../Constants';
import Loading from '../../Shared/Loading';
import PageContent from '../PageContainer';
import '../../../Styles/Medium.css';
import '../../../Styles/Error.css';

const MEDIUM_DATE_FORMAT = 'ddd, D MMM YYYY HH:mm:ss Z';

export default class Thoughts extends React.Component {

  componentWillMount () {
    // Makes sure not to reload the Medium posts if we already loaded them
    if (this.props.medium && !this.props.medium.stories) {
      this.props.fetchMediumFeed(Constants.handle)
    }
  }

  renderMediumArticles (articles) {

    const chunkededByMonth = [];

    /**
     * Loops through the given articles and adds them to a sorted array by publish date
     */
    articles.forEach( (article, index) => {

      // Prevent adding "Medium comments" to final array
      if (!article.category) return;

      const articleDate = moment(article.pubdate, MEDIUM_DATE_FORMAT)
                          .format('MMMM, YYYY');

      const currentArticle = (
        <div key={index}>
          <div className='medium-feed__container'>
            <h2
              className={'medium-feed-title'}
              onClick={() => window.open(article.link, '_blank')}>
              {article.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: article.description }} />
          </div>
        </div>
      )

      // See if we can find an existing array to push this next article to
      for (let month of chunkededByMonth) {
        if (month.date === articleDate) {
          month.items.push(currentArticle);
          return;
        }
      }

      // Didn't find an array, create a new entry and add it there
      chunkededByMonth.push({
        date: articleDate,
        items: [currentArticle]
      });

    });

    // Now that we have sorted the articles, render them with the date spacer
    return chunkededByMonth.length ? chunkededByMonth.map( (month, index) => {
      return (
        <div key={index}>
          <div className='medium-feed-spacer'>{month.date}</div>
          {month.items}
        </div>
      )
    }) : (
      <div>
      No posts yet :(
      </div>
    )
  }

  renderPageContent () {

    const errorClasses = className('error__action', {
      'is-spinning': this.props.medium.isLoading
    });

    const content = this.props.medium.stories ?
      this.renderMediumArticles(this.props.medium.stories.items) : this.props.medium.error ? (
        <div className='error'>
          <h3>Error fetching Medium posts</h3>
          <p>Click the refresh icon to try again.</p>
          <div className={errorClasses} onClick={this.props.fetchMediumFeed.bind(null, Constants.handle)}>
            <Icon icon='Sync' color={Theme.primary.hex} />
          </div>
        </div>
      ) : (
        <Loading />
      );

    return (
      <div>
        <h1>Thoughts</h1>
        <p>I use Medium to write down the majority of my thoughts. Here are my most recent posts:</p>
        {content}
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
