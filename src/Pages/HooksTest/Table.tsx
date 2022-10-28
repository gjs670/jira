import { User } from "./Search";

interface List {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created?: number;
}

interface TableProps {
  list: List[];
  users: User[];
}

function Table({ list, users }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{users.find((user) => user.id === item.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
