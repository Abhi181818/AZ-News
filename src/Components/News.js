import React, { Component } from 'react'
import { NewsItem } from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    static propTypes = {
        country: 'in',
        pageSize: 15,
        category: 'General'
    }
    static defaultProps = {
        country: PropTypes.func.string,
        pageSize: PropTypes.func.number,
        category: PropTypes.func.string
    }
    constructor(props) {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async componentDidMount() {
        this.props.setProgress(10)
        let uurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${your_api_key}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(uurl);
        let paresedData = await data.json();
        this.setState({ articles: paresedData.articles, totalResults: paresedData.totalResults, loading: false })
        this.props.setProgress(100)

    }
    updateOnClick = async () => {
        this.props.setProgress(10)
        let uurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${your_api_key}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(uurl);
        let paresedData = await data.json();
        this.setState({ articles: paresedData.articles, totalResults: paresedData.totalResults, loading: false })
        this.props.setProgress(100)
    }
    fetchMoreData = async () => {
        this.props.setProgress(10)
        this.setState({
            page: this.setState.page + 1
        })
        let uurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${your_api_key}&page=${this.state.page + 1}`
        this.setState({ loading: true })
        let data = await fetch(uurl);
        let paresedData = await data.json();
        this.setState({ articles: this.state.articles.concat(paresedData.articles), totalResults: paresedData.totalResults, loading: false })
        this.props.setProgress(100)

    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ margin: "40px 0px" }}><strong>Top  Headlines From : {this.props.category}</strong></h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={crypto.randomUUID()}> <NewsItem key={element.key} title={element.title ? element.title : ""} description={element.description ? element.description : ""} image_url={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "No author"} date={element.publishedAt} source={element.source} /></div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
