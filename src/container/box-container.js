import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Box from '../component/box';

class  BoxCon extends React.Component{
    render(){
        return(
            <Box handleClick={this.props.loadPerson} person={this.props.person}/>


        )
    }
}
const mapStateToProps=(state)=>{
    return state
};

export default connect(mapStateToProps, actionCreators)(BoxCon);