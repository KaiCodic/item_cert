var AllItems = React.createClass( {
  
handleDelete(id){
  this.props.handleDelete(id)
},



  render() {
    var items = this.props.items.map( (item) => {
      return ( <div key={ item.id }>
                 <h3>{ item.name } :  { item.description }</h3>
                 <p>
                 <button onClick={this.handleDelete.bind(this,item.id)}>Delete</button>
                 </p>

               </div> )
    } );
    return ( <div>
               { items }
             </div> )
  }
} );
