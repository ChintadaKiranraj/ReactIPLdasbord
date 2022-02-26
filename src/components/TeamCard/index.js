import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachMatch} = props

  const {name, teamImageUrl} = eachMatch
  const arrayList = name.split(' ')
  const initials = arrayList.map(each => each[0])
  const joinedInitials = initials.join('')
  const myPath = joinedInitials.toUpperCase()

  return (
    <Link to={`/team-matches/${myPath}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-image-url" />
        <p style={{color: '#ffffff'}}>{name}</p>
      </li>
    </Link>
  )
}
//  "/team-matches/:id"
export default TeamCard
