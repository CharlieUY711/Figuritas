import { useState } from 'react'

export function useCollection(group) {
  const initial = {}

  group.teams.forEach((team) => {
    initial[team.name] = Array.from({ length: 20 }, (_, i) => ({
      number: i + 1,
      collected: false
    }))
  })

  const [stickers, setStickers] = useState(initial)

  const toggle = (team, number) => {
    setStickers((prev) => ({
      ...prev,
      [team]: prev[team].map((s) =>
        s.number === number ? { ...s, collected: !s.collected } : s
      )
    }))
  }

  return { stickers, toggle }
}
