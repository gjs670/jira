import { useEffect, useState } from "react";
import { cleanData } from "utils";
import Search from "./Search";
import HookTable from "./HookTable";
import { useDebounce } from "../../utils/customHook";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";

function HooksTest() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const debounceParams = useDebounce(params, 300);
  const { isLoading, error, data: list } = useProject(debounceParams);
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <Search params={params} setParams={setParams} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <HookTable
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;

export default HooksTest;
