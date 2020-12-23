import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import classes from './NavBar.module.css';

class NavBar extends React.Component{
    state={
        active:false,
        
    }
    onToggleHandler=(e)=>{
        this.setState(prevState=>{
            return{
                active:!prevState.active,
            }
        })

    }
    render(){
        return(
            <div >
                <nav className={classes.navbarMain}>
                    <div className={classes.toggleIcon} onClick={this.onToggleHandler}>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>
                            <div className={classes.bar}></div>   
                    </div>
                    <ul className={`${classes.navbarDropDown} ${this.state.active?null:classes.remove}`}>
                        <NavLink to='/' className={classes.item}>HOME</NavLink>
                        <Link to='/news' className={classes.item}>NEWS</Link>
                        <NavLink to='/asteroid' className={classes.item}>ASTEROID</NavLink>
                        </ul>
                    <ul className={classes.navbarList}>
                        <NavLink to='/' className={classes.item}>HOME</NavLink>
                        <NavLink to='/news' className={classes.item}>NEWS</NavLink>
                        <NavLink to='/asteroid' className={classes.item}>ASTEROID</NavLink>               
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;