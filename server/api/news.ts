import { defineEventHandler } from 'h3';

interface NewsItem {
  title: string;
  slug: string;
  createdAt: string;
  content: string;
  readingTime: number;
}

const news: NewsItem[] = [
  {
    title: 'Fin de la campagne',
    slug: '11-fin-de-la-campagne',
    createdAt: '2024-03-16T17:16:35+00:00',
    content: "<p>Merci à tous d'avoir été présents à cette semaine de campagne d'inté et bravo à Insao Paulo pour leur victoire ! 😄</p>",
    readingTime: 1
  },
  {
    title: 'Rendez-vous au Stadium',
    slug: '10-rendez-vous-au-stadium',
    createdAt: '2024-03-14T13:47:19+00:00',
    content: "<p>Ce soir, de 20h à 00h, c'est la soirée de fin d'inté au Stadium ! Plus d'informations sur notre compte Insta. On vous y attend nombreux 🙂</p>",
    readingTime: 1
  },
  {
    title: "Ce soir, c'est soirée",
    slug: '9-ce-soir-cest-soiree',
    createdAt: '2024-03-13T08:19:20+00:00',
    content: "<p>Venez profiter d'une petite soirée (au foyer du Madrillet de 20h à 23h) commune aux 2 intés, dans la joie et la bonne humeur. Plusieurs petites activités préparées par les 2 intés sont au programme pour vous garantir une bonne soirée. De plus, vous aurez l'occasion de déguster des mets préparés avec soin par les 2 intés. On vous attend avec vos plus beaux déguisements !</p>",
    readingTime: 1
  },
  {
    title: 'Rendez-vous à la BAF',
    slug: '8-rendez-vous-a-la-baf',
    createdAt: '2024-03-12T16:04:49+00:00',
    content: "<p>Ce soir, c'est BAF ! On vous attend nombreux au foyer du Madrillet de 19h30 à 23h00 pour une grande BAF de campagne 😄</p>",
    readingTime: 1
  },
  {
    title: 'Vidéos publiées',
    slug: '7-videos-publiees',
    createdAt: '2024-03-11T23:41:36+00:00',
    content: "<p>N'hésitez pas à visionner notre vidéo de campagne et notre rap d'inté, toutes les deux sorties hier ! Il vous suffit de cliquer sur celles-ci sur la page principale. 😃</p>",
    readingTime: 1
  },
  {
    title: 'Rendez-vous à 19h30',
    slug: '6-rendez-vous-a-19h30',
    createdAt: '2024-03-11T18:13:27+00:00',
    content: "<p>Venez profiter d'un petite soirée d'ouverture (de 19h30 à 22h30 au foyer du Mad) en petit comité en guise de mise en bouche pour cette semaine de campagne pleine d'activités de qualité ! <strong>Le clip sera publié à 20h00</strong>. À tout à l'heure !</p>",
    readingTime: 1
  },
  {
    title: 'Rendez-vous à 11h15',
    slug: '5-rendez-vous-a-11h15',
    createdAt: '2024-03-11T18:13:06+00:00',
    content: "<p>Bienvenue sur <strong>insaristocrate.fr</strong>, site de la liste INS'Aristocrate 2024 ! Vous l'aurez remarqué, un compte à rebours vous donne rendez-vous à 11h15 sur ce site pour la publication de notre vidéo de campagne. On se retrouve tout à l'heure !</p>",
    readingTime: 1
  }
];

export default defineEventHandler(async () => {
  return news;
});
