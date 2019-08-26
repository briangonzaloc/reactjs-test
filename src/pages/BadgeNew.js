import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    state = {
        form: {
            firstName : '',
            lastName : '',
            email : '',
            jobTitle : '',
            twitter : ''
        }
    }

    handleChange = e => {
        // Override form. Bad
        // this.setState({
        //     form : {
        //         [e.target.name]: e.target.value
        //     }
        // })

        // First solution
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        // this.setState({form : nextForm})

        // Best apprach. Concat previous values of form and add the new value
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName} 
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}/>
                        </div>

                        <div className="col-6">
                            <BadgeForm  
                                onChange={this.handleChange} 
                                formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew