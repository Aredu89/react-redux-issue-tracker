import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteArticle } from "../actions/index.js"

const mapStateToProps = state => {
  return { articles: state.articles }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: id => dispatch(deleteArticle(id))
  }
}

class ConnectedList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <table className="table table-striped">
        <tbody>
          {this.props.articles.map(el => (
            <tr key={el.id}>
              <td>
                {el.title}
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger float-right" onClick={()=>this.props.deleteArticle(el.id)}>Eliminar</button>
              </td>  
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}


const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList)
export default List