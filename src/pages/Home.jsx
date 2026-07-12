import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = () => {
    console.log("Create Room");
  };

  const handleJoinRoom = () => {
    if (!roomCode.trim()) return;

    console.log("Joining:", roomCode);
  };

  return (
    <div className="home">
      <div className="card">
        <h1>Welcome</h1>

        <button className="create-btn" onClick={handleCreateRoom}>
          Create Room
        </button>

        <div className="join-container">
          <input
            type="text"
            placeholder="Enter Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />

          <button className="join-btn" onClick={handleJoinRoom}>
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}