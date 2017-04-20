import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Content from "./content";
import Search from "./search.js";
import Content_form from "./content_form.js";
import Editform from "./editform";
class App extends React.Component
{
  constructor(props){
    super(props)
    this.state={};
  }
  render()
  {
    return(
      <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <Menu/>
          </div>
          <div className="right_col" role="main">
            <Search/>
            <Editform/>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
