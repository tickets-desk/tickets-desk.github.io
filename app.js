/**
 * Tickets UA Support Agent Dashboard
 * Core Application Logic
 */

// Embedded fallback data for seamless offline/file:// double-click execution
const DEFAULT_AIRLINES = [
  {
    id: "ryanair",
    name: "Ryanair",
    iata: "FR",
    country: "Ireland",
    logoUrl: "https://images.kiwi.com/airlines/64/FR.png",
    manageBookingUrl: "https://www.ryanair.com/gb/en/trip/manage"
  },
  {
    id: "wizzair",
    name: "Wizz Air",
    iata: "W6",
    country: "Hungary",
    logoUrl: "https://images.kiwi.com/airlines/64/W6.png",
    manageBookingUrl: "https://wizzair.com/en-gb/information-and-services/booking-information/check-in-and-boarding"
  },
  {
    id: "lot",
    name: "LOT Polish Airlines",
    iata: "LO",
    country: "Poland",
    logoUrl: "https://images.kiwi.com/airlines/64/LO.png",
    manageBookingUrl: "https://www.lot.com/pl/en/manage-reservation"
  },
  {
    id: "turkish",
    name: "Turkish Airlines",
    iata: "TK",
    country: "Turkey",
    logoUrl: "https://images.kiwi.com/airlines/64/TK.png",
    manageBookingUrl: "https://www.turkishairlines.com/en-int/flights/manage-booking/"
  },
  {
    id: "lufthansa",
    name: "Lufthansa",
    iata: "LH",
    country: "Germany",
    logoUrl: "https://images.kiwi.com/airlines/64/LH.png",
    manageBookingUrl: "https://www.lufthansa.com/de/en/manage-booking"
  },
  {
    id: "easyjet",
    name: "easyJet",
    iata: "U2",
    country: "United Kingdom",
    logoUrl: "https://images.kiwi.com/airlines/64/U2.png",
    manageBookingUrl: "https://www.easyjet.com/en/manage-booking"
  },
  {
    id: "pegasus",
    name: "Pegasus Airlines",
    iata: "PC",
    country: "Turkey",
    logoUrl: "https://images.kiwi.com/airlines/64/PC.png",
    manageBookingUrl: "https://www.flypgs.com/en/manage-my-booking"
  },
  {
    id: "airfrance",
    name: "Air France",
    iata: "AF",
    country: "France",
    logoUrl: "https://images.kiwi.com/airlines/64/AF.png",
    manageBookingUrl: "https://www.airfrance.com/manage-booking"
  },
  {
    id: "klm",
    name: "KLM Royal Dutch Airlines",
    iata: "KL",
    country: "Netherlands",
    logoUrl: "https://images.kiwi.com/airlines/64/KL.png",
    manageBookingUrl: "https://www.klm.com/trip"
  },
  {
    id: "austrian",
    name: "Austrian Airlines",
    iata: "OS",
    country: "Austria",
    logoUrl: "https://images.kiwi.com/airlines/64/OS.png",
    manageBookingUrl: "https://www.austrian.com/at/en/manage-booking"
  },
  {
    id: "swiss",
    name: "SWISS",
    iata: "LX",
    country: "Switzerland",
    logoUrl: "https://images.kiwi.com/airlines/64/LX.png",
    manageBookingUrl: "https://www.swiss.com/ch/en/manage-booking"
  },
  {
    id: "emirates",
    name: "Emirates",
    iata: "EK",
    country: "UAE",
    logoUrl: "https://images.kiwi.com/airlines/64/EK.png",
    manageBookingUrl: "https://www.emirates.com/english/manage-booking/"
  },
  {
    id: "qatar",
    name: "Qatar Airways",
    iata: "QR",
    country: "Qatar",
    logoUrl: "https://images.kiwi.com/airlines/64/QR.png",
    manageBookingUrl: "https://www.qatarairways.com/en/manage-booking.html"
  },
  {
    id: "iberia",
    name: "Iberia",
    iata: "IB",
    country: "Spain",
    logoUrl: "https://images.kiwi.com/airlines/64/IB.png",
    manageBookingUrl: "https://www.iberia.com/es/your-flights/"
  },
  {
    id: "american",
    name: "American Airlines",
    iata: "AA",
    country: "USA",
    logoUrl: "https://images.kiwi.com/airlines/64/AA.png",
    manageBookingUrl: "https://www.aa.com/reservation/findReservationAccess.do"
  },
  {
    id: "eurowings",
    name: "Eurowings",
    iata: "EW",
    country: "Germany",
    logoUrl: "https://images.kiwi.com/airlines/64/EW.png",
    manageBookingUrl: "https://www.eurowings.com/en/my-trip.html"
  },
  {
    id: "aerolineas-argentinas",
    name: "Aerolíneas Argentinas",
    iata: "AR",
    country: "Argentina",
    logoUrl: "https://images.kiwi.com/airlines/64/AR.png",
    manageBookingUrl: "https://www.aerolineas.com.ar/en-us/booking-management"
  },
  {
    id: "sas",
    name: "SAS Scandinavian Airlines",
    iata: "SK",
    country: "Sweden",
    logoUrl: "https://images.kiwi.com/airlines/64/SK.png",
    manageBookingUrl: "https://www.flysas.com/en/book/my-bookings/"
  },
  {
    id: "latam",
    name: "LATAM Airlines",
    iata: "LA",
    country: "Chile",
    logoUrl: "https://images.kiwi.com/airlines/64/LA.png",
    manageBookingUrl: "https://www.latamairlines.com/us/en/my-trips"
  },
  {
    id: "flyone",
    name: "FlyOne",
    iata: "5F",
    country: "Moldova",
    logoUrl: "https://images.kiwi.com/airlines/64/5F.png",
    manageBookingUrl: "https://flyone.eu/en/Manage-booking"
  },
  {
    id: "fastjet",
    name: "fastjet",
    iata: "FN",
    country: "Zimbabwe",
    logoUrl: "https://images.kiwi.com/airlines/64/FN.png",
    manageBookingUrl: "https://www.fastjet.com/manage-booking"
  },
  {
    id: "transavia-france",
    name: "Transavia France",
    iata: "TO",
    country: "France",
    logoUrl: "https://images.kiwi.com/airlines/64/TO.png",
    manageBookingUrl: "https://www.transavia.com/en-EU/my-transavia/"
  },
  {
    id: "westjet",
    name: "WestJet",
    iata: "WS",
    country: "Canada",
    logoUrl: "https://images.kiwi.com/airlines/64/WS.png",
    manageBookingUrl: "https://www.westjet.com/en-ca/manage"
  },
  {
    id: "volotea",
    name: "Volotea",
    iata: "V7",
    country: "Spain",
    logoUrl: "https://images.kiwi.com/airlines/64/V7.png",
    manageBookingUrl: "https://www.volotea.com/en/your-booking/"
  },
  {
    id: "finnair",
    name: "Finnair",
    iata: "AY",
    country: "Finland",
    logoUrl: "https://images.kiwi.com/airlines/64/AY.png",
    manageBookingUrl: "https://www.finnair.com/en/manage-booking"
  },
  {
    id: "airbaltic",
    name: "airBaltic",
    iata: "BT",
    country: "Latvia",
    logoUrl: "https://images.kiwi.com/airlines/64/BT.png",
    manageBookingUrl: "https://www.airbaltic.com/en/manage-my-booking"
  },
  {
    id: "vietjet",
    name: "VietJet Air",
    iata: "VJ",
    country: "Vietnam",
    logoUrl: "https://images.kiwi.com/airlines/64/VJ.png",
    manageBookingUrl: "https://www.vietjetair.com/en/my-booking"
  },
  {
    id: "delta",
    name: "Delta Air Lines",
    iata: "DL",
    country: "USA",
    logoUrl: "https://images.kiwi.com/airlines/64/DL.png",
    manageBookingUrl: "https://www.delta.com/mytrips/"
  },
  {
    id: "alaska",
    name: "Alaska Airlines",
    iata: "AS",
    country: "USA",
    logoUrl: "https://images.kiwi.com/airlines/64/AS.png",
    manageBookingUrl: "https://www.alaskaair.com/booking/reservation-lookup"
  },
  {
    id: "hisky",
    name: "HiSky",
    iata: "H7",
    country: "Moldova",
    logoUrl: "https://images.kiwi.com/airlines/64/H7.png",
    manageBookingUrl: "https://hisky.aero/en/manage-booking"
  },
  {
    id: "tap-portugal",
    name: "TAP Air Portugal",
    iata: "TP",
    country: "Portugal",
    logoUrl: "https://images.kiwi.com/airlines/64/TP.png",
    manageBookingUrl: "https://www.flytap.com/en-pt/manage-booking"
  }
];

const DEFAULT_TEMPLATES = [
  {
    id: "pnr-verify",
    target: "partners",
    trigger: "::1",
    category: "PNR & Перевірка",
    titleUa: "Перевірка коректності PNR",
    descriptionUa: "Запит партнеру щодо правильності номера PNR для бронювання.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи правильний номер PNR для цього бронювання?",
    templateEn: "Dear team, could you kindly verify whether the PNR for this booking is correct?",
    placeholders: []
  },
  {
    id: "alt-refund",
    target: "partners",
    trigger: "::2",
    category: "Повернення & Зміни",
    titleUa: "Альтернатива не підходить / Повне повернення",
    descriptionUa: "Пасажир відхиляє запропоновану альтернативу, запит на повне повернення коштів.",
    templateUa: "Цей варіант пасажиру не підходить. Будь ласка, поверніть повну суму.",
    templateEn: "The alternative option is not suitable for the passenger. Kindly refund the full amount.",
    placeholders: []
  },
  {
    id: "wrong-date-issued",
    target: "partners",
    trigger: "::3",
    category: "Помилки & Виписка",
    titleUa: "Квиток оформлено не на ту дату",
    descriptionUa: "Повідомлення про помилку у виписаній даті квитка із зазначенням правильної.",
    templateUa: "Будь ласка, перевірте інформацію — квиток мав бути оформлений на [CORRECT_DATE], але його оформили на [INCORRECT_DATE].",
    templateEn: "Please kindly check the information — the ticket should have been issued for [CORRECT_DATE], but it was issued for [INCORRECT_DATE].",
    placeholders: ["CORRECT_DATE", "INCORRECT_DATE"]
  },
  {
    id: "denied-boarding",
    target: "partners",
    trigger: "::4",
    category: "Терміново / Проблеми",
    titleUa: "Пасажира не пустили на борт (Терміново)",
    descriptionUa: "Термінова перевірка інформації про відмову в посадці пасажиру.",
    templateUa: "Шановна команда, пасажир повідомляє, що йому не дозволили сісти на борт літака. Просимо терміново перевірити цю інформацію.",
    templateEn: "Dear team, the passenger reports that they were not allowed to board the flight. Please urgently verify this information.",
    placeholders: []
  },
  {
    id: "bt-pnr",
    target: "partners",
    trigger: "::5",
    category: "Реєстрація & Доступ",
    titleUa: "Надати BT PNR для реєстрації",
    descriptionUa: "Запит номера PNR авіакомпанії airBaltic (BT) для проходження чекіну.",
    templateUa: "Шановна команда, будь ласка, надайте номер PNR від BT для реєстрації.",
    templateEn: "Dear team, please provide the BT PNR for check-in.",
    placeholders: []
  },
  {
    id: "suspend-issuance",
    target: "partners",
    trigger: "::6",
    category: "Терміново / Проблеми",
    titleUa: "Призупинити видачу квитків (Терміново)",
    descriptionUa: "Негайна вимога зупинити виписку квитка в черзі.",
    templateUa: "Шановна команда, прошу негайно призупинити видачу квитків.",
    templateEn: "Dear team, please suspend the ticket issuance immediately.",
    placeholders: []
  },
  {
    id: "access-credentials",
    target: "partners",
    trigger: "::7",
    category: "Реєстрація & Доступ",
    titleUa: "Email та телефон для доступу до бронювання",
    descriptionUa: "Запит контактних даних агента, використаних під час створення замовлення.",
    templateUa: "Чи не могли б ви надати адресу електронної пошти та номер телефону, які можна використовувати для доступу до бронювання?",
    templateEn: "Dear Team, could you please provide the email address and phone number that can be used to access the booking? Thank you.",
    placeholders: []
  },
  {
    id: "wait-moment",
    target: "partners",
    trigger: "::8",
    category: "Комунікація",
    titleUa: "Зачекайте, перевіряємо у пасажира",
    descriptionUa: "Стандартна пауза для узгодження деталей з клієнтом.",
    templateUa: "Будь ласка, зачекайте хвилину, поки ми перевіримо цю інформацію у пасажира.",
    templateEn: "Please wait a moment while we verify this information with the passenger.",
    placeholders: []
  },
  {
    id: "booking-cancelled-web",
    target: "partners",
    trigger: "::9",
    category: "Терміново / Проблеми",
    titleUa: "Бронювання скасоване на сайті АК",
    descriptionUa: "Запит перевірки, чому бронювання відображається скасованим на сайті авіакомпанії.",
    templateUa: "Шановна команда, бронювання відображається як скасоване на сайті авіакомпанії. Чи не могли б ви перевірити цю інформацію?",
    templateEn: "Dear team, the booking appears as cancelled on the airline's website. Could you please check and verify this information?",
    placeholders: []
  },
  {
    id: "tickets-inactive",
    target: "partners",
    trigger: "::10",
    category: "Терміново / Проблеми",
    titleUa: "Квитки неактивні (Терміново)",
    descriptionUa: "Терміновий запит щодо неактивного статусу електронних квитків пасажира.",
    templateUa: "Шановна команда, пасажир стверджує, що його квитки неактивні. Будь ласка, перевірте це терміново та виправте ситуацію.",
    templateEn: "Dear team, the passenger claims that their tickets are inactive. Please check this urgently and resolve the issue immediately.",
    placeholders: []
  },
  {
    id: "wrong-date-rectify",
    target: "partners",
    trigger: "::11",
    category: "Помилки & Виписка",
    titleUa: "Квитки виписані не на ту дату (Виправлення)",
    descriptionUa: "Запит на термінове виправлення дати виписаного квитка відповідно до наданих даних.",
    templateUa: "Шановна команда, квитки виписані не на ту дату, хоча ми надали правильні дані. Чи не могли б ви перевірити та виправити це?",
    templateEn: "Dear team, the tickets were issued for the wrong date, although we provided the correct details. Could you please check and rectify this?",
    placeholders: []
  },
  {
    id: "pnr-photo-confirm",
    target: "partners",
    trigger: "::12",
    category: "PNR & Перевірка",
    titleUa: "Скріншот / Фотопідтвердження PNR",
    descriptionUa: "Запит скріншота з системи бронювання про те, що з PNR все добре.",
    templateUa: "Шановна команда, чи не могли б ви надати скріншот/фотопідтвердження того, що PNR активний і все в порядку?",
    templateEn: "Dear team, could you please provide a screenshot/photo confirmation showing that the PNR is active and in order?",
    placeholders: []
  },
  {
    id: "ryanair-fr-email",
    target: "partners",
    trigger: "::13",
    category: "Реєстрація & Доступ",
    titleUa: "Пошта для реєстрації на сайті Ryanair (FR)",
    descriptionUa: "Запит адреси електронної пошти консолідатора для чекіну на Ryanair.",
    templateUa: "Шановна команда, чи не могли б ви надати email-адресу, використану для цього бронювання, щоб ми могли пройти реєстрацію на сайті Ryanair (FR)?",
    templateEn: "Dear team, could you please provide the email address used for this booking so we can complete the check-in on the FR (Ryanair) website?",
    placeholders: []
  },
  {
    id: "bag-15kg",
    target: "partners",
    trigger: "::14",
    category: "Багаж",
    titleUa: "Додати 15 кг багажу + ціна",
    descriptionUa: "Запит вартості та можливості додати 15 кг зареєстрованого багажу.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати 15 кг зареєстрованого багажу до цього бронювання, та підказати вартість?",
    templateEn: "Dear team, could you please check if it is possible to add 15kg of checked baggage to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "bag-20kg",
    target: "partners",
    trigger: "::15",
    category: "Багаж",
    titleUa: "Додати 20 кг багажу + ціна",
    descriptionUa: "Запит вартості та можливості додати 20 кг зареєстрованого багажу.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати 20 кг зареєстрованого багажу до цього бронювання, та підказати вартість?",
    templateEn: "Dear team, could you please check if it is possible to add 20kg of checked baggage to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "bag-25kg",
    target: "partners",
    trigger: "::16",
    category: "Багаж",
    titleUa: "Додати 25 кг багажу + ціна",
    descriptionUa: "Запит вартості та можливості додати 25 кг зареєстрованого багажу.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати 25 кг зареєстрованого багажу до цього бронювання, та підказати вартість?",
    templateEn: "Dear team, could you please check if it is possible to add 25kg of checked baggage to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "bag-10kg-chk",
    target: "partners",
    trigger: "::17",
    category: "Багаж",
    titleUa: "Додати 10 кг багажу + ціна",
    descriptionUa: "Запит вартості та можливості додати 10 кг зареєстрованого багажу.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати 10 кг зареєстрованого багажу до цього бронювання, та підказати вартість?",
    templateEn: "Dear team, could you please check if it is possible to add 10kg of checked baggage to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "cabin-bag-8-10",
    target: "partners",
    trigger: "::18",
    category: "Багаж",
    titleUa: "Додати 8–10 кг ручної поклажі + ціна",
    descriptionUa: "Запит додавання великої ручної поклажі (carry-on / priority).",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати 8–10 кг ручної поклажі (carry-on) до цього бронювання, та підказати вартість?",
    templateEn: "Dear team, could you please check if it is possible to add an 8–10kg cabin bag (carry-on) to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "seat-xl",
    target: "partners",
    trigger: "::19",
    category: "Місця & Послуги",
    titleUa: "Додати місце XL (Extra Legroom) + ціна",
    descriptionUa: "Запит вартості та вибору місця з додатковим простором для ніг.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати місце XL (зі збільшеним простором для ніг) до цього бронювання, та повідомити вартість?",
    templateEn: "Dear team, could you please check if it is possible to add an XL (extra legroom) seat to this booking, and advise on the price?",
    placeholders: []
  },
  {
    id: "seat-specific",
    target: "partners",
    trigger: "::20",
    category: "Місця & Послуги",
    titleUa: "Додати конкретне місце + ціна",
    descriptionUa: "Запит закріплення певного номеру місця в салоні за пасажиром.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо закріпити конкретне місце ([SEAT_NUMBER]) за цим бронюванням, та повідомити вартість?",
    templateEn: "Dear team, could you please check if it is possible to add a specific seat ([SEAT_NUMBER]) to this booking, and advise on the price?",
    placeholders: ["SEAT_NUMBER"]
  },
  {
    id: "meal-add",
    target: "partners",
    trigger: "::21",
    category: "Місця & Послуги",
    titleUa: "Додати харчування + ціна",
    descriptionUa: "Запит спеціального або стандартного харчування на рейсі.",
    templateUa: "Шановна команда, чи не могли б ви перевірити, чи можливо додати харчування ([MEAL_TYPE]) до цього бронювання, та повідомити вартість?",
    templateEn: "Dear team, could you please check if it is possible to add a meal ([MEAL_TYPE]) to this booking, and advise on the price?",
    placeholders: ["MEAL_TYPE"]
  },
  {
    id: "universal-request",
    target: "partners",
    trigger: "::22",
    category: "Комунікація",
    titleUa: "Універсальний початок запиту",
    descriptionUa: "Гнучкий шаблон для оформлення довільного запиту партнерам з номером PNR.",
    templateUa: "Шановна команда, щодо бронювання [PNR]: чи не могли б ви допомогти з наступним запитом — [REQUEST_DETAILS]? Дякуємо заздалегідь.",
    templateEn: "Dear team, regarding booking [PNR]: could you please assist with the following request — [REQUEST_DETAILS]? Thank you in advance.",
    placeholders: ["PNR", "REQUEST_DETAILS"]
  },
  {
    id: "pk-fire-bg",
    target: "partners",
    trigger: "::23",
    category: "Фінанси / PK FIRE",
    titleUa: "PK FIRE BG — оновлення суми до оплати",
    descriptionUa: "Запит на зміну суми до оплати в системі PK FIRE між старим і новим замовленням.",
    templateUa: "PK FIRE BG\nOld order: [OLD_ORDER_ID]\nNew unpaid: [NEW_ORDER_ID]\nPlease update the amount to pay. Thank you!",
    templateEn: "PK FIRE BG\nOld order: [OLD_ORDER_ID]\nNew unpaid: [NEW_ORDER_ID]\nPlease update the amount to pay. Thank you!",
    placeholders: ["OLD_ORDER_ID", "NEW_ORDER_ID"]
  }
];

