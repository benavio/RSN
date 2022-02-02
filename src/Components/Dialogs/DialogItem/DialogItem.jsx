import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    const DialogItems = (props) => {
        return (
            <div className={dialogData => dialogData.isActive ? c.dialogActive : c.dialog}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        )
    }
    const Messages = (props) => {
        return <div className={c.message}>{props.message}</div>
    }
    let dialogsData = [
        {id:1, name:"Andrew" },
        {id:2, name:"Ivan" },
        {id:3, name:"Sasha" },
        {id:4, name:"Dima" },
    ]
    let dialogElements = dialogsData.map( d => <DialogItems name={d.name} id={d.id}/>)
    let messagesData = [
        {id:1, message:"Yo1" },
        {id:2, message:"Yo2" },
        {id:3, message:"Yo3" },
    ]
    let messageElements = messagesData.map( m => <Messages message={m.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
        </div>
    )
}