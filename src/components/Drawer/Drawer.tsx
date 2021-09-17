import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Drawer.css';

interface Props {
    hidden: boolean,
    eventClose: (args: any) => void,
    eventClick: (args: any) => void,
    drawerTitle: string,
    drawerOptions: any[]
}

function Drawer(props: Props) {

    useEffect(() => {
        props.hidden ? showDrawer() : hideDrawer();
    }, [props.hidden])

    const showDrawer = () => {
        const drawer = document.querySelector('.drawer');
        drawer?.removeAttribute('hidden');
        showDrawerMenu();
    }

    const hideDrawer = () => {
        const drawer = document.querySelector('.drawer');
        hideDrawerMenu();
        drawer?.setAttribute('hidden', 'true');
    }

    const showDrawerMenu = () => {
        const drawerMenu = document.querySelector('.drawer-menu');
        drawerMenu?.classList.remove('close-drawer-menu');
        drawerMenu?.classList.add('open-drawer-menu');
    }

    const hideDrawerMenu = () => {
        const drawerMenu = document.querySelector('.drawer-menu');
        drawerMenu?.classList.remove('open-drawer-menu');
        drawerMenu?.classList.add('close-drawer-menu');
    }

    const onOptionClicked = (option: string) => {
        props.eventClick(option)
        hideDrawer();
    }

    const onClose = () => {
        props.eventClose(undefined);
    }

    return (
        <div className='drawer'>
            <aside className="drawer-menu">
                <div className="close-btn">
                    <a onClick={onClose}><i className="material-icons">close</i></a>
                </div>
                <div className="container pl-4">
                    <p className="menu-label">
                        {props.drawerTitle}
                    </p>
                    <ul className="menu-list">
                        {
                            props.drawerOptions.map((element: any, key: any) => {
                                return (
                                    <li key={key}><Link to="/" className="link-item" onClick={() => onOptionClicked(element.strCategory)}>{element.strCategory}</Link></li>
                                );
                            })
                        }
                    </ul>
                </div>
            </aside>
            <div className="drawer-bg" onClick={onClose}></div>
        </div>
    )
}

export default Drawer
