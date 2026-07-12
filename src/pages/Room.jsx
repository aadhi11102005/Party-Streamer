import './Room.css'

function Room(){
    return(
        <>
            <div className="Room">
                <div className="video-container">
                    <div className="video-placeholder">
                    🎬 VIDEO PLAYER
                    </div>

                    <div className="chat-overlay">
                    <div className="chat-message">
                        <strong>Alice:</strong> 😂
                    </div>

                    <div className="chat-message">
                        <strong>Bob:</strong> Nice!
                    </div>
                    </div>
                </div>

                <div className="controls">
                    <div className="left-controls">
                    <button>▶</button>
                    <button>⏸</button>
                    <button>⏩</button>
                    </div>

                    <div className="time">
                    00:21 / 01:43:12
                    </div>

                    <div className="right-controls">
                    <button>🔊</button>
                    <button>👥</button>
                    <button>🎤</button>
                    <button>💬</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Room
