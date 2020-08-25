import React from 'react';

function Ticket(props) {
    return (
        <>
            <div className="ticket">
                <div className="title">{props.ticket.title}</div>
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

export default Ticket;
