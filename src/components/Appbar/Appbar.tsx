import React from 'react'
import { Link } from 'react-router-dom'

import './Appbar.css';

interface Props {
    eventBurger: (args: boolean) => void,
    eventSearch: (args: boolean) => void,
    eventBrand: (args: any) => void,
}

function Appbar(props: Props) {

    const onBurgerClicked = () => {
        props.eventBurger(true);
    }

    const onSearchClicked = () => {
        props.eventSearch(true);
    }

    const onBrandClicked = () => {
        props.eventBrand("");
    }


    return (
        <div>
            <div className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-menu is-active">
                    <a className="navbar-item" onClick={onBurgerClicked}>
                        <span className="material-icons">menu</span>
                    </a>
                    <Link className="navbar-item brand" to="/" onClick={onBrandClicked}>Meal</Link>
                    <a className="navbar-item" onClick={onSearchClicked}>
                        <span className="material-icons">search</span>
                    </a>
                </div>

            </div>


        </div>

    )
}

export default Appbar
