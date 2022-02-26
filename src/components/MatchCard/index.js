import './index.css'

const MatchCard = props => {
  const {objects} = props

  const {recentMatches} = objects
  console.log(recentMatches, 'tajs')

  //   const MatchCardObject = recentMatches.map(eachMatch => ({
  //     competingTeamLogo: eachMatch.competing_team_logo,
  //     matchStatus: eachMatch.match_status,
  //     result: eachMatch.result,
  //     competingTeam: eachMatch.competing_team,
  //     key: eachMatch.id,
  //   }))
  const RecentMatch = ({each}) => (
    // const updatedEach = {
    //   firstInnings: each.first_innings,
    //   secondInnings: each.second_innings,
    //   result: each.result,
    //   competingTeamLogo: each.competing_team_logo,
    //   matchStatus: each.match_status,
    // }
    <li className="match-card">
      <img
        src={each.competing_team_logo}
        alt={`competing team ${each.competing_team}`}
        className="competing-team-logo"
      />
      <p>{each.first_innings}</p>
      <p>{each.second_innings}</p>
      <p>{each.match_status}</p>
      {/* <p>{each.result}</p> */}
    </li>
  )

  const getMatchCard = () =>
    recentMatches.map(each => <RecentMatch key={each.id} each={each} />)

  return <ul className="match-card-container">{getMatchCard()}</ul>
}
export default MatchCard