function getNextTemplateTriggerNumber(list = state?.templates) {
  let maxNum = 0;
  const arr = list && list.length ? list : DEFAULT_TEMPLATES;
  arr.forEach(t => {
    const match = (t.trigger || '').match(/^::(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    }
  });
  if (maxNum === 0) {
    maxNum = arr.length;
  }
  return maxNum + 1;
}

function migrateTemplateTriggers(templatesList) {
  if (!Array.isArray(templatesList)) return { changed: false, migratedTemplates: templatesList };
  const defaultMap = {};
  DEFAULT_TEMPLATES.forEach(dt => { defaultMap[dt.id] = dt.trigger; });
  let changed = false;
  let maxNum = 0;

  templatesList.forEach(t => {
    if (defaultMap[t.id] && t.trigger !== defaultMap[t.id]) {
      t.trigger = defaultMap[t.id];
      changed = true;
    }
    const match = (t.trigger || '').match(/^::(\d+)$/);
    if (match) {
      const n = parseInt(match[1], 10);
      if (!isNaN(n) && n > maxNum) maxNum = n;
    }
  });

  templatesList.forEach(t => {
    if (!t.trigger || !t.trigger.match(/^::\d+$/)) {
      maxNum++;
      t.trigger = `::${maxNum}`;
      changed = true;
    }
  });

  return { changed, migratedTemplates: templatesList };
}

// Safe Lucide icon renderer with optional scoping for high performance
function safeCreateIcons(rootElement) {
  try {
    if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
      if (rootElement && rootElement instanceof HTMLElement) {
        lucide.createIcons({ root: rootElement });
      } else {
        lucide.createIcons();
      }
    }
  } catch (e) {
    console.warn('Lucide icon render skipped', e);
  }
}
const state = {
  currentTab: 'directory', // 'directory' | 'templates' | 'altparser'
  templateTargetTab: 'partners', // 'partners' | 'callcenter'
  airlines: [],
  templates: [],
  airlineSearch: '',
  activeTemplateCategory: 'All',
  selectedTemplate: null,
  placeholderValues: {},
  customEditedText: '',
  customEditedUaText: '',
  recentTemplateIds: [],
  dropdownSelectedIndex: -1,
  activeTriggerSuggestions: [],
  favoriteAirlines: new Set(),
  showOnlyFavorites: false,
  favoriteTemplates: new Set(),
  showOnlyFavoriteTemplates: false,
  airlineNotes: {},
  geminiApiKey: localStorage.getItem('tickets_ua_gemini_key') || '',
  altParser: {
    date: '',
    flight: '',
    time: '',
    route: '',
    formatStyle: 'standard', // 'standard' | 'compact' | 'brackets'
    rawOcrText: '',
    isProcessing: false
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  await loadData();
  initTabs();
  initAirlineDirectory();
  initTemplateGenerator();
  initAltParser();
  initShortcuts();
  initFirebaseSync();
  updateAiBadgeStatus();
  safeCreateIcons();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('tickets_ua_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  applyTheme(isDark);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentIsDark = document.documentElement.classList.contains('dark');
      applyTheme(!currentIsDark);
    });
  }
}

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('tickets_ua_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('tickets_ua_theme', 'light');
  }
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    safeCreateIcons();
  }
}


// ==========================================
// Team Cloud Sync (Google Firebase Firestore)
// ==========================================
let firebaseApp = null;
let firestoreDb = null;

function getActiveFirebaseConfig() {
  if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && window.FIREBASE_CONFIG.projectId) {
    return window.FIREBASE_CONFIG;
  }
  const saved = localStorage.getItem('tickets_ua_firebase_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId) return parsed;
    } catch (e) {}
  }
  return null;
}

function initFirebaseSync() {
  const config = getActiveFirebaseConfig();
  const dot = document.getElementById('cloudSyncDot');
  const text = document.getElementById('cloudSyncText');
  const badge = document.getElementById('cloudSyncBadge');

  if (!config || typeof firebase === 'undefined') {
    if (dot) dot.className = 'w-2 h-2 rounded-full bg-slate-400';
    if (text) text.textContent = '\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0439';
    if (badge) badge.title = '\u041F\u0440\u0430\u0446\u044E\u0454 \u0432 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456';
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    firestoreDb = firebase.firestore();
    window.firebaseDb = firestoreDb;

    // Update UI badge
    if (dot) dot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
    if (text) text.textContent = '\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043D\u043B\u0430\u0439\u043D';
    if (badge) {
      badge.title = '\u0425\u043C\u0430\u0440\u043D\u0430 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u0430';
      badge.classList.add('border-emerald-300', 'dark:border-emerald-700/60');
    }

    // 1. Listen for Shared Airlines (URLs, names)
    firestoreDb.collection('shared_airlines').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        seedAirlinesToFirestore();
      } else {
        snapshot.docChanges().forEach((change) => {
          const docData = change.doc.data();
          const id = change.doc.id;
          const idx = state.airlines.findIndex(a => a.id === id);
          if (change.type === 'added' || change.type === 'modified') {
            if (idx !== -1) {
              state.airlines[idx] = { ...state.airlines[idx], ...docData };
            } else {
              state.airlines.push(docData);
            }
          } else if (change.type === 'removed') {
            if (idx !== -1) state.airlines.splice(idx, 1);
          }
        });
        localStorage.setItem('tickets_ua_custom_airlines', JSON.stringify(state.airlines));
        updateHeaderCounters();
        renderAirlineGrid();
      }
    }, (err) => {
      console.warn('Firestore airlines sync warning:', err);
    });

    // 3. Listen for Shared Templates
    firestoreDb.collection('shared_templates').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        seedTemplatesToFirestore();
      } else {
        const remoteTemplates = [];
        snapshot.forEach(doc => remoteTemplates.push(doc.data()));
        if (remoteTemplates.length > 0) {
          const { changed, migratedTemplates } = migrateTemplateTriggers(remoteTemplates);
          state.templates = migratedTemplates;
          localStorage.setItem('tickets_ua_custom_templates', JSON.stringify(state.templates));
          if (changed && firestoreDb) {
            seedTemplatesToFirestore();
          }
          updateHeaderCounters();
          updateTargetTabButtons();
          renderCategoryPills();
          renderTemplatesList();
          if (state.selectedTemplate) {
            const currentSelected = state.templates.find(t => t.id === state.selectedTemplate.id);
            if (currentSelected) {
              state.selectedTemplate = currentSelected;
              renderSelectedTemplateWorkspace();
            }
          }
        }
      }
    }, (err) => {
      console.warn('Firestore templates sync warning:', err);
    });

    // 2. Listen for Shared Airline Notes
    firestoreDb.collection('shared_airline_notes').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const id = change.doc.id;
        const data = change.doc.data();
        if (change.type === 'added' || change.type === 'modified') {
          state.airlineNotes[id] = data.text || '';
        } else if (change.type === 'removed') {
          delete state.airlineNotes[id];
        }
      });
      localStorage.setItem('tickets_ua_airline_notes', JSON.stringify(state.airlineNotes));
      renderAirlineGrid();
    }, (err) => {
      console.warn('Firestore notes sync warning:', err);
    });

    // 4. Listen for Shared AI Translation Config (Gemini API Key)
    firestoreDb.collection('shared_settings').doc('ai_config').onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        if (data && typeof data.geminiApiKey === 'string') {
          state.geminiApiKey = data.geminiApiKey;
          if (data.geminiApiKey) {
            localStorage.setItem('tickets_ua_gemini_key', data.geminiApiKey);
          } else {
            localStorage.removeItem('tickets_ua_gemini_key');
          }
          updateAiBadgeStatus();
        }
      }
    }, (err) => {
      console.warn('Firestore ai_config sync warning:', err);
    });

    updateAiBadgeStatus();

  } catch (err) {
    console.warn('Firebase init error:', err);
    if (dot) dot.className = 'w-2 h-2 rounded-full bg-amber-500';
    if (text) text.textContent = '\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0445\u043C\u0430\u0440\u0438';
  }
}

async function seedAirlinesToFirestore() {
  if (!firestoreDb || !state.airlines.length) return;
  const batch = firestoreDb.batch();
  state.airlines.forEach(airline => {
    const ref = firestoreDb.collection('shared_airlines').doc(airline.id);
    batch.set(ref, airline, { merge: true });
  });
  try {
    await batch.commit();
    console.info('Airlines successfully seeded to Firestore');
  } catch (e) {
    console.warn('Error seeding airlines:', e);
  }
}

async function seedTemplatesToFirestore() {
  if (!firestoreDb || !state.templates.length) return;
  const batch = firestoreDb.batch();
  state.templates.forEach(tpl => {
    const ref = firestoreDb.collection('shared_templates').doc(tpl.id);
    batch.set(ref, tpl, { merge: true });
  });
  try {
    await batch.commit();
    console.info('Templates successfully seeded to Firestore');
  } catch (e) {
    console.warn('Error seeding templates:', e);
  }
}

// Load Data with fallback support
async function loadData() {
  // Check localStorage for customized airlines
  const localAirlines = localStorage.getItem('tickets_ua_custom_airlines');
  if (localAirlines) {
    try {
      state.airlines = JSON.parse(localAirlines);
    } catch (e) {
      console.warn('Could not parse local airlines', e);
    }
  }

  // Fetch airlines.json and sync/enrich
  try {
    const res = await fetch('airlines.json');
    if (res.ok) {
      const fileAirlines = await res.json();
      if (!state.airlines.length || state.airlines.length < fileAirlines.length) {
        state.airlines = fileAirlines;
        localStorage.setItem('tickets_ua_custom_airlines', JSON.stringify(fileAirlines));
      } else {
        state.airlines = state.airlines.map(a => {
          const matching = fileAirlines.find(fa => fa.id === a.id);
          if (matching) {
            return {
              ...matching,
              ...a,
              rules: a.rules || matching.rules,
              checkinUrl: a.checkinUrl || matching.checkinUrl
            };
          }
          return a;
        });
      }
    } else if (!state.airlines.length) {
      state.airlines = [...DEFAULT_AIRLINES];
    }
  } catch (err) {
    if (!state.airlines.length) {
      state.airlines = [...DEFAULT_AIRLINES];
    }
  }

  // Load Templates
  let loadedTemplates = [];
  try {
    const res = await fetch('templates.json');
    if (res.ok) {
      loadedTemplates = await res.json();
    }
  } catch (err) {
    console.info('Using embedded DEFAULT_TEMPLATES', err);
  }

  if (!loadedTemplates || !loadedTemplates.length) {
    loadedTemplates = [...DEFAULT_TEMPLATES];
  }

  // Check localStorage for customized templates
  const localTemplates = localStorage.getItem('tickets_ua_custom_templates');
  if (localTemplates) {
    try {
      const parsedLocal = JSON.parse(localTemplates);
      if (Array.isArray(parsedLocal) && parsedLocal.length > 0) {
        const hasNewFormat = parsedLocal.some(t => t.target === 'partners');
        if (hasNewFormat && parsedLocal.length >= loadedTemplates.length) {
          loadedTemplates = parsedLocal;
        } else {
          const customOnly = parsedLocal.filter(t => t.id && t.id.startsWith('tpl_custom_'));
          loadedTemplates = [...loadedTemplates, ...customOnly];
        }
      }
    } catch (e) {
      console.warn('Could not parse local templates', e);
    }
  }

  // Ensure triggers are numeric ::1, ::2, etc.
  const { migratedTemplates } = migrateTemplateTriggers(loadedTemplates);
  state.templates = migratedTemplates;
  try {
    localStorage.setItem('tickets_ua_custom_templates', JSON.stringify(state.templates));
  } catch (e) {}

  // Load Recent templates
  try {
    const savedRecents = localStorage.getItem('tickets_ua_recent_templates');
    if (savedRecents) {
      state.recentTemplateIds = JSON.parse(savedRecents);
    }
  } catch (e) {
    state.recentTemplateIds = [];
  }

  // Load Favorite Templates
  try {
    const savedTplFavs = localStorage.getItem('tickets_ua_favorite_templates');
    state.favoriteTemplates = savedTplFavs ? new Set(JSON.parse(savedTplFavs)) : new Set();
  } catch (e) {
    state.favoriteTemplates = new Set();
  }

  // Load Favorite Airlines
  try {
    const savedFavs = localStorage.getItem('tickets_ua_favorite_airlines');
    if (savedFavs) {
      state.favoriteAirlines = new Set(JSON.parse(savedFavs));
    } else {
      // Default top favorites on initial launch
      state.favoriteAirlines = new Set(['ryanair', 'wizzair', 'lot', 'turkish']);
      localStorage.setItem('tickets_ua_favorite_airlines', JSON.stringify([...state.favoriteAirlines]));
    }
  } catch (e) {
    state.favoriteAirlines = new Set(['ryanair', 'wizzair', 'lot', 'turkish']);
  }

  // Load Airline Notes
  try {
    const savedNotes = localStorage.getItem('tickets_ua_airline_notes');
    state.airlineNotes = savedNotes ? JSON.parse(savedNotes) : {};
  } catch (e) {
    state.airlineNotes = {};
  }

  // Update counters in header
  updateHeaderCounters();
}

function updateHeaderCounters() {
  const airlinesCountEl = document.getElementById('airlinesCount');
  const templatesCountEl = document.getElementById('templatesCount');
  if (airlinesCountEl) airlinesCountEl.textContent = state.airlines.length;
  if (templatesCountEl) templatesCountEl.textContent = state.templates.length;
}

// Navigation Tabs
function initTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;

  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    const isTarget = btn.getAttribute('data-tab-target') === tabId;
    if (isTarget) {
      btn.className = "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-sky-600 text-white shadow-sm";
    } else {
      btn.className = "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold transition-all text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/60";
    }
  });

  const directorySection = document.getElementById('directorySection');
  const templatesSection = document.getElementById('templatesSection');
  const altParserSection = document.getElementById('altParserSection');

  if (directorySection) directorySection.classList.toggle('hidden', tabId !== 'directory');
  if (templatesSection) templatesSection.classList.toggle('hidden', tabId !== 'templates');
  if (altParserSection) altParserSection.classList.toggle('hidden', tabId !== 'altparser');

  if (tabId === 'directory') {
    const input = document.getElementById('airlineSearchInput');
    if (input) setTimeout(() => input.focus(), 50);
  } else if (tabId === 'templates') {
    const input = document.getElementById('triggerBarInput');
    if (input) setTimeout(() => input.focus(), 50);
  } else if (tabId === 'altparser') {
    safeCreateIcons(altParserSection);
  }
}

// ==========================================
// SECTION 1: Manage Booking Directory
// ==========================================

function initAirlineDirectory() {
  const searchInput = document.getElementById('airlineSearchInput');
  const clearBtn = document.getElementById('airlineSearchClear');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.airlineSearch = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', state.airlineSearch.length === 0);
      }
      renderAirlineGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.airlineSearch = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearBtn.classList.add('hidden');
      renderAirlineGrid();
    });
  }

  renderAirlineGrid();
}

