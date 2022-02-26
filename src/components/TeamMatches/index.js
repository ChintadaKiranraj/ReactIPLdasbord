/* <p>iam at team matches</p>
<p>LatestMatch</p>
<p>Match card</p> */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {objects: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesBanner()
  }

  getTeamMatchesBanner = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data, 'data at Team matches')
    const UpdatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      objects: UpdatedData,
      isLoading: false,
    })
  }

  render() {
    const {objects, isLoading} = this.state
    console.log(objects, 'objects at team matchs')

    return (
      <div className="teamMatches-latestMatch-matchCard">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <img
            src={objects.teamBannerUrl}
            alt="team banner"
            className="team-banner-url"
          />
        )}
        {/* /* initially it is empty while rendering the first time it show error in
        the LatestMatch and MatchCard for that reason length should be grater
        then one the objects length will be grater then 1 after the fetching the
        data */}

        {objects.length !== 0 && (
          <>
            <LatestMatch objects={objects} />
            <MatchCard objects={objects} />
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
