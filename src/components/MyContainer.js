import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as treeActions from '../actions/tree-actions';
import Filter from   './Filter';


class MyContainer extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      tree: []
    };
  }

componentWillMount(){
  this.props.actions.getTree();
}
  render() {
    
    let {tree}=this.props;
   
    return (

      <div>
          <Filter data={tree}/>
          
      </div>
    );
  }
}




function mapStateToProps(state, props) {
  return {
    tree: state.tree
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);

