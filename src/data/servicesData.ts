import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  whenItMakesSense: string[];
  problemsSolved: string[];
  scope: {
    includes: string[];
    excludes: string[];
  };
  deliverables: string[];
  workModel: {
    type: string;
    duration: string;
    communication: string;
  };
  caseStudy: {
    client: string;
    situation: string;
    actions: string;
    result: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  // ==========================================
  // KATEGORIA 1: STRATEGIA WOBEC CHIN
  // ==========================================
  'analiza-wplywu': {
    title: 'Analiza wpływu Chin na firmę lub sektor',
    subtitle: 'Strategia wobec Chin',
    image: serviceStrategy,
    description: 'To strategiczny risk check dla Zarządu przed podjęciem decyzji o wejściu na rynek chiński, zmianie dostawcy, inwestycji technologicznej lub ekspansji eksportowej. Oceniamy realny wpływ Chin na dany sektor w oparciu o chińskie źródła branżowe, dokumenty planistyczne oraz lokalne dane rynkowe. Weryfikujemy, czy przewagi kosztowe są faktyczne, czy jedynie pozorne oraz czy rozważany kierunek działania ma uzasadnienie ekonomiczne i operacyjne. Oddzielamy twarde fakty od narracji marketingowej. Efektem jest klarowna rekomendacja: wchodzić, modyfikować, testować czy wstrzymać projekt - zanim firma zainwestuje w kosztowne audyty, podróże służbowe czy formalne procedury.',
    whenItMakesSense: [
      'Firma traci konkurencyjność w Polsce i rozważa automatyzację lub zakup technologii z Chin.',
      'Istnieje uzależnienie od importu z Chin, bez pełnej wiedzy o ryzykach regulacyjnych i operacyjnych.',
      'Planowana jest ekspansja eksportowa do Chin i potrzebna jest realna ocena szans (weryfikacja konkurencji i barier wejścia) przed zainwestowaniem środków w marketing.',
      'Rozważany jest nowy model sourcingu, ale brak twardych danych decyzyjnych.',
    ],
    problemsSolved: [
      'Minimalizacja Ryzyka (De-risking): Ograniczenie błędnej alokacji kapitału (technologia, dostawca, model wejścia).',
      'Weryfikacja Opłacalności: ocena, czy import/wdrożenie danej technologii faktycznie przyniesie oszczędności względem rozwiązań dostępnych w Europie.',
      'Wczesne wykrycie ryzyk regulacyjnych, operacyjnych i reputacyjnych.',
    ],
    scope: {
      includes: [
        'Analiza Luki (Gap Analysis): Porównanie rozwiązań stosowanych w Chinach z obecną sytuacją w firmie klienta.',
        'Weryfikacja Polityczna: Sprawdzenie, czy dany sektor jest wspierany przez rząd (szansa na niższe ceny/dotacje), czy ograniczany regulacjami (ryzyko).',
        'Mapa Graczy: Identyfikacja kluczowych producentów i technologii w danym regionie.',
        'Analiza Ryzyka: Sprawdzenie opinii o podmiotach w chińskim internecie przemysłowym.',
        'Kompleksowa analiza rynku, technologii, procesów oraz kluczowych ryzyk i szans rozwojowych.',
      ],
      excludes: [
        'Fizycznych wizyt w fabrykach i audytów technicznych na miejscu.',
        'Bezpośrednich negocjacji handlowych i zakupów.',
        'Doradztwa prawnego i podatkowego.',
      ],
    },
    deliverables: [
      'Raport Zarządczy (Executive Memo): Dokument PDF (3-5 stron kluczowych wniosków + załączniki analityczne). Skupiony na faktach, liczbach i rekomendacjach, bez zbędnej teorii.',
      'Omówienie Wniosków (Debriefing Call): 45-minutowa konsultacja online. Możliwość zadania pytań i omówienia dalszych kroków.',
    ],
    workModel: {
      type: 'Projekt jednorazowy lub model abonamentowy',
      duration: '7-10 dni roboczych',
      communication: 'E-mail + spotkanie wideo podsumowujące (Debriefing Call)',
    },
    caseStudy: {
      client: 'Średnia fabryka mebli (Polska), problem z brakiem pracowników.',
      situation: 'Plan zakupu robotów lakierniczych z Chin. Obawy o awaryjność, brak części zamiennych i rzetelność dostawcy znalezionego w internecie.',
      actions: 'Przeprowadzono analizę rynku. Zidentyfikowano 3 producentów w klastrze robotyki (Foshan) posiadających stabilną pozycję rynkową. Odrzucono 2 firmy oparte wyłącznie na marketingu (negatywne opinie na chińskich forach inżynierskich). Rekomendowano dostawcę wykorzystującego podzespoły Siemens (łatwy serwis w Polsce).',
      result: 'Klient zrezygnował z ryzykownego zakupu od pośrednika i rozpoczął rozmowy z rekomendowanym producentem. Uniknięcie straty szacowanej na ok. 200 tys. PLN.',
    },
  },
  'decyzje-wejscia': {
    title: 'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji',
    subtitle: 'Strategia wobec Chin',
    image: serviceAnalysis,
    description: 'Kompleksowa analiza strategiczna oparta o źródła otwarte (OSINT) i chińskojęzyczne bazy danych, dedykowana firmom stojącym przed kluczową decyzją kierunkową: wejść do Chin, rozpocząć współpracę z chińskim partnerem (wdrożenie technologii, import, JV), skalować obecność czy ograniczyć ryzyko (decoupling). Agregujemy dane z chińskich rejestrów, dokumentów planistycznych i wywiadu rynkowego, tworząc "holistyczną mapę terenu". Usługa dostarcza zarządowi twardych argumentów "za" lub "przeciw" każdej formie kooperacji, eliminując domysły i emocje na etapie planowania strategicznego.',
    whenItMakesSense: [
      'Decyzja o Współpracy Technologicznej: Rozważany jest zakup chińskich maszyn, licencji lub wdrożenie ich systemów IT w Polsce, ale istnieje obawa o jakość, bezpieczeństwo danych i serwis.',
      'Weryfikacja Modelu Partnerstwa: Planowany jest strategiczny sojusz (OEM / ODM / Dystrybucja) z chińskim podmiotem i istnieje potrzeba sprawdzenia, czy partner ma zdolność operacyjną do jego realizacji.',
      'Planowana Ekspansja: Rozważane jest fizyczne wejście na rynek chiński (sprzedaż/produkcja), ale brakuje rzetelnej oceny konkurencji i barier wejścia.',
      'Analiza Ryzyka (Exposure): Klient zastanawia się, czy obecny łańcuch dostaw lub partnerstwo są zagrożone w świetle nowych regulacji Pekinu i geopolityki.',
    ],
    problemsSolved: [
      'Eliminacja "ślepych punktów": Zdejmuje ryzyko operacyjne i polityczne z decyzji o alokacji kapitału w relacje z Chinami.',
      'Oszczędność Zasobów: Zapobiega wchodzeniu w "toksyczne" partnerstwa lub inwestowaniu w technologie, które nie będą wspierane.',
    ],
    scope: {
      includes: [
        'Analiza Potencjału Partnera/Technologii: Weryfikacja pozycji rynkowej i technologicznej chińskiego podmiotu.',
        'Sektorowy Deep Dive: Kondycja branży w Chinach + Trendy.',
        'Analiza "Policy vs Reality": Zestawienie planów współpracy z dokumentami strategicznymi KPCh.',
        'Ocena Ryzyka Partnerstwa: Wstępna ocena kontekstu operacyjnego i sygnałów ryzyka.',
        'Analizę źródeł chińskojęzycznych, raporty rządowe, syntezę strategiczną.',
      ],
      excludes: [
        'Negocjacji handlowych.',
        'Doradztwa prawnego i podatkowego.',
        'Audytów technicznych na miejscu.',
      ],
    },
    deliverables: [
      'Raport Strategiczny (PDF): Analiza sektora/partnera + Analiza strategiczno-polityczna (szanse i zagrożenia współpracy).',
      'Rekomendacja Kierunkowa: Jasna sugestia: werdykt ryzyka + scenariusze + warunki.',
      'Debriefing Call: 60-minutowe spotkanie z omówieniem wniosków.',
    ],
    workModel: {
      type: 'Projekt jednorazowy lub model abonamentowy',
      duration: '10-14 dni roboczych',
      communication: 'E-mail + spotkanie wideo podsumowujące (Debriefing Call)',
    },
    caseStudy: {
      client: 'Polska sieć logistyczna.',
      situation: 'Plan wdrożenia chińskich robotów sortujących (AGV) w magazynie pod Warszawą. Klient miał ofertę od "Lidera Rynku" z Shenzhen.',
      actions: 'Analiza wykazała, że "Lider" jest podmiotem zadłużonym, a oferowana technologia opiera się na starym standardzie nawigacji, który jest wycofywany z chińskich "Smart Warehouses" na rzecz nowszego.',
      result: 'Klient zerwał negocjacje. Yin Yang wskazało 2 alternatywnych dostawców (mniejszych, ale z nowszą technologią i wsparciem rządu). Klient wdrożył rozwiązanie tańsze o 15% i nowocześniejsze o generację.',
    },
  },
  'briefingi-decyzyjne': {
    title: 'Briefingi decyzyjne dla zarządów',
    subtitle: 'Strategia wobec Chin',
    image: serviceStrategy,
    description: 'Dedykowane sesje strategiczne lub zwięzłe materiały analityczne (Board Memo), przygotowane specjalnie pod kątem posiedzeń Zarządów i Rad Nadzorczych. Tłumaczymy skomplikowane makroekonomiczne i technologiczne sygnały z Chin na język konkretnych ryzyk i szans dla Twojej spółki. Usługa służy szybkiemu wyrównaniu poziomu wiedzy.',
    whenItMakesSense: [
      'Brak Spójności w Zarządzie: Część decydentów opowiada się za współpracą z Chinami, część jest sceptyczna. Potrzebna jest zewnętrzna perspektywa oparta na danych.',
      'Przygotowanie do Strategii Rocznej: Musicie uwzględnić czynnik chiński (konkurencję lub dostawy) w planach budżetowych, ale brakuje Wam świeżych danych.',
      'Onboarding Decydentów: Nowy członek Zarządu lub Rady Nadzorczej potrzebuje szybkiego wdrożenia w specyfikę azjatycką firmy.',
      'Nagła Zmiana Rynkowa: Wprowadzono nowe cła, regulacje lub wybuchł kryzys medialny - potrzebujecie pigułki wiedzy "co to dla nas znaczy" w ciągu 48h.',
    ],
    problemsSolved: [
      'Eliminacja Szumu Informacyjnego: Zarząd nie ma czasu czytać raportów. Dostaje esencję potrzebną do podjęcia uchwały.',
      'Obiektywizacja Dyskusji: Przenosi rozmowę z poziomu emocji na poziom faktów.',
      'Przyspieszenie decyzji: Skraca proces decyzyjny poprzez dostarczenie wspólnej bazy faktów.',
    ],
    scope: {
      includes: [
        'Synteza Tematyczna: Opracowanie jednego, wąskiego zagadnienia.',
        'Q&A Session: Odpowiedzi na pytania Zarządu w trybie "ognia pytań" (Challenge Session).',
        'Prezentację dla Zarządu: Maks. 10 slajdów z kluczowymi danymi i wnioskami.',
        'Board Memo (1-3 strony): Skondensowany dokument "do kawy" przed spotkaniem.',
      ],
      excludes: [
        'Długoterminowego doradztwa strategicznego.',
        'Operacyjnego wdrażania wniosków.',
        'Negocjacji w imieniu spółki.',
      ],
    },
    deliverables: [
      'Board Memo (1-3 strony)',
      'Prezentacja zarządcza (max 10 slajdów)',
      'Sesja briefingowa (45-60 min)',
      'W razie potrzeby: follow-up memo z odpowiedziami na dodatkowe pytania',
    ],
    workModel: {
      type: 'Jednorazowy lub Abonament (Kwartalny Update)',
      duration: '3-5 dni przygotowania + Spotkanie',
      communication: 'Dostarczenie materiałów + Spotkanie wideo/osobiste',
    },
    caseStudy: {
      client: 'Polska grupa kapitałowa (branża budowlana).',
      situation: 'Zarząd był podzielony w kwestii zakupu chińskich maszyn drogowych. Dyrektor Finansowy widział oszczędności, Dyrektor Techniczny bał się o jakość i "politykę". Decyzja wisiała od 3 miesięcy.',
      actions: 'Przygotowano briefing "Chińskie Maszyny Budowlane 2025: Fakty vs Mity". Pokazano, że konkurencja z Europy Zachodniej już używa tych samych podzespołów. Przedstawiono twarde dane o dostępności serwisu w Polsce.',
      result: 'Zarząd osiągnął konsensus. Przegłosowano pilotażowy zakup 2 maszyn zamiast wymiany całej floty (bezpieczny kompromis). Inwestycja ruszyła z miejsca.',
    },
  },

  // ==========================================
  // KATEGORIA 2: ANALIZY RYNKU I WERYFIKACJA PARTNERÓW
  // ==========================================
  'analizy-sektorow': {
    title: 'Analizy sektorów, klastrów przemysłowych i konkurencji',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceAnalysis,
    description: 'To kompleksowa analiza struktury rynku i jego kluczowych graczy w Chinach. Łączymy mapowanie klastrów przemysłowych z pogłębionym badaniem konkurencji - zarówno lokalnej, jak i międzynarodowej. Identyfikujemy rzeczywiste centra produkcji w danym sektorze (np. Shenzhen - elektronika, Foshan - meble, Guzhen - oświetlenie), analizujemy lokalny ekosystem dostawców i łańcuch wartości oraz wskazujemy regiony, w których technologia jest najbardziej rozwinięta, a koszty najbardziej efektywne. Równolegle analizujemy konkurencję: strategie cenowe, kanały sprzedaży, komunikację marketingową, opinie klientów oraz źródła przewagi.',
    whenItMakesSense: [
      'Eliminacja pośredników: Chcesz kupować bezpośrednio u producenta, ale trafiasz głównie na firmy handlowe.',
      'Wejście na rynek chiński: Planujesz ekspansję i musisz wiedzieć, z kim realnie będziesz konkurować.',
      'Presja cenowa: Na Twoim rynku pojawił się chiński gracz z bardzo niską ceną i chcesz zrozumieć jego model operacyjny.',
      'Przygotowanie wizyty w Chinach: Chcesz odwiedzić faktyczne centrum branży, a nie przypadkową lokalizację.',
      'Optymalizacja produkcji: Szukasz alternatywnego regionu produkcyjnego o lepszym stosunku ceny do jakości.',
    ],
    problemsSolved: [
      'Pozwala ominąć pośredników i dotrzeć bezpośrednio do zagłębi produkcyjnych.',
      'Ujawnia realną strukturę kosztów i przewagi konkurencyjne rynku.',
      'Chroni przed wejściem w segment zdominowany przez silnych lokalnych graczy.',
      'Ogranicza ryzyko błędnej alokacji kapitału w produkt bez realnej unikalności.',
    ],
    scope: {
      includes: [
        'Geograficzne mapowanie kluczowych klastrów przemysłowych.',
        'Analizę ekosystemu (poddostawcy, infrastruktura, specjalizacja technologiczna).',
        'Profilowanie 3-5 głównych konkurentów (oferta, ceny, pozycjonowanie).',
        'Analizę opinii klientów i obecności cyfrowej (WeChat, Douyin, Tmall, JD).',
        'Porównanie przewag kosztowych i technologicznych.',
      ],
      excludes: [
        'Audytów finansowych i prawnych.',
        'Umawiania spotkań handlowych.',
        'Testów fizycznych produktów.',
      ],
    },
    deliverables: [
      'Raport analityczny (PDF): mapa klastra, analiza rynku i konkurencji, wnioski strategiczne.',
      'Tabela porównawcza (Excel): lista producentów oraz benchmarking konkurencji.',
      'Rekomendacja kierunkowa: wskazanie optymalnej ścieżki działania.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-14 dni roboczych',
      communication: 'E-mail + debriefing call',
    },
    caseStudy: {
      client: 'Polska marka kosmetyków naturalnych oraz producent oświetlenia LED.',
      situation: 'Pierwszy klient planował wejście do Chin z produktem postrzeganym jako "unikalny". Drugi kupował komponenty przez pośrednika z Pekinu.',
      actions: 'Przeprowadzono analizę klastrów przemysłowych i konkurencji. Wykazano, że centrum produkcji LED znajduje się w Guzhen, a nie w Pekinie; w Chinach funkcjonuje ponad 30 marek oferujących podobne kosmetyki w niższym segmencie cenowym.',
      result: 'Bezpośrednie nawiązanie relacji z producentem obniżyło koszty o 22%. W drugim przypadku zarekomendowano pivot pozycjonowania zamiast wejścia w konkurencję cenową.',
    },
  },
  'analiza-regulacyjna': {
    title: 'Analiza regulacyjna i barier wejścia',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceStrategy,
    description: 'Kompleksowa analiza wymogów regulacyjnych i barier wejścia na rynek chiński. Identyfikujemy wszystkie formalne przeszkody: certyfikacje (CCC, NMPA, GACC), rejestracje, wymagania etykietowe, normy GB oraz ograniczenia sektorowe. Usługa pozwala oszacować realny czas i koszt wejścia oraz wskazuje optymalne ścieżki (CBEC vs General Trade).',
    whenItMakesSense: [
      'Planowanie eksportu produktów wymagających certyfikacji.',
      'Ocena opłacalności wejścia na rynek przed podjęciem decyzji.',
      'Porównanie ścieżek wejścia (cross-border vs tradycyjny import).',
      'Weryfikacja zgodności produktu z wymaganiami rynku chińskiego.',
    ],
    problemsSolved: [
      'Uniknięcie kosztownych błędów formalnych i cofnięcia towaru na granicy.',
      'Realistyczna ocena czasu i budżetu potrzebnego na wejście.',
      'Identyfikacja najkrótszej ścieżki do rynku.',
    ],
    scope: {
      includes: [
        'Identyfikacja wymaganych certyfikatów i rejestracji.',
        'Analiza norm GB i wymagań etykietowych.',
        'Porównanie ścieżek wejścia (CBEC vs General Trade).',
        'Oszacowanie czasu i kosztów procesu.',
        'Identyfikacja potencjalnych przeszkód regulacyjnych.',
      ],
      excludes: [
        'Prowadzenia procesów rejestracyjnych.',
        'Doradztwa prawnego.',
        'Fizycznych testów laboratoryjnych.',
      ],
    },
    deliverables: [
      'Regulatory Roadmap (PDF): ścieżka krok po kroku + lista wymagań.',
      'Analiza porównawcza ścieżek wejścia.',
      'Oszacowanie kosztów i harmonogramu.',
      'Debriefing call z omówieniem wniosków.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '7-10 dni roboczych',
      communication: 'E-mail + spotkanie wideo',
    },
    caseStudy: {
      client: 'Polska firma kosmetyczna.',
      situation: 'Plan wejścia na rynek chiński z linią kosmetyków naturalnych.',
      actions: 'Przeprowadzono analizę wymagań NMPA. Zidentyfikowano ryzyko testów na zwierzętach (sprzeczne z polityką marki "Cruelty Free"). Zarekomendowano ścieżkę CBEC jako alternatywę.',
      result: 'Klient zmienił strategię na CBEC via Tmall Global, zachowując status "Cruelty Free" i skracając czas wejścia z 18 miesięcy do 3.',
    },
  },
  'weryfikacja-kontrahenta': {
    title: 'Weryfikacja kontrahenta (Desktop Check)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceAnalysis,
    description: 'Szybka, zdalnie realizowana weryfikacja chińskiego podmiotu przed nawiązaniem relacji handlowej. Na podstawie chińskich rejestrów rządowych, baz danych sądowych i branżowych źródeł sprawdzamy formalny status firmy, strukturę właścicielską, kondycję finansową oraz obecność sygnałów ryzyka (spory, egzekucje, wpisy na czarne listy).',
    whenItMakesSense: [
      'Przed wpłatą zaliczki lub podpisaniem umowy.',
      'Gdy partner pochodzi z portalu B2B (Alibaba, Made-in-China) i brak niezależnej weryfikacji.',
      'Przy zmianie dostawcy lub rozpoczęciu współpracy z nowym podmiotem.',
      'Gdy pojawiają się wątpliwości co do wiarygodności partnera.',
    ],
    problemsSolved: [
      'Ochrona przed oszustwem lub współpracą z podmiotem niewiarygodnym.',
      'Weryfikacja, czy partner jest producentem czy pośrednikiem.',
      'Identyfikacja czerwonych flag przed zaangażowaniem środków.',
    ],
    scope: {
      includes: [
        'Weryfikacja statusu prawnego w rejestrze SAIC/SAMR.',
        'Sprawdzenie struktury właścicielskiej i kapitału zakładowego.',
        'Analiza historii sporów sądowych (China Judgments Online).',
        'Weryfikacja wpisów egzekucyjnych (Zhixing).',
        'Sprawdzenie obecności na czarnych listach.',
      ],
      excludes: [
        'Fizycznej wizyty w siedzibie firmy.',
        'Pełnego audytu finansowego.',
        'Weryfikacji technicznej produktów.',
      ],
    },
    deliverables: [
      'Raport Desktop Check (PDF): status prawny, struktura, sygnały ryzyka.',
      'Klasyfikacja ryzyka: Zielone / Żółte / Czerwone.',
      'Rekomendacja dalszych kroków.',
    ],
    workModel: {
      type: 'Projektowy (sprint)',
      duration: '3-5 dni roboczych',
      communication: 'E-mail + krótki debriefing',
    },
    caseStudy: {
      client: 'Polski importer materiałów budowlanych.',
      situation: 'Znalezienie atrakcyjnej oferty na Alibaba, przed wpłatą zaliczki 30%.',
      actions: 'Przeprowadzono Desktop Check. Wykryto, że firma została założona 6 miesięcy wcześniej, ma minimalny kapitał zakładowy, a reprezentant prawny figuruje w 4 innych spółkach o podobnym profilu (wzorzec "shell company").',
      result: 'Klient wstrzymał transakcję i uniknął straty szacowanej na 80 tys. PLN.',
    },
  },
  'due-diligence': {
    title: 'Rozszerzona weryfikacja partnera (Due Diligence)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceStrategy,
    description: 'Pogłębiona analiza partnera biznesowego wykraczająca poza dane rejestrowe. Łączymy weryfikację formalną z analizą operacyjną, reputacyjną i relacyjną. Celem jest dostarczenie pełnego obrazu partnera przed podjęciem strategicznej decyzji o współpracy, inwestycji lub Joint Venture.',
    whenItMakesSense: [
      'Przed decyzją o Joint Venture lub inwestycji kapitałowej.',
      'Przy negocjacjach high-stakes (kontrakty powyżej 500 tys. PLN).',
      'Gdy Desktop Check wykazał sygnały wymagające pogłębienia.',
      'Przy planowaniu długoterminowej współpracy strategicznej.',
    ],
    problemsSolved: [
      'Eliminacja ryzyka wejścia w toksyczne partnerstwo.',
      'Pełne zrozumienie struktury decyzyjnej i operacyjnej partnera.',
      'Identyfikacja ukrytych powiązań i potencjalnych konfliktów interesów.',
    ],
    scope: {
      includes: [
        'Pełna weryfikacja rejestrowa i struktury właścicielskiej.',
        'Analiza kondycji finansowej (bilans, przepływy, zobowiązania).',
        'Weryfikacja reputacji branżowej i opinii klientów.',
        'Analiza powiązań kapitałowych i osobowych.',
        'Wywiad terenowy i rozmowy z otoczeniem biznesowym.',
      ],
      excludes: [
        'Doradztwa prawnego.',
        'Reprezentacji w negocjacjach.',
        'Audytu technicznego produktów.',
      ],
    },
    deliverables: [
      'Raport Due Diligence (PDF): kompleksowa analiza partnera.',
      'Mapa powiązań kapitałowych i osobowych.',
      'Ocena ryzyka z rekomendacją działania.',
      'Debriefing strategiczny z Zarządem.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'Regularne statusy + spotkanie podsumowujące',
    },
    caseStudy: {
      client: 'Polska firma z branży OZE (fotowoltaika).',
      situation: 'Plan Joint Venture z chińskim producentem inwerterów oraz montownia w Polsce.',
      actions: 'Wykryto liczne otwarte spory o niezapłacone faktury, sygnały egzekucyjne oraz red flags dotyczące osób zarządzających (wpisy na listach dłużników).',
      result: 'Klient przerwał negocjacje i uniknął inwestycji rzędu kilku mln PLN. Wskazano alternatywny, stabilniejszy podmiot do dalszych rozmów.',
    },
  },

  // ==========================================
  // KATEGORIA 3: WEJŚCIE NA RYNEK POLSKA ↔ CHINY
  // ==========================================
  'wybor-modelu': {
    title: 'Wybór modelu wejścia na rynek',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceAnalysis,
    description: 'To fundament każdej ekspansji na rynek chiński. Zamiast kosztownych eksperymentów, projektujemy precyzyjny model wejścia dopasowany do Twojego produktu, branży i apetytu na ryzyko. Traktujemy Chiny nie jako jeden rynek, lecz system złożony z regionów, kanałów i odmiennych zachowań konsumenckich. Odpowiadamy na trzy kluczowe pytania strategiczne: jak wejść (dystrybutor, CBEC, WFOE, JV, TP), gdzie wejść (Tier 1 vs Tier 2/3), czy i jak lokalizować produkt.',
    whenItMakesSense: [
      'Plan Eksportowy: Masz sprawdzony produkt w Polsce i rozważasz sprzedaż w Chinach.',
      'Wybór Kanału: Stoisz przed dylematem: kosztowna rejestracja czy szybsza ścieżka Cross-Border E-Commerce.',
      'Pivot Strategiczny: Jesteś już w Chinach, ale sprzedaż nie rośnie.',
      'Poszukiwanie Niszy: Chcesz wiedzieć, w których miastach i segmentach popyt jest realny.',
    ],
    problemsSolved: [
      'Oszczędność Czasu i Kapitału: Chroni przed inwestycją w kanał "zatkany" kosztami.',
      'Jasność Decyzyjna: Rozstrzyga kluczowe pytania operacyjne.',
    ],
    scope: {
      includes: [
        'Dobór Modelu Operacyjnego: Porównanie opcji (Dystrybutor vs WFOE vs TP).',
        'Analiza Kanałów (Channel Check): Tmall Global, JD, Douyin, WeChat.',
        'Analiza Geograficzna: Potencjał Tier 1 vs Tier 2/3.',
        'Wstępna Wycena Wejścia: Szacunek kosztów na pierwsze 12 miesięcy.',
      ],
      excludes: [
        'Zakładania sklepów na platformach.',
        'Prowadzenia kampanii marketingowych.',
        'Formalnej rejestracji spółek lub produktów.',
      ],
    },
    deliverables: [
      'Raport Strategiczny (PDF): Rekomendacja modelu wejścia z uzasadnieniem.',
      'Roadmapa Wdrożenia: Oś czasu od decyzji do pierwszej sprzedaży.',
      'Checklisty Decyzyjne: Kluczowe kroki, ryzyka i "go/no-go points".',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'Warsztat startowy + prezentacja końcowa',
    },
    caseStudy: {
      client: 'Polska marka dermokosmetyków.',
      situation: 'Plan wejścia do aptek stacjonarnych (General Trade).',
      actions: 'Analiza wykazała 12-18 miesięcy rejestracji NMPA i wymóg testów na zwierzętach. Zarekomendowano CBEC.',
      result: 'Zmiana strategii. Start na Tmall Global w 3 miesiące, bez testów, z zachowaniem statusu "Cruelty Free".',
    },
  },
  'wsparcie-formalne': {
    title: 'Wsparcie formalne i regulacyjne',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceStrategy,
    description: 'Aby sprzedawać w Chinach legalnie, produkt musi posiadać "chiński paszport" - komplet rejestracji, certyfikatów i zgodnych etykiet. Ta usługa to kompleksowe wsparcie regulacyjne i formalne w procesie dopuszczenia produktów na rynek chiński. Koordynujemy rejestrację producentów i produktów w kluczowych systemach rządowych (GACC/CIFER, NMPA, CCC), weryfikujemy dokumentację techniczną oraz zgodność etykiet z normami GB.',
    whenItMakesSense: [
      'Eksport Żywności i Napojów: Chcesz rozpocząć regularny eksport, ale zakład nie posiada numeru GACC/CIFER.',
      'Kosmetyki i Chemia Konsumencka: Wprowadzasz nową linię produktów i musisz przejść procedurę notyfikacji/rejestracji.',
      'Zatrzymanie na cle: Towar został wstrzymany z powodu braków formalnych.',
      'Elektronika, Zabawki: Produkt wymaga certyfikatu CCC.',
    ],
    problemsSolved: [
      'Odblokowanie Dostępu do Rynku: Zmienia produkt z formalnie "nielegalnego" w dopuszczony do obrotu.',
      'Redukcja Strat i Ryzyka: Zapobiega niszczeniu towaru i zwrotom kontenerów.',
      'Przewidywalność procesu: Urealnia czas i koszty.',
    ],
    scope: {
      includes: [
        'Regulatory Scan: Identyfikacja właściwego trybu wejścia i listy wymagań.',
        'Rejestracja GACC (CIFER): Założenie konta i złożenie wniosku.',
        'NMPA (CSAR) - koordynacja: Przygotowanie checklisty i wsparcie w kompletacji dossier.',
        'CCC - koordynacja: Dobór ścieżki certyfikacyjnej.',
        'Label Check / Label Adaptation: Weryfikacja i adaptacja etykiet.',
      ],
      excludes: [
        'Opłat urzędowych i kosztów badań laboratoryjnych.',
        'Pełnienia funkcji formalnego przedstawiciela prawnego.',
        'Reprezentacji prawnej przed urzędami.',
      ],
    },
    deliverables: [
      'Regulatory Roadmap (PDF): ścieżka krok po kroku + timeline.',
      'Checklisty i wsady dokumentacyjne.',
      'Potwierdzenia / status procesu.',
      'Debriefing Call z omówieniem ryzyk.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: 'GACC: 1-3 miesiące / NMPA: 6-12 miesięcy',
      communication: 'Regularne statusy postępu',
    },
    caseStudy: {
      client: 'Polska palarnia kawy.',
      situation: 'Chęć przejścia z wysyłek testowych na regularny eksport kontenerowy.',
      actions: 'Audyt dokumentacji zakładu, rejestracja w systemie CIFER, adaptacja etykiet i tabel wartości odżywczych.',
      result: 'Uzyskanie numeru GACC w 4 tygodnie. Pierwszy kontener odprawiony w Ningbo bez opóźnień.',
    },
  },
  'identyfikacja-partnerow': {
    title: 'Identyfikacja i selekcja partnerów',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceAnalysis,
    description: 'Znalezienie właściwego partnera w Chinach nie jest kwestią wyszukiwarki, lecz selekcji. Ta usługa to ustrukturyzowany proces identyfikacji, oceny dopasowania oraz wstępnej weryfikacji dostawców, dystrybutorów i partnerów technologicznych, którzy często są niewidoczni z poziomu Europy. Wykorzystujemy chińskie kanały operacyjne (Baidu, 1688, WeChat), aby oddzielić realnych producentów od pośredników.',
    whenItMakesSense: [
      'Nie możesz znaleźć producenta, ponieważ nie istnieje on w anglojęzycznym internecie.',
      'Masz dziesiątki ofert z platform B2B, ale nie wiesz, kto jest realnym producentem.',
      'Otrzymałeś dobrą próbkę ("Golden Sample"), ale nie masz pewności co do produkcji seryjnej.',
      'Szukasz OEM/ODM lub partnera technologicznego.',
      'Obecny dostawca traci stabilność operacyjną i potrzebny jest Plan B.',
    ],
    problemsSolved: [
      'Eliminuje pośredników i dociera bezpośrednio do OEM/ODM.',
      'Redukuje ryzyko wysłania zaliczki do podmiotu niewiarygodnego.',
      'Odfiltrowuje firmy o niskim kapitale lub sporach prawnych.',
      'Chroni marżę i stabilność łańcucha dostaw.',
    ],
    scope: {
      includes: [
        'Profilowanie partnera (IPP): zdefiniowanie profilu idealnego partnera.',
        'Deep Search: przeszukiwanie chińskich baz w języku mandaryńskim.',
        'Wstępny outreach: kontakt telefoniczny / WeChat.',
        'Legal Check: weryfikacja w rejestrach rządowych.',
        'Risk Scan: analiza sporów i wpisów egzekucyjnych.',
        'Ocena dopasowania operacyjnego.',
      ],
      excludes: [
        'Pełnego due diligence finansowego.',
        'Fizycznych audytów fabryki.',
        'Negocjacji handlowych.',
        'Zamawiania i testowania próbek.',
      ],
    },
    deliverables: [
      'Raport "Short List" (PDF): 3-5 najlepiej dopasowanych partnerów.',
      'Karty partnerów: dane rejestrowe, profil działalności, kontakty.',
      'Ocena ryzyka: klasyfikacja Zielone / Żółte / Czerwone.',
      'Informacja operacyjna: MOQ / widełki cenowe.',
    ],
    workModel: {
      type: 'Projektowy (sprint)',
      duration: '10-14 dni roboczych',
      communication: 'Briefing startowy + prezentacja wyników online',
    },
    caseStudy: {
      client: 'Polski importer elektroniki użytkowej.',
      situation: 'Poszukiwanie producenta customowych obudów; oferty z Alibaby pochodziły głównie od pośredników z narzutem ok. 30%.',
      actions: 'Przeprowadzono search w chińskich bazach (1688) oraz weryfikację rejestrową. Zidentyfikowano fabrykę w Dongguan produkującą dla globalnych marek, bez anglojęzycznej strony www.',
      result: 'Bezpośredni kontakt z inżynierem fabryki i koszt produkcji niższy o 25% względem ofert traderów.',
    },
  },
  'wsparcie-negocjacyjne': {
    title: 'Wsparcie negocjacyjne i relacyjne',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceStrategy,
    description: 'W Chinach relacja (Guanxi) często wyprzedza kontrakt, a sposób prowadzenia rozmów bywa równie ważny jak ich treść. Ta usługa to kompleksowe wsparcie procesu negocjacyjnego: od zaprojektowania strategii, przez moderowanie i facylitację rozmów, aż po zarządzanie relacją po podpisaniu ustaleń. Działamy jako "kulturowy zderzak" i tłumacz intencji - pomagamy mówić twardo bez palenia mostów i utraty twarzy (Mianzi).',
    whenItMakesSense: [
      'Negocjacje high-stakes: Kontrakt o dużej wartości (np. >500 tys. PLN).',
      'Gra na czas i zmiana ustaleń: Partner przeciąga proces lub testuje granice.',
      'Sytuacja konfliktowa: Spór jakościowy / płatniczy wymagający rozwiązania bez eskalacji.',
      'Relacja długoterminowa: Chcesz uzyskać priorytet produkcyjny i lepsze warunki.',
    ],
    problemsSolved: [
      'Ochrona marży i warunków: Minimalizuje ustępstwa wynikające z błędów kulturowych.',
      'Przełamanie impasu: Wprowadza zewnętrzny głos zmieniający ramę rozmowy.',
      'Bezpieczeństwo relacyjne: Umożliwia twarde rozmowy bez efektu "obrazy".',
    ],
    scope: {
      includes: [
        'Strategia BATNA / ZOPA: Ustalenie alternatyw i granic w realiach chińskich.',
        'Shadow Negotiation: Przygotowanie scenariuszy i "red lines".',
        'Active Facilitation: Udział w callach/spotkaniach jako facylitator.',
        'De-escalation & Repair: Zarządzanie kryzysowe w relacji.',
        'Post-deal Guanxi Management: Plan utrzymania relacji po podpisaniu.',
      ],
      excludes: [
        'Doradztwa prawnego (redakcja umów, opinie prawne).',
        'Reprezentacji procesowej.',
      ],
    },
    deliverables: [
      'Negotiation Playbook (PDF): Cele, sekwencja, argumenty, warunki brzegowe.',
      'Stakeholder Map & Decision Lens: Mapa decydentów i wpływów.',
      'Round Decoder: Raport po każdej rundzie z analizą ustaleń.',
    ],
    workModel: {
      type: 'Retainer (abonament) lub projekt',
      duration: '4-12 tygodni',
      communication: 'Setup + cykl rund (brief → call → decoder → korekta)',
    },
    caseStudy: {
      client: 'Polska firma z branży budowlanej.',
      situation: 'Klient negocjował zakup linii produkcyjnej. Dostawca usztywnił się na cenie i sygnalizował możliwość zakończenia negocjacji.',
      actions: 'Zdiagnozowano, że kluczowa jest "twarz" właściciela. Zmieniono strukturę porozumienia: cena nominalna bez zmian, ale rozszerzony pakiet serwisu o wartości odpowiadającej rabatowi.',
      result: 'Partner zachował twarz, klient obniżył całkowity koszt (TCO) i domknął umowę.',
    },
  },
  'przygotowanie-struktur': {
    title: 'Przygotowanie struktur handlowych lub partnerskich',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceAnalysis,
    description: 'Projektujemy i wdrażamy operacyjne ramy współpracy między polskimi a chińskimi podmiotami. Obejmuje to struktury dystrybucyjne, umowy OEM/ODM, modele agencyjne oraz Joint Venture. Celem jest stworzenie ram współpracy, które zabezpieczają interesy klienta i są wykonalne w chińskich realiach prawnych i biznesowych.',
    whenItMakesSense: [
      'Podpisanie pierwszej umowy z chińskim partnerem.',
      'Formalizacja współpracy po okresie testowym.',
      'Skalowanie obecności w Chinach lub Polsce.',
      'Zmiana struktury istniejącej współpracy.',
    ],
    problemsSolved: [
      'Brak jasnych ram współpracy prowadzący do sporów.',
      'Niezgodność umów z chińską praktyką biznesową.',
      'Ryzyko utraty kontroli nad marką lub produktem.',
    ],
    scope: {
      includes: [
        'Analiza modeli współpracy i rekomendacja optymalnej struktury.',
        'Opracowanie Term Sheet / MoU.',
        'Koordynacja z kancelariami prawnymi (PL i CN).',
        'Wsparcie w negocjacjach warunków.',
        'Projektowanie mechanizmów kontroli i rozliczeń.',
      ],
      excludes: [
        'Bezpośredniego doradztwa prawnego.',
        'Rejestracji spółek.',
        'Reprezentacji w sporach.',
      ],
    },
    deliverables: [
      'Analiza modeli współpracy (PDF).',
      'Term Sheet / MoU gotowy do negocjacji.',
      'Rekomendacje dotyczące zabezpieczeń.',
      'Wsparcie w procesie finalizacji.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-28 dni roboczych',
      communication: 'Regularne statusy + warsztaty negocjacyjne',
    },
    caseStudy: {
      client: 'Polska firma technologiczna.',
      situation: 'Plan uruchomienia dystrybucji w Chinach poprzez lokalnego partnera.',
      actions: 'Opracowano model współpracy z mechanizmami kontroli jakości, raportowania i ochrony IP. Przygotowano Term Sheet i wsparto negocjacje.',
      result: 'Podpisanie umowy dystrybucyjnej z jasnymi KPI i mechanizmami wyjścia.',
    },
  },

  // ==========================================
  // KATEGORIA 4: IMPORT, EKSPORT I ZARZĄDZANIE ŁAŃCUCHEM DOSTAW
  // ==========================================
  'audyty-dostawcow': {
    title: 'Audyty i weryfikacja dostawców (On-Site)',
    subtitle: 'Import, eksport i zarządzanie łańcuchem dostaw',
    image: serviceStrategy,
    description: 'Fizyczna weryfikacja chińskiego dostawcy na miejscu, w jego zakładzie produkcyjnym. Sprawdzamy zgodność deklaracji z rzeczywistością: park maszynowy, zdolności produkcyjne, systemy jakości, warunki pracy, dokumentację. Celem jest dostarczenie twardych danych przed podjęciem decyzji o współpracy lub zwiększeniu zamówień.',
    whenItMakesSense: [
      'Przed podpisaniem kontraktu lub pierwszym większym zamówieniem.',
      'Gdy próbka ("Golden Sample") wygląda dobrze, ale brak pewności co do produkcji seryjnej.',
      'Przy eskalacji problemów jakościowych z obecnym dostawcą.',
      'Przed zwiększeniem wolumenów lub wprowadzeniem nowego produktu.',
    ],
    problemsSolved: [
      'Weryfikacja, czy dostawca to fabryka czy pośrednik.',
      'Ocena realnych zdolności produkcyjnych.',
      'Identyfikacja ryzyk jakościowych i operacyjnych.',
      'Dostarczenie podstaw do negocjacji cenowych.',
    ],
    scope: {
      includes: [
        'Wizyta w zakładzie produkcyjnym (1 dzień).',
        'Weryfikacja parku maszynowego i procesów.',
        'Rozmowy z kadrą zarządzającą i techniczną.',
        'Ocena systemu kontroli jakości.',
        'Dokumentacja fotograficzna.',
      ],
      excludes: [
        'Audytu finansowego.',
        'Certyfikacji zgodności.',
        'Długoterminowego nadzoru jakości.',
      ],
    },
    deliverables: [
      'Raport Audytowy (PDF): ocena fabryki, dokumentacja foto, wnioski.',
      'Scorecard: punktowa ocena w kluczowych wymiarach.',
      'Rekomendacja: GO / CONDITIONAL GO / NO GO.',
      'Debriefing call z omówieniem wyników.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '5-7 dni roboczych (łącznie z wizytą)',
      communication: 'Briefing + wizyta + raport + debriefing',
    },
    caseStudy: {
      client: 'Polska sieć sklepów z elektroniką.',
      situation: 'Nowy dostawca akcesoriów z Shenzhen oferował ceny o 20% niższe niż konkurencja.',
      actions: 'Przeprowadzono audyt on-site. Wykryto, że "fabryka" to montownia bez własnej produkcji, z niestabilnym zaopatrzeniem w komponenty.',
      result: 'Klient zrezygnował ze współpracy i uniknął problemów z dostawami i jakością.',
    },
  },
  'optymalizacja-lancucha': {
    title: 'Projektowanie i optymalizacja łańcucha dostaw',
    subtitle: 'Import, eksport i zarządzanie łańcuchem dostaw',
    image: serviceAnalysis,
    description: 'Analizujemy i optymalizujemy łańcuch dostaw na linii Polska-Chiny: strukturę dostawców, trasy logistyczne, punkty składowania, warunki dostaw (Incoterms), ryzyka koncentracji i koszty całkowite. Celem jest redukcja kosztów, skrócenie lead time\'ów i zwiększenie odporności łańcucha na zakłócenia.',
    whenItMakesSense: [
      'Koszty logistyczne rosną, a marża spada.',
      'Wysoka zależność od jednego dostawcy lub trasy.',
      'Planowane zwiększenie wolumenów importu/eksportu.',
      'Problemy z terminowością lub jakością dostaw.',
    ],
    problemsSolved: [
      'Redukcja kosztów logistycznych.',
      'Dywersyfikacja ryzyka w łańcuchu dostaw.',
      'Skrócenie czasu dostawy.',
      'Zwiększenie przewidywalności operacyjnej.',
    ],
    scope: {
      includes: [
        'Mapowanie obecnego łańcucha dostaw.',
        'Analiza kosztów (TCO).',
        'Identyfikacja wąskich gardeł i ryzyk.',
        'Propozycja alternatywnych scenariuszy.',
        'Rekomendacja optymalizacji (dostawcy, trasy, Incoterms).',
      ],
      excludes: [
        'Bezpośrednich negocjacji z dostawcami.',
        'Obsługi operacyjnej transportu.',
        'Zarządzania zapasami.',
      ],
    },
    deliverables: [
      'Mapa łańcucha dostaw (AS-IS i TO-BE).',
      'Analiza kosztów i ryzyk.',
      'Scenariusze optymalizacyjne z kalkulacją ROI.',
      'Roadmapa wdrożenia zmian.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'Warsztaty + analiza + prezentacja wyników',
    },
    caseStudy: {
      client: 'Polski dystrybutor narzędzi.',
      situation: 'Wysokie koszty logistyczne i częste opóźnienia dostaw z jednego portu w Chinach.',
      actions: 'Przeprowadzono analizę łańcucha. Zidentyfikowano alternatywny port z krótszym czasem tranzytu i niższymi kosztami przeładunku. Zarekomendowano dywersyfikację dostawców.',
      result: 'Redukcja kosztów logistycznych o 18% i skrócenie lead time o 5 dni.',
    },
  },
  'nadzor-produkcji': {
    title: 'Nadzór produkcji oraz kontrola jakości',
    subtitle: 'Import, eksport i zarządzanie łańcuchem dostaw',
    image: serviceStrategy,
    description: 'Bieżący nadzór nad procesem produkcji u chińskiego dostawcy: od rozpoczęcia produkcji, przez kontrole w trakcie (DUPRO), po inspekcję przed wysyłką (PSI). Celem jest zapewnienie zgodności produktu ze specyfikacją i uniknięcie kosztownych reklamacji po dostawie.',
    whenItMakesSense: [
      'Pierwsza produkcja u nowego dostawcy.',
      'Zamówienia o wysokiej wartości lub znaczeniu strategicznym.',
      'Historia problemów jakościowych z dostawcą.',
      'Produkty o wysokich wymaganiach technicznych.',
    ],
    problemsSolved: [
      'Eliminacja wad przed wysyłką towaru.',
      'Kontrola nad procesem produkcji na odległość.',
      'Redukcja kosztów reklamacji i zwrotów.',
      'Budowanie presji jakościowej na dostawcę.',
    ],
    scope: {
      includes: [
        'Inspekcja wstępna (PPI): weryfikacja materiałów i gotowości.',
        'Inspekcja w trakcie produkcji (DUPRO): kontrola procesu.',
        'Inspekcja przed wysyłką (PSI): finalna kontrola jakości.',
        'Raportowanie z dokumentacją fotograficzną.',
        'Koordynacja z fabryką w przypadku niezgodności.',
      ],
      excludes: [
        'Stałej obecności w fabryce.',
        'Testów laboratoryjnych.',
        'Obsługi reklamacyjnej po dostawie.',
      ],
    },
    deliverables: [
      'Raport inspekcyjny (PDF) z dokumentacją foto.',
      'Protokół niezgodności (jeśli wykryte).',
      'Rekomendacja: PASS / CONDITIONAL PASS / FAIL.',
      'Komunikacja z dostawcą w sprawie korekt.',
    ],
    workModel: {
      type: 'Projektowy lub abonamentowy',
      duration: 'Zależne od harmonogramu produkcji',
      communication: 'Bieżące raporty + koordynacja operacyjna',
    },
    caseStudy: {
      client: 'Polski producent mebli ogrodowych.',
      situation: 'Zamówienie 2 kontenerów mebli aluminiowych. Poprzednia dostawa miała problemy z lakierowaniem.',
      actions: 'Przeprowadzono inspekcję DUPRO (kontrola lakierowania) i PSI (finalna). Wykryto niezgodności w kolorystyce, wymuszono korektę przed wysyłką.',
      result: 'Dostawa zgodna ze specyfikacją, bez reklamacji ze strony klientów końcowych.',
    },
  },
  'organizacja-transportu': {
    title: 'Organizacja transportu międzynarodowego',
    subtitle: 'Import, eksport i zarządzanie łańcuchem dostaw',
    image: serviceAnalysis,
    description: 'Kompleksowa koordynacja transportu towarów na linii Polska-Chiny: wybór optymalnej trasy i środka transportu (morski, kolejowy, lotniczy), organizacja odprawy celnej, dokumentacji eksportowej/importowej oraz nadzór nad dostawą do miejsca docelowego.',
    whenItMakesSense: [
      'Pierwsza wysyłka kontenera z/do Chin.',
      'Zmiana spedytora lub optymalizacja kosztów transportu.',
      'Problemy z dokumentacją lub odprawą celną.',
      'Potrzeba koordynacji transportu w warunkach EXW lub FOB.',
    ],
    problemsSolved: [
      'Eliminacja problemów dokumentacyjnych.',
      'Optymalizacja kosztów transportu.',
      'Redukcja ryzyka opóźnień i przestojów.',
      'Koordynacja między wieloma podmiotami w łańcuchu.',
    ],
    scope: {
      includes: [
        'Dobór optymalnej trasy i środka transportu.',
        'Organizacja dokumentacji eksportowej/importowej.',
        'Koordynacja z fabryką, spedytorem i agencją celną.',
        'Monitoring realizacji transportu.',
        'Nadzór nad dostawą do miejsca docelowego.',
      ],
      excludes: [
        'Reprezentacji prawnej w sporach.',
        'Czynności wymagających licencjonowanych pełnomocnictw.',
      ],
    },
    deliverables: [
      'Plan transportu z kalkulacją kosztów.',
      'Checklist dokumentacyjny.',
      'Bieżące statusy realizacji.',
      'Raport z dostawy.',
    ],
    workModel: {
      type: 'Projektowy lub operacyjny (dla stałych wysyłek)',
      duration: 'Zależny od harmonogramu i trasy',
      communication: 'Bieżąca koordynacja mailowa + kontakt operacyjny',
    },
    caseStudy: {
      client: 'Polski importer komponentów przemysłowych.',
      situation: 'Pierwsza wysyłka kontenera z południa Chin; fabryka oferowała warunki EXW bez wsparcia.',
      actions: 'Przejęcie koordynacji eksportu, optymalizacja warunków dostawy, wybór portu skracającego czas tranzytu, organizacja odprawy celnej w Polsce.',
      result: 'Dostawa zgodna z harmonogramem, redukcja kosztów transportu o 12% przy kolejnych wysyłkach.',
    },
  },
  'realizacja-end-to-end': {
    title: 'Kompleksowa realizacja projektu PL ↔ CN (end-to-end)',
    subtitle: 'Import, eksport i zarządzanie łańcuchem dostaw',
    image: serviceStrategy,
    description: 'Pełna koordynacja projektu transgranicznego od analizy strategicznej, przez identyfikację partnerów, negocjacje, nadzór nad produkcją, po organizację transportu i dostawę. Działamy jako "single point of contact" odpowiadający za realizację całego procesu.',
    whenItMakesSense: [
      'Wejście na rynek chiński lub polski od zera.',
      'Uruchomienie produkcji lub sourcingu w nowym sektorze.',
      'Projekt wymagający koordynacji wielu podmiotów.',
      'Joint Venture, dystrybucja wyłączna, projekt inwestycyjny.',
      'Brak lokalnej struktury operacyjnej.',
    ],
    problemsSolved: [
      'Rozproszenie odpowiedzialności między dostawcami usług.',
      'Chaos komunikacyjny i kulturowy.',
      'Brak kontroli nad harmonogramem i budżetem.',
      'Ryzyko, że projekt "utknie" po podpisaniu umowy.',
    ],
    scope: {
      includes: [
        'Analizę strategiczną i ocenę potencjału rynku.',
        'Identyfikację i weryfikację partnerów.',
        'Due diligence i negocjacje warunków.',
        'Koordynację produkcji i kontrolę jakości.',
        'Organizację transportu międzynarodowego.',
        'Nadzór operacyjny na miejscu.',
        'Wsparcie regulacyjne i formalne.',
      ],
      excludes: [
        'Reprezentacji prawnej w sporach.',
        'Czynności wymagających licencjonowanych pełnomocnictw.',
      ],
    },
    deliverables: [
      'Roadmapa projektu (harmonogram + kamienie milowe).',
      'Zintegrowany raport postępu i statusów.',
      'Rekomendacje decyzyjne na kluczowych etapach.',
      'Finalny rezultat operacyjny.',
    ],
    workModel: {
      type: 'Projekt strategiczno-operacyjny',
      duration: '3-9 miesięcy',
      communication: 'Regularne statusy zarządcze + spotkania decyzyjne',
    },
    caseStudy: {
      client: 'Polska firma z branży przemysłowej.',
      situation: 'Plan uruchomienia produkcji komponentów w Chinach i sprzedaży w UE.',
      actions: 'Analiza klastra, wybór regionu, identyfikacja i weryfikacja producenta, negocjacje warunków, nadzór nad pierwszą serią, organizacja transportu.',
      result: 'Uruchomiona linia produkcyjna, stabilny łańcuch dostaw, redukcja kosztów jednostkowych o 18%.',
    },
  },

  // ==========================================
  // KATEGORIA 5: MARKETING I POZYCJONOWANIE RYNKOWE
  // ==========================================
  'pozycjonowanie-marki': {
    title: 'Lokalne pozycjonowanie marki (PL i CN)',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceAnalysis,
    description: 'Pomagamy firmom jasno zdefiniować, jak powinny być postrzegane na rynku Chin lub Polski - zanim zainwestują środki w komunikację, kampanie marketingowe lub działania sprzedażowe. Przekładamy ofertę klienta na język zrozumiały dla lokalnych decydentów, klientów i partnerów biznesowych, uwzględniając realia kulturowe, konkurencyjne oraz sposób podejmowania decyzji.',
    whenItMakesSense: [
      'Wejście na nowy rynek (PL ↔ CN): Firma planuje ekspansję i potrzebuje jasnej odpowiedzi, czy jej obecna oferta jest właściwa dla lokalnych realiów.',
      'Niespójne postrzeganie marki: Produkt jest konkurencyjny, jednak rynek nie rozumie jednoznacznie jego wartości.',
      'Presja decyzyjna Zarządu: Konieczność podjęcia decyzji, z jaką ofertą firma powinna pojawić się na nowym rynku.',
      'Ograniczenie ryzyka kosztowego: Chęć uniknięcia inwestycji w marketing bez solidnie zdefiniowanego pozycjonowania.',
    ],
    problemsSolved: [
      'Brak jednoznacznego pozycjonowania rynkowego: Oferta nie jest czytelna ani wyróżniająca.',
      'Niedopasowanie narracji do rynku: Argumenty skuteczne w jednym kraju nie przekładają się na decyzje w innym.',
    ],
    scope: {
      includes: [
        'Analizę obecnej oferty, komunikacji i sposobu sprzedaży.',
        'Analizę rynku docelowego i konkurencji z perspektywy lokalnej.',
        'Zdefiniowanie propozycji wartości (value proposition).',
        'Rekomendację struktury oferty wejściowej.',
        'Określenie kluczowych wyróżników oraz argumentów decyzyjnych.',
        'Wytyczne dotyczące kierunku brandingu i języka komunikacji.',
      ],
      excludes: [
        'Realizacji kampanii marketingowych.',
        'Operacyjnego prowadzenia kanałów komunikacji.',
        'Działań performance i generowania leadów.',
      ],
    },
    deliverables: [
      'Dokument Pozycjonowania Rynkowego (Positioning Memo): 3-6 stron.',
      'Struktura oferty wejściowej z priorytetami.',
      'Key Messages (PL ↔ CN): zestaw kluczowych argumentów.',
    ],
    workModel: {
      type: 'Projekt jednorazowy',
      duration: '7-14 dni roboczych',
      communication: 'Kontakt mailowy + spotkanie online (Debriefing)',
    },
    caseStudy: {
      client: 'Europejska firma technologiczna (B2B).',
      situation: 'Plan wejścia na rynek chiński z szeroką ofertą produktową.',
      actions: 'Analiza rynku i konkurencji, zawężenie oferty do jednego kluczowego use-case\'u, zmiana narracji z "innowacyjności" na "bezpieczeństwo i kompatybilność systemową".',
      result: 'Firma rozpoczęła rozmowy z lokalnymi partnerami bez kosztownego launchu marketingowego.',
    },
  },
  'strategia-komunikacji': {
    title: 'Strategia komunikacji',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceStrategy,
    description: 'Projektujemy strategię komunikacji, która przekłada pozycjonowanie marki na spójny, kontrolowany przekaz rynkowy - dostosowany do realiów Polski lub Chin. Określamy, co, gdzie i w jakiej kolejności powinno być komunikowane, aby wspierać cele biznesowe.',
    whenItMakesSense: [
      'Po zakończeniu pozycjonowania: Firma wie, jak powinna być postrzegana, ale nie ma jasnego planu komunikacji.',
      'Przed startem działań marketingowych: Konieczność zaprojektowania komunikacji przed uruchomieniem kampanii.',
      'Niska skuteczność dotychczasowej komunikacji: Brak przełożenia widoczności na realne rozmowy biznesowe.',
      'Wejście na nowy rynek medialny: Firma nie zna lokalnych kanałów i formatów.',
    ],
    problemsSolved: [
      'Brak architektury komunikacji: Działania marketingowe są rozproszone i niespójne.',
      'Niedopasowanie kanałów i narracji: Komunikacja nie odpowiada na sposób podejmowania decyzji na danym rynku.',
    ],
    scope: {
      includes: [
        'Określenie celów komunikacyjnych w kontekście celów biznesowych.',
        'Dobór właściwych kanałów komunikacji (PL lub CN).',
        'Zaprojektowanie architektury komunikacji.',
        'Zdefiniowanie filarów komunikacyjnych i kluczowych tematów.',
        'Określenie form i formatów treści.',
        'Ramowy plan komunikacji (roadmapa).',
      ],
      excludes: [
        'Produkcji treści.',
        'Realizacji kampanii marketingowych.',
        'Prowadzenia kanałów komunikacji.',
      ],
    },
    deliverables: [
      'Dokument Strategii Komunikacji: kanały, role, narracje, priorytety.',
      'Mapa kanałów komunikacji (PL ↔ CN).',
      'Filary komunikacyjne i tematy przewodnie.',
      'Roadmapa komunikacyjna.',
    ],
    workModel: {
      type: 'Projekt jednorazowy',
      duration: '7-10 dni roboczych',
      communication: 'Mail + spotkanie online (Debriefing)',
    },
    caseStudy: {
      client: 'Firma przemysłowa B2B (Polska).',
      situation: 'Plan wejścia na rynek chiński bez wcześniejszych działań marketingowych.',
      actions: 'Zaprojektowanie strategii komunikacji opartej na kanałach eksperckich i relacyjnych zamiast masowej reklamy.',
      result: 'Firma uruchomiła pilotażowe działania contentowe i partnerskie zamiast kosztownych kampanii wizerunkowych.',
    },
  },
  'adaptacja-komunikacji': {
    title: 'Adaptacja komunikacji do rynku PL i CN',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceAnalysis,
    description: 'Dostosowujemy komunikację marki do lokalnych realiów kulturowych, językowych i decyzji rynku Polski lub Chin. Nie tłumaczymy treści - lokalizujemy sens, argumentację i akcenty, tak aby komunikacja była zrozumiała, wiarygodna i akceptowalna dla lokalnych odbiorców.',
    whenItMakesSense: [
      'Po zaprojektowaniu strategii komunikacji: Firma wie, co chce komunikować, ale nie wie jak to zrobić lokalnie.',
      'Komunikacja transgraniczna: Materiały przygotowane w jednym kraju są wykorzystywane na drugim rynku bez adaptacji.',
      'Ryzyko wizerunkowe: Obawa o nieadekwatny odbiór kulturowy.',
      'Wejście na nowe platformy: Konieczność dostosowania przekazu do lokalnych mediów.',
    ],
    problemsSolved: [
      'Dosłowne tłumaczenia bez sensu rynkowego: Treści są poprawne językowo, ale nie działają decyzyjnie.',
      'Brak kulturowej wiarygodności: Komunikacja nie buduje zaufania u lokalnych odbiorców.',
    ],
    scope: {
      includes: [
        'Analizę istniejących treści pod kątem rynku docelowego.',
        'Adaptację narracji, argumentów i tonu komunikacji.',
        'Lokalizację komunikacji do platform i formatów.',
        'Dostosowanie komunikacji B2B i B2C do lokalnego stylu.',
        'Rekomendacje zmian w storytellingu.',
        'Wsparcie adaptacyjne dla marek i liderów (personal branding).',
      ],
      excludes: [
        'Prowadzenia kampanii marketingowych.',
        'Stałej obsługi kanałów komunikacji.',
        'Działań performance i zakupu mediów.',
      ],
    },
    deliverables: [
      'Zestaw zlokalizowanych komunikatów (PL ↔ CN).',
      'Wytyczne komunikacyjne dla rynku docelowego.',
      'Rekomendacje platformowe.',
    ],
    workModel: {
      type: 'Projekt jednorazowy lub etap w procesie',
      duration: '5-10 dni roboczych',
      communication: 'Mail + konsultacja online',
    },
    caseStudy: {
      client: 'Europejska firma B2B.',
      situation: 'Wykorzystanie polskich materiałów sprzedażowych na rynku chińskim.',
      actions: 'Adaptacja narracji z argumentów technicznych na argumenty związane z bezpieczeństwem współpracy, stabilnością i referencjami.',
      result: 'Materiały zostały pozytywnie odebrane przez lokalnych partnerów.',
    },
  },
  'materialy-sprzedazowe': {
    title: 'Materiały sprzedażowe i wizerunkowe',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceStrategy,
    description: 'Projektujemy i realizujemy materiały sprzedażowe oraz wizerunkowe, które wspierają realne rozmowy biznesowe i proces decyzyjny na rynku Polski lub Chin. Odpowiadamy zarówno za koncepcję, strukturę i narrację, jak i za produkcję gotowych materiałów.',
    whenItMakesSense: [
      'Rozpoczęcie rozmów handlowych lub partnerskich: Firma potrzebuje gotowych materiałów.',
      'Wejście na nowy rynek (PL ↔ CN): Dotychczasowe materiały nie są adekwatne.',
      'Brak spójności komunikacyjnej: Materiały tworzone ad hoc.',
      'Niska skuteczność sprzedaży: Oferta nie przekłada się na decyzje klientów.',
    ],
    problemsSolved: [
      'Brak profesjonalnych, lokalnie dopasowanych materiałów sprzedażowych.',
      'Rozjazd między strategią a tym, co faktycznie trafia do klienta.',
      'Niespójność wizualna i narracyjna osłabiająca wiarygodność.',
    ],
    scope: {
      includes: [
        'Analizę i uporządkowanie struktury oferty.',
        'Projekt i produkcję materiałów sprzedażowych (sales deck, pitch deck, oferty).',
        'Realizację sesji zdjęciowych i materiałów wideo.',
        'Przygotowanie landing pages oraz stron www.',
        'Copywriting sprzedażowy i wizerunkowy.',
        'Projekt graficzny i UX/UI.',
      ],
      excludes: [
        'Zakupu mediów i kampanii reklamowych.',
        'Prowadzenia działań sprzedażowych.',
      ],
    },
    deliverables: [
      'Gotowe materiały sprzedażowe: prezentacje, oferty, case studies.',
      'Materiały wizerunkowe: zdjęcia, wideo, landing pages.',
      'Zestaw materiałów operacyjnych gotowych do użycia.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '7-28 dni roboczych',
      communication: 'Mail + spotkania robocze online',
    },
    caseStudy: {
      client: 'Firma technologiczna B2B (Europa).',
      situation: 'Brak materiałów sprzedażowych dostosowanych do rozmów z partnerami w Chinach.',
      actions: 'Uporządkowanie struktury oferty, adaptacja argumentacji, realizacja sesji wizerunkowej, produkcja sales decku oraz landing page.',
      result: 'Skrócenie czasu rozmów handlowych i poprawa odbioru marki przez lokalnych partnerów.',
    },
  },
  'wsparcie-marketingowe': {
    title: 'Wsparcie działań marketingowych i pozyskiwania leadów',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceAnalysis,
    description: 'Zapewniamy operacyjną realizację działań marketingowych, które wspierają cele biznesowe firmy na rynku Polski lub Chin. Odpowiadamy za planowanie, uruchamianie i prowadzenie działań marketingowych w oparciu o wcześniej zwalidowaną strategię i komunikację.',
    whenItMakesSense: [
      'Po walidacji rynku (GTM): Decyzja o przejściu z fazy testowej do skalowania.',
      'Brak lokalnego zespołu marketingowego: Firma chce działać operacyjnie bez budowania struktur.',
      'Niska skuteczność dotychczasowych działań: Marketing nie przekłada się na leady.',
      'Potrzeba stałej obecności rynkowej: Konsekwentne budowanie widoczności.',
    ],
    problemsSolved: [
      'Brak skutecznej egzekucji marketingowej: Strategia istnieje, ale nie jest dowożona.',
      'Rozproszone działania: Kanały bez spójnej koordynacji.',
      'Brak kontroli nad kosztami i efektywnością.',
    ],
    scope: {
      includes: [
        'Planowanie i koordynację działań marketingowych.',
        'Prowadzenie kanałów komunikacji (social media, content).',
        'Realizację kampanii marketingowych i performance.',
        'Produkcję treści (copy, grafika, foto, wideo).',
        'Zarządzanie budżetem marketingowym.',
        'Generowanie leadów i zapytań.',
        'Bieżącą optymalizację działań w oparciu o dane.',
      ],
      excludes: [
        'Sprzedaży i negocjacji handlowych.',
        'Doradztwa prawnego i podatkowego.',
      ],
    },
    deliverables: [
      'Aktywne działania marketingowe: kampanie, treści, kanały.',
      'Leady / zapytania rynkowe.',
      'Raporty operacyjne: wyniki, wnioski, rekomendacje.',
      'Rekomendacje skalowania lub korekty budżetu.',
    ],
    workModel: {
      type: 'Współpraca abonamentowa (retainer)',
      duration: 'Minimum 3 miesiące',
      communication: 'Mail + bieżący kontakt + cykliczne statusy',
    },
    caseStudy: {
      client: 'Firma technologiczna (Chiny).',
      situation: 'Wejście na rynek europejski po fazie walidacji.',
      actions: 'Prowadzenie kanałów komunikacji, kampanii leadowych i produkcja contentu sprzedażowego.',
      result: 'Regularny napływ zapytań B2B i stabilna obecność marki na rynku.',
    },
  },

  // ==========================================
  // KATEGORIA 6: MISJE BIZNESOWE I SZKOLENIA
  // ==========================================
  'organizacja-misji': {
    title: 'Organizacja misji biznesowych i technologicznych PL ↔ CN',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceStrategy,
    description: 'To strategicznie zaprojektowana misja decyzyjna dla Zarządów i właścicieli firm, którzy chcą w krótkim czasie zweryfikować realia chińskiego ekosystemu technologii, produkcji i handlu. Budujemy program wokół konkretnego celu (automatyzacja, robotyka, e-commerce, supply chain, AI w produkcji), organizujemy wejścia do firm, parków technologicznych i zakładów.',
    whenItMakesSense: [
      'Pivot strategiczny / CAPEX: Planujesz nową fabrykę lub modernizację i chcesz zobaczyć "state-of-the-art" w praktyce.',
      'Presja konkurencyjna: Potrzebujesz benchmarku kosztów i tempa wdrożeń w Chinach.',
      'Weryfikacja rynku: Rozważasz wejście do Chin i chcesz "poczuć teren".',
      'Targi branżowe bez błądzenia: Jedziesz na targi i potrzebujesz kuratora.',
      'Tech scouting pod wdrożenie: Szukasz konkretnych rozwiązań do porównania.',
    ],
    problemsSolved: [
      'Przełamanie iluzji i stereotypów: Konfrontacja z rzeczywistością kosztów i jakości.',
      'Dostęp i selekcja: Docierasz do miejsc trudnych do zorganizowania samodzielnie.',
      'Efektywność czasowa: W 3-7 dni realizujesz program, który sam składałbyś tygodniami.',
      'Decyzyjność: Misja prowadzi do konkretnych decyzji wdrożeniowych.',
    ],
    scope: {
      includes: [
        'Agenda Curation: Zaprojektowanie programu pod cel strategiczny.',
        'Selekcja i przygotowanie spotkań: Dobór firm, briefy przed wizytami.',
        'Matchmaking B2B: Organizacja rozmów z wybranymi podmiotami.',
        'Facylitacja na miejscu: Tłumacz kontekstu i moderator rozmów.',
        'Debriefing dzienny: Sesje podsumowujące.',
        'Logistyka (koordynacja): Trasa, transfery, timing.',
      ],
      excludes: [
        'Formalnej obsługi wizowej.',
        'Gwarancji dostępu do konkretnych firm.',
        'Reprezentacji prawnej i negocjacji kontraktów.',
      ],
    },
    deliverables: [
      'Zrealizowana misja: program wizyt i spotkań.',
      'Executive Summary (PDF): wnioski, shortlisty, rekomendacje.',
      'Kontakt i follow-up pack: lista kontaktów, drafty wiadomości.',
    ],
    workModel: {
      type: 'Projektowy (management fee + koszty bezpośrednie)',
      duration: '4-6 tygodni przygotowania',
      communication: 'Planowanie + realizacja + follow-up',
    },
    caseStudy: {
      client: 'Zarząd polskiej firmy produkcyjnej (branża meblarska).',
      situation: 'Weryfikacja opłacalności automatyzacji intralogistyki.',
      actions: 'Misja do Jiangsu/Suzhou: wizyty w trzech zakładach z AGV/AMR i automatyzacją; porównanie 3 dostawców.',
      result: 'Zmiana percepcji kosztów, shortlist dostawców, decyzja o pilotażu automatyzacji w Polsce.',
    },
  },
  'matchmaking-b2b': {
    title: 'Aranżacja spotkań B2B i matchmaking partnerów',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceAnalysis,
    description: 'Spotkanie z chińskim partnerem nie jest zwykłą rozmową biznesową - to proces, w którym znaczenie mają hierarchia, kontekst, timing oraz to, co nie zostało powiedziane wprost. Ta usługa łączy aktywny matchmaking partnerów z profesjonalną aranżacją i facylitacją rozmów. Przygotowujemy klienta do rozmowy, moderujemy spotkanie oraz zabezpieczamy ustalenia.',
    whenItMakesSense: [
      'Wchodzisz na nowy rynek i potrzebujesz kontaktu z właściwymi decydentami.',
      'Spotkanie wysokiej stawki: pierwsza wizyta zarządu, negocjacje.',
      'Kryzys komunikacyjny: partner przestaje odpowiadać.',
      'Chcesz zweryfikować, czy "yes" oznacza realną zgodę.',
      'Potrzebujesz neutralnego moderatora zmieniającego dynamikę.',
    ],
    problemsSolved: [
      'Eliminacja "Lost in Translation" - obie strony rozumieją ustalenia tak samo.',
      'Ominięcie bariery hierarchicznej - docieramy do decydentów.',
      'Wzmocnienie pozycji negocjacyjnej.',
      'Ochrona relacyjna - uniknięcie błędów kulturowych.',
    ],
    scope: {
      includes: [
        'Matchmaking partnerów: identyfikacja właściwych osób.',
        'Pre-Meeting Briefing: cele, czerwone linie, scenariusz.',
        'Profilowanie decydentów po stronie partnera.',
        'Live Facilitation: udział w spotkaniu.',
        'Interwencja strategiczna w momentach impasu.',
        'Debriefing poufny + oficjalne Minutes.',
      ],
      excludes: [
        'Tłumaczeń przysięgłych dokumentów prawnych.',
        'Reprezentacji prawnej stron.',
        'Gwarancji zawarcia umowy.',
      ],
    },
    deliverables: [
      'Strategia spotkania (1 strona).',
      'Minutes ze spotkania.',
      'Shadow Report (poufny): interpretacja intencji partnera.',
      'Draft follow-up: gotowa wiadomość domykająca.',
    ],
    workModel: {
      type: 'Sesyjny (per spotkanie) lub projektowy',
      duration: 'Zależny od liczby spotkań',
      communication: 'Briefing startowy + debriefing po spotkaniu',
    },
    caseStudy: {
      client: 'Polska firma IT negocjująca kontrakt z chińskim dostawcą hardware\'u.',
      situation: 'Strona chińska unikała rozmów o karach umownych.',
      actions: 'Zmieniono ramę rozmowy z "kar" na "mechanizmy jakościowe i bonusy za terminowość".',
      result: 'Odblokowanie negocjacji i podpisanie MoU w ciągu dwóch tygodni.',
    },
  },
  'szkolenia-system': {
    title: 'Szkolenia z systemu gospodarczego Chin',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceStrategy,
    description: 'Chiny nie są gospodarką wolnorynkową w zachodnim rozumieniu, ale nie są też klasyczną gospodarką nakazową. To system hybrydowy: kapitalizm państwowy sterowany politycznie. Ta usługa to dekodowanie "systemu operacyjnego" Chin dla właścicieli firm, zarządów i decydentów. Wyjaśniamy, jak interpretować doktryny i dokumenty polityczne w kontekście realnych przepływów kapitału i regulacji.',
    whenItMakesSense: [
      'Planowanie strategiczne: Tworzysz strategię na 3-5 lat i musisz wiedzieć, jakie sektory Pekin wspiera.',
      'Szok regulacyjny: Twoja branża nagle wpada w turbulencje i chcesz zrozumieć mechanizm.',
      'Inwestycje i JV: Musisz ocenić stabilność sektora z perspektywy politycznej.',
      'Edukacja Zarządu: Chcesz wyjść poza nagłówki i zrozumieć system.',
    ],
    problemsSolved: [
      'Eliminacja ślepoty strategicznej: Zrozumienie, że w Chinach polityka ma pierwszeństwo przed ekonomią.',
      'Zwiększenie przewidywalności: Umiejętność czytania sygnałów ostrzegawczych.',
      'Kontekst decyzyjny: Zrozumienie logiki decyzji partnera.',
    ],
    scope: {
      includes: [
        'Mapa Systemu: Relacja Partia-Rząd, rola SOE, mechanizmy kontroli.',
        'Policy Deep Dive: Dual Circulation, Common Prosperity, New Productive Forces.',
        'Risk Radar: "Czerwone Linie" - bezpieczeństwo danych, technologie, ESG.',
        'Geografia Gospodarcza: Różnice między regionami.',
        'Q&A Executive: Przełożenie makro na mikro.',
      ],
      excludes: [
        'Doradztwa prawnego.',
        'Analizy pojedynczych projektów.',
      ],
    },
    deliverables: [
      'Szkolenie Executive (3-4h): Zamknięta sesja dla Zarządu.',
      'System Brief (PDF): Synteza kluczowych pojęć i trendów.',
      'Rekomendacja sektorowa: Kwalifikacja branży klienta.',
    ],
    workModel: {
      type: 'Zamknięty warsztat strategiczny',
      duration: '3-4 godziny (+ przygotowanie)',
      communication: 'Sesja stacjonarna lub online',
    },
    caseStudy: {
      client: 'Polski fundusz inwestycyjny.',
      situation: 'Fundusz analizował wejście kapitałowe w chiński sektor EdTech.',
      actions: 'Analiza doktryny Common Prosperity i dokumentów dotyczących edukacji prywatnej. Identyfikacja ryzyka systemowego. Rekomendacja wstrzymania inwestycji.',
      result: 'Fundusz nie zrealizował inwestycji. Kilka miesięcy później wprowadzono Double Reduction Policy. Klient uniknął znaczącej ekspozycji kapitałowej.',
    },
  },
  'szkolenia-kultura': {
    title: 'Szkolenia z kultury biznesowej i negocjacji',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceAnalysis,
    description: 'Praktyczne szkolenia przygotowujące zespoły do efektywnej współpracy z chińskimi partnerami. Nie teoria kulturoznawcza, lecz konkretne narzędzia: jak prowadzić rozmowy, jak interpretować sygnały, jak budować relacje (Guanxi), jak unikać błędów kulturowych, które mogą zamknąć projekt.',
    whenItMakesSense: [
      'Przed pierwszą wizytą w Chinach lub przyjmując delegację chińską.',
      'Przy rozpoczęciu współpracy z nowym chińskim partnerem.',
      'Gdy pojawiają się nieporozumienia kulturowe w bieżącej współpracy.',
      'Przed ważnymi negocjacjami.',
    ],
    problemsSolved: [
      'Brak zrozumienia kodu kulturowego prowadzący do błędów i utraty twarzy.',
      'Nieefektywne negocjacje wynikające z nieznajomości chińskiego stylu.',
      'Frustracja zespołu w komunikacji z chińskimi partnerami.',
    ],
    scope: {
      includes: [
        'Podstawy kultury biznesowej Chin.',
        'Guanxi: budowanie i utrzymywanie relacji.',
        'Mianzi: twarz i jej znaczenie w negocjacjach.',
        'Praktyczne scenariusze negocjacyjne.',
        'Komunikacja werbalna i niewerbalna.',
        'Błędy kulturowe do unikania.',
      ],
      excludes: [
        'Nauki języka chińskiego.',
        'Doradztwa strategicznego.',
      ],
    },
    deliverables: [
      'Szkolenie warsztatowe (4-6h): Interaktywna sesja z ćwiczeniami.',
      'Materiały szkoleniowe (PDF): Ściąga kulturowa dla uczestników.',
      'Checklista przed spotkaniem z chińskim partnerem.',
    ],
    workModel: {
      type: 'Warsztat szkoleniowy',
      duration: '4-6 godzin',
      communication: 'Sesja stacjonarna lub online',
    },
    caseStudy: {
      client: 'Polski producent maszyn.',
      situation: 'Zespół handlowy przygotowywał się do wizyty chińskiej delegacji i pierwszych negocjacji.',
      actions: 'Przeprowadzono szkolenie z kultury biznesowej i symulacje negocjacyjne. Przygotowano zespół na typowe taktyki i oczekiwania.',
      result: 'Spotkanie przebiegło sprawnie, zespół unikał błędów kulturowych, a relacja z delegacją została pozytywnie oceniona przez obie strony.',
    },
  },
};

// Slug mapping for URL routing
export const serviceSlugMap: Record<string, string> = {
  // Kategoria 1
  'analiza-wplywu-chin-na-firme-lub-sektor': 'analiza-wplywu',
  'decyzje-wejscia-wspolpracy-skalowania-lub-ograniczenia-ekspozycji': 'decyzje-wejscia',
  'briefingi-decyzyjne-dla-zarzadow': 'briefingi-decyzyjne',
  // Kategoria 2
  'analizy-sektorow-klastrow-przemyslowych-i-konkurencji': 'analizy-sektorow',
  'analiza-regulacyjna-i-barier-wejscia': 'analiza-regulacyjna',
  'weryfikacja-kontrahenta-desktop-check': 'weryfikacja-kontrahenta',
  'rozszerzona-weryfikacja-partnera-due-diligence': 'due-diligence',
  // Kategoria 3
  'wybor-modelu-wejscia-na-rynek': 'wybor-modelu',
  'wsparcie-formalne-i-regulacyjne': 'wsparcie-formalne',
  'identyfikacja-i-selekcja-partnerow': 'identyfikacja-partnerow',
  'wsparcie-negocjacyjne-i-relacyjne': 'wsparcie-negocjacyjne',
  'przygotowanie-struktur-handlowych-lub-partnerskich': 'przygotowanie-struktur',
  // Kategoria 4
  'audyty-i-weryfikacja-dostawcow-on-site': 'audyty-dostawcow',
  'projektowanie-i-optymalizacja-lancucha-dostaw': 'optymalizacja-lancucha',
  'nadzor-produkcji-oraz-kontrola-jakosci': 'nadzor-produkcji',
  'organizacja-transportu-miedzynarodowego': 'organizacja-transportu',
  'kompleksowa-realizacja-projektu-pl-cn-end-to-end': 'realizacja-end-to-end',
  // Kategoria 5
  'lokalne-pozycjonowanie-marki-pl-i-cn': 'pozycjonowanie-marki',
  'strategia-komunikacji': 'strategia-komunikacji',
  'adaptacja-komunikacji-do-rynku-pl-i-cn': 'adaptacja-komunikacji',
  'materialy-sprzedazowe-i-wizerunkowe': 'materialy-sprzedazowe',
  'wsparcie-dzialan-marketingowych-i-pozyskiwania-leadow': 'wsparcie-marketingowe',
  // Kategoria 6
  'organizacja-misji-biznesowych-i-technologicznych-pl-cn': 'organizacja-misji',
  'aranzacja-spotkan-b2b-i-matchmaking-partnerow': 'matchmaking-b2b',
  'szkolenia-z-systemu-gospodarczego-chin': 'szkolenia-system',
  'szkolenia-z-kultury-biznesowej-i-negocjacji': 'szkolenia-kultura',
};

// Default data for services not yet defined
export const defaultServiceData: ServiceData = {
  title: 'Usługa',
  subtitle: 'Wsparcie biznesowe',
  image: serviceAnalysis,
  description: 'Kompleksowe wsparcie w relacjach biznesowych na linii Polska-Chiny.',
  whenItMakesSense: [
    'Planowanie wejścia na rynek chiński',
    'Weryfikacja potencjalnych partnerów',
    'Optymalizacja istniejącej współpracy',
  ],
  problemsSolved: [
    'Minimalizacja ryzyka biznesowego',
    'Weryfikacja wiarygodności partnerów',
  ],
  scope: {
    includes: [
      'Analiza rynku i konkurencji',
      'Weryfikacja partnerów',
      'Raport z rekomendacjami',
    ],
    excludes: [
      'Doradztwo prawne i podatkowe',
      'Bezpośrednie negocjacje',
    ],
  },
  deliverables: [
    'Raport analityczny',
    'Konsultacja online',
  ],
  workModel: {
    type: 'Projekt jednorazowy',
    duration: 'do 14 dni roboczych',
    communication: 'Mail + spotkanie wideo',
  },
  caseStudy: {
    client: 'Firma produkcyjna (Polska)',
    situation: 'Poszukiwanie niezawodnego dostawcy komponentów z Chin.',
    actions: 'Przeprowadzono weryfikację potencjalnych dostawców i analizę rynku.',
    result: 'Wybrano optymalnego partnera, unikając potencjalnych problemów jakościowych.',
  },
};
