import { offer1, offer2, offer3, offer4, offer5, slider1, slider2, slider3, slider5, hp1, hp2, hp3, hp4, hp5, photovoltaics1, photovoltaics2, photovoltaics3, photovoltaics4, photovoltaics5, electricity1, electricity2, electricity3, electricity4, electricity5, interior1, interior2, interior3, interior4, interior5, plumber1, plumber2, plumber3, plumber4, plumber5 } from "../assets";

export const navLinks = [
  {
    id: "offer",
    title: "Oferta",
  },
  {
    id: "projects",
    title: "Realizacje",
  },
  {
    id: "clients",
    title: "Klienci",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

export const sliderData = [
  {
    title: 'Pompy ciepła',
    paragraph: 'Ogrzewaj wodę oraz budynek, a latem ochładzaj pomieszczenia. Dzięki temu zmniejszysz zużycie energii elektrycznej.',
    image: slider1,
    alt: 'Obrazek pomp ciepła',
    scrollTo: '#heatpump'
  },
  {
    title: 'Fotowoltaika',
    paragraph: 'Planujesz remont i zastanawiasz się, komu zlecić realizację zadania? Trafiłeś idealnie! Oferujemy kompleksowe, rzetelne i terminowe usługi remontowe. Dzięki nam Twoje mieszkanie zyska nowe oblicze!',
    image: slider2,
    alt: 'Obrazek Fotowoltaika',
    scrollTo: '#photovoltaics'
  },
  {
    title: 'Usługi hydrauliczne',
    paragraph: 'Posiadasz dom lub mieszkanie w stanie surowym - chętnie pomożemy w wykończeniu wnętrza. Posiadamy sprawnie działający, doświadczony zespół fachowców, którzy według ustaleń z inwestorem przeprowadzą wszelkie prace wykończeniowe wnętrza.',
    image: slider3,
    alt: 'Obrazek hydrauliczne',
    scrollTo: '#plumber'
  },
  {
    title: 'Usługi elektryczne',
    paragraph: 'Wiele lat doświadczenia zespołu realizującego projekty budowy domów, pozwala na efektywne doradztwo w zakresie ergonomicznego rozkładu pomieszczeń, wyboru odpowiednich materiałów budowlanych oraz zaplanowania i zrealizowania poszczególnych prac.',
    image: slider5,
    alt: 'Obrazek usługi elektryczne',
    scrollTo: '#electrics',
  },
  {
    title: 'Wykończenia wnętrz',
    paragraph: 'Wiele lat doświadczenia zespołu realizującego projekty budowy domów, pozwala na efektywne doradztwo w zakresie ergonomicznego rozkładu pomieszczeń, wyboru odpowiednich materiałów budowlanych oraz zaplanowania i zrealizowania poszczególnych prac.',
    image: slider5,
    alt: 'Obrazek usługi elektryczne',
    scrollTo: '#interior',
  }
];

export const offerData = [
  { 
    id: 'heatpump',
    h3: 'Pompy ciepła',
    paragraph: `Oferowane przez nas pompy ciepła powietrze-woda to idealne rozwiązanie zarówno do nowo wznoszonych budynków, jak i tych w których modernizowana jest wyłącznie instalacja grzewcza. Idealnie sprawdzą się w przypadku instalacji podłogowych z uwagi na dużą powierzchnię przekazywania ciepła. Instalacje te nie wymagają bowiem wysokiej temperatury wody koniecznej do uzyskania komfortu cieplnego w mieszkaniu.

    W przypadku prawidłowo dobranych grzejników i poprawnie zaprojektowanej instalacji, pompy ciepła mogą być wykorzystywane również w przypadku ogrzewania mieszkania za pomocą grzejników. Pozwala to na dobór rodzaju naszej instalacji grzewczej w zależności od naszych potrzeb.
    
    Pompy ciepła, mimo korzystania z ciepła znajdującego się w otoczeniu, sprawdzają się doskonale w niskich temperaturach w okresie zimowym. Sprawia to, że znajdują swoje zastosowanie również w naszym klimacie.
    
    Pompa powietrze-woda to świetna alternatywa dla tradycyjnych źródeł ogrzewania. Ponadto zainstalowana w zestawie z fotowoltaiką staje się urządzeniem w pełni przyjaznym naszej planecie.`,
    image: offer1,
    alt: 'pompy ciepla'
  },
  {
    id: 'photovoltaics',
    h3: 'Fotowoltaika',
    paragraph: `Energia elektryczna jest istotnym składnikiem wydatków domowych. Pomimo tego, że urządzenia domowe oraz oświetlenie stają się coraz bardziej energooszczędne, to statystycznie roczne zużycie energii w domach wzrasta. Powodem tego jest coraz większa ilość używanych sprzętów domowych, a także popularyzacja stosowania pomp ciepła, czy klimatyzacji.

    Ponieważ systematycznie rosną koszty zakupu energii elektrycznej to tym samym wzrastają rachunki za prąd. Instalacja fotowoltaiczna dla domu stanowi tym samym interesujące rozwiązanie mogące znacznie ograniczyć wspomniane wydatki. Aby taka inwestycja była opłacalna, konieczne jest jednak wykonanie bardzo dokładnej analizy – najlepiej za pomocą kalkulatora doboru fotowoltaiki. Pozwoli to na dobór optymalnej w stosunku do potrzeb wielkości instalacji PV tak aby uniknąć przewymiarowania i bezpowrotnej utraty nadwyżek energii oddawanej do sieci <br> <br>
    
    ROOT to przede wszystkim ludzie, których misją jest działalność na rzecz rozwoju odnawialnych źródeł energii. Profesjonalizm, dbałość o szczegóły i wieloletnie doświadczenie w branży OZE pozwoliły na wypracowanie pozycji lidera na obszarze Wielkopolski.

Świadczymy kompleksowe usługi – zajmujemy się projektowaniem, montażem i obsługą serwisową instalacji. Dzięki temu mamy pewność, że panele fotowoltaiczne, które montujemy, będą dla Państwa działać przez wiele lat z maksymalną wydajnością.

Nasze doświadczenie i umiejętności poświadczone są m.in. przez certyfikaty, a także przez opinie naszych Klientów. Znajdą je Państwo w zakładce o nas. Priorytetem naszej działalności jest zadowolenie inwestorów, którym w ramach lokalnej współpracy każdorazowo gwarantujemy wsparcie w formalnościach, pełną opiekę nad instalacją słoneczną oraz szybki czas reakcji serwisowej.`,
    image: offer2,
    alt: 'fotowoltaika'
  }, 
  {
    id: 'plumber',
    h3: 'Usługi hydrauliczne',
    paragraph: `Nieprzerwanie od ponad 15 lat wykonujemy różnego rodzaju naprawy hydrauliczne oraz kładziemy instalacje od stanu surowego. W tym okresie poszerzyliśmy wachlarz czynności możliwych do przeprowadzenia na zlecenie klientów. Dla nas każdy klient jest ważny – od jednorazowego, który ma problem z przeciekającymi rurami, po deweloperów i firmy, z którymi zawieramy długotrwałe umowy na kompleksowe usługi. Wśród najczęściej wykonywanych przez nas działań są: <br><br>

    <ul class="pl-5 list-disc	text-left">
      <li>Naprawy kranów, spłuczek, urządzeń sanitarnych</li> 
      <li>Usuwanie awarii C. O.,</li> 
      <li>Instalacja grzejników oraz centralnego ogrzewania,</li> 
      <li>Zamrażanie rur,</li> 
      <li>Przyłącza wod-kan.,</li> 
      <li>Odpompowywanie wody,</li> 
      <li>Instalacje Odgromowe</li> 
      <li>Przeróbki pionów.</li> 
      <li>Montaż umywalek, baterii, brodzików, bojlerów, kotłów</li> 
      <li>Przeprowadzaniem inspekcji w nowych budynkach,</li> 
      <li>Wykonywaniem okresowych przeglądów,</li> 
      <li>Wykonywaniem instalacji sanitarnych.</li> 
    </ul>`,
    image: offer3,
    alt: 'usługi hydrauliczne'
  },
  {
    id: 'electrics',
    h3: 'Usługi elektryczne',
    paragraph: `Oferujemy swoje usługi w zakresie robót elektrycznych, specjalnością naszej firmy jest kompleksowe wykonawstwo nowych instalacji elektrycznych w budynkach jedno i wielorodzinnych. Szanujemy czas i pieniądze naszych Klientów, dlatego powierzane nam zadania wykonujemy rzetelnie i terminowo. Wykorzystujemy najnowocześniejsze technologie oraz metody pracy, tak aby efektem naszych działań były zawsze doskonale funkcjonujące instalacje elektryczne. <br><br>
    
     
    Nasza Oferta przedstawiona w skrócie, obejmuje następujące usługi elektryczne:
    <ul class="pl-5 list-disc	text-left">
      <li>Instalacje Elektryczne</li> 
      <li>Inteligentny Dom (KNX, Ampio, Grenton, itp)</li> 
      <li>Systemy Alarmowe</li> 
      <li>Monitoring</li> 
      <li>MultiRoom Audio</li> 
      <li>Sale Kina Domowego</li> 
      <li>Instalacje Odgromowe</li> 
      <li>Pomiary Elektryczne</li> 
      <li>Okablowanie strukturalne</li> 
      <li>Wideodomofony</li> 
      <li>Pomiary Elektryczne</li> 
    </ul>
    `,
    image: offer4,
    alt: 'usługi elektryczne'
  },
  {
    id: 'interior',
    h3: 'Wykończenia wnętrz',
    paragraph: `Oferujemy kompleksowe wykończenia wnętrz od projektu po realizację z możliwością pełnego umeblowania stanów surowych, deweloperskich. Jesteśmy dokładni, terminowi, pomysłowi oraz utrzymujemy porządek podczas trwania wykończania mieszkania. Dobrze przeprowadzone wykończenie wnętrz oszczędzi stresu oraz dodatkowych wydatków. <br><br>

    Nasza firma podchodzi holistycznie do każdego wykończenia wnętrz w wybrany przez Państwa stylu. Indywidualnie dobieramy architekta wnętrza do każdego stylu wykończenia. <br><br>
    
    Na początku współpracy podpisujemy z Tobą umowę na kompleksowe wykończenia wnętrz, w której określimy zarówno budżet, jak i zakres oraz termin wykonania wszystkich prac. Elementy te będą cały czas kontrolowane przez ekspertów, którzy zapewniają zakupy oraz dostawy materiałów i wszystkie czynności logistyczne. Wszystko to zmierza do tego, by ostatecznie oddać Ci lokal gotowy do zamieszkania. <br><br>

Jeśli chciałbyś dodatkowo przyspieszyć i uprościć ten proces, skontaktuj się z nami już na etapie wybierania mieszkania. Pomożemy ocenić, czy rozważane wnętrze spełni Twoje oczekiwania oraz oszacować rozmiar koniecznych prac. Wykonujemy także zmiany lokatorskie.
    `,
    image: offer5,
    alt: 'pompy ciepla'
  },
];

export const projectsData = [
  {
    toggler: 'HeatPump',
    paragraph: 'Pompy ciepła',
    images: [
      hp1, hp2, hp3, hp4, hp5
    ],
  },
  {
    toggler: 'Photovoltaics',
    paragraph: 'Fotowoltaika',
    images: [
     photovoltaics1, photovoltaics2, photovoltaics3, photovoltaics4, photovoltaics5
    ]
  },
  {
    toggler: 'Plumbers',
    paragraph: 'Usługi hydrauliczne',
    images: [plumber1, plumber2, plumber3, plumber4, plumber5],
  },
  {
    toggler: 'Electrics',
    paragraph: 'Usługi elektryczne',
    images: [electricity1, electricity2, electricity3, electricity4, electricity5],
  },
  {
    toggler: 'Interior',
    paragraph: 'Wykończenia wnętrz',
    images: [interior1, interior2, interior3, interior4, interior5],
  },
]