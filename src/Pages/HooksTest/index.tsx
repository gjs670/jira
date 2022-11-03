import { useEffect, useState } from "react";
import { cleanData } from "utils";
import Search from "./Search";
import Table from "./Table";
import { useDebounce } from "../../utils/customHook";
import { useHttp } from "utils/http";

function HooksTest() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParams = useDebounce(params, 300);
  const request = useHttp();

  useEffect(() => {
    request("projects", { data: cleanData(debounceParams) }).then(setList);
  }, [debounceParams]);

  useEffect(() => {
    request("users").then(setUsers);
  }, []);

  return (
    <div>
      <Search params={params} setParams={setParams} users={users} />
      <Table list={list} users={users} />
    </div>
  );
}

export default HooksTest;
