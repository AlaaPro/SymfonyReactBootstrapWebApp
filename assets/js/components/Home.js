// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> <img src="https://www.ideo.ma/wp-content/uploads/2018/11/logo_last.png"/> </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                   </div>
               </nav>
               <Switch>
                   <Redirect exact from="/" to="/users" />
                   <Route path="/users" component={Users} />
                   <Route path="/posts" component={Posts} />
               </Switch>
           </div>
        )
    }
}
    
export default Home;