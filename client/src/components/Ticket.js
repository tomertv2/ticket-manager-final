import React from 'react';

function Ticket(props) {
    return (
        <>
        {props.tickets.map((ticket, i) =>
            <div className="ticket" key={i}>
                <div>
                    ID: {ticket.id}
                </div>
                <div>
                    Title: {ticket.title}
                </div>
                <div>
                    Content: {ticket.content}
                </div>
                <div>
                    User Email: {ticket.userEmail}
                </div>
                <div>
                    Creation Time: {ticket.creationTime}
                </div>
                <div>    
                {(ticket.labels) &&
                <span>Labels:</span>
                }
                {(ticket.labels) &&
                ticket.labels.map((label, i) => 
                    <label className="label" key={i}>
                        {label}
                    </label>
                )}
                </div>
            </div>
        )}
        </>
    );
}

export default Ticket;
