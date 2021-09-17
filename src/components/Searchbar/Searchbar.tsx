import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Searchbar.css';

interface Props {
    open: boolean,
    closeEvent: (args: any) => void,
    placeholder: string,
    eventFind: (text: string) => void
}

export default function Searchbar(props: Props) {

    const [searchinput, setsearchinput] = useState<string>("")

    useEffect(() => {
        props.open ? openModal() : closeModal();
    }, [props.open])

    const openModal = () => {
        const modal = document.querySelector('.modal');
        modal?.classList.add('is-active');
    }

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setsearchinput(event.target.value);
    }

    const onFindClicked = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.eventFind(searchinput);
        setsearchinput("");
        closeModal();
    }

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal?.classList.remove('is-active');
        props.closeEvent(false);
    }

    return (
        <div className="modal">
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <form onSubmit={onFindClicked}>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-primary" type="text" name="search" value={searchinput} onChange={onChangeSearch} placeholder={props.placeholder}/>
                            <span className="icon is-small is-left">
                                <i className="material-icons">search</i>
                            </span>
                        </div>
                        <div className="m-2 is-flex is-justify-content-center">
                        <button type="submit" className="button is-primary"><span className="material-icons">search</span> Find</button>
                        </div>
                    </form>
                </section>
            </div>
            <button onClick={closeModal} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}