function renderAirlineGrid() {
  const grid = document.getElementById('airlinesGrid');
  const counterEl = document.getElementById('filteredAirlinesCount');
  const favBadge = document.getElementById('favsCountBadge');
  if (!grid) return;

  if (favBadge) {
    favBadge.textContent = state.favoriteAirlines.size;
  }

  const query = state.airlineSearch;
  let filtered = state.airlines.filter(airline => {
    if (state.showOnlyFavorites && !state.favoriteAirlines.has(airline.id)) {
      return false;
    }
    if (!query) return true;
    return (
      airline.name.toLowerCase().includes(query) ||
      airline.iata.toLowerCase().includes(query) ||
      (airline.country && airline.country.toLowerCase().includes(query))
    );
  });

  if (counterEl) {
    counterEl.textContent = `Показано ${filtered.length} з ${state.airlines.length} АК`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
        <i data-lucide="plane-off" class="w-12 h-12 mx-auto mb-3 opacity-50 stroke-[1.5]"></i>
        <p class="text-base font-medium">Авіакомпаній не знайдено</p>
        <p class="text-xs text-slate-400 mt-1">${state.showOnlyFavorites ? 'У вас поки немає закріплених АК. Натисніть зірочку на картці, щоб додати.' : 'Спробуйте інший запит'}</p>
      </div>
    `;
    safeCreateIcons();
    return;
  }

  // If viewing all, without search query, and there are favorites: show favorites section at the top!
  if (!query && !state.showOnlyFavorites && state.favoriteAirlines.size > 0) {
    const favAirlines = filtered.filter(a => state.favoriteAirlines.has(a.id));
    const otherAirlines = filtered.filter(a => !state.favoriteAirlines.has(a.id));

    let html = '';
    if (favAirlines.length > 0) {
      html += `
        <div class="col-span-full pt-1 pb-2 flex items-center justify-between border-b border-amber-200/60 dark:border-amber-800/40">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
            <span>Закріплені / Найчастіші авіакомпанії (${favAirlines.length})</span>
          </div>
          <span class="text-[11px] text-slate-500">Швидкий доступ</span>
        </div>
      `;
      html += favAirlines.map(airline => renderCardHtml(airline)).join('');
    }

    if (otherAirlines.length > 0) {
      html += `
        <div class="col-span-full pt-6 pb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200/60 dark:border-slate-700/60">
          <i data-lucide="plane" class="w-4 h-4"></i>
          <span>Усі авіакомпанії (${otherAirlines.length})</span>
        </div>
      `;
      html += otherAirlines.map(airline => renderCardHtml(airline)).join('');
    }

    grid.innerHTML = html;
  } else {
    grid.innerHTML = filtered.map(airline => renderCardHtml(airline)).join('');
  }

  safeCreateIcons(grid);
}

function renderCardHtml(airline) {
  const isFav = state.favoriteAirlines.has(airline.id);
  const note = state.airlineNotes[airline.id] || '';

  return `
    <div class="group relative airline-card flex flex-col justify-between p-4 sm:p-5 bg-white dark:bg-slate-800 rounded-2xl border ${
      isFav 
        ? 'border-amber-300 dark:border-amber-500/60 shadow-xs ring-1 ring-amber-400/20' 
        : 'border-slate-200/90 dark:border-slate-700/80 shadow-xs'
    } select-none">
      
      <!-- Top Left: IATA Badge -->
      <div class="absolute top-3.5 left-3.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
        ${airline.iata}
      </div>

      <!-- Top Right: ONLY Star ⭐ and 3 Dots ⋮ (Clean & Ergonomic) -->
      <div class="absolute top-2.5 right-2.5 flex items-center gap-1" onclick="event.stopPropagation()">
        
        <!-- Star Favorite Button -->
        <button onclick="toggleFavoriteAirline(event, '${airline.id}')" 
                class="btn-star-fav p-1.5 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/40 ${
                  isFav 
                    ? 'text-amber-400' 
                    : 'text-slate-300 dark:text-slate-600 hover:text-amber-400 dark:hover:text-amber-400'
                }"
                title="${isFav ? 'Прибрати з закріплених' : 'Закріпити у вибрані'}">
          <i data-lucide="star" class="w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}"></i>
        </button>

        <!-- 3 Dots Menu Button -->
        <div class="relative">
          <button onclick="toggleCardMenu(event, '${airline.id}')" 
                  class="btn-dots-menu p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 relative"
                  title="Меню дій">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
            ${note ? '<span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-800"></span>' : ''}
          </button>

          <!-- Floating Dropdown Menu -->
          <div id="menu_${airline.id}" 
               class="card-dropdown-menu hidden absolute right-0 mt-1.5 w-52 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xl py-1.5 z-40 dropdown-animate text-left">
            
            ${note ? `
              <button onclick="openViewAirlineNoteModal(event, '${airline.id}'); hideAllCardMenus();"
                      class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
                <i data-lucide="file-text" class="w-3.5 h-3.5 text-amber-500"></i>
                <span class="font-medium">Читати нотатку</span>
              </button>
              <button onclick="openAirlineNoteModal(event, '${airline.id}'); hideAllCardMenus();"
                      class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
                <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-600"></i>
                <span>Редагувати нотатку</span>
              </button>
            ` : `
              <button onclick="openAirlineNoteModal(event, '${airline.id}'); hideAllCardMenus();"
                      class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
                <i data-lucide="plus-circle" class="w-3.5 h-3.5 text-amber-500"></i>
                <span class="font-medium">Додати нотатку</span>
              </button>
            `}

            <div class="my-1 border-t border-slate-100 dark:border-slate-700/60"></div>

            <button onclick="openEditAirlineModal(event, '${airline.id}'); hideAllCardMenus();"
                    class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
              <i data-lucide="pencil" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Редагувати посилання</span>
            </button>

            <button onclick="copyAirlineUrl(event, '${airline.manageBookingUrl}'); hideAllCardMenus();"
                    class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
              <i data-lucide="copy" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Копіювати Manage лінк</span>
            </button>

            <button onclick="copyAirlineUrl(event, '${airline.checkinUrl || airline.manageBookingUrl}'); hideAllCardMenus();"
                    class="w-full px-3 py-2 text-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors">
              <i data-lucide="copy" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>Копіювати Check-in лінк</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Center: Logo with smooth zoom micro-interaction -->
      <div class="airline-logo-box w-16 h-16 mx-auto my-3 flex items-center justify-center rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 p-2 border border-slate-100 dark:border-slate-700/40 cursor-pointer"
           onclick="openExternalUrl(event, '${airline.manageBookingUrl}')">
        <img src="${airline.logoUrl}" 
             alt="${airline.name}"
             loading="lazy" 
             decoding="async"
             class="airline-logo-img max-w-full max-h-full object-contain filter drop-shadow-sm" 
             onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'font-black text-xl text-sky-600 dark:text-sky-400 font-mono\\'>${airline.iata}</div>';" />
      </div>

      <!-- Airline Name -->
      <div class="w-full text-center">
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate w-full cursor-pointer hover:text-sky-600 dark:hover:text-sky-400 transition-colors" 
             onclick="openExternalUrl(event, '${airline.manageBookingUrl}')"
             title="${escapeHtml(airline.name)}">
          ${escapeHtml(airline.name)}
        </div>
      </div>

      <!-- Agent Note snippet (Click to open full reading modal) -->
      ${note ? `
        <div class="w-full mt-2.5 p-2 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-[11px] text-amber-800 dark:text-amber-300 truncate cursor-pointer hover:bg-amber-100/70 transition-colors"
             onclick="openViewAirlineNoteModal(event, '${airline.id}')"
             title="Клікніть, щоб переглянути нотатку">
          📌 <span class="font-medium">${escapeHtml(note)}</span>
        </div>
      ` : `
        <div class="h-2"></div>
      `}

      <!-- Bottom: Dual Action Links (Manage Booking + Check-in with micro-hover shifts) -->
      <div class="w-full grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
        <button onclick="openExternalUrl(event, '${airline.manageBookingUrl}')"
                class="btn-card-action px-2 py-1.5 rounded-xl text-[11px] font-semibold bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/60 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80 flex items-center justify-center gap-1"
                title="Відкрити Manage Booking (послуги / багаж)">
          <span>Manage</span>
          <i data-lucide="external-link" class="w-3 h-3 btn-icon-shift"></i>
        </button>
        <button onclick="openExternalUrl(event, '${airline.checkinUrl || airline.manageBookingUrl}')"
                class="btn-card-action px-2 py-1.5 rounded-xl text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 flex items-center justify-center gap-1"
                title="Відкрити Online Check-in (реєстрація на рейс)">
          <span>Check-in</span>
          <i data-lucide="ticket" class="w-3 h-3 btn-icon-rotate"></i>
        </button>
      </div>

    </div>
  `;
}

function toggleCardMenu(event, airlineId) {
  if (event) event.stopPropagation();
  const currentMenu = document.getElementById(`menu_${airlineId}`);
  const isCurrentlyOpen = currentMenu && !currentMenu.classList.contains('hidden');

  hideAllCardMenus();

  if (currentMenu && !isCurrentlyOpen) {
    currentMenu.classList.remove('hidden');
    safeCreateIcons();
  }
}

function hideAllCardMenus() {
  document.querySelectorAll('.card-dropdown-menu').forEach(el => el.classList.add('hidden'));
}

// Global click outside closes card dropdown menus
document.addEventListener('click', () => {
  hideAllCardMenus();
});

function toggleFavoriteAirline(event, id) {
  if (event) event.stopPropagation();
  if (state.favoriteAirlines.has(id)) {
    state.favoriteAirlines.delete(id);
    showToast('Видалено з закріплених');
  } else {
    state.favoriteAirlines.add(id);
    showToast('⭐ Закріплено у вибрані!');
  }
  localStorage.setItem('tickets_ua_favorite_airlines', JSON.stringify([...state.favoriteAirlines]));
  renderAirlineGrid();
}

function setAirlineFavoritesFilter(onlyFavs) {
  state.showOnlyFavorites = onlyFavs;
  
  const allBtn = document.getElementById('filterAllBtn');
  const favsBtn = document.getElementById('filterFavsBtn');
  
  if (allBtn && favsBtn) {
    if (onlyFavs) {
      allBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-slate-600 dark:text-slate-300 hover:text-sky-600";
      favsBtn.className = "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs";
    } else {
      allBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs";
      favsBtn.className = "flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all text-slate-600 dark:text-slate-300 hover:text-amber-500";
    }
  }

  renderAirlineGrid();
}

function openAirlineNoteModal(event, id) {
  if (event) event.stopPropagation();
  const airline = state.airlines.find(a => a.id === id);
  if (!airline) return;

  document.getElementById('noteAirId').value = airline.id;
  document.getElementById('noteAirName').textContent = `${airline.name} (${airline.iata})`;
  document.getElementById('noteAirText').value = state.airlineNotes[id] || '';

  const modal = document.getElementById('airlineNoteModal');
  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => document.getElementById('noteAirText')?.focus(), 50);
  }
  safeCreateIcons();
}

function closeAirlineNoteModal() {
  const modal = document.getElementById('airlineNoteModal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveAirlineNote(e) {
  e.preventDefault();
  const id = document.getElementById('noteAirId').value;
  const text = document.getElementById('noteAirText').value.trim();

  if (text) {
    state.airlineNotes[id] = text;
    if (window.firebaseDb) {
      window.firebaseDb.collection('shared_airline_notes').doc(id).set({
        text: text,
        updatedAt: new Date().toISOString()
      }).then(() => showToast('РќРѕС‚Р°С‚РєСѓ Р·Р±РµСЂРµР¶РµРЅРѕ РґР»СЏ Р’РЎР†Р„Р‡ РєРѕРјР°РЅРґРё! рџЊђ'))
        .catch(err => {
          console.warn('Firebase note error:', err);
          showToast('РќРѕС‚Р°С‚РєСѓ Р·Р±РµСЂРµР¶РµРЅРѕ Р»РѕРєР°Р»СЊРЅРѕ');
        });
    } else {
      showToast('РќРѕС‚Р°С‚РєСѓ Р·Р±РµСЂРµР¶РµРЅРѕ!');
    }
  } else {
    delete state.airlineNotes[id];
    if (window.firebaseDb) {
      window.firebaseDb.collection('shared_airline_notes').doc(id).delete()
        .then(() => showToast('РќРѕС‚Р°С‚РєСѓ РѕС‡РёС‰РµРЅРѕ РґР»СЏ РІСЃС–С…'))
        .catch(err => console.warn(err));
    } else {
      showToast('РќРѕС‚Р°С‚РєСѓ РѕС‡РёС‰РµРЅРѕ');
    }
  }

  localStorage.setItem('tickets_ua_airline_notes', JSON.stringify(state.airlineNotes));
  renderAirlineGrid();
  closeAirlineNoteModal();
}

function handleDeleteAirlineNote() {
  const id = document.getElementById('noteAirId').value;
  if (state.airlineNotes[id]) {
    delete state.airlineNotes[id];
    localStorage.setItem('tickets_ua_airline_notes', JSON.stringify(state.airlineNotes));
    if (window.firebaseDb) {
      window.firebaseDb.collection('shared_airline_notes').doc(id).delete()
        .catch(err => console.warn(err));
    }
    renderAirlineGrid();
    closeAirlineNoteModal();
    showToast('РќРѕС‚Р°С‚РєСѓ РІРёРґР°Р»РµРЅРѕ РґР»СЏ РІСЃС–С…');
  } else {
    closeAirlineNoteModal();
  }
}

let currentViewingAirlineId = null;

function openViewAirlineNoteModal(event, id) {
  if (event) event.stopPropagation();
  const airline = state.airlines.find(a => a.id === id);
  if (!airline) return;

  currentViewingAirlineId = id;
  const note = state.airlineNotes[id] || '';

  const nameEl = document.getElementById('viewNoteAirName');
  const iataEl = document.getElementById('viewNoteAirIata');
  const textEl = document.getElementById('viewNoteText');

  if (nameEl) nameEl.textContent = airline.name;
  if (iataEl) iataEl.textContent = airline.iata;
  if (textEl) textEl.textContent = note || '(Нотатка порожня)';

  const modal = document.getElementById('viewAirlineNoteModal');
  if (modal) modal.classList.remove('hidden');
  safeCreateIcons(modal);
}

function closeViewAirlineNoteModal() {
  const modal = document.getElementById('viewAirlineNoteModal');
  if (modal) modal.classList.add('hidden');
}

function switchToEditAirlineNote() {
  const id = currentViewingAirlineId;
  closeViewAirlineNoteModal();
  if (id) {
    openAirlineNoteModal(null, id);
  }
}

function copyViewingNoteText() {
  const textEl = document.getElementById('viewNoteText');
  if (textEl && textEl.textContent) {
    navigator.clipboard.writeText(textEl.textContent).then(() => {
      showToast('Текст нотатки скопійовано!');
    });
  }
}

function openEditAirlineModal(event, id) {
  if (event) event.stopPropagation();
  const airline = state.airlines.find(a => a.id === id);
  if (!airline) return;

  document.getElementById('editAirId').value = airline.id;
  document.getElementById('editAirName').value = airline.name;
  document.getElementById('editAirIata').value = airline.iata;
  document.getElementById('editAirUrl').value = airline.manageBookingUrl;
  document.getElementById('editAirCheckinUrl').value = airline.checkinUrl || airline.manageBookingUrl;
  document.getElementById('editAirLogo').value = airline.logoUrl || '';

  const modal = document.getElementById('editAirlineModal');
  if (modal) modal.classList.remove('hidden');
  safeCreateIcons(modal);
}

function closeEditAirlineModal() {
  const modal = document.getElementById('editAirlineModal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveEditAirline(e) {
  e.preventDefault();
  const id = document.getElementById('editAirId').value;
  const name = document.getElementById('editAirName').value.trim();
  const iata = document.getElementById('editAirIata').value.trim().toUpperCase();
  const manageUrl = document.getElementById('editAirUrl').value.trim();
  const checkinUrl = document.getElementById('editAirCheckinUrl').value.trim();
  let logo = document.getElementById('editAirLogo').value.trim();
  if (!logo) {
    logo = `https://images.kiwi.com/airlines/64/${iata}.png`;
  }

  const index = state.airlines.findIndex(a => a.id === id);
  if (index !== -1) {
    const updated = {
      ...state.airlines[index],
      name,
      iata,
      manageBookingUrl: manageUrl,
      checkinUrl: checkinUrl || manageUrl,
      logoUrl: logo,
      updatedAt: new Date().toISOString()
    };
    state.airlines[index] = updated;

    localStorage.setItem('tickets_ua_custom_airlines', JSON.stringify(state.airlines));
    renderAirlineGrid();
    closeEditAirlineModal();

    if (window.firebaseDb) {
      window.firebaseDb.collection('shared_airlines').doc(id).set(updated, { merge: true })
        .then(() => showToast(`РџРѕСЃРёР»Р°РЅРЅСЏ РґР»СЏ ${name} РѕРЅРѕРІР»РµРЅРѕ РґР»СЏ Р’РЎР†РҐ РѕРїРµСЂР°С‚РѕСЂС–РІ! рџЊђ`))
        .catch(err => {
          console.warn('Firebase error:', err);
          showToast(`РџРѕСЃРёР»Р°РЅРЅСЏ РґР»СЏ ${name} Р·Р±РµСЂРµР¶РµРЅРѕ Р»РѕРєР°Р»СЊРЅРѕ`);
        });
    } else {
      showToast(`РџРѕСЃРёР»Р°РЅРЅСЏ РґР»СЏ ${name} СѓСЃРїС–С€РЅРѕ Р·Р±РµСЂРµР¶РµРЅРѕ!`);
    }
  }
}

function testEditAirlineUrl(target) {
  const inputId = target === 'checkin' ? 'editAirCheckinUrl' : 'editAirUrl';
  const url = document.getElementById(inputId).value.trim();
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    showToast('Введіть коректний URL');
  }
}

