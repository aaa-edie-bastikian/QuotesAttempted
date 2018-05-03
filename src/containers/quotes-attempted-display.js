import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuotesAttemptedDisplay extends Component {
    render() {

        console.log("quotes attempted display: ", this);
        if(!this.props.amount){
            return <div>Select an option</div>;
        }
        return(
            <div>
                <h6 id="quotesCount">{this.props.amount} Quotes Attempted as of {this.props.lastDate}</h6>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        amount: state.amount,
        lastDate: state.lastDate
    }
}

export default connect(mapStateToProps)(QuotesAttemptedDisplay)
