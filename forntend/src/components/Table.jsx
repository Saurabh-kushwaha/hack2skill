import React, { useEffect, useState } from 'react'

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:8000`)
          .then((res) => res.json())
          .then((d) => setData(d))
          .catch((e) => console.log(e));
  }, []); 
  console.log(data);
  return (
    <div>
      {data.map((e) => (
        <Table key={e.id}>
          <tr>
            <td>{e.full_name}</td>
            <td>{e.email}</td>
            <td>{e.number}</td>
            <td>{e.city}</td>
            <td>{e.team_name}</td>
            <td>{e.url}</td>
          </tr>
        </Table>
      ))}
    </div>
  );
}

export default Table