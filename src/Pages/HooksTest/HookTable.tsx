import { User } from "./Search";
import { Table } from "antd";

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

function HookTable({ list, users }: TableProps) {
  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => {
            return a.name.localeCompare(b.name);
          },
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
    ></Table>
  );
}

export default HookTable;
