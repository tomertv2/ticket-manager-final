import React from 'react';
import HideButton from './HideButton';

export default function Ticket(props) {
    return (
        <>
            <div className={props.ticket.invisible ? 'hidden' : 'ticket'}
                style={{ display: props.ticket.invisible ? 'none' : 'block' }}>
                <div className="ticketTopContainer">
                    <span className="title">{props.ticket.title}</span>
                    <HideButton hideTicketFunc={props.hideTicketFunc} ticket={props.ticket} />
                </div>
                <div className="content">{props.ticket.content}</div>
                <div className="moreInfoContainer">
                    <div>
                        <span className="emailSpan">User Email: {props.ticket.userEmail}</span>
                        <span className="timeSpan">Creation Time: {props.ticket.creationTime}</span>
                    </div>
                    {(props.ticket.labels) &&
                    <div>
                        {props.ticket.labels.map((label, i) => 
                            <span className="label" key={i}>{label}</span>
                    )}
                    </div>
                    }
                </div>
            </div>
        </>
    );
}
