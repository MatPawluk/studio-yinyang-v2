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
        'Weryfikacja Polityczna: Sprawdzenie, czy dany sektor jest wspierany przez rząd (szansa na niższe ceny/dotacje), czy ograniczany regulacjami (ryzyko) - na podstawie dokumentów planistycznych (np. plany 5-letnie).',
        'Mapa Graczy: Identyfikacja kluczowych producentów i technologii w danym regionie (weryfikacja wiarygodności poza portalem Alibaba).',
        'Analiza Ryzyka: Sprawdzenie opinii o podmiotach w chińskim internecie przemysłowym (bazy niedostępne po angielsku).',
        'Kompleksowa analiza rynku, technologii, procesów oraz kluczowych ryzyk i szans rozwojowych.',
        'Syntetyczny przegląd sektora (strategiczny overview).',
        'Wstępna ocena ryzyka inwestycyjnego i operacyjnego (de-risking).',
        'Analiza realizowana w oparciu o źródła lokalne i desk research (bez wizyt terenowych).',
      ],
      excludes: [
        'Fizycznych wizyt w fabrykach i audytów technicznych na miejscu.',
        'Bezpośrednich negocjacji handlowych i zakupów.',
        'Doradztwa prawnego i podatkowego.',
      ],
    },
    deliverables: [
      'Raport Zarządczy (Executive Memo): Dokument PDF (3-5 stron kluczowych wniosków + załączniki analityczne). Skupiony na faktach, liczbach i rekomendacjach, bez zbędnej teorii.',
      'Omówienie Wniosków (Debriefing Call): 45-minutowa konsultacja online. Możliwość zadania pytań i omówienia dalszych kroków "na żywo".',
    ],
    workModel: {
      type: 'Projekt jednorazowy - analiza konkretnego sektora lub Model abonamentowy - cykliczne aktualizacje sektora / monitoring regulacyjny',
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
      'Eliminacja "ślepych punktów": Zdejmuje ryzyko operacyjne i polityczne z decyzji o alokacji kapitału w relacje z Chinami (zarówno w modelu importu technologii, jak i eksportu).',
      'Oszczędność Zasobów: Zapobiega wchodzeniu w "toksyczne" partnerstwa lub inwestowaniu w technologie, które nie będą wspierane (brak części, brak serwisu).',
    ],
    scope: {
      includes: [
        'Analiza Potencjału Partnera/Technologii: Weryfikacja pozycji rynkowej i technologicznej chińskiego podmiotu (czy to producent, czy pośrednik; czy technologia jest "żywa", czy wygaszana).',
        'Sektorowy Deep Dive: Kondycja branży w Chinach + Trendy.',
        'Analiza "Policy vs Reality": Zestawienie planów współpracy z dokumentami strategicznymi KPCh. Sprawdzamy, czy Wasz model współpracy jest zgodny z długoterminową wizją Pekinu.',
        'Ocena Ryzyka Partnerstwa: Wstępna ocena kontekstu operacyjnego i sygnałów ryzyka po stronie partnera (na podstawie źródeł publicznych).',
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
      type: 'Projekt jednorazowy lub Model abonamentowy - monitoring sektora / aktualizacje regulacyjne',
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
  'scenariusze-strategiczne': {
    title: 'Scenariusze strategiczne i mapy ryzyk',
    subtitle: 'Strategia wobec Chin',
    image: serviceStrategy,
    description: 'Tworzymy scenariusze strategiczne dla firm z istotną ekspozycją na Chiny, które muszą podejmować decyzje w warunkach wysokiej niepewności. Zamiast reagować na kryzysy po fakcie, porządkujemy ryzyka geopolityczne, regulacyjne i operacyjne, projektując możliwe warianty rozwoju sytuacji - od bazowych po krytyczne. Usługa dostarcza Zarządowi "mapę pól ryzyk" oraz zestaw działań osłonowych (Plan B), które można uruchomić w momencie zmiany warunków. Celem jest utrzymanie ciągłości biznesowej i zdolności decyzyjnej w środowisku, w którym relacje z Chinami podlegają szybkim i nie zawsze przewidywalnym zmianom.',
    whenItMakesSense: [
      'Wysoka ekspozycja na Chiny: Ponad 30-40% kosztów, obrotu lub kluczowych komponentów zależy od relacji PL-CN.',
      'Niepewność geopolityczna: Firma chce zrozumieć konsekwencje napięć wokół Tajwanu, ceł UE, kontroli eksportowych lub zakłóceń w logistyce morskiej.',
      'Planowanie długoterminowe (3-5 lat): Strategia rozwoju wymaga uwzględnienia ryzyk makroekonomicznych (demografia Chin, polityka "Dual Circulation", zmiany regulacyjne).',
      'Presja Rady Nadzorczej / Inwestorów: Konieczne jest profesjonalne, udokumentowane "risk assessment" przed decyzją inwestycyjną lub zmianą modelu biznesowego.',
    ],
    problemsSolved: [
      'Redukcja paraliżu decyzyjnego: Zamienia niepewność i ogólnikowe obawy w konkretne scenariusze i procedury działania.',
      'Business Continuity: Identyfikuje "single points of failure" w łańcuchu dostaw i relacjach z Chinami, umożliwiając wcześniejsze przygotowanie alternatyw.',
    ],
    scope: {
      includes: [
        'Identyfikację ryzyk systemowych: cła, regulacje ChRL, logistyka, polityka przemysłowa, ograniczenia eksportowe, czynniki demograficzne.',
        'Budowę scenariuszy: scenariusz bazowy, scenariusz negatywny (np. eskalacja wojny handlowej), scenariusz krytyczny ("czarny łabędź" - nagłe zamrożenie relacji lub zerwanie ciągłości dostaw).',
        'Stress-test relacji z Chinami: Symulacja wpływu scenariuszy na działalność klienta w oparciu o dane przekazane przez firmę lub - przy ich braku - w wariancie uproszczonym.',
        'Rekomendacje mitygacyjne (Plan B): Działania osłonowe: dywersyfikacja portów i tras, bufory magazynowe, alternatywne kierunki sourcingu, zmiany modelu współpracy.',
      ],
      excludes: [
        'Hedgingu finansowego/ubezpieczeń.',
        'Obsługi prawnej compliance.',
        'Negocjacji lub wdrożeń operacyjnych po stronie klienta.',
      ],
    },
    deliverables: [
      'Raport Scenariuszowy (PDF): Macierz ryzyk (Risk Matrix / Heatmap) + opis scenariuszy i ich konsekwencji operacyjnych oraz finansowych.',
      'Plan B / Action Plan: Lista działań i progów decyzyjnych do uruchomienia w przypadku materializacji ryzyk.',
      'Debriefing / Warsztat (opcjonalnie): Omówienie wniosków z Zarządem lub zespołem strategicznym.',
    ],
    workModel: {
      type: 'Projektowy (Sprint Strategiczny)',
      duration: '10-14 dni roboczych',
      communication: 'Spotkanie startowe online + raport końcowy + debriefing',
    },
    caseStudy: {
      client: 'Duży dystrybutor elektroniki użytkowej (Polska).',
      situation: '100% dostaw z regionu Shenzhen. Obawa przed eskalacją napięć geopolitycznych i nowymi cłami UE.',
      actions: 'Opracowano scenariusz negatywny i krytyczny. Zidentyfikowano ryzyko koncentracji logistycznej oraz brak alternatywnych punktów wyjścia poza południowe Chiny. Przeprowadzono stress-test modelu dostaw.',
      result: 'Klient uruchomił wariant backup (hub w Wietnamie) oraz zwiększył bufory magazynowe dla kluczowych komponentów.',
    },
  },
  'briefingi-decyzyjne': {
    title: 'Briefingi decyzyjne dla zarządów',
    subtitle: 'Strategia wobec Chin',
    image: serviceStrategy,
    description: 'Dedykowane sesje strategiczne lub zwięzłe materiały analityczne (Board Memo), przygotowane specjalnie pod kątem posiedzeń Zarządów i Rad Nadzorczych. Tłumaczymy skomplikowane makroekonomiczne i technologiczne sygnały z Chin na język konkretnych ryzyk i szans dla Twojej spółki. Usługa służy szybkiemu wyrównaniu poziomu wiedzy decydentów (alignment), obaleniu mitów i dostarczeniu niezależnej, zewnętrznej perspektywy przed kluczowymi głosowaniami.',
    whenItMakesSense: [
      'Brak Spójności w Zarządzie: Część decydentów opowiada się za współpracą z Chinami, część jest sceptyczna. Potrzebna jest zewnętrzna perspektywa oparta na danych.',
      'Przygotowanie do Strategii Rocznej: Musicie uwzględnić czynnik chiński (konkurencję lub dostawy) w planach budżetowych, ale brakuje Wam świeżych danych.',
      'Onboarding Decydentów: Nowy członek Zarządu lub Rady Nadzorczej potrzebuje szybkiego wdrożenia w specyfikę azjatycką firmy.',
      'Nagła Zmiana Rynkowa: Wprowadzono nowe cła, regulacje lub wybuchł kryzys medialny - potrzebujecie pigułki wiedzy "co to dla nas znaczy" w ciągu 48h.',
    ],
    problemsSolved: [
      'Eliminacja Szumu Informacyjnego: Zarząd nie ma czasu czytać raportów. Dostaje esencję potrzebną do podjęcia uchwały.',
      'Obiektywizacja Dyskusji: Przenosi rozmowę z poziomu emocji ("Chiny są groźne/wspaniałe") na poziom faktów ("Chiny produkują to o 30% taniej").',
      'Przyspieszenie decyzji: Skraca proces decyzyjny poprzez dostarczenie wspólnej bazy faktów.',
    ],
    scope: {
      includes: [
        'Synteza Tematyczna: Opracowanie jednego, wąskiego zagadnienia (np. "Wpływ automatyzacji w Chinach na naszą marżę").',
        'Q&A Session: Odpowiedzi na pytania Zarządu w trybie "ognia pytań" (Challenge Session).',
        'Prezentację dla Zarządu: Maks. 10 slajdów z kluczowymi danymi i wnioskami.',
        'Board Memo (1-3 strony): Skondensowany dokument "do kawy" przed spotkaniem (Executive Summary).',
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
      duration: 'Krótki cykl przygotowawczy (3-5 dni) + Spotkanie',
      communication: 'Dostarczenie materiałów + Spotkanie wideo/osobiste (Warszawa/Szanghaj)',
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
    description: 'To kompleksowa analiza struktury rynku i jego kluczowych graczy w Chinach. Łączymy mapowanie klastrów przemysłowych z pogłębionym badaniem konkurencji - zarówno lokalnej, jak i międzynarodowej. Identyfikujemy rzeczywiste centra produkcji w danym sektorze (np. Shenzhen - elektronika, Foshan - meble, Guzhen - oświetlenie), analizujemy lokalny ekosystem dostawców i łańcuch wartości oraz wskazujemy regiony, w których technologia jest najbardziej rozwinięta, a koszty najbardziej efektywne. Równolegle analizujemy konkurencję: strategie cenowe, kanały sprzedaży, komunikację marketingową, opinie klientów oraz źródła przewagi (technologia, skala, efektywność operacyjna, wsparcie publiczne). Efektem jest decyzja sourcingowa i rynkowa oparta na realnej strukturze rynku, a nie na deklaracjach dostawców czy marketingu konkurencji.',
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
      'Ogranicza ryzyko błędnej alokacji kapitału w produkt, który na rynku chińskim nie posiada realnej unikalności.',
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
        'Testów fizycznych produktów (realizowane jako osobne usługi).',
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
      actions: 'Przeprowadzono analizę klastrów przemysłowych i konkurencji. Wykazano, że: centrum produkcji LED znajduje się w Guzhen, a nie w Pekinie, w Chinach funkcjonuje ponad 30 marek oferujących podobne kosmetyki w niższym segmencie cenowym.',
      result: 'Bezpośrednie nawiązanie relacji z producentem obniżyło koszty o 22%. W drugim przypadku zarekomendowano pivot pozycjonowania zamiast wejścia w konkurencję cenową.',
    },
  },
  'analiza-regulacyjna': {
    title: 'Analiza regulacyjna i barier wejścia',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceStrategy,
    description: 'To kompleksowa ocena możliwości wejścia na rynek chiński - z perspektywy regulacyjnej, rynkowej i operacyjnej. Chiński rynek jest w dużej mierze sterowany instytucjonalnie - o powodzeniu decyduje nie tylko produkt, ale zgodność z reżimem regulacyjnym oraz realne dopasowanie do lokalnego popytu. Identyfikujemy właściwe instytucje nadzorcze dla Twojej branży, kluczowe licencje i standardy (np. GB), ograniczenia inwestycyjne (m.in. "Negative List"), a także weryfikujemy, czy Twój model wejścia jest możliwy w praktyce. Równolegle analizujemy realny popyt, wrażliwość cenową, trendy konsumenckie (m.in. Guochao, livestream commerce) oraz mechanizmy sprzedaży w danej kategorii. Efektem jest decyzja kierunkowa: wejść, adaptować model, testować pilotażowo czy wstrzymać projekt - zanim firma zaangażuje kapitał w formalne procedury, logistykę i marketing.',
    whenItMakesSense: [
      'Planujesz eksport lub sprzedaż cross-border i chcesz wiedzieć, czy produkt ma realne szanse powodzenia.',
      'Działasz w sektorze regulowanym (żywność, kosmetyki, med-tech, suplementy, wybrane urządzenia).',
      'Planujesz inwestycję bezpośrednią (WFOE / JV / zakład) i musisz rozumieć ograniczenia sektorowe.',
      'Sprzedaż w Chinach spada i potrzebujesz diagnozy: trend, cena, kanał, dystrybutor, pozycjonowanie.',
      'Słyszysz, że "w Chinach wszyscy kupują X" i chcesz odróżnić trwały trend od chwilowej fali.',
    ],
    problemsSolved: [
      'Ogranicza ryzyko kosztownych błędów formalnych i zatrzymania towaru.',
      'Pokazuje realne bariery wejścia zanim staną się blokadą operacyjną.',
      'Ujawnia różnicę między prawem "na papierze" (de jure) a praktyką egzekwowania (de facto).',
      'Chroni przed inwestycją w produkt bez dopasowania rynkowego.',
    ],
    scope: {
      includes: [
        'Mapowanie instytucji i reżimu nadzoru (np. SAMR, NMPA, GACC, MIIT - zależnie od branży).',
        'Compliance checklist: standardy, normy (GB), certyfikaty, wymogi etykietowania i importowe.',
        'Analizę "Negative List" i ograniczeń kapitałowych.',
        'Analizę popytu i klienta (Customer Avatar): kto kupuje, gdzie i jak podejmuje decyzję.',
        'Analizę trendów i narracji sprzedażowych w danej kategorii.',
        'Competitive pricing scan: poziomy cen, segmentacja i pozycjonowanie konkurencji.',
        'Wstępną mapę barier regulacyjnych i operacyjnych.',
      ],
      excludes: [
        'Reprezentacji prawnej, składania wniosków i licencji.',
        'Rejestracji znaków towarowych.',
        'Lobbingu politycznego.',
        'Prowadzenia kampanii marketingowych.',
      ],
    },
    deliverables: [
      'Raport "Market & Regulatory Entry Assessment" (PDF): analiza potencjału wejścia + system "go / adapt / pilot / stop".',
      'Roadmapa wejścia: lista wymogów formalnych, zależności czasowych i ryzyk (na poziomie planistycznym).',
      'Rekomendacja pozycjonowania i ceny: sugerowany segment i kierunek komunikacji.',
      'Debriefing call: 45-60 min omówienia wniosków i decyzji "co dalej".',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'E-mail + spotkanie podsumowujące',
    },
    caseStudy: {
      client: 'Producent suplementów diety oraz producent zdrowych batonów (Polska).',
      situation: 'Plan wejścia na rynek z komunikacją opartą na "tradycyjnej recepturze" oraz składnikiem popularnym w UE.',
      actions: 'Przeprowadzono analizę regulacyjną i rynkową. Zidentyfikowano brak składnika na listach dopuszczeń, wysoką barierę czasowo-kosztową rejestracji oraz rozbieżność między komunikacją produktu a trendami funkcjonalnymi w Chinach.',
      result: 'Rezygnacja z "general trade" i start przez CBEC jako kanał testowy. Adaptacja komunikacji i opakowań. Rozpoczęcie ścieżki formalnej przed logistyką, co pozwoliło uniknąć zatrzymania kontenera.',
    },
  },
  'weryfikacja-kontrahenta': {
    title: 'Weryfikacja kontrahenta (Desktop Check)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceAnalysis,
    description: 'Podstawowy pakiet bezpieczeństwa przed nawiązaniem relacji handlowej z potencjalnym partnerem. Usługa pozwala zweryfikować, czy potencjalny kontrahent faktycznie istnieje, prowadzi deklarowaną działalność i posiada realne zaplecze operacyjne. Sprawdzamy, czy "producent" nie jest w rzeczywistości firmą handlową (Trading Company), czy dane rejestrowe są spójne oraz czy podmiot nie figuruje w rejestrach sporów i ostrzeżeń. Celem jest szybkie oddzielenie wiarygodnych partnerów od podmiotów wysokiego ryzyka, zanim dojdzie do transferu środków lub podpisania umowy.',
    whenItMakesSense: [
      'Nowy Dostawca: Znaleźliście firmę na targach, portalu B2B lub przez polecenie i chcecie sprawdzić jej legalność przed pierwszym zamówieniem.',
      'Podejrzenie Pośrednictwa: Ceny są wysokie, komunikacja niejasna, a "fabryka" unika rozmów o produkcji - potrzebujecie potwierdzić, czy to producent, czy trading.',
      'Duża Zaliczka: Planujecie wpłatę istotnej kwoty i chcecie upewnić się, że konto bankowe należy do realnego, stabilnego podmiotu.',
      'Europejski Pośrednik: Firma w UE twierdzi, że ma wyłączność na markę lub technologię z Chin - weryfikujemy to u źródła.',
    ],
    problemsSolved: [
      'Ochrona Kapitału: Eliminuje ryzyko współpracy z firmami-wydmuszkami, oszustami lub podmiotami bez zaplecza operacyjnego.',
      'Ochrona Marży: Ujawnia pośredników podszywających się pod producentów, umożliwiając dotarcie do faktycznego źródła produkcji.',
    ],
    scope: {
      includes: [
        'Weryfikacja Rejestrowa (Chiny): Sprawdzenie licencji biznesowej (AIC), kapitału zakładowego, reprezentacji prawnej i zakresu działalności.',
        'Factory vs Trading Check: Analiza Business Scope - czy firma ma prawo produkować, czy wyłącznie handlować.',
        'Historia Prawna i Red Flags: Sprawdzenie sporów sądowych, postępowań administracyjnych i sygnałów ostrzegawczych.',
        'Raport weryfikacyjny dla jednego podmiotu + tłumaczenie kluczowych dokumentów rejestrowych.',
      ],
      excludes: [
        'Pełnego audytu finansowego.',
        'Wywiadu środowiskowego offline.',
        'Badań technicznych produktów.',
        'Wizyty w fabryce.',
      ],
    },
    deliverables: [
      'Raport Weryfikacyjny (PDF): Karta podmiotu z oceną wiarygodności (Risk Score) oraz jasną rekomendacją: Bezpieczny / Podwyższone Ryzyko / Wysokie Ryzyko.',
      'Załączniki Dowodowe: Skany dokumentów rejestrowych z tłumaczeniem kluczowych pozycji.',
    ],
    workModel: {
      type: 'Jednorazowy (per podmiot)',
      duration: '3-5 dni roboczych',
      communication: 'Email (raport + rekomendacja) + opcjonalny 30-minutowy call wyjaśniający',
    },
    caseStudy: {
      client: 'Polska hurtownia zabawek.',
      situation: 'Atrakcyjna oferta "producenta" pluszaków znaleziona na Alibaba. Profesjonalna strona, zdjęcia dużej hali produkcyjnej.',
      actions: 'Weryfikacja wykazała kapitał zakładowy 10 000 RMB, rejestrację w biurowcu oraz zakres działalności "Consulting & Trade". Zdjęcia fabryki pochodziły z banku stockowego.',
      result: 'Klient nie wpłacił zaliczki 50 tys. USD. Yin Yang wskazało realną fabrykę w regionie Yangzhou (kapitał 5 mln RMB), produkującą ten sam asortyment 10% taniej - bez pośrednika.',
    },
  },
  'due-diligence': {
    title: 'Rozszerzona weryfikacja partnera (Due Diligence)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: serviceStrategy,
    description: 'To pogłębione Due Diligence dla relacji o wysokiej stawce kapitałowej i operacyjnej. Gdy w grę wchodzą kontrakty strategiczne, wyłączności, Joint Venture, inwestycje kapitałowe lub uzależnienie operacyjne od jednego partnera, standardowe "sprawdzenie rejestru" nie wystarcza. Prowadzimy wielowymiarową weryfikację partnerów biznesowych, technologicznych i dostawców - obejmującą historię sporów sądowych, reputację branżową, strukturę powiązań właścicielskich oraz sygnały ryzyka operacyjnego i finansowego (w zakresie możliwym w realiach Chin). Celem jest wykrycie ukrytych zobowiązań, konfliktów interesów i red flags, które mogą zablokować projekt po podpisaniu umowy.',
    whenItMakesSense: [
      'Planujesz Joint Venture lub spółkę celową i musisz potwierdzić wiarygodność partnera.',
      'Podpisujesz wieloletnią wyłączność z karami umownymi.',
      'Rozważasz inwestycję kapitałową lub przejęcie udziałów w chińskim podmiocie.',
      'Uzależniasz produkcję od jednego dostawcy komponentów.',
      'Wchodzisz we współpracę technologiczną i udostępniasz know-how.',
    ],
    problemsSolved: [
      'Chroni przed "toksycznym partnerem" - zadłużonym, niestabilnym lub obciążonym sporami.',
      'Ujawnia ukryte ryzyka strukturalne i powiązania właścicielskie.',
      'Daje przewagę negocjacyjną przy ustalaniu zabezpieczeń umownych.',
      'Ogranicza ryzyko utraty kapitału, reputacji i ciągłości operacyjnej.',
    ],
    scope: {
      includes: [
        'Analiza sporów i ryzyk prawnych (bazy sądowe, postępowania egzekucyjne, sygnały administracyjne).',
        'Analiza finansowa (zakres ograniczony do dostępnych danych): kapitał, ratingi, obroty, wskaźniki wiarygodności, sygnały płynności.',
        'Reputation check: media branżowe, źródła środowiskowe, powtarzalne skargi, czarne listy.',
        'Mapowanie powiązań właścicielskich i struktury grupy kapitałowej.',
        'Identyfikacja ryzyk typu "shell companies" i konfliktów interesów.',
        'Raport Due Diligence (20-30 stron) + mapę powiązań.',
      ],
      excludes: [
        'Forensic accounting (wgląd w księgi).',
        'Formalnej wyceny przedsiębiorstwa.',
        'Reprezentacji prawnej przed urzędami.',
      ],
    },
    deliverables: [
      'Raport Due Diligence (PDF): ocena ryzyka współpracy w modelu Traffic Light (green / yellow / red) + rekomendacje zabezpieczeń.',
      'Wykaz Red Flags: lista zidentyfikowanych nieprawidłowości oraz punktów wymagających doprecyzowania w umowie.',
      'Debriefing call: omówienie wniosków i konsekwencji negocjacyjnych.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-15 dni roboczych',
      communication: 'Statusy mailowe + prezentacja wyników (call)',
    },
    caseStudy: {
      client: 'Polska firma z branży OZE (fotowoltaika).',
      situation: 'Plan Joint Venture z chińskim producentem inwerterów oraz montownia w Polsce.',
      actions: 'Wykryto liczne otwarte spory o niezapłacone faktury, sygnały egzekucyjne oraz red flags dotyczące osób zarządzających (wpisy na listach dłużników).',
      result: 'Klient przerwał negocjacje i uniknął inwestycji rzędu kilku mln PLN. Następnie wskazano alternatywny, stabilniejszy podmiot do dalszych rozmów.',
    },
  },

  // ==========================================
  // KATEGORIA 3: WEJŚCIE NA RYNEK POLSKA ↔ CHINY
  // ==========================================
  'wybor-modelu': {
    title: 'Wybór modelu wejścia na rynek',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceAnalysis,
    description: 'To fundament każdej ekspansji na rynek chiński. Zamiast kosztownych eksperymentów, projektujemy precyzyjny model wejścia dopasowany do Twojego produktu, branży i apetytu na ryzyko. Traktujemy Chiny nie jako jeden rynek, lecz system złożony z regionów, kanałów i odmiennych zachowań konsumenckich. Odpowiadamy na trzy kluczowe pytania strategiczne: jak wejść (dystrybutor, CBEC, WFOE, JV, TP), gdzie wejść (Tier 1 vs Tier 2/3, regiony specjalizacji), czy i jak lokalizować produkt, aby wygrać z konkurencją lokalną.',
    whenItMakesSense: [
      'Plan Eksportowy: Masz sprawdzony produkt w Polsce (FMCG, kosmetyki, IT, hardware) i rozważasz sprzedaż w Chinach, ale bariera wejścia jest niejasna.',
      'Wybór Kanału: Stoisz przed dylematem: kosztowna rejestracja (NMPA/GACC, retail) czy szybsza ścieżka Cross-Border E-Commerce (CBEC).',
      'Pivot Strategiczny: Jesteś już w Chinach, ale sprzedaż nie rośnie - chcesz zweryfikować, czy model (np. wyłączny dystrybutor) nie blokuje skalowania.',
      'Poszukiwanie Niszy: Chcesz wiedzieć, w których miastach i segmentach popyt jest realny, a konkurencja możliwa do pokonania.',
    ],
    problemsSolved: [
      'Oszczędność Czasu i Kapitału: Chroni przed inwestycją w kanał "zatkany" kosztami (np. retail bez budżetu marketingowego).',
      'Jasność Decyzyjna: Rozstrzyga kluczowe pytania operacyjne: czy potrzebna jest spółka w Chinach, jaki kanał sprzedaży wybrać, jaki jest realny time-to-market.',
    ],
    scope: {
      includes: [
        'Dobór Modelu Operacyjnego: Porównanie opcji: Dystrybutor vs Własna Spółka (WFOE) vs Partner E-commerce (TP).',
        'Analiza Kanałów (Channel Check): Tmall Global, JD, Douyin, WeChat - gdzie faktycznie jest Twój klient i jaka jest bariera wejścia.',
        'Analiza Geograficzna: Potencjał Tier 1 vs Tier 2/3 (popyt, koszty, konkurencja).',
        'Wstępna Wycena Wejścia: Szacunek kosztów logistyki, ceł, certyfikacji i marketingu na pierwsze 12 miesięcy.',
      ],
      excludes: [
        'Zakładania sklepów na platformach.',
        'Prowadzenia kampanii marketingowych.',
        'Formalnej rejestracji spółek lub produktów.',
      ],
    },
    deliverables: [
      'Raport Strategiczny (PDF): Rekomendacja modelu wejścia z uzasadnieniem ekonomicznym i regulacyjnym.',
      'Roadmapa Wdrożenia: Oś czasu od decyzji do pierwszej sprzedaży (np. 6 vs 18 miesięcy).',
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
      actions: 'Analiza wykazała 12-18 miesięcy rejestracji NMPA i wymóg testów na zwierzętach (sprzeczny z polityką marki). Zarekomendowano CBEC.',
      result: 'Zmiana strategii. Start na Tmall Global w 3 miesiące, bez testów, z zachowaniem statusu "Cruelty Free". Sprzedaż uruchomiona w pierwszym kwartale.',
    },
  },
  'wsparcie-formalne': {
    title: 'Wsparcie formalne i regulacyjne',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceStrategy,
    description: 'Aby sprzedawać w Chinach legalnie, produkt musi posiadać "chiński paszport" - komplet rejestracji, certyfikatów i zgodnych etykiet, bez których odprawa celna i sprzedaż są niemożliwe. Ta usługa to kompleksowe wsparcie regulacyjne i formalne w procesie dopuszczenia produktów na rynek chiński. Koordynujemy rejestrację producentów i produktów w kluczowych systemach rządowych (GACC/CIFER, NMPA, CCC), weryfikujemy dokumentację techniczną oraz zgodność etykiet z normami GB (Guobiao). Działamy jako koordynator procesu - minimalizując ryzyko błędów formalnych, opóźnień, cofnięcia towaru oraz blokad sprzedaży na poziomie platform i dystrybutorów.',
    whenItMakesSense: [
      'Eksport Żywności i Napojów: Chcesz rozpocząć regularny eksport, ale Twój zakład nie posiada numeru rejestracyjnego GACC/CIFER (obowiązkowego od 2022 r. dla wielu kategorii).',
      'Kosmetyki i Chemia Konsumencka: Wprowadzasz nową linię produktów i musisz przejść procedurę notyfikacji/rejestracji (CSAR) oraz zweryfikować skład pod kątem chińskich list dozwolonych surowców.',
      'Zatrzymanie na cle: Towar został wstrzymany w porcie z powodu niezgodnej etykiety, braków formalnych, błędów w dokumentach lub nieprawidłowej klasyfikacji (HS/CIQ).',
      'Elektronika, Zabawki, Sprzęt: Produkt wymaga certyfikatu CCC, aby mógł być legalnie sprzedawany i dystrybuowany w Chinach.',
      'Skalowanie Sprzedaży: Przechodzisz z wysyłek testowych lub CBEC do pełnego importu (General Trade) i musisz przejść na "pełną ścieżkę zgodności".',
      'Zmiana regulacji: Pojawiają się nowe normy GB / wymagania platform / zmiany interpretacji urzędowej i chcesz uniknąć ryzyka "wpadki" po stronie compliance.',
    ],
    problemsSolved: [
      'Odblokowanie Dostępu do Rynku: Zmienia produkt z formalnie "nielegalnego" w dopuszczony do obrotu na rynku chińskim.',
      'Redukcja Strat i Ryzyka: Zapobiega niszczeniu towaru, zwrotom kontenerów, karom administracyjnym oraz blokadom sprzedaży wynikającym z błędów formalnych.',
      'Przewidywalność procesu: Urealnia czas, koszty i kolejność kroków, zanim firma zainwestuje budżet w eksport lub dystrybucję.',
    ],
    scope: {
      includes: [
        'Regulatory Scan (start): Identyfikacja właściwego trybu wejścia (CBEC vs General Trade), instytucji nadzorczych oraz listy wymagań dla kategorii produktu.',
        'Rejestracja GACC (CIFER): Założenie konta, przygotowanie i złożenie wniosku, koordynacja z polskimi instytucjami nadzorczymi (np. GIW/KOWR), jeśli wymagana jest rekomendacja lub potwierdzenia urzędowe.',
        'NMPA (CSAR) - koordynacja: Przygotowanie checklisty dokumentów i danych, wsparcie w kompletacji dossier oraz prowadzenie komunikacji procesowej z lokalnym podmiotem odpowiedzialnym (Responsible Person) / agencją.',
        'CCC - koordynacja: Ustalenie czy produkt podlega CCC, dobór ścieżki certyfikacyjnej, wsparcie w przygotowaniu dokumentacji technicznej i koordynacja z jednostką certyfikującą/laboratorium.',
        'Label Check / Label Adaptation: Weryfikacja składu, wartości odżywczych, ostrzeżeń i claimów; przygotowanie chińskiej wersji etykiety zgodnej z normami GB oraz logiką inspekcji celnej.',
        'Dokumentacja importowa - wsad: Lista wymaganych dokumentów i danych do odprawy (np. faktura, packing list, CO/COO, deklaracje, specyfikacje) oraz kontrola spójności formalnej pod kątem ryzyk "border stop".',
        'Prowadzenie procesu administracyjnego end-to-end (koordynacja), kontrolę kompletności dokumentacji, statusy i rekomendacje kolejnych kroków.',
      ],
      excludes: [
        'Opłat urzędowych i kosztów badań laboratoryjnych.',
        'Opłat urzędowych, kosztów testów laboratoryjnych i audytów (jeśli wymagane).',
        'Pełnienia funkcji formalnego przedstawiciela prawnego (Responsible Person / importer of record).',
        'Reprezentacji prawnej przed urzędami.',
        'Gwarancji uzyskania decyzji administracyjnej (decyzja zależy od organu i zgodności produktu).',
      ],
    },
    deliverables: [
      'Regulatory Roadmap (PDF): ścieżka krok po kroku + lista wymagań + realistyczny timeline.',
      'Checklisty i wsady: lista dokumentów, dane do formularzy, wymagania etykietowe.',
      'Potwierdzenia / status procesu: numer GACC/CIFER, status notyfikacji NMPA / status CCC (w zależności od kategorii i etapu).',
      'Debriefing Call: omówienie ryzyk, kosztów i decyzji "go / no-go" dla kanału wejścia.',
    ],
    workModel: {
      type: 'Projektowy (do decyzji urzędu lub zakończenia procedury)',
      duration: 'GACC: 1-3 miesiące, NMPA: 6-12 miesięcy (zależnie od kategorii)',
      communication: 'Regularne statusy postępu + aktualizacje ryzyk',
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
    description: 'Znalezienie właściwego partnera w Chinach nie jest kwestią wyszukiwarki, lecz selekcji. Ta usługa to ustrukturyzowany proces identyfikacji, oceny dopasowania oraz wstępnej weryfikacji dostawców, dystrybutorów i partnerów technologicznych, którzy często są niewidoczni z poziomu Europy. Nie dostarczamy "zrzutów z Alibaby". Wykorzystujemy chińskie kanały operacyjne (Baidu, 1688, WeChat, zamknięte grupy branżowe), aby oddzielić realnych producentów i podmioty operacyjne od pośredników oraz "wirtualnych fabryk". Proces obejmuje nie tylko wyszukanie podmiotów, ale również ocenę ich zdolności operacyjnej, wiarygodności formalnej i realnego dopasowania do Twojego projektu (wolumen, technologia, eksport, komunikacja). Celem jest dostarczenie krótkiej, zweryfikowanej listy partnerów gotowych do dalszych rozmów - opartych na faktach, a nie deklaracjach marketingowych.',
    whenItMakesSense: [
      'Nie możesz znaleźć producenta, ponieważ nie istnieje on w anglojęzycznym internecie (bariera Great Firewall).',
      'Masz dziesiątki ofert z platform B2B, ale nie wiesz, kto jest realnym producentem.',
      'Otrzymałeś dobrą próbkę ("Golden Sample"), ale nie masz pewności co do produkcji seryjnej.',
      'Szukasz OEM/ODM lub partnera technologicznego, a nie "najtańszej fabryki".',
      'Chcesz wybrać jednego finalnego partnera spośród kilku kandydatów.',
      'Obecny dostawca traci stabilność operacyjną i potrzebny jest Plan B.',
    ],
    problemsSolved: [
      'Eliminuje pośredników i dociera bezpośrednio do OEM/ODM.',
      'Redukuje ryzyko wysłania zaliczki do podmiotu niewiarygodnego lub fikcyjnego.',
      'Odfiltrowuje firmy o niskim kapitale zakładowym, sporach prawnych lub słabej reputacji.',
      'Zastępuje intuicję twardymi danymi z rejestrów i analizy operacyjnej.',
      'Chroni marżę i stabilność łańcucha dostaw.',
    ],
    scope: {
      includes: [
        'Profilowanie partnera (IPP): zdefiniowanie profilu idealnego partnera (kompetencje, certyfikaty, wolumeny, rynki).',
        'Deep Search: przeszukiwanie chińskiego internetu i baz branżowych w języku mandaryńskim.',
        'Wstępny outreach: kontakt telefoniczny / WeChat w celu potwierdzenia zakresu działalności i gotowości eksportowej.',
        'Legal Check: weryfikacja w rejestrach rządowych (status prawny, kapitał zakładowy, reprezentant prawny).',
        'Risk Scan: analiza sporów sądowych, kar administracyjnych, wpisów egzekucyjnych (Zhixing).',
        'Ocena dopasowania operacyjnego: zdolność produkcyjna, komunikacja techniczna, poziom organizacyjny.',
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
      'Karty partnerów: dane rejestrowe, profil działalności, zweryfikowane kontakty do decydentów.',
      'Ocena ryzyka: wstępna klasyfikacja w modelu Zielone / Żółte / Czerwone.',
      'Informacja operacyjna: potwierdzenie możliwości produkcyjnych oraz - jeśli dostępne - orientacyjne MOQ / widełki cenowe.',
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
    description: 'W Chinach relacja (Guanxi) często wyprzedza kontrakt, a sposób prowadzenia rozmów bywa równie ważny jak ich treść. Ta usługa to kompleksowe wsparcie procesu negocjacyjnego: od zaprojektowania strategii, przez moderowanie i facylitację rozmów, aż po zarządzanie relacją po podpisaniu ustaleń. Działamy jako "kulturowy zderzak" i tłumacz intencji - pomagamy mówić twardo bez palenia mostów i utraty twarzy (Mianzi). Celem jest wypracowanie porozumienia zabezpieczającego interes ekonomiczny klienta przy zachowaniu długoterminowej relacji operacyjnej.',
    whenItMakesSense: [
      'Negocjacje high-stakes: Kontrakt o dużej wartości (np. >500 tys. PLN).',
      'Gra na czas i zmiana ustaleń: Partner przeciąga proces, wraca do ustaleń lub testuje granice.',
      'Sytuacja konfliktowa: Pojawia się spór jakościowy / płatniczy i trzeba go rozwiązać bez eskalacji prawnej i utraty relacji.',
      'Relacja długoterminowa: Chcesz uzyskać priorytet produkcyjny, stabilność dostaw, lepsze warunki w kolejnym cyklu i budować pozycję u partnera.',
    ],
    problemsSolved: [
      'Ochrona marży i warunków: Minimalizuje ustępstwa wynikające z nieznajomości kodu negocjacyjnego i błędów kulturowych.',
      'Przełamanie impasu: Wprowadza zewnętrzny, neutralny głos, który potrafi zmienić ramę rozmowy i "odczarować" konflikt.',
      'Bezpieczeństwo relacyjne: Umożliwia twarde rozmowy bez efektu "obrazy" i długofalowego zamknięcia współpracy.',
    ],
    scope: {
      includes: [
        'Strategia BATNA / ZOPA: Ustalenie alternatyw, granic i pola porozumienia w realiach chińskich (z uwzględnieniem hierarchii i rytuału ustępstw).',
        'Shadow Negotiation: Przygotowanie scenariuszy, argumentów, skryptów i "red lines" przed każdą rundą rozmów.',
        'Active Facilitation: Udział w callach/spotkaniach jako doradca i facylitator procesu (online lub stacjonarnie).',
        'De-escalation & Repair: Zarządzanie kryzysowe w relacji: naprawa komunikacji, wyjście z twarzą, powrót do stołu.',
        'Post-deal Guanxi Management: Plan utrzymania relacji po podpisaniu (rytmy kontaktu, follow-up, zasady eskalacji, "small wins").',
      ],
      excludes: [
        'Doradztwa prawnego (redakcja umów, opinie prawne).',
        'Reprezentacji procesowej.',
      ],
    },
    deliverables: [
      'Negotiation Playbook (PDF): Cele, sekwencja rozmów, argumenty, ustępstwa, warunki brzegowe, "trigger points".',
      'Stakeholder Map & Decision Lens: Mapa decydentów i wpływów po stronie partnera + analiza priorytetów i wrażliwych punktów negocjacyjnych.',
      'Round Decoder: Krótki raport po każdej rundzie: co padło oficjalnie, co wynika z kontekstu, jaki jest realny status.',
    ],
    workModel: {
      type: 'Retainer (abonament za dostępność w procesie) lub projekt (na czas negocjacji)',
      duration: 'Najczęściej 4-12 tygodni (zależnie od złożoności kontraktu i liczby rund)',
      communication: 'Setup + cykl rund (brief → call → decoder → korekta strategii)',
    },
    caseStudy: {
      client: 'Polska firma z branży budowlanej.',
      situation: 'Klient negocjował zakup linii produkcyjnej od chińskiego producenta. Po kilku rundach rozmów dostawca usztywnił się na cenie i sygnalizował możliwość zakończenia negocjacji. Dalsze naciski cenowe groziły utratą relacji oraz całego projektu.',
      actions: 'Zdiagnozowano, że kluczowa jest "twarz" właściciela - nie mógł dać rabatu wprost. Zmieniono strukturę porozumienia: cena nominalna bez zmian, ale rozszerzony pakiet serwisu, części i SLA o wartości odpowiadającej rabatowi.',
      result: 'Partner zachował twarz, klient obniżył całkowity koszt (TCO) i domknął umowę.',
    },
  },
  'struktury-handlowe': {
    title: 'Przygotowanie struktur handlowych lub partnerskich',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: serviceAnalysis,
    description: 'Projektujemy bezpieczną i wykonalną strukturę wejścia oraz współpracy PL↔CN: kto ma sprzedawać, kto ma importować, kto ponosi odpowiedzialność, gdzie powstaje marża i gdzie kumuluje się ryzyko. Dobieramy model współpracy (dystrybutor, agent, OEM/ODM, licencja, JV, TP w e-commerce) i przygotowujemy "architekturę relacji" tak, aby nie utknąć w toksycznej wyłączności, martwych kanałach lub ukrytych kosztach operacyjnych. Klient dostaje klarowny model działania oraz checklistę elementów do wdrożenia przed podpisaniem umów.',
    whenItMakesSense: [
      'Planujesz wejście do Chin lub import technologii z Chin, ale nie wiesz jaki model jest realnie wykonalny (CBEC vs General Trade, dystrybutor vs własna spółka).',
      'Masz oferty od partnerów i nie rozumiesz, gdzie jest marża, kto bierze ryzyko, kto kontroluje klienta końcowego.',
      'Rozważasz wyłączność / JV / OEM i chcesz uniknąć "małżeństwa bez rozwodu".',
      'Chcesz zbudować sieć partnerów (sprzedaż/serwis/logistyka), ale brakuje Ci mapy ról i odpowiedzialności.',
    ],
    problemsSolved: [
      'Zdejmuje chaos decyzyjny i minimalizuje ryzyko wyboru złej struktury (martwy kanał, zła motywacja partnera, zabetonowana wyłączność).',
      'Porządkuje ekonomię projektu (marża, koszty, kontrola, odpowiedzialność) zanim popłynie kapitał.',
      'Ujawnia, gdzie w modelu ukryte jest ryzyko gwarancyjne, compliance lub reputacyjne.',
    ],
    scope: {
      includes: [
        'Dobór modelu wejścia i sprzedaży (dystrybucja, agent, OEM/ODM, licencja, JV, TP/CBEC).',
        'Mapa ról i przepływów: produkt, pieniądze, dane, serwis, reklamacje.',
        'Identyfikacja punktów ryzyka: wyłączność, zależność od jednego importera, brak serwisu, compliance.',
        'Warsztat startowy + rekomendacja struktury + checklista wdrożenia.',
      ],
      excludes: [
        'Sporządzania i opiniowania umów przez kancelarię (możemy wskazać partnerów).',
        'Formalnej reprezentacji jako pełnomocnik w negocjacjach.',
      ],
    },
    deliverables: [
      'Model współpracy (PDF): rekomendowana struktura + uzasadnienie + wariant A/B.',
      'Mapa operacyjna (1 strona): role, odpowiedzialności, przepływy.',
      'Checklist "przed podpisaniem": co musi być zabezpieczone (serwis, IP, płatności, dane, kanał).',
      'Debriefing Call 60 min.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '7-12 dni roboczych',
      communication: 'Warsztat online + raport',
    },
    caseStudy: {
      client: 'Polska firma przemysłowa.',
      situation: 'Plan importu chińskiego rozwiązania automatyzacyjnego przez "wyłącznego dystrybutora" w UE. Model zakładał pełną zależność serwisową i logistyczną od jednego podmiotu.',
      actions: 'Przeprowadzono analizę struktury marży i odpowiedzialności. Zidentyfikowano, że wyłączność blokuje dostęp do części zamiennych oraz przerzuca ryzyko gwarancji na klienta końcowego. Zaprojektowano alternatywną strukturę: bezpośrednia relacja z producentem + lokalny serwis w Polsce + nieekskluzywny kanał sprzedaży.',
      result: 'Niższy całkowity koszt posiadania (TCO), większa kontrola nad relacją z producentem i eliminacja ryzyka "uwięzienia" w jednym pośredniku.',
    },
  },

  // ==========================================
  // KATEGORIA 4: IMPORT, EKSPORT I ŁAŃCUCH DOSTAW
  // (Będą dodane w kolejnej aktualizacji)
  // ==========================================
  'audyty-dostawcow': {
    title: 'Audyty i weryfikacja dostawców (On-Site)',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: serviceAnalysis,
    description: 'Fizyczna weryfikacja dostawcy w Chinach - audyt zakładu produkcyjnego, ocena zdolności wytwórczych, weryfikacja certyfikatów i standardów jakości. Sprawdzamy, czy fabryka istnieje, produkuje deklarowany asortyment i posiada realne zaplecze do obsługi Twojego zamówienia.',
    whenItMakesSense: [
      'Planujesz duże zamówienie i chcesz zweryfikować dostawcę przed wpłatą zaliczki.',
      'Masz wątpliwości co do jakości lub zdolności produkcyjnych partnera.',
      'Chcesz potwierdzić zgodność z normami i certyfikatami.',
      'Potrzebujesz oceny ryzyka operacyjnego przed długoterminową współpracą.',
    ],
    problemsSolved: [
      'Eliminuje ryzyko współpracy z "wirtualnymi fabrykami".',
      'Weryfikuje realne zdolności produkcyjne.',
      'Potwierdza zgodność z deklarowanymi standardami.',
    ],
    scope: {
      includes: [
        'Fizyczna wizyta w fabryce.',
        'Weryfikacja procesu produkcyjnego.',
        'Sprawdzenie dokumentacji i certyfikatów.',
        'Ocena zdolności produkcyjnych.',
        'Raport z audytu ze zdjęciami.',
      ],
      excludes: [
        'Audytu finansowego.',
        'Testów laboratoryjnych produktów.',
        'Negocjacji handlowych.',
      ],
    },
    deliverables: [
      'Raport z audytu (PDF) ze zdjęciami.',
      'Ocena ryzyka współpracy.',
      'Rekomendacje i red flags.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '5-10 dni roboczych',
      communication: 'Raport + debriefing call',
    },
    caseStudy: {
      client: 'Polski producent mebli.',
      situation: 'Planowany zakup komponentów od nowego dostawcy.',
      actions: 'Przeprowadzono audyt fabryki. Wykryto rozbieżność między deklarowaną a faktyczną zdolnością produkcyjną.',
      result: 'Klient renegocjował warunki i zabezpieczył się przed ryzykiem opóźnień.',
    },
  },
  'optymalizacja-lancucha': {
    title: 'Projektowanie i optymalizacja łańcucha dostaw',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: serviceStrategy,
    description: 'Analiza i optymalizacja struktury logistycznej na linii Polska-Chiny. Identyfikujemy wąskie gardła, redukujemy koszty i czas dostawy, projektujemy alternatywne trasy i punkty konsolidacji.',
    whenItMakesSense: [
      'Koszty logistyczne są zbyt wysokie.',
      'Występują częste opóźnienia w dostawach.',
      'Chcesz zdywersyfikować łańcuch dostaw.',
      'Planujesz skalowanie importu/eksportu.',
    ],
    problemsSolved: [
      'Redukcja kosztów logistycznych.',
      'Skrócenie czasu dostawy.',
      'Zwiększenie odporności łańcucha dostaw.',
    ],
    scope: {
      includes: [
        'Analiza obecnej struktury logistycznej.',
        'Identyfikacja wąskich gardeł.',
        'Projektowanie alternatywnych tras.',
        'Rekomendacje optymalizacyjne.',
      ],
      excludes: [
        'Bezpośredniej obsługi logistycznej.',
        'Negocjacji z przewoźnikami.',
      ],
    },
    deliverables: [
      'Raport optymalizacyjny (PDF).',
      'Mapa łańcucha dostaw.',
      'Rekomendacje i plan wdrożenia.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-14 dni roboczych',
      communication: 'Warsztat + raport',
    },
    caseStudy: {
      client: 'Dystrybutor elektroniki.',
      situation: 'Wysokie koszty i długi czas dostawy.',
      actions: 'Przeprojektowano strukturę logistyczną, zmieniono punkt konsolidacji.',
      result: 'Redukcja kosztów o 22% i skrócenie czasu dostawy o 5 dni.',
    },
  },
  'nadzor-produkcji': {
    title: 'Nadzór produkcji oraz kontrola jakości',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: serviceAnalysis,
    description: 'Bieżący nadzór nad procesem produkcyjnym w Chinach, inspekcje pre-shipment, kontrola jakości i zgodności z specyfikacją. Minimalizujemy ryzyko otrzymania wadliwego towaru.',
    whenItMakesSense: [
      'Zamawiasz niestandardowy produkt.',
      'Masz obawy o jakość produkcji.',
      'Chcesz kontrolować proces przed wysyłką.',
    ],
    problemsSolved: [
      'Redukcja ryzyka wadliwych dostaw.',
      'Wczesne wykrycie problemów jakościowych.',
      'Ochrona przed stratami finansowymi.',
    ],
    scope: {
      includes: [
        'Inspekcje w trakcie produkcji.',
        'Kontrola pre-shipment.',
        'Weryfikacja zgodności ze specyfikacją.',
        'Raportowanie z dokumentacją zdjęciową.',
      ],
      excludes: [
        'Testów laboratoryjnych.',
        'Reprezentacji prawnej.',
      ],
    },
    deliverables: [
      'Raporty z inspekcji.',
      'Dokumentacja zdjęciowa.',
      'Rekomendacje akcji naprawczych.',
    ],
    workModel: {
      type: 'Projektowy lub abonamentowy',
      duration: 'Zależnie od cyklu produkcyjnego',
      communication: 'Regularne raporty + alerty',
    },
    caseStudy: {
      client: 'Importer zabawek.',
      situation: 'Poprzednia partia miała wady jakościowe.',
      actions: 'Wdrożono nadzór produkcji i inspekcje.',
      result: 'Zero wadliwych produktów w kolejnych dostawach.',
    },
  },
  'transport-miedzynarodowy': {
    title: 'Organizacja transportu międzynarodowego',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: serviceStrategy,
    description: 'Koordynacja transportu morskiego, lotniczego i kolejowego na linii Polska-Chiny. Optymalizacja kosztów, wybór optymalnej trasy i trybu transportu.',
    whenItMakesSense: [
      'Potrzebujesz wsparcia w organizacji transportu.',
      'Chcesz zoptymalizować koszty frachtu.',
      'Szukasz alternatywnych tras transportowych.',
    ],
    problemsSolved: [
      'Optymalizacja kosztów transportu.',
      'Wybór najlepszej trasy i trybu.',
      'Koordynacja procesu logistycznego.',
    ],
    scope: {
      includes: [
        'Analiza opcji transportowych.',
        'Koordynacja z przewoźnikami.',
        'Optymalizacja tras.',
        'Monitoring przesyłek.',
      ],
      excludes: [
        'Bezpośredniej obsługi celnej.',
        'Ubezpieczenia cargo.',
      ],
    },
    deliverables: [
      'Rekomendacja trybu transportu.',
      'Koordynacja procesu.',
      'Raportowanie statusu.',
    ],
    workModel: {
      type: 'Projektowy lub abonamentowy',
      duration: 'Zależnie od projektu',
      communication: 'E-mail + statusy',
    },
    caseStudy: {
      client: 'Producent mebli.',
      situation: 'Wysokie koszty frachtu morskiego.',
      actions: 'Przeprowadzono analizę alternatyw, zarekomendowano transport kolejowy.',
      result: 'Redukcja kosztów o 18% i skrócenie czasu dostawy.',
    },
  },
  'realizacja-end-to-end': {
    title: 'Kompleksowa realizacja projektu PL-CN (end-to-end)',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: serviceAnalysis,
    description: 'Pełna koordynacja projektu od identyfikacji dostawcy, przez produkcję, kontrolę jakości, po dostawę do magazynu w Polsce. Jeden punkt kontaktu dla całego procesu.',
    whenItMakesSense: [
      'Potrzebujesz kompleksowej obsługi projektu.',
      'Brakuje Ci zasobów do koordynacji wszystkich elementów.',
      'Chcesz jednego odpowiedzialnego partnera.',
    ],
    problemsSolved: [
      'Eliminuje konieczność zarządzania wieloma podmiotami.',
      'Redukcja ryzyka i stresu operacyjnego.',
      'Jeden punkt odpowiedzialności.',
    ],
    scope: {
      includes: [
        'Identyfikacja i weryfikacja dostawcy.',
        'Nadzór produkcji.',
        'Kontrola jakości.',
        'Koordynacja transportu.',
        'Odprawa celna (we współpracy z partnerami).',
      ],
      excludes: [
        'Bezpośredniej sprzedaży produktów.',
      ],
    },
    deliverables: [
      'Pełna dokumentacja projektu.',
      'Regularne raporty statusowe.',
      'Produkt dostarczony do magazynu.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: 'Zależnie od zakresu projektu',
      communication: 'Dedykowany project manager',
    },
    caseStudy: {
      client: 'Startup technologiczny.',
      situation: 'Pierwszy import komponentów z Chin.',
      actions: 'Przeprowadzono cały proces end-to-end.',
      result: 'Pomyślna dostawa w terminie i budżecie.',
    },
  },

  // ==========================================
  // KATEGORIA 5: MARKETING I POZYCJONOWANIE
  // ==========================================
  'lokalne-pozycjonowanie': {
    title: 'Lokalne pozycjonowanie marki (PL i CN)',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceStrategy,
    description: 'Adaptacja pozycjonowania marki do specyfiki rynku polskiego lub chińskiego. Analiza konkurencji, identyfikacja nisz i rekomendacje strategiczne.',
    whenItMakesSense: [
      'Wchodzisz na nowy rynek.',
      'Obecne pozycjonowanie nie działa.',
      'Chcesz wyróżnić się na tle konkurencji.',
    ],
    problemsSolved: [
      'Dopasowanie marki do lokalnych oczekiwań.',
      'Identyfikacja przewag konkurencyjnych.',
      'Zwiększenie efektywności komunikacji.',
    ],
    scope: {
      includes: [
        'Analiza konkurencji.',
        'Badanie percepcji marki.',
        'Rekomendacje pozycjonowania.',
        'Strategia komunikacji.',
      ],
      excludes: [
        'Prowadzenia kampanii.',
        'Tworzenia treści.',
      ],
    },
    deliverables: [
      'Strategia pozycjonowania (PDF).',
      'Analiza konkurencji.',
      'Rekomendacje wdrożeniowe.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-14 dni roboczych',
      communication: 'Warsztat + raport',
    },
    caseStudy: {
      client: 'Polska marka kosmetyczna.',
      situation: 'Wejście na rynek chiński.',
      actions: 'Przeprowadzono analizę i przepozycjonowano markę.',
      result: 'Skuteczne wejście i pozytywny odbiór.',
    },
  },
  'strategia-komunikacji': {
    title: 'Strategia komunikacji',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceAnalysis,
    description: 'Opracowanie strategii komunikacji marki dostosowanej do specyfiki kulturowej i medialnej rynku docelowego.',
    whenItMakesSense: [
      'Planujesz kampanię na nowym rynku.',
      'Obecna komunikacja nie przynosi efektów.',
      'Chcesz uporządkować przekaz marki.',
    ],
    problemsSolved: [
      'Spójność komunikacji.',
      'Dopasowanie do lokalnych kanałów.',
      'Zwiększenie efektywności przekazu.',
    ],
    scope: {
      includes: [
        'Analiza kanałów komunikacji.',
        'Opracowanie key messages.',
        'Rekomendacje tonalności.',
        'Plan komunikacji.',
      ],
      excludes: [
        'Prowadzenia kampanii.',
        'Tworzenia treści.',
      ],
    },
    deliverables: [
      'Strategia komunikacji (PDF).',
      'Key messages.',
      'Plan wdrożenia.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '7-10 dni roboczych',
      communication: 'Warsztat + raport',
    },
    caseStudy: {
      client: 'Firma technologiczna.',
      situation: 'Ekspansja na rynek chiński.',
      actions: 'Opracowano strategię komunikacji.',
      result: 'Skuteczne dotarcie do grupy docelowej.',
    },
  },
  'adaptacja-komunikacji': {
    title: 'Adaptacja komunikacji do rynku PL i CN',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceStrategy,
    description: 'Lokalizacja i adaptacja materiałów marketingowych, treści i komunikacji do specyfiki kulturowej i językowej rynku.',
    whenItMakesSense: [
      'Masz materiały do zaadaptowania.',
      'Wchodzisz na nowy rynek.',
      'Chcesz uniknąć błędów kulturowych.',
    ],
    problemsSolved: [
      'Profesjonalna lokalizacja treści.',
      'Uniknięcie wpadek kulturowych.',
      'Zwiększenie efektywności przekazu.',
    ],
    scope: {
      includes: [
        'Analiza materiałów źródłowych.',
        'Adaptacja kulturowa.',
        'Weryfikacja językowa.',
        'Rekomendacje wizualne.',
      ],
      excludes: [
        'Tworzenia nowych materiałów od zera.',
      ],
    },
    deliverables: [
      'Zaadaptowane materiały.',
      'Raport z rekomendacjami.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: 'Zależnie od zakresu',
      communication: 'E-mail + konsultacje',
    },
    caseStudy: {
      client: 'Marka modowa.',
      situation: 'Adaptacja kampanii na rynek chiński.',
      actions: 'Przeprowadzono pełną lokalizację.',
      result: 'Pozytywny odbiór kampanii.',
    },
  },
  'materialy-sprzedazowe': {
    title: 'Materiały sprzedażowe i wizerunkowe',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceAnalysis,
    description: 'Przygotowanie materiałów sprzedażowych, prezentacji i treści wizerunkowych dostosowanych do specyfiki rynku.',
    whenItMakesSense: [
      'Potrzebujesz profesjonalnych materiałów.',
      'Wchodzisz na nowy rynek.',
      'Chcesz ujednolicić komunikację.',
    ],
    problemsSolved: [
      'Profesjonalne materiały sprzedażowe.',
      'Spójność wizerunku.',
      'Wsparcie procesu sprzedaży.',
    ],
    scope: {
      includes: [
        'Opracowanie koncepcji.',
        'Przygotowanie treści.',
        'Koordynacja produkcji.',
      ],
      excludes: [
        'Druku i dystrybucji.',
      ],
    },
    deliverables: [
      'Materiały sprzedażowe.',
      'Prezentacje.',
      'Treści wizerunkowe.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: 'Zależnie od zakresu',
      communication: 'E-mail + konsultacje',
    },
    caseStudy: {
      client: 'Producent B2B.',
      situation: 'Przygotowanie do targów w Chinach.',
      actions: 'Opracowano komplet materiałów.',
      result: 'Skuteczna prezentacja na targach.',
    },
  },
  'wsparcie-marketingowe': {
    title: 'Wsparcie działań marketingowych i pozyskiwania leadów',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: serviceStrategy,
    description: 'Wsparcie w planowaniu i realizacji działań marketingowych, generowaniu leadów i budowaniu obecności na rynku.',
    whenItMakesSense: [
      'Potrzebujesz wsparcia marketingowego.',
      'Chcesz generować leady na nowym rynku.',
      'Planujesz kampanię.',
    ],
    problemsSolved: [
      'Generowanie leadów.',
      'Budowanie świadomości marki.',
      'Wsparcie sprzedaży.',
    ],
    scope: {
      includes: [
        'Planowanie kampanii.',
        'Rekomendacje kanałów.',
        'Koordynacja działań.',
        'Raportowanie.',
      ],
      excludes: [
        'Bezpośredniego prowadzenia kampanii paid.',
      ],
    },
    deliverables: [
      'Plan marketingowy.',
      'Raport z działań.',
      'Leady.',
    ],
    workModel: {
      type: 'Projektowy lub abonamentowy',
      duration: 'Zależnie od zakresu',
      communication: 'Regularne statusy',
    },
    caseStudy: {
      client: 'Firma SaaS.',
      situation: 'Wejście na rynek chiński.',
      actions: 'Przeprowadzono kampanię lead generation.',
      result: 'Pozyskanie pierwszych klientów.',
    },
  },

  // ==========================================
  // KATEGORIA 6: MISJE BIZNESOWE I SZKOLENIA
  // ==========================================
  'misje-biznesowe': {
    title: 'Organizacja misji biznesowych i technologicznych PL-CN',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceAnalysis,
    description: 'Kompleksowa organizacja wyjazdów biznesowych do Chin: logistyka, agenda, aranżacja spotkań, tłumaczenia i wsparcie na miejscu.',
    whenItMakesSense: [
      'Planujesz wizytę biznesową w Chinach.',
      'Chcesz efektywnie wykorzystać czas.',
      'Potrzebujesz wsparcia organizacyjnego.',
    ],
    problemsSolved: [
      'Profesjonalna organizacja wizyty.',
      'Maksymalizacja wartości spotkań.',
      'Eliminacja barier językowych i kulturowych.',
    ],
    scope: {
      includes: [
        'Planowanie agendy.',
        'Aranżacja spotkań.',
        'Logistyka.',
        'Tłumaczenia.',
        'Wsparcie na miejscu.',
      ],
      excludes: [
        'Kosztów podróży i zakwaterowania.',
      ],
    },
    deliverables: [
      'Agenda wizyty.',
      'Potwierdzone spotkania.',
      'Wsparcie on-site.',
      'Raport podsumowujący.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '3-4 tygodnie przygotowania',
      communication: 'Dedykowany koordynator',
    },
    caseStudy: {
      client: 'Delegacja branżowa.',
      situation: 'Misja technologiczna do Shenzhen.',
      actions: 'Zorganizowano pełen program wizyty.',
      result: 'Nawiązanie 12 nowych kontaktów biznesowych.',
    },
  },
  'matchmaking': {
    title: 'Aranżacja spotkań B2B i matchmaking partnerów',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceStrategy,
    description: 'Identyfikacja i aranżacja spotkań z potencjalnymi partnerami biznesowymi w Chinach lub Polsce.',
    whenItMakesSense: [
      'Szukasz partnerów biznesowych.',
      'Planujesz wizytę i chcesz mieć umówione spotkania.',
      'Potrzebujesz wsparcia w nawiązywaniu kontaktów.',
    ],
    problemsSolved: [
      'Identyfikacja właściwych partnerów.',
      'Profesjonalna aranżacja spotkań.',
      'Przełamanie bariery pierwszego kontaktu.',
    ],
    scope: {
      includes: [
        'Profilowanie partnerów.',
        'Outreach i aranżacja.',
        'Przygotowanie briefingów.',
        'Koordynacja spotkań.',
      ],
      excludes: [
        'Prowadzenia negocjacji.',
      ],
    },
    deliverables: [
      'Lista potencjalnych partnerów.',
      'Umówione spotkania.',
      'Briefing przed spotkaniami.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '2-3 tygodnie',
      communication: 'E-mail + koordynacja',
    },
    caseStudy: {
      client: 'Producent komponentów.',
      situation: 'Poszukiwanie dystrybutorów w Chinach.',
      actions: 'Zidentyfikowano i umówiono 8 spotkań.',
      result: 'Podpisanie 2 listów intencyjnych.',
    },
  },
  'szkolenia-system': {
    title: 'Szkolenia z systemu gospodarczego Chin',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceAnalysis,
    description: 'Szkolenia i warsztaty dotyczące specyfiki chińskiego systemu gospodarczego, regulacji, praktyk biznesowych i środowiska instytucjonalnego.',
    whenItMakesSense: [
      'Zespół nie zna specyfiki rynku chińskiego.',
      'Planujecie ekspansję na Chiny.',
      'Chcecie zrozumieć kontekst działania partnerów.',
    ],
    problemsSolved: [
      'Budowanie kompetencji zespołu.',
      'Zrozumienie środowiska biznesowego.',
      'Redukcja błędów wynikających z nieznajomości rynku.',
    ],
    scope: {
      includes: [
        'Przygotowanie programu szkolenia.',
        'Prowadzenie warsztatu.',
        'Materiały szkoleniowe.',
        'Q&A.',
      ],
      excludes: [
        'Doradztwa indywidualnego po szkoleniu.',
      ],
    },
    deliverables: [
      'Program szkolenia.',
      'Materiały dla uczestników.',
      'Certyfikaty uczestnictwa.',
    ],
    workModel: {
      type: 'Warsztat (pół dnia / cały dzień)',
      duration: '4-8 godzin',
      communication: 'Uzgodnienie programu + realizacja',
    },
    caseStudy: {
      client: 'Korporacja międzynarodowa.',
      situation: 'Onboarding zespołu do projektu chińskiego.',
      actions: 'Przeprowadzono szkolenie dla 25 osób.',
      result: 'Zespół przygotowany do współpracy.',
    },
  },
  'szkolenia-kultura': {
    title: 'Szkolenia z kultury biznesowej i negocjacji',
    subtitle: 'Misje biznesowe i szkolenia',
    image: serviceStrategy,
    description: 'Praktyczne szkolenia i warsztaty dotyczące chińskiej kultury biznesowej, etykiety, budowania relacji (Guanxi) i technik negocjacyjnych.',
    whenItMakesSense: [
      'Przed ważnymi negocjacjami z Chińczykami.',
      'Zespół nie ma doświadczenia w kontaktach z Azją.',
      'Chcecie uniknąć wpadek kulturowych.',
    ],
    problemsSolved: [
      'Przygotowanie do negocjacji.',
      'Zrozumienie kultury biznesowej.',
      'Budowanie efektywnych relacji.',
    ],
    scope: {
      includes: [
        'Przygotowanie programu.',
        'Warsztaty praktyczne.',
        'Symulacje negocjacyjne.',
        'Materiały.',
      ],
      excludes: [
        'Udziału w realnych negocjacjach.',
      ],
    },
    deliverables: [
      'Program szkolenia.',
      'Materiały praktyczne.',
      'Feedback i rekomendacje.',
    ],
    workModel: {
      type: 'Warsztat (pół dnia / cały dzień)',
      duration: '4-8 godzin',
      communication: 'Uzgodnienie programu + realizacja',
    },
    caseStudy: {
      client: 'Firma z branży automotive.',
      situation: 'Przygotowanie do negocjacji z chińskim dostawcą.',
      actions: 'Przeprowadzono warsztat negocjacyjny.',
      result: 'Zespół pewny siebie i przygotowany.',
    },
  },
};

// Mapping for URL slugs to service keys
export const serviceSlugMap: Record<string, string> = {
  'analiza-wplywu-chin': 'analiza-wplywu',
  'decyzje-wejscia-wspolpracy': 'decyzje-wejscia',
  'scenariusze-mapy-ryzyk': 'scenariusze-strategiczne',
  'briefingi-zarzady': 'briefingi-decyzyjne',
  'analizy-sektorow-klastrow': 'analizy-sektorow',
  'analiza-regulacyjna-bariery': 'analiza-regulacyjna',
  'weryfikacja-kontrahenta-desktop': 'weryfikacja-kontrahenta',
  'due-diligence-partner': 'due-diligence',
  'wybor-modelu-wejscia': 'wybor-modelu',
  'wsparcie-formalne-regulacyjne': 'wsparcie-formalne',
  'identyfikacja-selekcja-partnerow': 'identyfikacja-partnerow',
  'wsparcie-negocjacyjne-relacyjne': 'wsparcie-negocjacyjne',
  'struktury-handlowe-partnerskie': 'struktury-handlowe',
  'audyty-weryfikacja-dostawcow': 'audyty-dostawcow',
  'optymalizacja-lancucha-dostaw': 'optymalizacja-lancucha',
  'nadzor-produkcji-jakosc': 'nadzor-produkcji',
  'transport-miedzynarodowy': 'transport-miedzynarodowy',
  'realizacja-projekt-end-to-end': 'realizacja-end-to-end',
  'lokalne-pozycjonowanie-marki': 'lokalne-pozycjonowanie',
  'strategia-komunikacji': 'strategia-komunikacji',
  'adaptacja-komunikacji-rynek': 'adaptacja-komunikacji',
  'materialy-sprzedazowe-wizerunkowe': 'materialy-sprzedazowe',
  'wsparcie-marketing-leady': 'wsparcie-marketingowe',
  'misje-biznesowe-technologiczne': 'misje-biznesowe',
  'matchmaking-b2b': 'matchmaking',
  'szkolenia-system-gospodarczy': 'szkolenia-system',
  'szkolenia-kultura-negocjacje': 'szkolenia-kultura',
};

export const defaultServiceData: ServiceData = {
  title: 'Usługa',
  subtitle: 'Yin Yang',
  image: serviceStrategy,
  description: 'Szczegółowy opis usługi.',
  whenItMakesSense: [
    'Gdy potrzebujesz profesjonalnego wsparcia.',
    'Gdy planujesz działania na linii Polska-Chiny.',
  ],
  problemsSolved: [
    'Minimalizacja ryzyka.',
    'Oszczędność czasu i zasobów.',
  ],
  scope: {
    includes: ['Kompleksowa analiza.', 'Raport z rekomendacjami.'],
    excludes: ['Doradztwo prawne.', 'Reprezentacja formalna.'],
  },
  deliverables: ['Raport (PDF).', 'Debriefing call.'],
  workModel: {
    type: 'Projektowy',
    duration: '7-14 dni roboczych',
    communication: 'E-mail + spotkanie wideo',
  },
  caseStudy: {
    client: 'Przykładowy klient.',
    situation: 'Opis sytuacji.',
    actions: 'Podjęte działania.',
    result: 'Osiągnięty rezultat.',
  },
};