import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
       let {title,description,imgUrl, newsUrl,author,date,source} = this.props;
        return (
            <div className ="my-3">
                    <div className="card" >
                        <div style={{
                            display: 'flex',
                            justifyContent:'flex-end',
                            position:'absolute',
                            right:'0'
                        }

                        }>

                        
                    <span class=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                     <img src={imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                       <h5 className="card-title">{ title} <span class="badge bg-success">New</span>  

</h5>
                     <p className="card-text">{description}...</p>
                     <p className="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                     <a rel="noreferrer"href= {newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                   </div>
                       </div>
            </div>
        )
    }
}

export default NewsItem
