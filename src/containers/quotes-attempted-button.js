import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotesAttempted, getLastDateAttempted } from '../actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';


//NOTE 
//this container should just display the button that fires the action to get the attempted quotes
//create another container to display the attempted quotes
class QuotesAttempted extends Component {
    constructor(){
        super(),
        this.state = {
            attempted : '',
            lastDate: ''
        },
        this.updateQuotesAttempted = (e) => {
            e.preventDefault();

            console.log('get quotes attempted clicked')
            axios.get('./data-huon.json')
                .then(response => {
                    this.setState({attempted: response.data.quotesAttempted, lastDate:response.data.lastDate}, function() {
                        this.props.getQuotesAttempted(this.state.attempted);
                        this.props.getLastDateAttempted(this.state.lastDate);
                    });
                })
                
            //read the txt data
            // axios.get('./QTE.TXT')
            //     .then(response => {
            //         console.log('response: ', response.data);
            //         // this.setState({attempted: response.data.quotesAttempted}, function() {
            //         //     this.props.getQuotesAttempted(this.state.attempted);
            //         // });
            //     })
        }

    }
    
    render() {
        return (
            <button type='submit' onClick={this.updateQuotesAttempted}> Get Quotes Attempted </button>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getQuotesAttempted: getQuotesAttempted, getLastDateAttempted: getLastDateAttempted }, dispatch)
}
function mapStateToProps(state){
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(QuotesAttempted);