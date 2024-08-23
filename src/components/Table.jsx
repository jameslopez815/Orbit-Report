import './styling.css';

//Object is to create a table: 4 columns to the header row with the titles for each piece of information about a satellite.

// The table must provide satellite data: Name, Type of satellite, Launch Date, and Status

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        {/* table rows */}
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
        <tbody>
           {sat.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;