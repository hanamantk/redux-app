import React, {PropTypes, Component} from 'react';



class TreeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[]
    };
    
  }

parseChild(objTree){   //recursive fun for getting child node

 	
	 for (var key in objTree) {    
                if (typeof objTree[key] === 'object' && objTree[key].length > 0) {
                    this.parseChild(objTree[key][0].node);
                   
                } else {
                   this.list.push(<li>{objTree[key]}</li>);
                    
                }
            }

}
  render() { 


	  	this.list=[];
	  	this.result='';
	  	if(this.props.data.tree!==undefined && this.props.result===''){
	  		
	  		let objTree = this.props.data.tree[0].node;		/*initial Tree View*/			
 			var li=this.parseChild(objTree);


	  	}else{  
	  		this.list=[];
	  		
	  		let objTree = this.props.data;
	  		if(this.props.result!==""){
	  			this.result="NOT FOUND......";
	  		let objTree = this.props.data.tree[0].node;
 			var li=this.parseChild(objTree);
	  			
	  		}else{										/*serach value found*/				
	  			var li=this.parseChild(objTree);
	  		
	  		}
 			

	  	}
	  		
	      
    return (
      <div>
		 <ul id="list">
		    {this.list}
		  </ul>   
		 <div className="result"> {this.result}</div>  
    </div>
    );
  }
}




export default TreeView;

