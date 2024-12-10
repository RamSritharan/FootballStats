import React from "react";

function HomePage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("localhost:3000/players");
        if (!response.ok) {
          throw new Error("Network response is not okay");
        }
        const data = response.json();
        setPlayers([data]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <>
      <header>NFL Rushing Challenge</header>
      <ul>
        {players.map((player) => (
          <li key={player._id}>{player.player}</li>
        ))}
      </ul>
    </>
  );
}
