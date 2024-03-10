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

const chasseACourre = {
  id: 'chasse',
  start: '14:00',
  end: '14:45',
  name: 'Chasse à courre',
  content: 'Participez à la grande chasse à cour royale ! Suivez les indices et trouvez l’aristocrate à tête de sanglier qui se cache dans l’INSA pour remporter un super cadeau !'
}

export const events = [
  {
    day: '2024-03-11',
    events: [
      {
        id: 'rap',
        start: '08:00',
        name: 'Sortie vidéo de campagne',
        content: 'A definir'
      },
      ...defaultBreak,
      chasseACourre,
      {
        id: 'rap',
        start: '20:00',
        name: 'Sortie Clip',
        content: 'A definir'
      },
      {
        id: 'ouverture',
        start: '19:30',
        name: 'Soirée d\'ouverture',
        content: 'Venez profiter d\'un petite soirée d\'ouverture (de 19h30 à 22h30 au foyer du Mad) en petit comité en guise de mise en bouche pour cette semaine de campagne pleine d\'activités de qualité. Au programme de cette soirée : Mario kart, création de masques pour le bal de mercredi soir, piano et initiation à la danse Rock.'
      }
    ]
  },
  {
    day: '2024-03-12',
    events: [
      ...defaultBreak,
      chasseACourre,
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
      chasseACourre,
      {
        id: 'bal',
        start: '19:30',
        end: '23:00',
        name: 'Bal Masqué',
        content: 'Venez profiter d\'une petite soirée (au foyer du Mad de 20h à 23h) commune aux 2 inté, dans la joie et la bonne humeur. Plusieurs petites activités préparé par les 2 inté sont au programme pour vous garantir une bonne soirée. De plus vous aurez l\'occasion de déguster des mets préparés avec soin par les 2 inté. On vous attend avec vos plus beaux déguisements !'
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

export const videos = [
  {
    id: 'videoCampagne',
    name: 'Vidéo de campagne',
    cdnLink: 'https://media.insaristocrate.fr/insaristocrate-rap.mp4',
    youtube: 'https://www.youtube.com/watch?v=Fpn1imb9qZg',
    showDate: 0,
    // showDate: 1710140400000
  },
  {
    id: 'clip',
    name: 'Rap d\'inté',
    cdnLink: 'https://media.insaristocrate.fr/insaristocrate-rap.mp4',
    youtube: '',
    showDate: 1710183600000,
  }
]
