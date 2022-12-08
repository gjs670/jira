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
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={params.name}
          placeholder={"项目名"}
          onChange={(e) =>
            setParams({
              ...params,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
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
      </Form.Item>
    </Form>
  );
}

export default Search;
