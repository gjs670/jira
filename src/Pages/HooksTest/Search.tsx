import { Form, Input, Select } from "antd";

export interface User {
  id: number;
  name: string;
  token: string;
}

interface SearchProps {
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchProps["params"]) => void;
  users: User[];
}

function Search({ params, setParams, users }: SearchProps) {
  return (
    <Form>
      <div>
        <Input
          type="text"
          value={params.name}
          onChange={(e) =>
            setParams({
              ...params,
              name: e.target.value,
            })
          }
        />
        <Select
          value={params.personId}
          onChange={(value) =>
            setParams({
              ...params,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Form>
  );
}

export default Search;
