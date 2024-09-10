const Table = ({ data }) => {
    return (
      <table>
        <tbody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Strength</th>
          </tr>
        </thead>
        
          {data.length > 0 ? (
            data.map((item) => (
              <tr>
            <td>{item.name}</td>
            <td>{item.abilities.map((ability) => ability.ability.name).join(', ')}</td>
          </tr>
            ))
          ) : "No data"}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  