import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/players");
        if (!response.ok) {
          throw new Error("Network response is not okay");
        }
        const data = await response.json();
        setPlayers(data);
        console.log("hello", players);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <body>
        <header>NFL Rushing Challenge</header>

        <table className="spreadsheet">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Pos</th>
              <th>Att</th>
              <th>Att/G</th>
              <th>Yds</th>
              <th>Avg</th>
              <th>Yds/G</th>
              <th>TD</th>
              <th>Lng</th>
              <th>1st</th>
              <th>1st%</th>
              <th>20+</th>
              <th>40+</th>
              <th>FUM</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr>
                <td>{player.Player}</td>
                <td>{player.Team}</td>
                <td>{player.Pos}</td>
                <td>{player.Att}</td>
                <td>{player.AttG}</td>
                <td>{player.Yds}</td>
                <td>{player.Avg}</td>
                <td>{player.YdsG}</td>
                <td>{player.TD}</td>
                <td>{player.Lng}</td>
                <td>{player.Lng}</td>
                <td>{player.YdsG}</td>
                <td>{player.FUM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </>
  );
}

export default App;

{
  /* <ul>
        {players.map((player) => (
          <li inline="black" key={player._id}>
            {player.Player}

          </li>
        ))}
      </ul> */
}
