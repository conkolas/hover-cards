const CardsMock = [
  {
    title: 'Heimilisvernd 1',
    link: 'https://www.link.to',
    text: 'Innbústrygging og ábyrgðartrygging í einum pakka. Einföld og örugg trygging fyrir þá sem ekki þurfa slysa- eða ferðatryggingar.',
    buttonText: 'Skoða nánar',
    image: 'https://vordur.is/media/1228/ic-heimilisvernd1.svg'
  },
  {
    title: 'Heimilisvernd 2',
    link: 'https://www.link.to',
    text: 'Uppfyllir grunnþarfir fjölskyldunnar á hagkvæman máta. Innifalið í tryggingunni er innbústrygging, ábyrgðartrygging og slysatrygging.',
    buttonText: 'Skoða nánar',
    image: 'https://vordur.is/media/1226/ic-heimilisvernd2.svg'
  },
  {
    title: 'Heimilisvernd 3',
    link: 'https://www.link.to',
    text: 'Algengasta fjölskyldu-tryggingin hjá Verði sem hentar vel barnafjölskyldum. Innifalið í tryggingunni eru víðtækari slysatryggingar.',
    buttonText: 'Skoða nánar',
    image: 'https://vordur.is/media/1227/ic-heimilisvernd3.svg'
  },
  {
    title: 'Heimilisvernd 4',
    link: 'https://www.link.to',
    text: 'Inniheldur allar helstu tryggingar heimilisins auk þess sem hægt er að bæta við ferðatryggingum eftir þörfum.',
    buttonText: 'Skoða nánar',
    image: 'https://vordur.is/media/1225/ic-heimilisvernd4.svg'
  }
];

export default class CardService {
  static fetchCards() {
    return new Promise(resolve => {
      resolve(CardsMock);
    })
  }
}