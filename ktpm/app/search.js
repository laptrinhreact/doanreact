import React from "react";
import ReactDOM from "react-dom";
export default class Search extends React.Component
{
  render()
  {
    return(
      <div className="">
            <div className="page-title">
              <div className="title_left">
                <h3>Contacts Design</h3>
              </div>
              <div className="title_right">
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
