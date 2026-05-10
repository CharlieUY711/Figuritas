export const GROUPS = [
  {
    letter: "A",
    teams: [
      { name: "México", code: "MEX", stickers: gen() },
      { name: "Sudáfrica", code: "RSA", stickers: gen() },
      { name: "República de Corea", code: "KOR", stickers: gen() },
      { name: "Chequia", code: "CZE", stickers: gen() },
    ],
  },

  {
    letter: "B",
    teams: [
      { name: "Canadá", code: "CAN", stickers: gen() },
      { name: "Bosnia y Herzegovina", code: "BIH", stickers: gen() },
      { name: "Catar", code: "QAT", stickers: gen() },
      { name: "Suiza", code: "SUI", stickers: gen() },
    ],
  },

  {
    letter: "C",
    teams: [
      { name: "Brasil", code: "BRA", stickers: gen() },
      { name: "Marruecos", code: "MAR", stickers: gen() },
      { name: "Haití", code: "HAI", stickers: gen() },
      { name: "Escocia", code: "SCO", stickers: gen() },
    ],
  },

  {
    letter: "D",
    teams: [
      { name: "Estados Unidos", code: "USA", stickers: gen() },
      { name: "Paraguay", code: "PAR", stickers: gen() },
      { name: "Australia", code: "AUS", stickers: gen() },
      { name: "Turquía", code: "TUR", stickers: gen() },
    ],
  },

  {
    letter: "E",
    teams: [
      { name: "Alemania", code: "GER", stickers: gen() },
      { name: "Curazao", code: "CUW", stickers: gen() },
      { name: "Costa de Marfil", code: "CIV", stickers: gen() },
      { name: "Ecuador", code: "ECU", stickers: gen() },
    ],
  },

  {
    letter: "F",
    teams: [
      { name: "Países Bajos", code: "NED", stickers: gen() },
      { name: "Japón", code: "JPN", stickers: gen() },
      { name: "Suecia", code: "SWE", stickers: gen() },
      { name: "Túnez", code: "TUN", stickers: gen() },
    ],
  },

  {
    letter: "G",
    teams: [
      { name: "Bélgica", code: "BEL", stickers: gen() },
      { name: "Egipto", code: "EGY", stickers: gen() },
      { name: "Irán", code: "IRN", stickers: gen() },
      { name: "Nueva Zelanda", code: "NZL", stickers: gen() },
    ],
  },

  {
    letter: "H",
    teams: [
      { name: "España", code: "ESP", stickers: gen() },
      { name: "Cabo Verde", code: "CPV", stickers: gen() },
      { name: "Arabia Saudí", code: "KSA", stickers: gen() },
      { name: "Uruguay", code: "URU", stickers: gen() },
    ],
  },

  {
    letter: "I",
    teams: [
      { name: "Francia", code: "FRA", stickers: gen() },
      { name: "Senegal", code: "SEN", stickers: gen() },
      { name: "Irak", code: "IRQ", stickers: gen() },
      { name: "Noruega", code: "NOR", stickers: gen() },
    ],
  },

  {
    letter: "J",
    teams: [
      { name: "Argentina", code: "ARG", stickers: gen() },
      { name: "Argelia", code: "ALG", stickers: gen() },
      { name: "Austria", code: "AUT", stickers: gen() },
      { name: "Jordania", code: "JOR", stickers: gen() },
    ],
  },

  {
    letter: "K",
    teams: [
      { name: "Portugal", code: "POR", stickers: gen() },
      { name: "RD Congo", code: "COD", stickers: gen() },
      { name: "Uzbekistán", code: "UZB", stickers: gen() },
      { name: "Colombia", code: "COL", stickers: gen() },
    ],
  },

  {
    letter: "L",
    teams: [
      { name: "Inglaterra", code: "ENG", stickers: gen() },
      { name: "Croacia", code: "CRO", stickers: gen() },
      { name: "Ghana", code: "GHA", stickers: gen() },
      { name: "Panamá", code: "PAN", stickers: gen() },
    ],
  },
];

// Genera stickers 1–20
function gen() {
  return Array.from({ length: 20 }, (_, i) => i + 1);
}
