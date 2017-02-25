import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindFetchFeedToDispatch} from '../actions/profileActions'
var articlesRendered = 0;
exports.articlesRendered = articlesRendered


class Articles extends Component {

  componentWillMount() {
    this.props.fetchArticles()
    //articlesRendered = 1
  }

  render() {
    const articles = this.props.articles
    articles.push({id:1,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:2,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:3,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:4,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:5,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:6,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:7,author:"author1",date:"date1",text:"text1",comments:"comments1"})
    articles.push({id:8,author:"author1",date:"date1",text:"text1",comments:"comments1"})


    return (
      <div>
        <h1>Articles</h1>
        {articles.map(article => (
          <div key={article.id}>
            <p>By {article.author}</p>
            <p>Posted at {article.date}</p>
            <p>{article.text}</p>
            <p><img height="40" width="40" src="http://worldartsme.com/images/black-stick-figure-clipart-1.jpg" data-reactid=".0.0" /></p>
            <p>Comments: {article.comments}</p>
          </div>

        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    fetchArticles: bindFetchFeedToDispatch(dispatch)
  })
)(Articles)
