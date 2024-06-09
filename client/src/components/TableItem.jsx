

const TableItem = ({user}) => {
  return (
    <tr>
        <td className="p-2">
            <p>{user?.firstName}</p>
        </td>
        <td className="p-2">
            <p>{user?.lastName}</p>
        </td>
        <td className="p-2">
            <p>{user?.userName}</p>
        </td>
        <td className="p-2">
            <p>{user?.email}</p>
        </td>
    </tr>
  )
}

export default TableItem
