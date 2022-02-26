import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isFetching: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(teams)
    const UpdatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsList: UpdatedData,
      isFetching: false,
    })
  }

  renderHead = () => (
    <div className="logo-head-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
        alt="ipl logo"
        className="logo"
      />
      <h1 className="head">IPL Dashboard</h1>
    </div>
  )

  renderTeamCard = () => {
    const {teamsList} = this.state
    return (
      <ul className="team-card-container">
        {teamsList.map(eachMatch => (
          <TeamCard key={eachMatch.id} eachMatch={eachMatch} />
        ))}
      </ul>
    )
  }

  render() {
    const {isFetching} = this.state
    return (
      <>
        <div className="home-container">
          {this.renderHead()}
          {isFetching ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderTeamCard()
          )}
        </div>
      </>
    )
  }
}

export default Home