function handleDeleteAirlineFromModal() {
  const id = document.getElementById('editAirId').value;
  const airline = state.airlines.find(a => a.id === id);
  if (!airline) return;

  if (confirm(`Видалити ${airline.name} (${airline.iata}) зі списку?`)) {
    state.airlines = state.airlines.filter(a => a.id !== id);
    state.favoriteAirlines.delete(id);
    delete state.airlineNotes[id];
    localStorage.setItem('tickets_ua_custom_airlines', JSON.stringify(state.airlines));
    localStorage.setItem('tickets_ua_favorite_airlines', JSON.stringify([...state.favoriteAirlines]));
    localStorage.setItem('tickets_ua_airline_notes', JSON.stringify(state.airlineNotes));
    
    updateHeaderCounters();
    renderAirlineGrid();
    closeEditAirlineModal();
    showToast(`Авіакомпанію ${airline.name} видалено`);
  }
}

function openExternalUrl(event, url) {
  if (event) event.stopPropagation();
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openManageBooking(url) {
  openExternalUrl(null, url);
}

function copyAirlineUrl(event, url) {
  event.stopPropagation();
  navigator.clipboard.writeText(url).then(() => {
    showToast('Посилання скопійовано у буфер!');
  }).catch(() => {
    showToast('Не вдалося скопіювати посилання');
  });
}

// ==========================================
// SECTION 2: Quick Scripts & Templates
// ==========================================

function initTemplateGenerator() {
  updateTargetTabButtons();
  renderCategoryPills();
  renderTemplatesList();
  initTriggerBar();
  initPlaceholderEvents();

  // Select first template for current target
  const initialList = getFilteredTemplates();
  if (initialList.length > 0) {
    selectTemplate(initialList[0]);
  } else {
    state.selectedTemplate = null;
    renderSelectedTemplateWorkspace();
  }
}

function updateTargetTabButtons() {
  const partnersBtn = document.getElementById('targetTabPartnersBtn');
  const ccBtn = document.getElementById('targetTabCallCenterBtn');
  const partnersCount = document.getElementById('targetPartnersCount');
  const ccCount = document.getElementById('targetCallCenterCount');

  const pCount = state.templates.filter(t => (t.target || 'partners') === 'partners').length;
  const cCount = state.templates.filter(t => t.target === 'callcenter').length;

  if (partnersCount) partnersCount.textContent = pCount;
  if (ccCount) ccCount.textContent = cCount;

  if (partnersBtn) {
    if (state.templateTargetTab === 'partners') {
      partnersBtn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs border border-slate-200/60 dark:border-slate-700/60";
    } else {
      partnersBtn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100";
    }
  }

  if (ccBtn) {
    if (state.templateTargetTab === 'callcenter') {
      ccBtn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs border border-slate-200/60 dark:border-slate-700/60";
    } else {
      ccBtn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100";
    }
  }
}

function setTemplateTargetTab(target) {
  state.templateTargetTab = target;
  state.activeTemplateCategory = 'All';
  updateTargetTabButtons();
  renderCategoryPills();
  renderTemplatesList();

  const list = getFilteredTemplates();
  if (list.length > 0) {
    selectTemplate(list[0]);
  } else {
    state.selectedTemplate = null;
    renderSelectedTemplateWorkspace();
  }
}

function getFilteredTemplates() {
  const currentTarget = state.templateTargetTab || 'partners';
  return state.templates.filter(t => {
    const tTarget = t.target || 'partners';
    return tTarget === currentTarget;
  });
}

function renderCategoryPills() {
  const container = document.getElementById('templateCategories');
  if (!container) return;

  const currentTemplates = getFilteredTemplates();
  const categories = ['All', ...new Set(currentTemplates.map(t => t.category).filter(Boolean))];
  const favCount = currentTemplates.filter(t => state.favoriteTemplates.has(t.id)).length;

  let html = '';
  // Favorites pill
  const isFavActive = state.showOnlyFavoriteTemplates;
  html += `
    <button onclick="toggleShowOnlyFavoriteTemplates()"
            class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              isFavActive
                ? 'bg-amber-500 border-amber-500 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400 hover:text-amber-500'
            }">
      <i data-lucide="star" class="w-3.5 h-3.5 ${isFavActive ? 'fill-white text-white' : 'text-amber-500 fill-amber-400'}"></i>
      <span>\u041E\u0431\u0440\u0430\u043D\u0456</span>
      <span class="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] ${isFavActive ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${favCount}</span>
    </button>
  `;

  html += categories.map(cat => {
    const isActive = !state.showOnlyFavoriteTemplates && state.activeTemplateCategory === cat;
    return `
      <button onclick="setCategoryFilter('${escapeHtml(cat)}')"
              class="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive 
                  ? 'bg-sky-600 border-sky-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400'
              }">
        ${cat === 'All' ? '\u0423\u0441\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457' : escapeHtml(cat)}
      </button>
    `;
  }).join('');

  container.innerHTML = html;
  safeCreateIcons(container);
}

function toggleShowOnlyFavoriteTemplates() {
  state.showOnlyFavoriteTemplates = !state.showOnlyFavoriteTemplates;
  renderCategoryPills();
  renderTemplatesList();
}

function setCategoryFilter(category) {
  state.showOnlyFavoriteTemplates = false;
  state.activeTemplateCategory = category;
  renderCategoryPills();
  renderTemplatesList();
}

function renderTemplatesList() {
  const container = document.getElementById('templatesList');
  if (!container) return;

  let list = getFilteredTemplates();

  if (state.showOnlyFavoriteTemplates) {
    list = list.filter(t => state.favoriteTemplates.has(t.id));
  } else if (state.activeTemplateCategory !== 'All') {
    list = list.filter(t => t.category === state.activeTemplateCategory);
  }

  // Sort so that favorites are pinned at the top!
  list.sort((a, b) => {
    const aFav = state.favoriteTemplates.has(a.id) ? 1 : 0;
    const bFav = state.favoriteTemplates.has(b.id) ? 1 : 0;
    return bFav - aFav;
  });

  if (list.length === 0) {
    if (state.showOnlyFavoriteTemplates) {
      container.innerHTML = `
        <div class="p-6 text-center text-xs text-slate-400 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <i data-lucide="star" class="w-8 h-8 mx-auto mb-2 text-amber-400 stroke-[1.5]"></i>
          <p class="font-semibold text-slate-700 dark:text-slate-300">\u041D\u0435\u043C\u0430\u0454 \u043E\u0431\u0440\u0430\u043D\u0438\u0445 \u0448\u0430\u0431\u043B\u043E\u043D\u0456\u0432</p>
          <p class="mt-1 text-slate-400">\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u0437\u0456\u0440\u043E\u0447\u043A\u0443 \u2605 \u0431\u0456\u043B\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0443, \u0449\u043E\u0431 \u0437\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u0432 \u043E\u0431\u0440\u0430\u043D\u0438\u0445.</p>
        </div>
      `;
    } else if (state.templateTargetTab === 'callcenter') {
      container.innerHTML = `
        <div class="p-6 text-center text-xs text-slate-500 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <i data-lucide="headphones" class="w-8 h-8 mx-auto mb-2 text-slate-400 stroke-[1.5]"></i>
          <p class="font-semibold text-slate-700 dark:text-slate-300">\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u00AB\u0417\u0410\u041F\u0418\u0422\u0418 \u041D\u0410 \u041A\u0426\u00BB \u043F\u043E\u043A\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u044F</p>
          <p class="mt-1 text-slate-400">\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0432\u0438\u0449\u0435 <strong>\u00AB\u2795 \u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u0448\u0430\u0431\u043B\u043E\u043D\u00BB</strong>, \u0449\u043E\u0431 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u0441\u043A\u0440\u0438\u043F\u0442\u0438 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438/\u041A\u0426.</p>
        </div>
      `;
    } else {
      container.innerHTML = `<div class="p-6 text-center text-xs text-slate-400">\u041D\u0435\u043C\u0430\u0454 \u0448\u0430\u0431\u043B\u043E\u043D\u0456\u0432 \u0443 \u0446\u0456\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457</div>`;
    }
    safeCreateIcons(container);
    return;
  }

  container.innerHTML = list.map(t => {
    const isSelected = state.selectedTemplate && state.selectedTemplate.id === t.id;
    const isFav = state.favoriteTemplates.has(t.id);
    return `
      <div onclick="selectTemplateById('${t.id}')"
           class="group relative p-3 rounded-xl border transition-all cursor-pointer ${
             isSelected
               ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-600 shadow-sm'
               : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-xs'
           }">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <div class="flex items-center gap-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md font-mono text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300">
              ${t.trigger}
            </span>
            ${isFav ? '<span class="text-amber-500 text-xs font-bold">\u2605</span>' : ''}
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              ${escapeHtml(t.category)}
            </span>
            <button onclick="event.stopPropagation(); toggleFavoriteTemplate('${t.id}')"
                    title="${isFav ? '\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437 \u043E\u0431\u0440\u0430\u043D\u0438\u0445' : '\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043E\u0431\u0440\u0430\u043D\u0456 \u2605'}"
                    class="p-1 rounded-md transition-colors ${isFav ? 'text-amber-500 hover:text-amber-600' : 'text-slate-400 hover:text-amber-500'}">
              <i data-lucide="star" class="w-3.5 h-3.5 ${isFav ? 'fill-amber-400 text-amber-500' : ''}"></i>
            </button>
            <button onclick="event.stopPropagation(); openEditTemplateModal('${t.id}')"
                    title="\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D"
                    class="p-1 rounded-md text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
        <div class="text-xs font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
          ${escapeHtml(t.titleUa)}
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
          ${escapeHtml(t.templateUa || t.templateEn)}
        </div>
      </div>
    `;
  }).join('');

  safeCreateIcons(container);
}

function toggleFavoriteTemplate(id) {
  if (state.favoriteTemplates.has(id)) {
    state.favoriteTemplates.delete(id);
    showToast('\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u043E\u0431\u0440\u0430\u043D\u0438\u0445');
  } else {
    state.favoriteTemplates.add(id);
    showToast('\u0414\u043E\u0434\u0430\u043D\u043E \u0432 \u043E\u0431\u0440\u0430\u043D\u0456 \u0448\u0430\u0431\u043B\u043E\u043D\u0438 \u2605');
  }
  localStorage.setItem('tickets_ua_favorite_templates', JSON.stringify([...state.favoriteTemplates]));
  renderCategoryPills();
  renderTemplatesList();
}

function selectTemplateById(id) {
  const found = state.templates.find(t => t.id === id);
  if (found) {
    selectTemplate(found);
  }
}

function selectTemplate(template) {
  state.selectedTemplate = template;
  state.customEditedText = '';
  state.customEditedUaText = '';

  // Add to recents
  if (!state.recentTemplateIds.includes(template.id)) {
    state.recentTemplateIds.unshift(template.id);
    if (state.recentTemplateIds.length > 5) state.recentTemplateIds.pop();
    try {
      localStorage.setItem('tickets_ua_recent_templates', JSON.stringify(state.recentTemplateIds));
    } catch(e) {}
  }

  renderTemplatesList();
  renderSelectedTemplateWorkspace();
}

function renderSelectedTemplateWorkspace() {
  const container = document.getElementById('templateWorkspace');
  if (!container) return;

  if (!state.selectedTemplate) {
    container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
          <i data-lucide="message-square-plus" class="w-8 h-8 text-slate-400 stroke-[1.5]"></i>
        </div>
        <h4 class="text-base font-bold text-slate-700 dark:text-slate-300 mb-1">Шаблон не обрано</h4>
        <p class="text-xs max-w-sm text-slate-500 mb-4">Оберіть потрібний скрипт зі списку ліворуч або створіть новий власний шаблон.</p>
        <button onclick="openAddTemplateModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition-all">
          <i data-lucide="plus-circle" class="w-4 h-4"></i>
          <span>Додати шаблон</span>
        </button>
      </div>
    `;
    safeCreateIcons(container);
    return;
  }

  const t = state.selectedTemplate;
  const placeholders = t.placeholders || [];
  const isCallCenter = (t.target === 'callcenter');

  const rawEn = t.templateEn || '';
  const rawUa = t.templateUa || t.titleUa || '';
  const generatedEn = generateFilledText(rawEn, state.placeholderValues);
  const generatedUa = generateFilledText(rawUa, state.placeholderValues);

  const displayEn = state.customEditedText || generatedEn;
  const displayUa = state.customEditedUaText || generatedUa;

  container.innerHTML = `
    <!-- Template Header -->
    <div class="p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 rounded-lg font-mono text-sm font-bold bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            ${t.trigger}
          </span>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">${escapeHtml(t.titleUa)}</h3>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
                (t.target || 'partners') === 'partners'
                  ? 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300'
                  : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300'
              }">
                ${(t.target || 'partners') === 'partners' ? 'Партнери' : 'Кол-центр (КЦ)'}
              </span>
            </div>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">${escapeHtml(t.category)}</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${!isCallCenter ? `
            <button onclick="openAiSettingsModal()"
                    class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors shadow-2xs"
                    title="ШІ-переклад авіаційною англійською (Gemini API)">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-purple-600 dark:text-purple-400"></i>
              <span>ШІ-переклад</span>
            </button>
          ` : ''}
          <button onclick="openEditTemplateModal('${t.id}')"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors shadow-2xs">
            <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-500"></i>
            <span>Редагувати</span>
          </button>
          <button onclick="resetTemplateFields()"
                  class="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 px-2.5 py-1.5 rounded-xl transition-colors">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            <span>Скинути</span>
          </button>
        </div>
      </div>
      ${t.descriptionUa ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-2">${escapeHtml(t.descriptionUa)}</p>` : ''}
    </div>

    <!-- Dynamic Placeholders Form (if any) -->
    ${placeholders.length > 0 ? `
      <div class="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          Параметри запиту (автопідстановка у текст):
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          ${placeholders.map(key => {
            const val = state.placeholderValues[key] || '';
            const label = formatPlaceholderLabel(key);
            return `
              <div>
                <label class="block text-[10px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  ${label} <span class="font-mono text-slate-400">[${key}]</span>
                </label>
                <input type="text" 
                       id="ph_${key}"
                       value="${escapeHtml(val)}"
                       placeholder="${getPlaceholderExample(key)}"
                       oninput="onPlaceholderChange('${key}', this.value)"
                       class="w-full px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 uppercase transition-all" />
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}

    ${isCallCenter ? `
      <!-- Single Textarea Section for Call Center: Ukrainian Only -->
      <div class="p-5 flex-1 flex flex-col space-y-4">
        <div class="flex flex-col flex-1">
          <div class="flex items-center justify-between mb-1.5">
            <label for="templateOutputArea" class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span>🇺🇦 Скрипт для оператора КЦ (Українська)</span>
              <span class="text-[10px] lowercase font-normal text-slate-400">(для спілкування з клієнтом)</span>
            </label>
            <span id="charCount" class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              ${displayUa.length} симв.
            </span>
          </div>
          <textarea id="templateOutputArea"
                    rows="6"
                    oninput="onUaTextareaEdit(this.value)"
                    placeholder="Введіть або відредагуйте текст скрипта для пасажира..."
                    class="w-full p-3.5 rounded-xl text-sm font-sans leading-relaxed bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-inner resize-y font-medium">${escapeHtml(displayUa)}</textarea>
        </div>

        <!-- Unfilled Placeholder Warning Banner (Shows dynamically) -->
        <div id="unfilledWarningBanner" class="hidden p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200 flex items-start gap-2 text-xs">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"></i>
          <div class="flex-1">
            <strong class="font-bold">Увага!</strong> <span id="unfilledWarningText">У тексті залишились незаповнені плейсхолдери.</span>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 mt-auto">
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <i data-lucide="info" class="w-4 h-4 text-sky-500 stroke-[2]"></i>
            <span>Комбінація <strong>Ctrl + Enter</strong> для швидкого копіювання</span>
          </div>

          <div class="flex items-center gap-2">
            <button id="copyScriptBtn" 
                    onclick="copyScriptToClipboard()"
                    class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
              <i data-lucide="copy" class="w-4 h-4"></i>
              <span id="copyBtnText">Скопіювати скрипт</span>
            </button>
          </div>
        </div>
      </div>
    ` : `
      <!-- Dual Textarea Section: Ukrainian & English with Live Translation -->
      <div class="p-5 flex-1 flex flex-col space-y-4">
        
        <!-- Ukrainian Box (Editable & Translatable) -->
        <div class="flex flex-col">
          <div class="flex items-center justify-between mb-1.5">
            <label for="templateUaEditArea" class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span>🇺🇦 Текст українською</span>
              <span class="text-[10px] lowercase font-normal text-slate-400">(можна змінювати — перекладається на EN)</span>
            </label>
            <div class="flex items-center gap-2">
              <span id="translationStatus" class="text-[11px]"></span>
              <button onclick="manualTranslateUaToEn()" 
                      title="Перекласти поточний український текст на англійську за допомогою ШІ або словника"
                      class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-xs transition-all">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>⚡ ШІ-переклад на EN</span>
              </button>
              <button onclick="copyScriptUaToClipboard()" 
                      title="Скопіювати український варіант"
                      class="text-[11px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3"></i>
                <span>Копіювати UA</span>
              </button>
            </div>
          </div>
          <textarea id="templateUaEditArea"
                    rows="3"
                    oninput="onUaTextareaEdit(this.value)"
                    placeholder="Введіть текст звернення українською..."
                    class="w-full p-3 rounded-xl text-xs font-sans leading-relaxed bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-y">${escapeHtml(displayUa)}</textarea>
        </div>

        <!-- English Box (Final sendable message) -->
        <div class="flex flex-col flex-1">
          <div class="flex items-center justify-between mb-1.5">
            <label for="templateOutputArea" class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span>🇬🇧 Готовий текст англійською (для партнера)</span>
            </label>
            <span id="charCount" class="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              ${displayEn.length} симв.
            </span>
          </div>
          <textarea id="templateOutputArea"
                    rows="4"
                    oninput="onTextareaEdit(this.value)"
                    class="w-full p-3.5 rounded-xl text-sm font-sans leading-relaxed bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-inner resize-y font-medium">${escapeHtml(displayEn)}</textarea>
        </div>

        <!-- Unfilled Placeholder Warning Banner (Shows dynamically) -->
        <div id="unfilledWarningBanner" class="hidden p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200 flex items-start gap-2 text-xs">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"></i>
          <div class="flex-1">
            <strong class="font-bold">Увага!</strong> <span id="unfilledWarningText">У тексті залишились незаповнені плейсхолдери.</span>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 mt-auto">
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <i data-lucide="info" class="w-4 h-4 text-sky-500 stroke-[2]"></i>
            <span>Комбінація <strong>Ctrl + Enter</strong> для швидкого копіювання</span>
          </div>

          <div class="flex items-center gap-2">
            <button id="copyScriptBtn" 
                    onclick="copyScriptToClipboard()"
                    class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
              <i data-lucide="copy" class="w-4 h-4"></i>
              <span id="copyBtnText">Скопіювати у буфер (EN)</span>
            </button>
          </div>
        </div>

      </div>
    `}
  `;

  safeCreateIcons(container);
  updateUnfilledWarningState();
}

function formatPlaceholderLabel(key) {
  const map = {
    'PNR': 'Код PNR',
    'PASSENGER_NAME': 'Прізвище / Ім\'я',
    'FLIGHT': 'Рейс (напр. LH1492)',
    'OLD_ORDER_ID': 'ID старого замовлення',
    'NEW_ORDER_ID': 'ID нового неоплаченого',
    'SEAT_TYPE_OR_NUMBER': 'Місце (напр. 12A або XL)',
    'MEAL_TYPE': 'Тип харчування (напр. VGML)',
    'REQUEST_DETAILS': 'Деталі запиту',
    'TICKET_NUMBER': 'Номер квитка',
    'INCORRECT_NAME': 'Помилкове ім\'я',
    'CORRECT_NAME': 'Правильне ім\'я'
  };
  return map[key] || key;
}

function getPlaceholderExample(key) {
  const map = {
    'PNR': 'наприклад 6X9YZP',
    'OLD_ORDER_ID': 'наприклад 12345678',
    'NEW_ORDER_ID': 'наприклад 87654321',
    'SEAT_TYPE_OR_NUMBER': '12A або XL extra legroom',
    'MEAL_TYPE': 'Vegetarian / Kosher / Halal',
    'REQUEST_DETAILS': 'опишіть суть запиту',
    'PASSENGER_NAME': 'SHEVCHENKO/TARAS MR',
    'FLIGHT': 'TK1234'
  };
  return map[key] || '';
}

function generateFilledText(rawTemplate, values) {
  let text = rawTemplate || '';
  for (const [key, val] of Object.entries(values || {})) {
    const replacement = val && val.trim() ? val.trim() : `[${key}]`;
    text = text.replaceAll(`[${key}]`, replacement);
  }
  return text;
}

function onPlaceholderChange(key, value) {
  state.placeholderValues[key] = value;
  
  if (state.selectedTemplate) {
    const newEn = generateFilledText(state.selectedTemplate.templateEn, state.placeholderValues);
    const newUa = generateFilledText(state.selectedTemplate.templateUa || state.selectedTemplate.titleUa, state.placeholderValues);

    const uaTextarea = document.getElementById('templateUaEditArea');
    if (uaTextarea && (!state.customEditedUaText || state.customEditedUaText.includes(`[${key}]`))) {
      uaTextarea.value = newUa;
      state.customEditedUaText = newUa;
    }

    const enTextarea = document.getElementById('templateOutputArea');
    if (enTextarea) {
      enTextarea.value = newEn;
      state.customEditedText = newEn;
    }

    const charCount = document.getElementById('charCount');
    if (charCount) charCount.textContent = `${newEn.length} симв.`;

    updateUnfilledWarningState();
  }
}

function onTextareaEdit(val) {
  state.customEditedText = val;
  const charCount = document.getElementById('charCount');
  if (charCount) charCount.textContent = `${val.length} симв.`;
  updateUnfilledWarningState();
}

// Live Translation Engine: UA -> EN with Gemini AI, Google Neural & MyMemory fallback
let translateDebounceTimer = null;
let modalTranslateDebounceTimer = null;

async function translateTextUaToEn(text) {
  if (!text || !text.trim()) return '';

  const trimmed = text.trim();
  const placeholders = trimmed.match(/\[([A-Z0-9_]+)\]/g) || [];

  // Helper to restore placeholders
  const restorePlaceholders = (str) => {
    let res = str;
    placeholders.forEach(ph => {
      const inner = ph.replace(/[\[\]]/g, '');
      const reg = new RegExp(`\\[\\s*${inner}\\s*\\]`, 'gi');
      res = res.replace(reg, ph);
    });
    return res;
  };

  // ENGINE 0: Google Gemini AI (Context-aware professional airline customer support)
  const geminiKey = (state.geminiApiKey || localStorage.getItem('tickets_ua_gemini_key') || '').trim();
  if (geminiKey) {
    try {
      const systemInstruction = `You are an expert customer support agent for Tickets.ua communicating with airline partner desks.
Translate the following Ukrainian support ticket message into polite, fluent, natural, professional airline support English.
Use industry-standard airline terminology (e.g. "involuntary refund", "medical waiver", "schedule change", "flight cancellation", "name correction", "release seats", "waiver authorization").
DO NOT translate or alter placeholder tags like [PNR], [FLIGHT], [PASSENGER_NAME], [DATE], [TIME], [PRICE], [OLD_ORDER_ID]. Keep them exactly in brackets and uppercase.
Return ONLY the final translated English text without quotes, introductory remarks, markdown fences, or commentary.`;

      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(geminiKey)}`;
      const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: `${systemInstruction}\n\nUkrainian text to translate:\n${trimmed}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1000
          }
        })
      });

      if (res.ok) {
        const data = await res.json();
        const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiText && aiText.trim()) {
          let clean = aiText.trim().replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();
          return restorePlaceholders(clean);
        }
      } else {
        console.warn('Gemini AI API HTTP error:', res.status);
      }
    } catch (err) {
      console.warn('Gemini AI translation error, falling back to Google Translate:', err);
    }
  }

  // Protect placeholders with tokens so classical translators never break them
  const placeholderTokens = [];
  const protectedText = trimmed.replace(/\[([A-Z0-9_]+)\]/g, (match) => {
    const token = `__PH${placeholderTokens.length}__`;
    placeholderTokens.push(match);
    return token;
  });

  const restoreTokensAndPlaceholders = (str) => {
    let res = str;
    placeholderTokens.forEach((tokenVal, idx) => {
      const reg = new RegExp(`__PH${idx}__`, 'gi');
      res = res.replace(reg, tokenVal);
    });
    return restorePlaceholders(res);
  };

  // Engine 1: Google Translate API (clients5 dict-chrome-ex: highest translation quality, fast, open CORS)
  try {
    const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=uk&tl=en&q=${encodeURIComponent(protectedText)}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      let translated = '';
      if (Array.isArray(data)) {
        translated = data.map(item => Array.isArray(item) ? item.join('') : String(item)).join('');
      } else if (typeof data === 'string') {
        translated = data;
      }
      if (translated && translated.trim()) {
        return restorePlaceholders(translated.trim());
      }
    }
  } catch (err) {
    console.warn('Google Translate API failed, trying fallback:', err);
  }

  // Engine 2: Google Translate GTX endpoint (secondary Google engine)
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=en&dt=t&q=${encodeURIComponent(protectedText)}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && data[0] && Array.isArray(data[0])) {
        const translated = data[0].map(s => s[0]).join('');
        if (translated && translated.trim()) {
          return restorePlaceholders(translated.trim());
        }
      }
    }
  } catch (err) {
    console.warn('Google GTX fallback failed:', err);
  }

  // Engine 3: MyMemory API (tertiary fallback)
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(protectedText)}&langpair=uk|en`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && data.responseData && data.responseData.translatedText) {
        return restorePlaceholders(data.responseData.translatedText.trim());
      }
    }
  } catch (err) {
    console.warn('MyMemory fallback failed:', err);
  }

  return text;
}

