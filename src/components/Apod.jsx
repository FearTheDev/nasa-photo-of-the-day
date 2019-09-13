import React from "react";
import Loader from "./Loader";
import DateSelector from "./DateSelector";

const Apod = props =>{

    const {title, description, url} = props;


    // If the props have not yet been populated then display a loader component.
    if(!props.url) return (
        <div className="display-body">
            <Loader message="Retrieving data from NASA API.." size="2rem"/>
        </div>
        );

    
    let dataType;
    
    if(props.url.includes('youtube') || props.url.includes('ustream') || props.url.includes('vimeo')){
        dataType = <iframe title={title} src={url} width="100%" height="100%" frameBorder="0"></iframe>
    }else if(props.url === undefined){
        dataType = <h1>No image available for this day!</h1>;
    }else{  
        dataType = <img src={url} alt={title} />
    }

    let copyright;
    if(props.copyright === undefined){
        copyright = 'National Aeronautics and Space Administration';
    }else{
        copyright = props.copyright;
    }

    return (
        <div className="wrapper">
            <div className="display-header">
                <h1>Astronomy Picture Of The Day</h1>
                <DateSelector fnc={props.fnc}/>
            </div>
            <div className="display-body">
                
                {dataType}
                <div className="display-description">
                    <h3>{title} picture provided by {copyright}</h3>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default Apod;