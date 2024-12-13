import logo from "./logo.svg";
import image from ".//image.png";

import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [order, setOrder] = useState(["desc"]);
  const [playerSearch, setPlayerSearch] = useState([]);

  const baseURL = "http://localhost:3000/players";
  const downloadURL = "http://localhost:3000/players/downloadCSV";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error("Network response is not okay");
        }
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const filterData = async (field) => {
    try {
      const queryParams = {
        sortedValue: field,
        direction: order,
      };
      const queryString = new URLSearchParams(queryParams).toString();

      const response = await fetch(`${baseURL}?${queryString}`);
      const data = await response.json();
      setPlayers(data);
      setOrder(order == "asc" ? "desc" : "asc");
    } catch (err) {
      console.log(err);
    }
  };

  const findPlayer = async (e) => {
    e.preventDefault();
    setPlayerSearch(e.target.value);

    if (playerSearch == null) {
      const response = await fetch(baseURL);
      const data = await response.json();
      setPlayers(data);
    }

    try {
      const queryParams = {
        player: playerSearch,
        direction: order,
      };

      const queryString = new URLSearchParams(queryParams).toString();
      const response = await fetch(`${baseURL}?${queryString}`);
      const data = await response.json();

      setPlayers(data);
      setOrder(order == "asc" ? "desc" : "asc");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <img src={image} onClick={baseURL} className="logo" />
          <div className="title">NFL Rushing Challenge</div>
        </div>
        <div>
          <input
            onChange={(e) => setPlayerSearch(e.target.value)}
            type="text"
            placeholder="Search Player"
          />
          <button onClick={findPlayer}>Search</button>
          <a href="http://localhost:3000/players/downloadCSV">Download CSV</a>
        </div>
        <table className="spreadsheet">
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Pos</th>
              <th>Att</th>
              <th>Att/G</th>
              <th>
                Yds{" "}
                <button
                  onClick={() => {
                    console.log("Hello");
                    filterData("Yds");
                  }}
                >
                  Filter
                </button>
              </th>
              <th>Avg</th>
              <th>Yds/G</th>
              <th>
                TD
                <button
                  onClick={() => {
                    console.log("Hello");
                    filterData("TD");
                  }}
                >
                  Filter
                </button>
              </th>
              <th>
                Lngc
                <button
                  onClick={() => {
                    console.log("Hello");
                    filterData("Lng");
                  }}
                >
                  Filter
                </button>
              </th>
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
                <td>{player["Att/G"]}</td>
                <td>{player.Yds}</td>
                <td>{player.Avg}</td>
                <td>{player.Yds + "/G"}</td>
                <td>{player.TD}</td>
                <td>{player.Lng}</td>
                <td>{player["1st"]}</td>
                <td>{player["1st%"]}</td>
                <td>{player["20+"]}</td>
                <td>{player["1st%"]}</td>

                <td>{player.FUM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
