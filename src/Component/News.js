import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller';

export class News extends Component
{
    static defaultProps={
        country:'in',
        pageSize:100,
        category:'science'
    } 

    static propTypes={
       country:PropTypes.string,
       pageSize:PropTypes.number,
       category:PropTypes.string
    }
     
        constructor(props)
        {
          super(props);
          this.state={
              articles:[],
              loading:false,
              page:1,
              totalResults: 0
          }
          document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
        } 
         
         capitalizeFirstLetter=(string) =>{
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

          async updateNews() {
            const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=146105b9f6764d718ff99f13b71dc930&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            console.log(this.props.pageSize);
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false, 

            })
    
        }

        async componentDidMount()
        {
            this.updateNews();
        }

        fetchMoreData= async ()=>{
            this.setState({page:this.state.page+1});
            const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=146105b9f6764d718ff99f13b71dc930&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data=await fetch(url);
            
            let parseData=await data.json();
            console.log(parseData.articles);
            this.setState({articles:this.state.articles.concat(parseData.articles),
                totalResults:parseData.totalResults});
        }
    
    
    handleNextClick= async ()=>{
             
            // if(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))
            // {

            // }
            // else
            // {
             
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=146105b9f6764d718ff99f13b71dc930&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            // let data=await fetch(url);
          
            // let parseData=await data.json();
            // console.log(parseData.articles[0]);
            
             
            //  this.setState({
            //      page:this.state.page+1,
            //      articles:parseData.articles,
                
            //  })
            // }
            this.setState({page:this.state.page+1});
            this.updateNews();

    }

    handlePrevClick= async ()=>
    {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=146105b9f6764d718ff99f13b71dc930&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // let data=await fetch(url);
        
        // let parseData=await data.json();
        // //console.log(parseData.articles[0]);
        
         
        //  this.setState({
        //      page:this.state.page-1,
        //      articles:parseData.articles,
             
        //  })
        this.setState({page:this.state.page-1});
        this.updateNews();

    }


    render() {
        return (
            <>
               <h1 className="text-center">NewsMonkey-top headlines on- {this.capitalizeFirstLetter(this.props.category)}</h1>
               <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h1>Loading.....</h1>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {this.state.articles.map((element,ind) => {
                            return <div className="col-md-4" key={element.url} key={ind}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>

        )
    }
}

export default News;
