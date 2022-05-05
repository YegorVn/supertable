import {columnNames} from '../constants'

export const Table = ({className, data}) => {
    return(
        <table className={"table " + className}>
        <tr>
          {columnNames.map(el => {return(<th>{el}</th>)})}
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </table>
    )
}