function onUaTextareaEdit(val) {
  state.customEditedUaText = val;
  const isCC = state.selectedTemplate?.target === 'callcenter';
  const charCount = document.getElementById('charCount');
  if (charCount) charCount.textContent = `${val.length} симв.`;
  updateUnfilledWarningState();

  if (isCC) {
    // Call center scripts are Ukrainian-only, no EN translation needed
    return;
  }

  const statusEl = document.getElementById('translationStatus');
  if (statusEl) {
    statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-amber-500 font-semibold"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Перекладається...</span>`;
    safeCreateIcons(statusEl);
  }

  clearTimeout(translateDebounceTimer);
  translateDebounceTimer = setTimeout(async () => {
    try {
      const translated = await translateTextUaToEn(val);
      if (translated) {
        state.customEditedText = translated;
        const enTextarea = document.getElementById('templateOutputArea');
        if (enTextarea) enTextarea.value = translated;
        const countEl = document.getElementById('charCount');
        if (countEl) countEl.textContent = `${translated.length} симв.`;
        updateUnfilledWarningState();
      }
      if (statusEl) {
        const isAi = !!(state.geminiApiKey && state.geminiApiKey.trim());
        statusEl.innerHTML = isAi
          ? `<span class="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Перекладено ШІ (Gemini)</span>`
          : `<span class="inline-flex items-center gap-1 text-emerald-500 font-semibold"><i data-lucide="check" class="w-3.5 h-3.5"></i> Перекладено</span>`;
        safeCreateIcons(statusEl);
        setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
      }
    } catch (e) {
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-rose-500 font-medium">Помилка автоперекладу</span>`;
        setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 3000);
      }
    }
  }, 750);
}

async function manualTranslateUaToEn() {
  const uaTextarea = document.getElementById('templateUaEditArea');
  if (!uaTextarea) return;
  const val = uaTextarea.value;
  const statusEl = document.getElementById('translationStatus');
  if (statusEl) {
    statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-amber-500 font-semibold"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Перекладається...</span>`;
    safeCreateIcons(statusEl);
  }

  try {
    const translated = await translateTextUaToEn(val);
    state.customEditedText = translated;
    const enTextarea = document.getElementById('templateOutputArea');
    if (enTextarea) enTextarea.value = translated;
    const charCount = document.getElementById('charCount');
    if (charCount) charCount.textContent = `${translated.length} симв.`;
    updateUnfilledWarningState();
    showToast('Переклад оновлено!');
    if (statusEl) {
      const isAi = !!(state.geminiApiKey && state.geminiApiKey.trim());
      statusEl.innerHTML = isAi
        ? `<span class="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Перекладено ШІ (Gemini)</span>`
        : `<span class="inline-flex items-center gap-1 text-emerald-500 font-semibold"><i data-lucide="check" class="w-3.5 h-3.5"></i> Перекладено</span>`;
      safeCreateIcons(statusEl);
      setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
    }
  } catch (err) {
    showToast('Не вдалося виконати переклад');
  }
}

// Live Auto-Translation Handler for Modals (Add & Edit)
function onModalUaInput(val, mode) {
  const isNew = mode === 'new';
  const targetVal = document.getElementById(isNew ? 'newTplTarget' : 'editTplTarget')?.value || 'partners';
  if (targetVal === 'callcenter') {
    // Call center scripts do not translate to English
    return;
  }
  const statusEl = document.getElementById(isNew ? 'addModalTranslateStatus' : 'editModalTranslateStatus');
  const enInput = document.getElementById(isNew ? 'newTplTextEn' : 'editTplTextEn');

  if (!val || !val.trim()) {
    if (statusEl) statusEl.innerHTML = '';
    return;
  }

  if (statusEl) {
    statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-amber-500 font-medium"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Перекладається...</span>`;
    safeCreateIcons(statusEl);
  }

  clearTimeout(modalTranslateDebounceTimer);
  modalTranslateDebounceTimer = setTimeout(async () => {
    try {
      const translated = await translateTextUaToEn(val);
      if (translated && enInput) {
        enInput.value = translated;
      }
      if (statusEl) {
        const isAi = !!(state.geminiApiKey && state.geminiApiKey.trim());
        statusEl.innerHTML = isAi
          ? `<span class="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold"><i data-lucide="sparkles" class="w-3 h-3"></i> ШІ-переклад (Gemini)</span>`
          : `<span class="inline-flex items-center gap-1 text-emerald-500 font-semibold"><i data-lucide="check" class="w-3 h-3"></i> Перекладено</span>`;
        safeCreateIcons(statusEl);
        setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
      }
    } catch (err) {
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-rose-500 text-[11px]">Помилка автоперекладу</span>`;
        setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 3000);
      }
    }
  }, 600);
}

// ==========================================
// AI Translation (Google Gemini) Management
// ==========================================
function openAiSettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (!modal) return;

  const keyInput = document.getElementById('geminiApiKeyInput');
  if (keyInput) {
    keyInput.value = state.geminiApiKey || '';
    keyInput.type = 'password';
  }

  const eyeIcon = document.getElementById('geminiKeyEyeIcon');
  if (eyeIcon) {
    eyeIcon.setAttribute('data-lucide', 'eye');
  }

  const testOutput = document.getElementById('geminiTestOutput');
  if (testOutput) {
    testOutput.innerHTML = 'Натисніть «Перевірити ключ» для тестового запиту.';
  }

  updateAiModalStatusBanner();
  modal.classList.remove('hidden');
  safeCreateIcons(modal);
}

function closeAiSettingsModal() {
  const modal = document.getElementById('aiSettingsModal');
  if (modal) modal.classList.add('hidden');
}

function toggleGeminiKeyVisibility() {
  const input = document.getElementById('geminiApiKeyInput');
  const icon = document.getElementById('geminiKeyEyeIcon');
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (icon) icon.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    if (icon) icon.setAttribute('data-lucide', 'eye');
  }
  const modal = document.getElementById('aiSettingsModal');
  if (modal) safeCreateIcons(modal);
}

function updateAiModalStatusBanner() {
  const banner = document.getElementById('aiModalStatusBanner');
  if (!banner) return;
  const hasKey = !!(state.geminiApiKey && state.geminiApiKey.trim());

  if (hasKey) {
    banner.className = 'p-3 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 flex items-center gap-2.5';
    banner.innerHTML = `
      <i data-lucide="check-circle-2" class="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0"></i>
      <div>
        <strong class="font-bold">ШІ-переклад активний для всієї команди! ✨</strong>
        <p class="text-[11px] text-purple-700/80 dark:text-purple-300/80">Використовується Google Gemini Flash із професійним авіаційним промптом.</p>
      </div>
    `;
  } else {
    banner.className = 'p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 flex items-center gap-2.5';
    banner.innerHTML = `
      <i data-lucide="info" class="w-5 h-5 text-slate-400 shrink-0"></i>
      <div>
        <strong class="font-bold">ШІ-переклад не налаштовано</strong>
        <p class="text-[11px] text-slate-500 dark:text-slate-400">Зараз використовується стандартний перекладач Google Translate.</p>
      </div>
    `;
  }
  safeCreateIcons(banner);
}

function updateAiBadgeStatus() {
  const dot = document.getElementById('aiActiveIndicator');
  const hasKey = !!(state.geminiApiKey && state.geminiApiKey.trim());
  if (dot) {
    if (hasKey) {
      dot.className = 'w-2 h-2 rounded-full bg-purple-500 shadow-xs shadow-purple-500/50 animate-pulse';
      dot.title = 'ШІ-переклад активний (Gemini)';
    } else {
      dot.className = 'w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600';
      dot.title = 'ШІ-переклад не налаштовано';
    }
  }
}

async function saveGeminiApiKey() {
  const input = document.getElementById('geminiApiKeyInput');
  const key = input ? input.value.trim() : '';

  if (!key) {
    showToast('Будь ласка, введіть ключ або натисніть «Очистити»');
    return;
  }

  state.geminiApiKey = key;
  try {
    localStorage.setItem('tickets_ua_gemini_key', key);
  } catch (err) {}

  updateAiBadgeStatus();
  updateAiModalStatusBanner();

  if (window.firebaseDb) {
    window.firebaseDb.collection('shared_settings').doc('ai_config').set({
      geminiApiKey: key,
      updatedAt: new Date().toISOString()
    }, { merge: true })
      .then(() => showToast('ШІ-переклад активовано для ВСІЄЇ команди! 🌐✨'))
      .catch(err => {
        console.warn('Firebase ai_config save error:', err);
        showToast('Ключ збережено локально');
      });
  } else {
    showToast('Ключ збережено локально');
  }

  closeAiSettingsModal();
}

function clearGeminiApiKey() {
  if (!confirm('Вимкнути ШІ-переклад та видалити ключ?')) return;

  state.geminiApiKey = '';
  try {
    localStorage.removeItem('tickets_ua_gemini_key');
  } catch (err) {}

  const input = document.getElementById('geminiApiKeyInput');
  if (input) input.value = '';

  updateAiBadgeStatus();
  updateAiModalStatusBanner();

  if (window.firebaseDb) {
    window.firebaseDb.collection('shared_settings').doc('ai_config').set({
      geminiApiKey: '',
      updatedAt: new Date().toISOString()
    }, { merge: true })
      .then(() => showToast('ШІ-переклад вимкнено для всієї команди'))
      .catch(err => console.warn(err));
  } else {
    showToast('Ключ видалено');
  }

  closeAiSettingsModal();
}

