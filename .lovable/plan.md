
# Plan: Kompleksowe poprawki UI i treści

## Podsumowanie zmian

Ten plan obejmuje poprawki na stronie głównej (avatary, karuzelę, karty case studies), aktualizację treści wszystkich 27 usług według dokumentu Word, oraz usunięcie animacji scrollującej myszki ze strony "O nas".

---

## 1. Strona główna (Index.tsx)

### 1.1 Dodanie avatarów obok "Dołącz do grona"
- Dodanie 3 nałożonych na siebie avatarów (w stylu ze screenshota) przed tekstem "Dołącz do grona 540+ zadowolonych klientów"
- Użycie obrazów z `/src/assets/avatar-*.jpg` lub generowanie przez DiceBear API
- Avatary będą miały styl: okrągłe, border biały, nałożone na siebie z przesunięciem -8px

### 1.2 Usunięcie numeracji z karuzeli "Nasze usługi"
- Usunięcie badge'a `{String(currentSlide + 1).padStart(2, '0')} / {String(carouselServices.length).padStart(2, '0')}` z karuzeli usług (linia 376-377)

### 1.3 Naprawa kart Case Studies
- Zwiększenie wysokości kart z `h-[400px]` do `h-[450px]` lub `h-[480px]`
- Zmniejszenie rozmiaru tekstu w sekcji rezultatów
- Dostosowanie paddingu, aby przycisk "Porozmawiajmy o Twoim projekcie" mieścił się w karcie
- Zmiana struktury layoutu na bardziej kompaktową

---

## 2. Strona "O nas" (ONas.tsx)

### 2.1 Usunięcie animacji scrollującej myszki
- Usunięcie elementu scroll indicator (linie 180-194) który wyświetla animację myszki z kropką

---

## 3. Aktualizacja treści wszystkich 27 usług (ServiceDetail.tsx)

### 3.1 Struktura danych usług
Na podstawie dokumentu Word, utworzenie kompletnej bazy danych dla wszystkich 27 usług:

**Kategoria 1: Strategia wobec Chin (3 usługi)**
1. Analiza wpływu Chin na firmę lub sektor
2. Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji
3. Briefingi decyzyjne dla zarządów

**Kategoria 2: Analizy rynku i weryfikacja partnerów (4 usługi)**
4. Analizy sektorów, klastrów przemysłowych i konkurencji
5. Analiza regulacyjna i barier wejścia
6. Weryfikacja kontrahenta (Desktop Check)
7. Rozszerzona weryfikacja partnera (Due Diligence)

**Kategoria 3: Wejście na rynek Polska - Chiny (5 usług)**
8. Wybór modelu wejścia na rynek
9. Wsparcie formalne i regulacyjne
10. Identyfikacja i selekcja partnerów
11. Wsparcie negocjacyjne i relacyjne
12. Przygotowanie struktur handlowych lub partnerskich

**Kategoria 4: Import, eksport i zarządzanie łańcuchem dostaw (5 usług)**
13. Audyty i weryfikacja dostawców (On-Site)
14. Projektowanie i optymalizacja łańcucha dostaw
15. Nadzór produkcji oraz kontrola jakości
16. Organizacja transportu międzynarodowego
17. Kompleksowa realizacja projektu PL - CN (end-to-end)

**Kategoria 5: Marketing i pozycjonowanie rynkowe (5 usług)**
18. Lokalne pozycjonowanie marki (PL i CN)
19. Strategia komunikacji
20. Adaptacja komunikacji do rynku PL i CN
21. Materiały sprzedażowe i wizerunkowe
22. Wsparcie działań marketingowych i pozyskiwania leadów

**Kategoria 6: Misje biznesowe i szkolenia (4 usługi)**
23. Organizacja misji biznesowych i technologicznych PL - CN
24. Aranżacja spotkań B2B i matchmaking partnerów
25. Szkolenia z systemu gospodarczego Chin
26. Szkolenia z kultury biznesowej i negocjacji

### 3.2 Dla każdej usługi z dokumentu Word
Każda usługa będzie zawierać dokładne dane z dokumentu:
- **Opis usługi**: Pełny tekst z sekcji "OPIS USŁUGI"
- **Kiedy ta usługa ma sens**: Lista punktów z sekcji "KIEDY TA USŁUGA MA SENS"
- **Problem klienta który rozwiązuje**: Lista z sekcji "PROBLEM KLIENTA, KTÓRY ROZWIĄZUJE"
- **Zakres usługi**: Sekcje "Obejmuje" i "Nie obejmuje"
- **Output/Deliverables**: Lista z sekcji "OUTPUT / DELIVERABLES"
- **Model współpracy**: Typ, czas trwania, komunikacja
- **Case Study**: Klient, sytuacja, działania, efekt

---

## 4. Szczegóły techniczne

### 4.1 Pliki do modyfikacji
1. `src/pages/Index.tsx` - avatary, numeracja karuzeli
2. `src/components/CaseStudiesSection.tsx` - layout kart case studies
3. `src/pages/ONas.tsx` - usunięcie scroll indicator
4. `src/pages/ServiceDetail.tsx` - pełna aktualizacja wszystkich 27 usług

### 4.2 Struktura danych w ServiceDetail.tsx
```text
servicesData = {
  'analiza-wplywu': {
    title: 'Analiza wpływu Chin na firmę lub sektor',
    subtitle: 'Strategia wobec Chin',
    description: '...',
    whenItMakesSense: [...],
    problemsSolved: [...],
    scope: { includes: [...], excludes: [...] },
    deliverables: [...],
    workModel: { type, duration, communication },
    caseStudy: { client, situation, actions, result }
  },
  // ... pozostałe 26 usług
}
```

---

## 5. Przykładowe zmiany wizualne

### Avatary przy CTA
```text
[Avatar1][Avatar2][Avatar3] Dołącz do grona 540+ zadowolonych klientów
     ^--- 3 avatary nałożone na siebie
```

### Karta Case Study (po naprawie)
- Wysokość: 450-480px zamiast 400px
- Mniejszy font w sekcji rezultatów
- Kompaktowy padding
- Przycisk "Porozmawiajmy..." w pełni widoczny

---

## Kolejność implementacji

1. Strona główna - avatary i numeracja karuzeli
2. Case Studies - naprawa layoutu kart
3. O nas - usunięcie scroll indicator
4. ServiceDetail - pełna aktualizacja 27 usług (największa zmiana)

