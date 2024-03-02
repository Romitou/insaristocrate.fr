const foodSale = {
  name: 'Stand nourriture',
  content: 'A definir'
}

const morningBreak = {
  start: '09:30',
  end: '09:45'
}

const mealBreak = {
  start: '11:15',
  end: '11:30'
}

const endBreak = {
  start: '16:30',
  end: '16:45'
}

const defaultBreak = [morningBreak, mealBreak, endBreak].map(breakPeriod => {
  return {
    id: 'food',
    ...breakPeriod,
    ...foodSale
  }
})

const chasseACours = {
  id: 'chasse',
  start: '14:00',
  end: '14:45',
  name: 'Chasse à cours',
  content: 'A definir'
}

export const events = [
  {
    day: '2024-03-11',
    events: [
      {
        id: 'rap',
        start: '08:00',
        name: 'Sortie Teaser',
        content: 'A definir'
      },
      ...defaultBreak,
      chasseACours,
      {
        id: 'rap',
        start: '20:00',
        name: 'Sortie Clip',
        content: 'A definir'
      },
    ]
  },
  {
    day: '2024-03-12',
    events: [
      ...defaultBreak,
      chasseACours,
      {
        id: 'baf',
        start: '19:30',
        end: '23:00',
        name: 'BAF',
        content: 'A definir'
      }
    ]
  },
  {
    day: '2024-03-13',
    events: [
      ...defaultBreak,
      chasseACours,
      {
        id: 'bal',
        start: '19:30',
        end: '23:00',
        name: 'Bal Masqué',
        content: 'A definir'
      },
    ]
  },
  {
    day: '2024-03-14',
    events: [
      ...defaultBreak,
      {
        id: 'tms',
        start: '15:45',
        end: '19:00',
        name: 'TMS',
        content: 'A definir'
      },
      {
        id: 'bar',
        start: '20:30',
        end: '23:45',
        name: 'Soirée bar',
        content: 'A definir'
      }
    ]
  }
]
