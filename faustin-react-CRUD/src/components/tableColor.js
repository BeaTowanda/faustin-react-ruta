
import PropTypes from "prop-types";


function TableColor({idColor,nameColor}) {
    return (
<tbody>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">COLOR</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{idColor}</td>
      <td>{nameColor}</td>
      
    </tr>
    
  </tbody>
</table>
</tbody>
    )
    }

    TableColor.propTypes ={
        idColor:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        nameColor: PropTypes.string.isRequired
    }
    TableColor.defaultProps ={
        idColor: "no se informa ID",
        nameColor: "no se informa COLOR "
    }
export default TableColor;