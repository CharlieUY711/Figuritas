import React from 'react'
import { useCollection } from '../hooks/useCollection'

export default function GroupScreen({ group }) {
  const { stickers, toggle } = useCollection(group)

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{group.flag} {group.name}</h2>

      {group.teams.map((team) => (
        <div key={team.name}>
          <h3 style={{ paddingLeft: 20 }}>{team.flag} {team.name}</h3>

          <div className='grid'>
            {stickers[team.name].map((s) => (
              <div
                key={s.number}
                className={'sticker ' + (s.collected ? 'active' : '')}
                onClick={() => toggle(team.name, s.number)}
              >
                {s.number}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
