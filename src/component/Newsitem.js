import React, { Component } from 'react';

class Newsitem extends Component {

    render() {
        let {title , description,imageUrl,Newsurl} = this.props
        return (
            <div>
             <div className="card p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" style={{width:'18rem'}}>
  <img src={!imageUrl?"https://media1.faz.net/ppmedia/aktuell/wirtschaft/1211282243/1.9938401/facebook_teaser_fplus/49ffaf6e-6065-11ef-a87c.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body text-bg-danger ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={Newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success ">Read more</a>


  </div>
  
</div>
            </div>
        );
    }
}

export default Newsitem;
