import './index.css'

const LatestMatch = props => {
  const {objects} = props

  const {latestMatchDetails} = objects
  console.log(latestMatchDetails)

  //   const updatedData = {
  //     umpires: latestMatchDetails.umpires,
  //     result: latestMatchDetails.result,
  //     manOfTheMatch: latestMatchDetails.man_of_the_match,
  //     id: latestMatchDetails.id,
  //     date: latestMatchDetails.date,
  //     venue: latestMatchDetails.venue,
  //     competingTeam: latestMatchDetails.competing_team,
  //     competingTeamLogo: latestMatchDetails.competing_team_logo,
  //     firstInnings: latestMatchDetails.first_innings,
  //     secondInnings: latestMatchDetails.second_innings,
  //     matchStatus: latestMatchDetails.match_status,
  //   }

  return (
    <div style={{width: '100%'}}>
      <p style={{fontFamily: 'Bree Serif', color: 'white'}}>Latest matches</p>

      <div className="latest-match-container">
        <div className="venue-competingLogo">
          <div className="venue">
            <p className="first-innings-heading">
              {latestMatchDetails.first_innings}
            </p>
            <p>{latestMatchDetails.date}</p>
            <p>{latestMatchDetails.venue}</p>
            <p>{latestMatchDetails.result}</p>
            <p>{latestMatchDetails.competing_team}</p>
          </div>

          <img
            src={latestMatchDetails.competing_team_logo}
            alt={`latest match ${latestMatchDetails.competing_team}`}
            className="competingLogo"
          />
        </div>

        <div className="innings-umpire-manOfMatch">
          <h1>First Innings</h1>
          <p>{latestMatchDetails.first_innings}</p>
          <h1>Second Innings</h1>
          <p>{latestMatchDetails.second_innings}</p>
          <h1>Man of the Match</h1>
          <p>{latestMatchDetails.man_of_the_match}</p>
          <h1>Umpire</h1>
          <p>{latestMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
