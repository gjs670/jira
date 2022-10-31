import { useEffect, useState } from "react";
import { cleanData } from "utils";
import Search from "./Search";
import Table from "./Table";
import qs from "qs";
import { useDebounce } from "../../utils/customHook";

const apiUrl = process.env.REACT_APP_URL;

function HooksTest() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParams = useDebounce(params, 300);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanData(debounceParams))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceParams]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <Search params={params} setParams={setParams} users={users} />
      <Table list={list} users={users} />
    </div>
  );
}

export default HooksTest;
