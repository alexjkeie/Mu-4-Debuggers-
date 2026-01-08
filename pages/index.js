export default function Mu4Dashboard() {
  return (
    <div className="mu4-border">
      <h1>MU-4 // CENTRAL COMMAND</h1>
      <p>SYSTEM STATUS: <span style={{color: '#00ff00'}}>PROTECTED</span></p>
      <button className="btn">AUTHORIZE NEW SERVER</button>
      <div className="logs">
        <h3>LATEST LOGS</h3>
        <p>[12:00] GHOST_SCAN_COMPLETED_SERVER_ID_882</p>
      </div>
    </div>
  )
}
