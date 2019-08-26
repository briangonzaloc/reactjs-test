import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import { Link } from 'react-router-dom';

function BadgeDetails (props){

    // React.useState

    const count = 3;
    const badge = props.badge;

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            jobTitle={badge.jobTitle}
                            email={badge.email}
                            twitter={badge.twitter} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <button onClick={()=>{}} className="btn btn-primary mr-4">Increase count: {count}</button>
                            <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} className="btn btn-danger" >Delete</button>
                            <DeleteBadgeModal 
                                isOpen={props.modalIsOpen} 
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;