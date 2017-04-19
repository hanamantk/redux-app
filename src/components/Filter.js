import React, {PropTypes, Component} from 'react';
import TreeView from './TreeView';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      result:''
    };
   
  }

searchCall(){

  var user_value=this.refs.search.value;
  var key_found=this.parseChild(this.props.data,user_value); //get user search value

  if(this.found===true)
  {                                     //user key found,=> send data to filter

    this.setState({data:key_found});
    
  }else{
    this.setState({                       //user key not found
                    result:"NOT FOUND",
                    data :this.props.data
                });
    
  }

}

parseChild(objTree,search_Key){   //filtering TREE for user search
    var self=this;
    
     for (var key in objTree) {
                  if (typeof objTree[key] === 'object' && objTree[key].length > 0) {
                      this.parseChild(objTree[key][0].node,search_Key);
                      
                  } else {
                   
                     if(objTree[key]===search_Key){

                         self.foundlist.push(objTree[key]);
                         this.found=true;
                         
                     }
                     
                  }
              }

              return self.foundlist;
}

handleChange(){

this.setState({data:this.props.data,result:''});

}
  render() { 
    this.found=false;
    this.foundlist=[];
  
    return (
      <div>
          <input type="text" id="search" ref="search" onChange={this.handleChange.bind(this)}/>
         <button onClick={this.searchCall.bind(this)} >search</button>
           <TreeView data={this.state.data} result={this.state.result} />
    </div>
    );
  }
}




export default Filter;