async function testGeminiTranslation() {
  const input = document.getElementById('geminiApiKeyInput');
  const key = input ? input.value.trim() : (state.geminiApiKey || '');
  const out = document.getElementById('geminiTestOutput');
  if (!key) {
    if (out) out.innerHTML = '<span class="text-rose-500 font-semibold">Спочатку введіть ключ API!</span>';
    return;
  }
  if (out) {
    out.innerHTML = '<span class="text-amber-500 flex items-center gap-1 font-medium"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Тестуємо зв\'язок з Gemini AI...</span>';
    safeCreateIcons(out);
  }

  try {
    const testText = "Просимо погодити вимушене повернення для пасажира [PASSENGER_NAME] за бронюванням [PNR].";
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(key)}`;
    const res = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an expert customer support agent for Tickets.ua communicating with airline partner desks.
Translate the following Ukrainian support ticket into polite, natural, fluent airline support English.
Keep [PASSENGER_NAME] and [PNR] intact in brackets and uppercase. Return ONLY the English translation without preamble, quotes, or markdown fences.

Ukrainian: ${testText}`
              }
            ]
          }
        ]
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${res.status}`;
      if (out) out.innerHTML = `<span class="text-rose-500 font-semibold">Помилка Google API: ${escapeHtml(msg)}</span>`;
      return;
    }

    const data = await res.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    if (out) {
      out.innerHTML = `<div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200">
        <strong class="font-bold text-emerald-700 dark:text-emerald-300">✓ Успішно! Переклад Gemini AI:</strong><br/>
        "${escapeHtml(result)}"
      </div>`;
      safeCreateIcons(out);
    }
  } catch (err) {
    if (out) out.innerHTML = `<span class="text-rose-500 font-semibold">Помилка мережі: ${escapeHtml(err.message)}</span>`;
  }
}

function getUnfilledPlaceholders(text) {
  if (!text) return [];
  const matches = text.match(/\[([A-Z0-9_]+)\]/g);
  return matches ? [...new Set(matches)] : [];
}

function updateUnfilledWarningState() {
  const textarea = document.getElementById('templateOutputArea');
  const btn = document.getElementById('copyScriptBtn');
  const btnText = document.getElementById('copyBtnText');
  const warningBanner = document.getElementById('unfilledWarningBanner');
  const warningText = document.getElementById('unfilledWarningText');

  if (!textarea || !btn || !btnText) return;

  const text = textarea.value;
  const unfilled = getUnfilledPlaceholders(text);
  const isCC = state.selectedTemplate?.target === 'callcenter';
  const defaultBtnText = isCC ? "Скопіювати скрипт" : "Скопіювати у буфер (EN)";

  if (unfilled.length > 0) {
    btn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-sm ring-2 ring-amber-300 dark:ring-amber-800 transition-all active:scale-[0.98]";
    btnText.textContent = `⚠️ Скопіювати (${unfilled.join(', ')})`;
    const icon = btn.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', 'alert-triangle');
      safeCreateIcons(btn);
    }
    if (warningBanner && warningText) {
      warningBanner.classList.remove('hidden');
      warningText.textContent = isCC
        ? `Увага: у тексті залишились незаповнені плейсхолдери: ${unfilled.join(', ')}. Заповніть їх перед копіюванням!`
        : `Увага: у тексті залишились незаповнені плейсхолдери: ${unfilled.join(', ')}. Рекомендується заповнити їх перед відправкою партнеру!`;
    }
  } else {
    btn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sm hover:shadow-md transition-all active:scale-[0.98]";
    btnText.textContent = defaultBtnText;
    const icon = btn.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', 'copy');
      safeCreateIcons(btn);
    }
    if (warningBanner) {
      warningBanner.classList.add('hidden');
    }
  }
}

function resetTemplateFields() {
  state.placeholderValues = {};
  state.customEditedText = '';
  state.customEditedUaText = '';
  renderSelectedTemplateWorkspace();
  showToast('Поля шаблону скинуто');
}

function copyScriptToClipboard() {
  const textarea = document.getElementById('templateOutputArea');
  if (!textarea) return;

  const textToCopy = textarea.value;
  const unfilled = getUnfilledPlaceholders(textToCopy);
  const isCC = state.selectedTemplate?.target === 'callcenter';

  navigator.clipboard.writeText(textToCopy).then(() => {
    const btn = document.getElementById('copyScriptBtn');
    const btnText = document.getElementById('copyBtnText');

    if (btn && btnText) {
      btn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all copy-pulse";
      btnText.textContent = isCC ? "Скрипт скопійовано!" : "Copied to Clipboard!";
      const icon = btn.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', 'check');
        safeCreateIcons(btn);
      }

      setTimeout(() => {
        updateUnfilledWarningState();
      }, 1800);
    }

    if (unfilled.length > 0) {
      showToast(`⚠️ Скопійовано з незаповненими полями: ${unfilled.join(', ')}`);
    } else {
      showToast(isCC ? 'Скрипт скопійовано у буфер!' : 'Англійський скрипт скопійовано у буфер!');
    }
  }).catch(() => {
    showToast('Помилка копіювання');
  });
}

function copyScriptUaToClipboard() {
  const textarea = document.getElementById('templateUaEditArea');
  if (!textarea) return;
  const textToCopy = textarea.value;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('Український текст скопійовано у буфер!');
  }).catch(() => {
    showToast('Помилка копіювання');
  });
}

// Trigger Bar & Autocomplete
function initTriggerBar() {
  const input = document.getElementById('triggerBarInput');
  const dropdown = document.getElementById('triggerDropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    handleTriggerInput(val);
  });

  input.addEventListener('keydown', (e) => {
    if (state.activeTriggerSuggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.dropdownSelectedIndex = Math.min(state.dropdownSelectedIndex + 1, state.activeTriggerSuggestions.length - 1);
      renderDropdownItems();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.dropdownSelectedIndex = Math.max(state.dropdownSelectedIndex - 1, 0);
      renderDropdownItems();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (state.dropdownSelectedIndex >= 0 && state.dropdownSelectedIndex < state.activeTriggerSuggestions.length) {
        selectSuggestion(state.activeTriggerSuggestions[state.dropdownSelectedIndex]);
      } else if (state.activeTriggerSuggestions.length > 0) {
        selectSuggestion(state.activeTriggerSuggestions[0]);
      }
    } else if (e.key === 'Escape') {
      hideDropdown();
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      hideDropdown();
    }
  });
}

function handleTriggerInput(val) {
  const dropdown = document.getElementById('triggerDropdown');
  if (!dropdown) return;

  if (!val) {
    hideDropdown();
    return;
  }

  const cleanVal = val.startsWith('::') ? val : val;
  const rawSearch = val.replace(/^::/, '');

  state.activeTriggerSuggestions = state.templates.filter(t => {
    return (
      t.trigger.toLowerCase().includes(cleanVal) ||
      t.trigger.toLowerCase().replace('::', '').includes(rawSearch) ||
      t.titleUa.toLowerCase().includes(rawSearch) ||
      t.category.toLowerCase().includes(rawSearch) ||
      t.templateEn.toLowerCase().includes(rawSearch)
    );
  });

  if (state.activeTriggerSuggestions.length > 0) {
    state.dropdownSelectedIndex = 0;
    renderDropdownItems();
    dropdown.classList.remove('hidden');
  } else {
    hideDropdown();
  }
}

function renderDropdownItems() {
  const dropdown = document.getElementById('triggerDropdown');
  if (!dropdown) return;

  dropdown.innerHTML = state.activeTriggerSuggestions.map((t, idx) => {
    const isSelected = idx === state.dropdownSelectedIndex;
    return `
      <div onclick="selectSuggestionById('${t.id}')"
           class="p-3 flex items-center justify-between gap-3 cursor-pointer transition-colors border-b border-slate-100 dark:border-slate-700/60 last:border-b-0 ${
             isSelected 
               ? 'bg-sky-50 dark:bg-slate-700/70 text-sky-900 dark:text-sky-100' 
               : 'hover:bg-slate-50 dark:hover:bg-slate-700/40'
           }">
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="px-2 py-0.5 rounded font-mono text-xs font-bold bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300 shrink-0">
            ${t.trigger}
          </span>
          <div class="truncate">
            <span class="text-xs font-semibold text-slate-800 dark:text-slate-200">${escapeHtml(t.titleUa)}</span>
            <span class="text-[11px] text-slate-500 dark:text-slate-400 ml-2">(${t.category} • ${(t.target || 'partners') === 'partners' ? 'Партнери' : 'КЦ'})</span>
          </div>
        </div>
        <span class="text-[10px] text-slate-400 shrink-0">Натисніть Enter</span>
      </div>
    `;
  }).join('');
}

function selectSuggestionById(id) {
  const found = state.templates.find(t => t.id === id);
  if (found) selectSuggestion(found);
}

function selectSuggestion(template) {
  if (template.target && template.target !== state.templateTargetTab) {
    setTemplateTargetTab(template.target);
  }
  selectTemplate(template);
  hideDropdown();
  const input = document.getElementById('triggerBarInput');
  if (input) {
    input.value = template.trigger;
  }
}

function hideDropdown() {
  const dropdown = document.getElementById('triggerDropdown');
  if (dropdown) dropdown.classList.add('hidden');
  state.dropdownSelectedIndex = -1;
  state.activeTriggerSuggestions = [];
}

function initPlaceholderEvents() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (state.currentTab === 'templates') {
        e.preventDefault();
        copyScriptToClipboard();
      }
    }
  });
}

// Add Template Modal functions
function onTemplateTargetChange(mode) {
  const isNew = mode === 'new';
  const targetVal = document.getElementById(isNew ? 'newTplTarget' : 'editTplTarget')?.value || 'partners';
  const isCC = targetVal === 'callcenter';

  const enSection = document.getElementById(isNew ? 'newTplEnSection' : 'editTplEnSection');
  const enInput = document.getElementById(isNew ? 'newTplTextEn' : 'editTplTextEn');
  const translateBtnSection = document.getElementById(isNew ? 'newTplTranslateBtnSection' : 'editTplTranslateBtnSection');

  if (enSection) {
    if (isCC) {
      enSection.classList.add('hidden');
      if (enInput) enInput.required = false;
    } else {
      enSection.classList.remove('hidden');
      if (enInput) enInput.required = true;
    }
  }
  if (translateBtnSection) {
    if (isCC) {
      translateBtnSection.classList.add('hidden');
    } else {
      translateBtnSection.classList.remove('hidden');
    }
  }
}
window.onTemplateTargetChange = onTemplateTargetChange;

function openAddTemplateModal() {
  const modal = document.getElementById('addTemplateModal');
  if (!modal) return;

  const targetSelect = document.getElementById('newTplTarget');
  if (targetSelect) targetSelect.value = state.templateTargetTab || 'partners';

  const nextNum = getNextTemplateTriggerNumber();
  const triggerInput = document.getElementById('newTplTrigger');
  if (triggerInput) triggerInput.value = nextNum;

  document.getElementById('newTplCategory').value = state.activeTemplateCategory !== 'All' ? state.activeTemplateCategory : '';
  document.getElementById('newTplTitleUa').value = '';
  document.getElementById('newTplTextUa').value = '';
  const enInput = document.getElementById('newTplTextEn');
  if (enInput) enInput.value = '';
  const statusEl = document.getElementById('addModalTranslateStatus');
  if (statusEl) statusEl.innerHTML = '';

  onTemplateTargetChange('new');

  modal.classList.remove('hidden');
  safeCreateIcons(modal);
}

function closeAddTemplateModal() {
  const modal = document.getElementById('addTemplateModal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveNewTemplate(e) {
  if (e) e.preventDefault();

  const target = document.getElementById('newTplTarget')?.value || 'partners';
  let triggerRaw = document.getElementById('newTplTrigger')?.value || '';
  const category = document.getElementById('newTplCategory')?.value?.trim() || 'Загальне';
  const titleUa = document.getElementById('newTplTitleUa')?.value?.trim() || 'Без назви';
  const templateUa = document.getElementById('newTplTextUa')?.value?.trim() || '';
  let templateEn = document.getElementById('newTplTextEn')?.value?.trim() || '';

  if (target === 'callcenter') {
    templateEn = '';
  }

  let cleanTrigger = triggerRaw.replace(/^::/, '').trim();
  if (!cleanTrigger) {
    cleanTrigger = String(getNextTemplateTriggerNumber());
  }
  const trigger = '::' + cleanTrigger;

  const combinedText = `${templateUa} ${templateEn}`;
  const phMatches = combinedText.match(/\[([A-Z0-9_]+)\]/g) || [];
  const placeholders = [...new Set(phMatches.map(m => m.replace(/[\[\]]/g, '')))];

  const newTemplate = {
    id: `tpl_custom_${Date.now()}`,
    target,
    trigger,
    category,
    titleUa,
    descriptionUa: templateUa.slice(0, 80) + (templateUa.length > 80 ? '...' : ''),
    templateUa,
    templateEn,
    placeholders
  };

  state.templates.unshift(newTemplate);
  try {
    localStorage.setItem('tickets_ua_custom_templates', JSON.stringify(state.templates));
  } catch (err) {}

  closeAddTemplateModal();
  updateTargetTabButtons();
  if (state.templateTargetTab !== target) {
    setTemplateTargetTab(target);
  } else {
    renderCategoryPills();
    renderTemplatesList();
  }
  selectTemplate(newTemplate);
  if (window.firebaseDb) {
    window.firebaseDb.collection('shared_templates').doc(newTemplate.id).set(newTemplate)
      .then(() => showToast('Новий шаблон додано для ВСІЄЇ команди! 🌐'))
      .catch(err => {
        console.warn('Firebase template error:', err);
        showToast('Новий шаблон додано локально');
      });
  } else {
    showToast('Новий шаблон успішно додано!');
  }
}

async function autoTranslateAddModal() {
  const ua = document.getElementById('newTplTextUa')?.value;
  if (!ua || !ua.trim()) {
    showToast('Спочатку введіть текст українською');
    return;
  }
  const statusEl = document.getElementById('addModalTranslateStatus');
  if (statusEl) {
    statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-amber-500 font-medium"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Перекладається...</span>`;
    safeCreateIcons(statusEl);
  }
  showToast('Перекладаємо на англійську...');
  try {
    const en = await translateTextUaToEn(ua);
    const enInput = document.getElementById('newTplTextEn');
    if (enInput) enInput.value = en;
    showToast('Переклад завершено!');
    if (statusEl) {
      statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-emerald-500 font-semibold"><i data-lucide="check" class="w-3 h-3"></i> Перекладено</span>`;
      safeCreateIcons(statusEl);
      setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
    }
  } catch (e) {
    showToast('Помилка перекладу');
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-500 text-[11px]">Помилка</span>`;
      setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
    }
  }
}

// Edit Template Modal functions
function openEditTemplateModal(id) {
  const t = state.templates.find(item => item.id === id) || state.selectedTemplate;
  if (!t) return;

  const modal = document.getElementById('editTemplateModal');
  if (!modal) return;

  document.getElementById('editTplId').value = t.id;
  const targetSelect = document.getElementById('editTplTarget');
  if (targetSelect) targetSelect.value = t.target || 'partners';
  document.getElementById('editTplTrigger').value = (t.trigger || '').replace(/^::/, '');
  document.getElementById('editTplCategory').value = t.category || '';
  document.getElementById('editTplTitleUa').value = t.titleUa || '';
  document.getElementById('editTplTextUa').value = t.templateUa || t.titleUa || '';
  document.getElementById('editTplTextEn').value = t.templateEn || '';
  const statusEl = document.getElementById('editModalTranslateStatus');
  if (statusEl) statusEl.innerHTML = '';

  onTemplateTargetChange('edit');

  modal.classList.remove('hidden');
  safeCreateIcons(modal);
}

function closeEditTemplateModal() {
  const modal = document.getElementById('editTemplateModal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveEditedTemplate(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('editTplId')?.value;
  const idx = state.templates.findIndex(t => t.id === id);
  if (idx === -1) return;

  const target = document.getElementById('editTplTarget')?.value || 'partners';
  let triggerRaw = document.getElementById('editTplTrigger')?.value || '';
  const category = document.getElementById('editTplCategory')?.value?.trim() || 'Загальне';
  const titleUa = document.getElementById('editTplTitleUa')?.value?.trim() || 'Без назви';
  const templateUa = document.getElementById('editTplTextUa')?.value?.trim() || '';
  let templateEn = document.getElementById('editTplTextEn')?.value?.trim() || '';

  if (target === 'callcenter') {
    templateEn = '';
  }

  let cleanTrigger = triggerRaw.replace(/^::/, '').trim();
  if (!cleanTrigger) {
    cleanTrigger = (state.templates[idx].trigger || '::1').replace(/^::/, '');
  }
  const trigger = '::' + cleanTrigger;

  const combinedText = `${templateUa} ${templateEn}`;
  const phMatches = combinedText.match(/\[([A-Z0-9_]+)\]/g) || [];
  const placeholders = [...new Set(phMatches.map(m => m.replace(/[\[\]]/g, '')))];

  state.templates[idx] = {
    ...state.templates[idx],
    target,
    trigger,
    category,
    titleUa,
    descriptionUa: templateUa.slice(0, 80) + (templateUa.length > 80 ? '...' : ''),
    templateUa,
    templateEn,
    placeholders
  };

  try {
    localStorage.setItem('tickets_ua_custom_templates', JSON.stringify(state.templates));
  } catch (err) {}

  closeEditTemplateModal();
  updateTargetTabButtons();
  renderCategoryPills();
  renderTemplatesList();
  selectTemplate(state.templates[idx]);
  if (window.firebaseDb) {
    window.firebaseDb.collection('shared_templates').doc(id).set(state.templates[idx], { merge: true })
      .then(() => showToast('Шаблон оновлено для ВСІХ операторів! 🌐'))
      .catch(err => {
        console.warn('Firebase template edit error:', err);
        showToast('Шаблон оновлено локально');
      });
  } else {
    showToast('Шаблон успішно оновлено!');
  }
}

function handleDeleteTemplateFromModal() {
  const id = document.getElementById('editTplId')?.value;
  if (!id) return;

  if (!confirm('Ви дійсно бажаєте видалити цей шаблон?')) return;

  state.templates = state.templates.filter(t => t.id !== id);
  state.favoriteTemplates.delete(id);
  if (window.firebaseDb) {
    window.firebaseDb.collection('shared_templates').doc(id).delete()
      .then(() => showToast('РЁР°Р±Р»РѕРЅ РІРёРґР°Р»РµРЅРѕ РґР»СЏ РІСЃС–С”С— РєРѕРјР°РЅРґРё'))
      .catch(err => console.warn(err));
  }
  try {
    localStorage.setItem('tickets_ua_custom_templates', JSON.stringify(state.templates));
  } catch (err) {}

  closeEditTemplateModal();
  updateTargetTabButtons();
  renderCategoryPills();
  renderTemplatesList();

  const list = getFilteredTemplates();
  if (list.length > 0) {
    selectTemplate(list[0]);
  } else {
    state.selectedTemplate = null;
    renderSelectedTemplateWorkspace();
  }
  showToast('Шаблон видалено');
}

async function autoTranslateEditModal() {
  const ua = document.getElementById('editTplTextUa')?.value;
  if (!ua || !ua.trim()) {
    showToast('Спочатку введіть текст українською');
    return;
  }
  const statusEl = document.getElementById('editModalTranslateStatus');
  if (statusEl) {
    statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-amber-500 font-medium"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Перекладається...</span>`;
    safeCreateIcons(statusEl);
  }
  showToast('Перекладаємо на англійську...');
  try {
    const en = await translateTextUaToEn(ua);
    const enInput = document.getElementById('editTplTextEn');
    if (enInput) enInput.value = en;
    showToast('Переклад завершено!');
    if (statusEl) {
      statusEl.innerHTML = `<span class="inline-flex items-center gap-1 text-emerald-500 font-semibold"><i data-lucide="check" class="w-3 h-3"></i> Перекладено</span>`;
      safeCreateIcons(statusEl);
      setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
    }
  } catch (e) {
    showToast('Помилка перекладу');
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-500 text-[11px]">Помилка</span>`;
      setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 2500);
    }
  }
}

function initShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Focus search on '/'
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (state.currentTab === 'directory') {
        document.getElementById('airlineSearchInput')?.focus();
      } else {
        document.getElementById('triggerBarInput')?.focus();
      }
    }
  });
}

// Toast notification helper
function showToast(message) {
  const existing = document.getElementById('appToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'appToast';
  toast.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 animate-bounce';
  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> <span>${escapeHtml(message)}</span>`;
  document.body.appendChild(toast);
  safeCreateIcons(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// Security string escaping helper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global window exports
window.openManageBooking = openManageBooking;
window.copyAirlineUrl = copyAirlineUrl;
window.toggleFavoriteAirline = toggleFavoriteAirline;
window.setAirlineFavoritesFilter = setAirlineFavoritesFilter;
window.openAddAirlineModal = openAddAirlineModal;
window.closeAddAirlineModal = closeAddAirlineModal;
window.handleAddAirline = handleAddAirline;
window.openEditAirlineModal = openEditAirlineModal;
window.closeEditAirlineModal = closeEditAirlineModal;
window.handleSaveEditAirline = handleSaveEditAirline;
window.testEditAirlineUrl = testEditAirlineUrl;
window.handleDeleteAirlineFromModal = handleDeleteAirlineFromModal;
window.openAirlineNoteModal = openAirlineNoteModal;
window.closeAirlineNoteModal = closeAirlineNoteModal;
window.handleSaveAirlineNote = handleSaveAirlineNote;
window.handleDeleteAirlineNote = handleDeleteAirlineNote;
window.openViewAirlineNoteModal = openViewAirlineNoteModal;
window.closeViewAirlineNoteModal = closeViewAirlineNoteModal;
window.switchToEditAirlineNote = switchToEditAirlineNote;
window.copyViewingNoteText = copyViewingNoteText;
window.openExternalUrl = openExternalUrl;
window.toggleCardMenu = toggleCardMenu;
window.hideAllCardMenus = hideAllCardMenus;

// Section 2 exports
window.setTemplateTargetTab = setTemplateTargetTab;
window.setCategoryFilter = setCategoryFilter;
window.selectTemplateById = selectTemplateById;
window.onPlaceholderChange = onPlaceholderChange;
window.onTextareaEdit = onTextareaEdit;
window.onUaTextareaEdit = onUaTextareaEdit;
window.manualTranslateUaToEn = manualTranslateUaToEn;
window.resetTemplateFields = resetTemplateFields;
window.copyScriptToClipboard = copyScriptToClipboard;
window.copyScriptUaToClipboard = copyScriptUaToClipboard;
window.selectSuggestionById = selectSuggestionById;
window.openAddTemplateModal = openAddTemplateModal;
window.closeAddTemplateModal = closeAddTemplateModal;
window.handleSaveNewTemplate = handleSaveNewTemplate;
window.autoTranslateAddModal = autoTranslateAddModal;
window.openEditTemplateModal = openEditTemplateModal;
window.closeEditTemplateModal = closeEditTemplateModal;
window.handleSaveEditedTemplate = handleSaveEditedTemplate;
window.handleDeleteTemplateFromModal = handleDeleteTemplateFromModal;
window.autoTranslateEditModal = autoTranslateEditModal;
window.onModalUaInput = onModalUaInput;
window.toggleFavoriteTemplate = toggleFavoriteTemplate;
window.toggleShowOnlyFavoriteTemplates = toggleShowOnlyFavoriteTemplates;
window.openAiSettingsModal = openAiSettingsModal;
window.closeAiSettingsModal = closeAiSettingsModal;
window.toggleGeminiKeyVisibility = toggleGeminiKeyVisibility;
window.saveGeminiApiKey = saveGeminiApiKey;
window.clearGeminiApiKey = clearGeminiApiKey;
window.testGeminiTranslation = testGeminiTranslation;
window.updateAiBadgeStatus = updateAiBadgeStatus;

// ==========================================
// SECTION 3: Flight Alternative Parser (OCR)
// ==========================================

const ALT_AIRLINE_CATALOG = [
  { name: 'Wizz Air Malta', iata: 'W4' },
  { name: 'Wizz Air UK', iata: 'W9' },
  { name: 'Wizz Air', iata: 'W6' },
  { name: 'Wizz', iata: 'W6' },
  { name: 'Ryanair', iata: 'FR' },
  { name: 'Buzz', iata: 'RR' },
  { name: 'Malta Air', iata: 'AL' },
  { name: 'Lufthansa', iata: 'LH' },
  { name: 'LOT Polish Airlines', iata: 'LO' },
  { name: 'LOT Polish', iata: 'LO' },
  { name: 'LOT', iata: 'LO' },
  { name: 'Turkish Airlines', iata: 'TK' },
  { name: 'Turkish', iata: 'TK' },
  { name: 'Pegasus Airlines', iata: 'PC' },
  { name: 'Pegasus', iata: 'PC' },
  { name: 'easyJet', iata: 'U2' },
  { name: 'KLM Royal Dutch Airlines', iata: 'KL' },
  { name: 'KLM', iata: 'KL' },
  { name: 'Air France', iata: 'AF' },
  { name: 'Austrian Airlines', iata: 'OS' },
  { name: 'Austrian', iata: 'OS' },
  { name: 'Swiss International Air Lines', iata: 'LX' },
  { name: 'Swiss', iata: 'LX' },
  { name: 'Brussels Airlines', iata: 'SN' },
  { name: 'British Airways', iata: 'BA' },
  { name: 'Iberia', iata: 'IB' },
  { name: 'Vueling Airlines', iata: 'VY' },
  { name: 'Vueling', iata: 'VY' },
  { name: 'Norwegian', iata: 'DY' },
  { name: 'Scandinavian Airlines', iata: 'SK' },
  { name: 'SAS', iata: 'SK' },
  { name: 'Finnair', iata: 'AY' },
  { name: 'TAP Air Portugal', iata: 'TP' },
  { name: 'TAP', iata: 'TP' },
  { name: 'Aegean Airlines', iata: 'A3' },
  { name: 'Aegean', iata: 'A3' },
  { name: 'Air Serbia', iata: 'JU' },
  { name: 'Croatia Airlines', iata: 'OU' },
  { name: 'Smartwings', iata: 'QS' },
  { name: 'Flydubai', iata: 'FZ' },
  { name: 'Qatar Airways', iata: 'QR' },
  { name: 'Emirates', iata: 'EK' },
  { name: 'Etihad Airways', iata: 'EY' },
  { name: 'Saudia', iata: 'SV' },
  { name: 'Air Baltic', iata: 'BT' },
  { name: 'airBaltic', iata: 'BT' },
  { name: 'Eurowings', iata: 'EW' },
  { name: 'Transavia', iata: 'HV' },
  { name: 'Volotea', iata: 'V7' },
  { name: 'Jet2', iata: 'LS' },
  { name: 'Condor', iata: 'DE' },
  { name: 'SunExpress', iata: 'XQ' },
  { name: 'SkyUp Airlines', iata: 'PQ' },
  { name: 'SkyUp', iata: 'PQ' },
  { name: 'Flyone', iata: '5F' },
  { name: 'HiSky', iata: 'H4' },
  { name: 'United Airlines', iata: 'UA' },
  { name: 'Delta Air Lines', iata: 'DL' },
  { name: 'American Airlines', iata: 'AA' },
  { name: 'Air Canada', iata: 'AC' },
  { name: 'JetBlue', iata: 'B6' },
  { name: 'Avianca', iata: 'AV' },
  { name: 'LATAM', iata: 'LA' },
  { name: 'Aeromexico', iata: 'AM' },
  { name: 'JetSmart', iata: 'JA' },
  { name: 'Gol', iata: 'G3' },
  { name: 'Volaris', iata: 'Y4' },
  { name: 'Aerolineas Argentinas', iata: 'AR' },
  { name: 'Copa Airlines', iata: 'CM' },
  { name: 'Qantas', iata: 'QF' },
  { name: 'Air New Zealand', iata: 'NZ' },
  { name: 'Singapore Airlines', iata: 'SQ' },
  { name: 'Cathay Pacific', iata: 'CX' },
  { name: 'ANA', iata: 'NH' },
  { name: 'Japan Airlines', iata: 'JL' },
  { name: 'Korean Air', iata: 'KE' },
  { name: 'Asiana', iata: 'OZ' },
  { name: 'China Southern', iata: 'CZ' },
  { name: 'China Eastern', iata: 'MU' },
  { name: 'Air China', iata: 'CA' },
  { name: 'Thai Airways', iata: 'TG' },
  { name: 'Thai AirAsia', iata: 'FD' },
  { name: 'Vietnam Airlines', iata: 'VN' },
  { name: 'Malaysia Airlines', iata: 'MH' },
  { name: 'Garuda Indonesia', iata: 'GA' },
  { name: 'Philippine Airlines', iata: 'PR' },
  { name: 'IndiGo', iata: '6E' },
  { name: 'Air India', iata: 'AI' },
  { name: 'SpiceJet', iata: 'SG' },
  { name: 'EgyptAir', iata: 'MS' },
  { name: 'Ethiopian Airlines', iata: 'ET' },
  { name: 'Royal Air Maroc', iata: 'AT' },
  { name: 'South African Airways', iata: 'SA' },
  { name: 'Kenya Airways', iata: 'KQ' },
  { name: 'Azerbaijan Airlines', iata: 'J2' },
  { name: 'Air Cairo', iata: 'SM' },
  { name: 'FlyArystan', iata: 'FS' },
  { name: 'Air Astana', iata: 'KC' },
  { name: 'Flynas', iata: 'XY' },
  { name: 'Flyadeal', iata: 'F3' },
  { name: 'Bangkok Airways', iata: 'PG' },
  { name: 'Porter Airlines', iata: 'PD' },
  { name: 'Air Europa', iata: 'UX' }
];

function initAltParser() {
  // Global clipboard paste listener (Ctrl + V)
  window.addEventListener('paste', (e) => {
    if (state.currentTab !== 'altparser') return;
    const items = (e.clipboardData || e.originalEvent?.clipboardData)?.items;
    if (!items) return;

    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        if (blob) {
          processAltImage(blob);
          e.preventDefault();
          break;
        }
      }
    }
  });

  // Global Ctrl + Enter listener to copy parsed result
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (state.currentTab === 'altparser') {
        e.preventDefault();
        copyAltResultLine();
      }
    }
  });

  updateAltResultLine();
}

function handleAltDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  const zone = document.getElementById('altDropZone');
  if (zone) zone.classList.add('border-sky-500', 'bg-sky-100/50', 'dark:bg-sky-900/40');
}

function handleAltDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  const zone = document.getElementById('altDropZone');
  if (zone) zone.classList.remove('border-sky-500', 'bg-sky-100/50', 'dark:bg-sky-900/40');
}

function handleAltDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  handleAltDragLeave(e);

  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
      processAltImage(file);
    } else {
      showToast('Будь ласка, завантажте файл зображення');
    }
  }
}

function handleAltFileSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (file) {
    processAltImage(file);
  }
}

// Preprocessing image on canvas for sharp OCR
async function preprocessAltImage(fileOrBlob) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(fileOrBlob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      try {
        const canvas = document.createElement('canvas');
        const scale = 2.5; // Upscale 2.5x to clearly read small texts like LO149, EY712
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Enhance contrast
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
          const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
          const adjusted = gray > 180 ? 255 : (gray < 80 ? 0 : ((gray - 128) * 1.4 + 128));
          d[i] = adjusted;
          d[i + 1] = adjusted;
          d[i + 2] = adjusted;
        }
        ctx.putImageData(imgData, 0, 0);

        canvas.toBlob((blob) => {
          resolve(blob || fileOrBlob);
        }, 'image/png');
      } catch (e) {
        resolve(fileOrBlob);
      }
    };
    img.onerror = () => resolve(fileOrBlob);
    img.src = url;
  });
}

async function processAltImage(fileOrBlob) {
  const preview = document.getElementById('altImagePreview');
  const previewContainer = document.getElementById('altImagePreviewContainer');
  const progressContainer = document.getElementById('altOcrProgressContainer');
  const progressBar = document.getElementById('altOcrProgressBar');
  const percentText = document.getElementById('altOcrPercent');
  const statusText = document.getElementById('altOcrStatusText');
  const displayEl = document.getElementById('altResultLineDisplay');

  // Display image preview
  const reader = new FileReader();
  reader.onload = (e) => {
    if (preview) preview.src = e.target.result;
    if (previewContainer) previewContainer.classList.remove('hidden');
  };
  reader.readAsDataURL(fileOrBlob);

  // Clear previous flight data immediately so user sees it is processing new image
  state.altParser.date = '';
  state.altParser.flight = '';
  state.altParser.time = '';
  state.altParser.route = '';
  const elDate = document.getElementById('altFieldDate');
  const elFlight = document.getElementById('altFieldFlight');
  const elTime = document.getElementById('altFieldTime');
  const elRoute = document.getElementById('altFieldRoute');
  if (elDate) elDate.value = '';
  if (elFlight) elFlight.value = '';
  if (elTime) elTime.value = '';
  if (elRoute) elRoute.value = '';

  if (displayEl) {
    displayEl.textContent = '⚡ Вичитуємо рейс зі скріншота...';
    displayEl.className = "p-4 rounded-xl bg-slate-950/90 border border-sky-500/50 font-mono text-sm sm:text-base font-bold text-amber-300 select-all tracking-wide break-words shadow-inner animate-pulse";
  }

  if (progressContainer) progressContainer.classList.remove('hidden');
  if (progressBar) progressBar.style.width = '15%';
  if (percentText) percentText.textContent = '15%';
  if (statusText) statusText.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i><span>Оптимізація зображення...</span>`;
  safeCreateIcons(statusText);

  try {
    if (typeof Tesseract === 'undefined') {
      throw new Error('Бібліотека Tesseract ще завантажується...');
    }

    // Preprocess image for 2.5x sharp resolution
    const processedBlob = await preprocessAltImage(fileOrBlob);

    const worker = await Tesseract.createWorker('eng', 1, {
      logger: m => {
        if (m.status === 'recognizing text' && typeof m.progress === 'number') {
          const pct = Math.min(Math.round(m.progress * 100), 99);
          if (progressBar) progressBar.style.width = `${pct}%`;
          if (percentText) percentText.textContent = `${pct}%`;
          if (statusText) statusText.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i><span>Вичитування рейсу (${pct}%)...</span>`;
        }
      }
    });

    const ret = await worker.recognize(processedBlob);
    await worker.terminate();

    const rawText = ret.data.text || '';
    state.altParser.rawOcrText = rawText;

    const debugEl = document.getElementById('altOcrRawText');
    if (debugEl) debugEl.textContent = rawText || '(Пустий результат OCR)';

    // Parse the extracted text
    parseFlightText(rawText);

    if (progressBar) progressBar.style.width = '100%';
    if (percentText) percentText.textContent = '100%';
    if (statusText) statusText.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i><span class="text-emerald-600 dark:text-emerald-400 font-bold">Успішно розпізнано!</span>`;
    safeCreateIcons(statusText);

    setTimeout(() => {
      if (progressContainer) progressContainer.classList.add('hidden');
    }, 2200);

    showToast('Скріншот рейсу успішно розпізнано!');
  } catch (err) {
    console.warn('OCR error:', err);
    if (statusText) statusText.innerHTML = `<span class="text-rose-500 font-bold">Помилка OCR. Введіть текст вручну.</span>`;
    updateAltResultLine();
    showToast('Не вдалося розпізнати. Введіть рейс вручну.');
  }
}

function parseFlightText(text) {
  if (!text) {
    updateAltResultLine();
    return;
  }

  // 1. EXTRACT DATE
  const monthMap = {
    'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'may': '05', 'jun': '06',
    'jul': '07', 'aug': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12',
    // Ukrainian
    'січ': '01', 'лют': '02', 'бер': '03', 'кві': '04', 'тра': '05', 'чер': '06',
    'лип': '07', 'сер': '08', 'вер': '09', 'жов': '10', 'лис': '11', 'гру': '12',
    // Russian
    'янв': '01', 'фев': '02', 'мар': '03', 'апр': '04', 'май': '05', 'июн': '06',
    'июл': '07', 'авг': '08', 'сен': '09', 'окт': '10', 'ноя': '11', 'дек': '12',
    // European
    'ott': '10', 'okt': '10', 'dic': '12', 'dez': '12'
  };

  let extractedDate = '';
  // Pattern: "Sat, 31 Oct 2026" or "31 Oct 2026"
  const mDateText = text.match(/(?:[A-Za-z]{3},?\s+)?(\d{1,2})\s+([A-Za-zА-Яа-яіІєЄїЇ]{3,9})\s+(\d{4})/i);
  if (mDateText) {
    const day = mDateText[1].padStart(2, '0');
    const monStr = mDateText[2].toLowerCase().slice(0, 3);
    const yr = mDateText[3];
    if (monthMap[monStr]) {
      extractedDate = `${day}.${monthMap[monStr]}.${yr}`;
    }
  }

  // Pattern: DD.MM.YYYY or DD/MM/YYYY
  if (!extractedDate) {
    const mDateDigits = text.match(/\b(\d{1,2})[\.\/\-](\d{1,2})[\.\/\-](\d{4})\b/);
    if (mDateDigits) {
      extractedDate = `${mDateDigits[1].padStart(2, '0')}.${mDateDigits[2].padStart(2, '0')}.${mDateDigits[3]}`;
    }
  }

  // Pattern: YYYY-MM-DD
  if (!extractedDate) {
    const mDateIso = text.match(/\b(\d{4})[\.\/\-](\d{1,2})[\.\/\-](\d{1,2})\b/);
    if (mDateIso) {
      extractedDate = `${mDateIso[3].padStart(2, '0')}.${mDateIso[2].padStart(2, '0')}.${mDateIso[1]}`;
    }
  }

  // 2. EXTRACT TIMES (Departure - Arrival)
  // Clean duration mentions first (e.g. 16h 10m, 2h 50m) so they aren't parsed as times
  const cleanedForTime = text.replace(/\b\d{1,2}\s*[hH]\s*\d{1,2}\s*[mM](?:in)?\b/g, '');
  const rawTimes = [];
  const timeRegex = /\b([01]?\d|2[0-3]):([0-5]\d)\b/g;
  let tMatch;
  while ((tMatch = timeRegex.exec(cleanedForTime)) !== null) {
    rawTimes.push(`${tMatch[1].padStart(2, '0')}:${tMatch[2]}`);
  }

  let extractedTime = '';
  const hasNextDay = /\+1\s*d|\[\+1\s*d\]|\+1/i.test(text);
  const nextDaySuffix = hasNextDay ? ' (+1d)' : '';

  if (rawTimes.length >= 2) {
    extractedTime = `${rawTimes[0]}-${rawTimes[rawTimes.length - 1]}${nextDaySuffix}`;
  } else if (rawTimes.length === 1) {
    extractedTime = `${rawTimes[0]}${nextDaySuffix}`;
  }

  // 3. EXTRACT AIRLINE & FLIGHT NUMBERS (Handles single flights & connecting flights like LO149 / EY712)
  const flightMatches = [];
  // Matches LO149, EY712, W45131, FR8321, LH1492, PC123, BA12
  const flightRegex = /\b([A-Z]{2}|[A-Z][0-9]|[0-9][A-Z])\s*([0-9]{2,4})\b/g;
  let fm;
  while ((fm = flightRegex.exec(text)) !== null) {
    const code = fm[1].toUpperCase();
    const num = fm[2];
    // Exclude aircraft models
    if (code === 'A3' && (num === '20' || num === '21' || num === '30' || num === '50')) continue;
    if (code === 'B7' && (num === '37' || num === '77' || num === '87')) continue;
    const fullFlt = `${code}${num}`;
    if (!flightMatches.includes(fullFlt)) {
      flightMatches.push(fullFlt);
    }
  }

  let extractedFlight = '';
  if (flightMatches.length > 0) {
    extractedFlight = flightMatches.join(' / ');
  } else {
    // Check known airline names from catalog
    let detectedIata = '';
    for (const ac of ALT_AIRLINE_CATALOG) {
      const re = new RegExp(`\\b${ac.name}\\b`, 'i');
      if (re.test(text)) {
        detectedIata = ac.iata;
        break;
      }
    }
    if (detectedIata) {
      const digits = text.match(/(?:flight|flt|рейс|№)?\s*\b([1-9][0-9]{2,3})\b/i);
      extractedFlight = digits ? `${detectedIata}${digits[1]}` : detectedIata;
    }
  }

  // 4. EXTRACT ROUTE (City [IATA] or Clean City Lines)
  let extractedRoute = '';
  
  // UI noise words that should NEVER appear in a route
  const uiNoiseWords = /^(CHANGE|PASSENGER|PASSENGERS|FLIGHTS|FLIGHT|Smart|fare|ticket|Bundle|Administration|fee|TOTAL|price|order|details|Show|baggage|cabin|checked|included|Adult|Infant|Child|Select|Book|deal|lowest|Direct|Non-stop|Terminal|operated|Return|Outbound|Inbound|Departing|Arriving|Economy|Business|First|Premium|Class|Cancel|Modify|Manage|Edit|View|Add|Remove|Delete|Update|Save|Close|Back|Next|Continue|Submit|Confirm|OK|Yes|No|Search|Filter|Sort|Apply|Reset|Clear|Help|Info|Warning|Error|Loading|Please|wait|Thank|you)$/i;
  
  // Try pattern: City [IATA] or City (IATA) e.g. "Warsaw [WAW]" and "Abu Dhabi [AUH]"
  const cityIataRegex = /([A-Za-zА-Яа-яіІєЄїЇ\s\-]+?)\s*[\[\(]([A-Z]{3})[\]\)]/g;
  const cityIataMatches = [];
  let cim;
  while ((cim = cityIataRegex.exec(text)) !== null) {
    let cityName = cim[1].trim()
      .replace(/^(lowest|price|deal|direct|flight|from|to|depart|arrive)\s+/i, '')
      .trim();
    const iata = cim[2].toUpperCase();
    if (cityName.length >= 2 && !uiNoiseWords.test(cityName)) {
      cityIataMatches.push(`${cityName} (${iata})`);
    }
  }

  if (cityIataMatches.length >= 2) {
    extractedRoute = `${cityIataMatches[0]} – ${cityIataMatches[cityIataMatches.length - 1]}`;
  }

  // Smart approach: search ENTIRE text for "CityName – CityName" pattern
  // This catches "Baku – Rome Fiumicino" but skips "CHANGE – W" (all-caps noise + single char)
  if (!extractedRoute) {
    // Pattern: ProperCaseWord(s) <dash> ProperCaseWord(s)
    // Each side must start with uppercase followed by lowercase, min 3 chars per side
    // Allows multi-word city names like "Rome Fiumicino", "Abu Dhabi", "New York"
    const routeDashRegex = /([A-ZА-ЯІЇЄ][a-zа-яіїє]{2,}(?:[\s\-][A-ZА-ЯІЇЄ][a-zа-яіїє]{1,})*)\s*[–—]\s*([A-ZА-ЯІЇЄ][a-zа-яіїє]{2,}(?:[\s\-][A-ZА-ЯІЇЄ][a-zа-яіїє]{1,})*)/g;
    const routeCandidates = [];
    let rm;
    while ((rm = routeDashRegex.exec(text)) !== null) {
      const origin = rm[1].trim();
      const dest = rm[2].trim();
      // Filter out noise matches
      if (uiNoiseWords.test(origin) || uiNoiseWords.test(dest)) continue;
      // Skip if either side is a month or day name
      if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Sat|Sun|Mon|Tue|Wed|Thu|Fri)$/i.test(origin)) continue;
      if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Sat|Sun|Mon|Tue|Wed|Thu|Fri)$/i.test(dest)) continue;
      // Skip airline names
      if (/^(Wizz|Ryanair|Lufthansa|Turkish|Etihad|Emirates|Qatar|Pegasus|LOT|Airbus|Boeing)$/i.test(origin)) continue;
      if (/^(Wizz|Ryanair|Lufthansa|Turkish|Etihad|Emirates|Qatar|Pegasus|LOT|Airbus|Boeing)$/i.test(dest)) continue;
      routeCandidates.push({ origin, dest, full: `${origin} – ${dest}` });
    }
    if (routeCandidates.length > 0) {
      // If multiple candidates, prefer the longest (most likely the real city pair)
      routeCandidates.sort((a, b) => b.full.length - a.full.length);
      extractedRoute = routeCandidates[0].full;
    }
  }

  // Fallback: parse clean lines with dash separators  
  if (!extractedRoute) {
    const lines = text.split('\n')
      .map(l => l.trim())
      .filter(l => {
        if (!l || l.length < 5) return false;
        // Extended filter: exclude all UI noise, prices, dates, times, airline names
        if (/Airbus|Boeing|Embraer|Bombardier|A32|A33|B73|B77|operated|Wizz|Ryanair|Lufthansa|Turkish|easyJet|LOT|Etihad|Emirates|Qatar|Pegasus/i.test(l)) return false;
        if (/CHANGE|PASSENGER|FLIGHTS|Smart\s*fare|Bundle|Administration|fee|TOTAL|order|details|Select|Book|deal|lowest|Direct|Non-stop|Terminal/i.test(l)) return false;
        if (/Sat|Sun|Mon|Tue|Wed|Thu|Fri|Oct|Nov|Dec|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep/i.test(l)) return false;
        if (/UTC|GMT|\dh\s*\d+m|Price|Flight\s*ticket|cabin\s*bag|checked\s*bag|baggage|included|Adult|Infant|Child/i.test(l)) return false;
        if (/[\$€£₴₽¥]/.test(l)) return false;
        if (/^\d{1,2}:\d{2}/.test(l)) return false;
        if (/^\d{1,2}[\.\/-]\d{1,2}/.test(l)) return false;
        if (/^\d+$/.test(l.replace(/\s/g, ''))) return false;
        return true;
      });

    for (const line of lines) {
      if (line.includes('->') || line.includes('–') || line.includes(' - ') || /\bto\b/i.test(line)) {
        const parts = line.split(/(?:->|–|\s+-\s+|\s+to\s+)/i);
        if (parts.length >= 2) {
          const p0 = parts[0].trim().replace(/[^A-Za-zА-Яа-яіІєЄїЇ\s\-]/g, '').trim();
          const p1 = parts[parts.length - 1].trim().replace(/[^A-Za-zА-Яа-яіІєЄїЇ\s\-]/g, '').trim();
          if (p0.length >= 3 && p1.length >= 3 && !uiNoiseWords.test(p0) && !uiNoiseWords.test(p1)) {
            extractedRoute = `${p0} – ${p1}`;
            break;
          }
        }
      }
    }
  }

  // Always update state & input fields (even if empty, don't leave old flight data!)
  state.altParser.date = extractedDate;
  state.altParser.flight = extractedFlight;
  state.altParser.time = extractedTime;
  state.altParser.route = extractedRoute;

  const elDate = document.getElementById('altFieldDate');
  const elFlight = document.getElementById('altFieldFlight');
  const elTime = document.getElementById('altFieldTime');
  const elRoute = document.getElementById('altFieldRoute');

  if (elDate) {
    elDate.value = extractedDate;
    elDate.placeholder = extractedDate ? '' : 'Введіть дату (напр. 31.10.2026)';
  }
  if (elFlight) {
    elFlight.value = extractedFlight;
    elFlight.placeholder = extractedFlight ? '' : 'Введіть рейс (напр. LO149)';
  }
  if (elTime) {
    elTime.value = extractedTime;
    elTime.placeholder = extractedTime ? '' : '00:00-00:00';
  }
  if (elRoute) {
    elRoute.value = extractedRoute;
    elRoute.placeholder = extractedRoute ? '' : 'Звідки – Куди';
  }

  updateAltResultLine();
}

function onAltFieldChange() {
  state.altParser.date = document.getElementById('altFieldDate')?.value.trim() || '';
  state.altParser.flight = document.getElementById('altFieldFlight')?.value.trim() || '';
  state.altParser.time = document.getElementById('altFieldTime')?.value.trim() || '';
  state.altParser.route = document.getElementById('altFieldRoute')?.value.trim() || '';
  updateAltResultLine();
}

function setAltFormatStyle(style) {
  state.altParser.formatStyle = style;
  
  const std = document.getElementById('altFmtStd');
  const cmp = document.getElementById('altFmtCmp');
  const brk = document.getElementById('altFmtBrk');

  const activeClass = "px-2.5 py-1 rounded-lg text-[11px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300";
  const inactiveClass = "px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200";

  if (std) std.className = style === 'standard' ? activeClass : inactiveClass;
  if (cmp) cmp.className = style === 'compact' ? activeClass : inactiveClass;
  if (brk) brk.className = style === 'brackets' ? activeClass : inactiveClass;

  updateAltResultLine();
}

function updateAltResultLine() {
  const { date, flight, time, route, formatStyle } = state.altParser;
  let formatted = '';

  const displayDate = date || '';
  const displayFlight = flight || '';
  const displayTime = time || '';
  const displayRoute = route || '';

  if (formatStyle === 'compact') {
    const parts = [displayFlight, displayDate, displayTime, displayRoute].filter(Boolean);
    formatted = parts.join(' | ');
  } else if (formatStyle === 'brackets') {
    formatted = `${displayRoute ? displayRoute + ', ' : ''}${displayDate}${displayTime ? ' (' + displayTime + ')' : ''}${displayFlight ? ', ' + displayFlight : ''}`;
  } else {
    // Standard format (user requested: 31.10.2026 - W45131 - 05:55-08:45 Tirana – Brussels Charleroi)
    const parts = [];
    if (displayDate) parts.push(displayDate);
    if (displayFlight) parts.push(displayFlight);
    if (displayTime) parts.push(displayTime);
    const prefix = parts.join(' - ');
    formatted = prefix ? (displayRoute ? `${prefix} ${displayRoute}` : prefix) : displayRoute;
  }

  const displayEl = document.getElementById('altResultLineDisplay');
  if (displayEl) {
    displayEl.className = "p-4 rounded-xl bg-slate-950/90 border border-sky-500/50 font-mono text-sm sm:text-base font-bold text-sky-200 select-all tracking-wide break-words shadow-inner";
    displayEl.textContent = formatted || 'Вставте скріншот (Ctrl + V) або введіть рейс...';
  }
}

function copyAltResultLine() {
  const displayEl = document.getElementById('altResultLineDisplay');
  if (!displayEl) return;
  const text = displayEl.textContent.trim();
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyAltResultBtn');
    const btnText = document.getElementById('copyAltResultBtnText');
    if (btn && btnText) {
      btn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all copy-pulse";
      btnText.textContent = "Скопійовано!";
      setTimeout(() => {
        btn.className = "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white shadow-md hover:shadow-sky-500/20 transition-all active:scale-[0.98]";
        btnText.textContent = "Скопіювати рядок";
      }, 1800);
    }
    showToast('Рядок рейсу скопійовано у буфер!');
  }).catch(() => {
    showToast('Помилка копіювання');
  });
}

