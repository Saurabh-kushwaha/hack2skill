import React, {  useEffect, useState } from 'react'

function Table() {
  const [data, setData] = useState([]);
  const handle  = async () => {
    try {
     const res =  await fetch(`http://localhost:8000`)
     const result = await res.json();
     setData(result);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    handle()
  }, []);
  return (
    <table>
      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.full_name}</td>
            <td>{e.email}</td>
            <td>{e.number}</td>
            <td>{e.city}</td>
            <td>{e.team_name}</td>
            <td>{e.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table