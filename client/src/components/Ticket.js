import React from 'react';

function Ticket(props) {
    return (
        <>
        {props.tickets.map((ticket, i) =>
            <div className="ticket" key={i}>
                <div className="title">{ticket.title}</div>
                <div className="content">{ticket.content}</div>
                <div className="moreInfoContainer">
                    <div>
                        <span className="emailSpan">User Email: {ticket.userEmail}</span>
                        <span className="timeSpan">Creation Time: {ticket.creationTime}</span>
                    </div>
                    {(ticket.labels) &&
                    <div>
                        {ticket.labels.map((label, i) => 
                            <span className="label" key={i}>{label}</span>
                    )}
                    </div>
                    }
                </div>
            </div>
        )}
        </>
    );
}

export default Ticket;