function insertAltIntoTemplate() {
  const displayEl = document.getElementById('altResultLineDisplay');
  const altText = displayEl ? displayEl.textContent.trim() : '';
  if (!altText) {
    showToast('Спочатку вичитайте або введіть рейс');
    return;
  }

  // Switch to Templates tab
  switchTab('templates');

  // If a template is open, fill into REQUEST_DETAILS or FLIGHT
  if (state.selectedTemplate) {
    if (state.selectedTemplate.placeholders?.includes('REQUEST_DETAILS')) {
      onPlaceholderChange('REQUEST_DETAILS', altText);
      const input = document.getElementById('ph_REQUEST_DETAILS');
      if (input) input.value = altText;
    } else if (state.selectedTemplate.placeholders?.includes('FLIGHT')) {
      onPlaceholderChange('FLIGHT', altText);
      const input = document.getElementById('ph_FLIGHT');
      if (input) input.value = altText;
    }
  }
  showToast('Рядок рейсу перенесено в шаблон звернення!');
}

function clearAltImage() {
  const preview = document.getElementById('altImagePreview');
  const previewContainer = document.getElementById('altImagePreviewContainer');
  const fileInput = document.getElementById('altFileInput');
  const rawInput = document.getElementById('altRawTextInput');

  if (preview) preview.src = '';
  if (previewContainer) previewContainer.classList.add('hidden');
  if (fileInput) fileInput.value = '';
  if (rawInput) rawInput.value = '';

  state.altParser.rawOcrText = '';
  const debugEl = document.getElementById('altOcrRawText');
  if (debugEl) debugEl.textContent = 'Текст ще не завантажено';

  showToast('Скріншот очищено');
}

function onAltRawTextInput(val) {
  if (val && val.trim().length > 10) {
    parseFlightText(val);
  }
}

function parseAltRawText() {
  const rawInput = document.getElementById('altRawTextInput');
  if (rawInput && rawInput.value.trim()) {
    parseFlightText(rawInput.value);
    showToast('Текст успішно оброблено!');
  } else {
    showToast('Введіть текст рейсу для обробки');
  }
}

// Section 3 window exports
window.initAltParser = initAltParser;
window.handleAltDragOver = handleAltDragOver;
window.handleAltDragLeave = handleAltDragLeave;
window.handleAltDrop = handleAltDrop;
window.handleAltFileSelect = handleAltFileSelect;
window.clearAltImage = clearAltImage;
window.onAltRawTextInput = onAltRawTextInput;
window.parseAltRawText = parseAltRawText;
window.copyAltResultLine = copyAltResultLine;
window.insertAltIntoTemplate = insertAltIntoTemplate;
window.onAltFieldChange = onAltFieldChange;
window.setAltFormatStyle = setAltFormatStyle;


