import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import { Link } from 'react-router-dom';
import api from '../api'

class Badges extends React.Component{
    

    constructor(props){
        super(props)
        console.log('1. Constructor')
        this.state = {
            data    : undefined,
            nextPage: 1,
            loading : true,
            error   : null,
            // ricky : {
            //     results : []
            // }
        };
    }

    // fetchCharacters = async () => {
    //     this.setState({loading:true, error : null})

    //     try{
    //         const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
    //         const data = await response.json();
    //         this.setState({
    //             loading : false,
    //             ricky : {
    //                 info : data.info,
    //                 results: [].concat(this.state.ricky.results, data.results)
    //             },
    //             nextPage : this.state.nextPage +1
    //         })
    //         console.log('rickyy', this.state.ricky.results)
    //     } catch (error){
    //         this.setState({
    //             loading: false,
    //             error : error,
                
    //         })
    //     }

    // }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try{
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({ loading: false, error: error })
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount')
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 50000);


        // this.fetchCharacters()


        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         data : [
        //             {
        //                 id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        //                 firstName: 'Freda',
        //                 lastName: 'Grady',
        //                 email: 'Leann_Berge@gmail.com',
        //                 jobTitle: 'Legacy Brand Director',
        //                 twitter: 'FredaGrady22221-7573',
        //                 avatarUrl: 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
        //             },
        //             {
        //                 id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        //                 firstName: 'Major',
        //                 lastName: 'Rodriguez',
        //                 email: 'Ilene66@hotmail.com',
        //                 jobTitle: 'Human Research Architect',
        //                 twitter: 'MajorRodriguez61545',
        //                 avatarUrl: 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
        //             },
        //             {
        //                 id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        //                 firstName: 'Daphney',
        //                 lastName: 'Torphy',
        //                 email: 'Ron61@hotmail.com',
        //                 jobTitle: 'National Markets Officer',
        //                 twitter: 'DaphneyTorphy96105',
        //                 avatarUrl: 'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
        //             },
        //         ]
        //     })
        // }, 3000);

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate');
        console.log({
            prevProps : prevProps,
            prevState : prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount')
        // clearTimeout(this.timeoutId)
        clearInterval(this.intervalId)
    }

    render(){
        console.log('2/4. Render', this.state.loading)
        /* Only first time */
        if (this.state.loading===true && !this.state.data ){
            return <PageLoading/>
        }

        if( this.state.error ){
            return <PageError error={this.state.error}/>
            // return `Error ${this.state.error.message}`
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <BadgesList badges={this.state.data} />
                    {this.state.loading && <MiniLoader />}
                </div>

            </React.Fragment>

        )
    }
}

export default Badges;