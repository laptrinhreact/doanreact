import React from "react";
import ReactDOM from "react-dom";
export default class Editform extends React.Component
{
  constructor(props){
    super(props)
    this.style={
        color:"#fff",
        fontWeight:"500px"
    }
    console.log(this.style);
  }
  render()
  {
    return(
      <div className="">
              <div className="clearfix"></div>

              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Table design <small>Custom design</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>

                  <div className="x_content">

                    <p>Add className <code>bulk_action</code> to table for bulk actions options on row select</p>

                    <div className="table-responsive">
                      <table className="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr className="headings">
                            <th>
                              <input type="checkbox" id="check-all" className="flat"/>
                            </th>
                            <th className="column-title">Invoice </th>
                            <th className="column-title">Invoice Date </th>
                            <th className="column-title">Order </th>
                            <th className="column-title">Bill to Name </th>
                            <th className="column-title">Status </th>
                            <th className="column-title">Amount </th>
                            <th className="column-title no-link last"><span className="nobr">Action</span>
                            </th>
                            <th className="bulk-actions" colspan="7">
                              <a className="antoo" style={this.style}>Bulk Actions ( <span className="action-cnt"> </span> ) <i className="fa fa-chevron-down"></i></a>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000040</td>
                            <td className=" ">May 23, 2014 11:47:56 PM </td>
                            <td className=" ">121000210 <i className="success fa fa-long-arrow-up"></i></td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$7.45</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000039</td>
                            <td className=" ">May 23, 2014 11:30:12 PM</td>
                            <td className=" ">121000208 <i className="success fa fa-long-arrow-up"></i>
                            </td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$741.20</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000038</td>
                            <td className=" ">May 24, 2014 10:55:33 PM</td>
                            <td className=" ">121000203 <i className="success fa fa-long-arrow-up"></i>
                            </td>
                            <td className=" ">Mike Smith</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$432.26</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000037</td>
                            <td className=" ">May 24, 2014 10:52:44 PM</td>
                            <td className=" ">121000204</td>
                            <td className=" ">Mike Smith</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$333.21</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000040</td>
                            <td className=" ">May 24, 2014 11:47:56 PM </td>
                            <td className=" ">121000210</td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$7.45</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000039</td>
                            <td className=" ">May 26, 2014 11:30:12 PM</td>
                            <td className=" ">121000208 <i className="error fa fa-long-arrow-down"></i>
                            </td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$741.20</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000038</td>
                            <td className=" ">May 26, 2014 10:55:33 PM</td>
                            <td className=" ">121000203</td>
                            <td className=" ">Mike Smith</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$432.26</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000037</td>
                            <td className=" ">May 26, 2014 10:52:44 PM</td>
                            <td className=" ">121000204</td>
                            <td className=" ">Mike Smith</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$333.21</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>

                          <tr className="even pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000040</td>
                            <td className=" ">May 27, 2014 11:47:56 PM </td>
                            <td className=" ">121000210</td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$7.45</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                          <tr className="odd pointer">
                            <td className="a-center ">
                              <input type="checkbox" className="flat" name="table_records"/>
                            </td>
                            <td className=" ">121000039</td>
                            <td className=" ">May 28, 2014 11:30:12 PM</td>
                            <td className=" ">121000208</td>
                            <td className=" ">John Blank L</td>
                            <td className=" ">Paid</td>
                            <td className="a-right a-right ">$741.20</td>
                            <td className=" last"><a href="#">View</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>


                  </div>
                </div>
              </div>
            </div>
    );
  }
}
