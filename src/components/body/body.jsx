// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import RedesSociales from "../../assets/redes.png";
function Body() {
  const [originalPlayers] = useState([
    {
      id: 1,
      name: "LeBron James",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 2,
      name: "Zach LaVine",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 3,
      name: "Anthony Davis",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 4,
      name: "Nikola Vučević",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 5,
      name: "Russell Westbrook",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 6,
      name: "DeMar DeRozan",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 7,
      name: "Dwight Howard",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 8,
      name: "Patrick Williams",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 9,
      name: "Kentavious Caldwell-Pope",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 10,
      name: "Lonzo Ball",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    { id: 11, name: "Kyle Kuzma", team: "Angeles Lakers", position: "Forward" },
    {
      id: 12,
      name: "Coby White",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    { id: 13, name: "Marc Gasol", team: "Angeles Lakers", position: "Forward" },
    {
      id: 14,
      name: "Alex Caruso",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 15,
      name: "Talen Horton-Tucker",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 16,
      name: "Javonte Green",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 17,
      name: "Alex Caruso",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 18,
      name: "Troy Brown Jr.",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
    {
      id: 19,
      name: "Montrezl Harrell",
      team: "Angeles Lakers",
      position: "Forward",
    },
    {
      id: 20,
      name: "Daniel Theis",
      team: "Chicago Bulls",
      position: "Midfielder",
    },
  ]);

  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredPlayers(originalPlayers);
  }, [originalPlayers]);

  const handlePaintOdd = () => {
    const even = originalPlayers.filter((player, index) => index % 2 === 0);
    setFilteredPlayers(even);
  };

  const handlePaintEven = () => {
    const odd = originalPlayers.filter((player, index) => index % 2 !== 0);
    setFilteredPlayers(odd);
  };

  const handlegetTop10 = () => {
    const top10 = originalPlayers.slice(0, 10);
    setFilteredPlayers(top10);
  };

  const handleget11to20 = () => {
    const from11to20 = originalPlayers.slice(10, 20);
    setFilteredPlayers(from11to20);
  };

  const handleSearch = () => {
    const searchResults = originalPlayers.filter((player) =>
      player.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPlayers(searchResults);
  };

  return (
    // parte de laura
    <div>
      <div className="list">ROSTER</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre de jugador..."
          style={{ width: "16%" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="buttons">
        <button onClick={handlePaintEven}>Pintar Pares</button>
        <button onClick={handlePaintOdd}>Pintar Impares</button>
        <button onClick={handlegetTop10}>Traer de 1 a 10</button>
        <button onClick={handleget11to20}>Traer de 11 a 20</button>
      </div>
      <div className="table">
        <table className="main-table">
          <thead>
            <tr>
              <th>#</th>
              <th>PLAYER</th>
              <th>TEAM</th>
              <th>POSITION</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="social-media">
        <img src={RedesSociales} alt="LogoRedes" />
      </div>
    </div>
  );
}
export { Body };
