const lenguaje = () => {
return 'es'
} //Español

//AVISOS DE MENSAJE
const smsAvisoRG = () => {
return `╰⊱✅⊱ *РЕЗУЛЬТАТ* ⊱✅⊱╮\n\n`
}
const smsAvisoAG = () => {
return `╰⊱⚠️⊱ *ПРЕДУПРЕЖДЕНИЕ* ⊱⚠️⊱╮\n\n`
}
const smsAvisoIIG = () => {
return `╰⊱❕⊱ *ИНФОРМАЦИЯ* ⊱❕⊱╮\n\n`
}
const smsAvisoFG = () => {
return `╰⊱❌⊱ *ОШИБКА* ⊱❌⊱╮\n\n`
}
const smsAvisoMG = () => {
return `╰⊱❗️⊱ *НЕПРАВИЛЬНО ИСПОЛЬЗОВАННОЕ ДЕЙСТВИЕ* ⊱❗️⊱╮\n\n`
}
const smsAvisoEEG = () => {
return `╰⊱📩⊱ *ОТЧЕТ* ⊱📩⊱╮\n\n`
}
const smsAvisoEG = () => {
return `╰⊱💚⊱ *УСПЕХ* ⊱💚⊱╮\n\n`
}

//ПАРАМЕТРЫ В КОМАНДАХ
const smsRowner = () => {
return `\`\`\`¡¡ЭТУ КОМАНДУ МОГУ ИСПОЛЬЗОВАТЬ ТОЛЬКО Я КАК СОЗДАТЕЛЬ(А) БОТА!!\`\`\``
} //ЧИСЛО БОТОВ
const smsOwner = () => {
return `\`\`\`¡¡ЭТА КОМАНДА ТОЛЬКО МОЙ СОЗДАТЕЛЬ(A) ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ЭТОR!!\`\`\``
} //владелец
const smsMods = () => {
return `\`\`\`¡¡ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ МОДЕРАТОРОВ И МОЕГО СОЗДАТЕЛЯ(A)ОНИ МОГУТ ИСПОЛЬЗОВАТЬ ЭТО!!\`\`\`\``
} //МОДЕРАТОРЫ
const smsPremium = () => {
return `\`\`\`¡¡ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ДЛЯ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ И МОЕГО СОЗДАТЕЛЯ(A)!! ЧТОБЫ СТАТЬ ПРЕМИУМ, КУПИТЕ АБОНЕМЕНТ, ИСПОЛЬЗУЯ #pass premium\`\`\``
} //ПРЕМИУМ ПОЛЬЗОВАТЕЛИ
const smsGroup = () => {
return`\`\`\`¡¡ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ГРУППАХ!!\`\`\``
} //ДЛЯ ГРУПП
const smsPrivate = () => {
return `\`\`\`¡¡ЭТУ КОМАНДУ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ЧАСТНОМ ПОРЯДКЕ!!\`\`\``
} //К ЧАСТНОМУ
const smsAdmin = () => {
return `\`\`\`¡¡ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ!!\`\`\``
} //АДМИНИСТРАТОРЫ
const smsBotAdmin = () => {
return `\`\`\`¡¡МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ВЫ МОГЛИ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\``
} //АДМИНИСТРАТОР BOT CON
const smsUnreg = () => {
return `\`\`\`¡¡ВЫ ДОЛЖНЫ БЫТЬ ЗАРЕГИСТРИРОВАНЫ(A) ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ, ВВЕДИТЕ #verificar ЧТОБЫ ЗАРЕГИСТРИРОВАТЬСЯ!!\`\`\``
} //ПРОВЕРИТЬ
const smsRestrict = () => {
return `\`\`\`¡¡ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ (А)!!\`\`\``
} //ОГРАНИЧИТЬ КОМАНДУ

//СПИСОК МЕНЮ
const smsTime = () => {
return `актуальное время`
}
const smsUptime = () => {
return`Функционирующий Во Время`
}
const smsVersion = () => {
return `Версия для ${global.gt}`
}
const smsTotalUsers = () => {
return `Общее количество пользователей`
}
const smsMode = () => {
return `Он находится в режиме`
}
const smsModePublic = () => {
return`ОБЩЕСТВЕННЫЙ`
}
const smsModePrivate = () => {
return`ЧАСТНЫЙ`
}
const smsBanChats = () => {
return `Запреты в чатах`
}
const smsBanUsers = () => {
return `Обычное(-ые) запрещение(-ы)`
}
const smsPareja = () => {
return `Партнер`
}
const smsResultPareja = () => {
return `У него нет Партнера`
}
const smsSaludo = () => {
return `👋 !ПРИВЕТ! ДОБРО ПОЖАЛОВАТЬ (В) 👋`
}
const smsDia = () => {
return `🌇 Доброе утро ⛅`
}
const smsTarde = () => {
return `🏙️ Добрый день 🌤️`
}
const smsTarde2 = () => {
return `🌆Добрый день 🌥️`
}
const smsNoche = () => {
return `🌃 Добрый ночи 💫`
}
const smsListaMenu = () => {
return `⊹СПИСОК МЕНЮ ⊹`
}
const smsLista1 = () => {
return `🌟ИНФОРМАЦИЯ О Ванильке 🌟`
}
const smsLista2 = () => {
return `💖 ТВОРЕЦ 💖`
}
const smsLista3 = () => {
return `🎁 ПОЖЕРТВОВАТЬ🎁`
}
const smsLista4 = () => {
return `🚀СКОРОСТЬ 🚀`
}
const smsLista5 = () => {
return `💡 INFORMACIÓN DEL MENÚ 💡`
}
const smsLista6 = () => {
return `🌀 MENÚ COMPLETO 🌀`
}
const smsLista7 = () => {
return `🐈 УСТАНОВИТЬ Ванильку 🐈`
}
const smsLista8 = () => {
return `🍄БЫТЬ СУБ-БОТОМ 🍄`
}
const smsLista9 = () => {
return `📄 ПРАВИЛА, УСЛОВИЯ И КОНФИДЕНЦИАЛЬНОСТЬ 📄`
}
const smsLista10 = () => {
return `🌟ПРИКЛЮЧЕНИЕ🌟`
}
const smsLista11 = () => {
return `🏆 ЛУЧШИЕ МИРОВЫЕ🏆`
}
const smsLista12 = () => {
return `🏅ОБЫЧНАЯ ПРЕМИЯ🏅`
}
const smsLista13 = () => {
return `🎟️ОБЫЧНО(А) ПРЕМИЯ 🎟️`
}
const smsLista14 = () => {
return `🛣️ЕЖЕДНЕВНЫЕ МИССИИ 🛣️`
}
const smsLista15 = () => {
return `⚗️ МЕНЮ РОЛЕВОЙ ИГРЫ ⚗️`
}
const smsLista16 = () => {
return `🏪 МАГАЗИН ПО ПОКУПКЕ И ПРОДАЖЕ 🏪`
}
const smsLista17 = () => {
return `🎒 ИНВЕНТАРИЗАЦИЯ 🎒`
}
const smsLista18 = () => {
return `🌟 МУЛЬТИМЕДИА 🌟`
}
const smsLista19 = () => {
return `📲 МЕНЮ ЗАГРУЗОК 📲`
}
const smsLista20 = () => {
return `🔍МЕНЮ ПОИСКА 🔍`
}
const smsLista21 = () => {
return `🛰️ МЕНЮ КОНВЕРТЕРА 🛰️`
}
const smsLista22 = () => {
return `🧰 МЕНЮ МОДИФИКАТОРА ЗВУКА 🧰`
}
const smsLista22_1 = () => {
return `🔩 МЕНЮ ИНСТРУМЕНТОВ🔩`
}
const smsLista23 = () => {
return `🌟ПОТЕХА 🌟`
}
const smsLista24 = () => {
return `🎡ДИНАМИЧНЫЕ ИГРЫ🎡`
}
const smsLista25 = () => {
return `🔊 МЕНЮ АУДИО 🔊`
}
const smsLista26 = () => {
return `🎈МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ🎈`
}
const smsLista27 = () => {
return `✨ МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ ✨`
}
const smsLista28 = () => {
return `🌅 МЕНЮ ЛОГОТИПОВ 2 🌅`
}
const smsLista29 = () => {
return `⛩️ СЛУЧАЙНЫЕ МЕМЫ : АНИМЕ ⛩️`
}
const smsLista30 = () => {
return `🔞 МЕНЮ КОМАНД +18🔞`
}
const smsLista31 = () => {
return `🌟АРМАТУРА 🌟`
}
const smsLista32 = () => {
return `🔰МЕНЮ ДЛЯ ГРУПП 🔰`
}
const smsLista33 = () => {
return `📑 ДОСТУПНЫЕ СПИСКИ📑`
}
const smsLista34 = () => {
return `⚙️ ЦЕНТР НАСТРОЕК ⚙️`
}
const smsLista35 = () => {
return `💎МЕНЮ ДЛЯ ВЛАДЕЛЬЦА (А) 💎`
}

//main.js
const smsWelcome = () => {
return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ ДОБРО ПОЖАЛОВАТЬ(В)!!*\n┊💖 @user\n┊📄 *ПРОЧТИТЕ ОПИСАНИЕ ГРУППЫ*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`
}
const smsBye = () => {
return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *ОН НЕ ЗНАЕТ ГРУППУ, ЧАО!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'
}
const smsSpromote = () => {
return '*@user ТЕПЕРЬ ВЫ АДМИН В ЭТОЙ ГРУППЕ!!*'
}
const smsSdemote = () => {
return '*@user ТЕПЕРЬ ВЫ НЕ АДМИН В ЭТОЙ ГРУППЕ!!*'
}
const smsSdesc = () => {
return '*НОВОЕ ОПИСАНИЕ ГРУППЫ:*\n\n@desc'
}
const smsSsubject = () => {
return '*НОВОЕ НАЗВАНИЕ ГРУППЫ:*\n\n@subject'
}
const smsSicon = () => {
return '*КАРТИНКА ГРУППЫ ИЗМЕНЕНА!!*'
}
const smsSrevoke = () => {
return '*ССЫЛКА ДЛЯ ГРУППЫ ОБНОВЛЕНА!!*\n\n*@revoke*'
}
const smsConexion = () => {
return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 СВЯЗЬ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ УСПЕШНОЕ СОЕДИНЕНИЕ С ВАТСАПОМ 😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`
}
const smsCargando = () => {
return `✨ЗАГРУЖАЮЩИЙ...\n`
}
const smsCodigoQR = () => {
return `\n✅ ВРЕМЯ СКАНИРОВАНИЯ QR-КОДА ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД ✅`
}
const smsConexionOFF = () => {
return `\n⚠️ В АВТОНОМНОМ РЕЖИМЕ ОЧИСТИТЕ ПАПКУ ${global. authFile} И ОТСКАНИРУЙТЕ QR-КОД ⚠️`
}
const smsClearTmp = () => {
return `\n╭» 🟢 МУЛЬТИМЕДИЯ 🟢\n│→ФАЙЛЫ ИЗ УДАЛЕННОЙ ПАПКИ TMP\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeSession = () => {
return `\n╭» 🔵 ${global.authFile} 🔵\n│→УДАЛЕННЫЕ НЕСУЩЕСТВЕННЫЕ СЕАНСЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeOldFiles = () => {
return `\n╭» 🟠 АРХИВ 🟠\n│→ УДАЛЕННЫЕ ОСТАТОЧНЫЕ ФАЙЛЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeSessionSB1 = () => {
return `\n╭» 🟡 ВАНИЛЬКА 🟡\n│→НИЧЕГО ДЛЯ УДАЛЕНИЯR \n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeSessionSB2 = () => {
return `\n╭» ⚪ ВАНИЛЬКА ⚪\n│→УДАЛЕННЫЕ НЕСУЩЕСТВЕННЫЕ ФАЙЛЫ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeSessionSB3 = () => {
return `\n╭» 🔴ВАНИЛЬКА 🔴\n│→ОЙ, БЕЗ ОШИБОК\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️\n`
}
const smspurgeOldFiles1 = () => {
return `\n╭» 🟣АРХИВЫ 🟣\n│→`
}
const smspurgeOldFiles2 = () => {
return `УСПЕШНО УДАЛЕНО\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️♻️`
}
const smspurgeOldFiles3 = () => {
return `\n╭» 🔴 АРХИВЫ🔴\n│→`
}
const smspurgeOldFiles4 = () => {
return `УДАЛИТЬ НЕ УДАЛОСЬ\n╰― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 🗑️❌\n`
}
const smsConexioncerrar = () => {
return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹\n┆ ⚠️ СОЕДИНЕНИЕ СЕРРАДА, ВОССТАНОВЛЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`
}
const smsConexionperdida = () => {
return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂\n┆ ⚠️ ПОТЕРЯНО СОЕДИНЕНИЕ С СЕРВЕРОМ, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☂`
}
const smsConexionreem = () => {
return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗\n┆ ⚠️СОЕДИНЕНИЕ ЗАМЕНЕНО, ОТКРЫТ ДРУГОЙ НОВЫЙ СЕАНС, ПОЖАЛУЙСТА, СНАЧАЛА ВЫЙДИТЕ ИЗ ТЕКУЩЕГО СЕАНСАС.\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✗`
}
const smsConexionreinicio = () => {
return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓\n┆ ❇️ ПОДКЛЮЧЕНИЕ К СЕРВЕРУ...\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ✓`
}
const smsConexiontiem = () => {
return `\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸\n┆ ⌛ВРЕМЯ ПОДКЛЮЧЕНИЯ ИСТЕКЛО, ПОВТОРНОЕ ПОДКЛЮЧЕНИЕ....\n╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ▸`
}
const smsConexiondescon = (reason, connection) => {
return `\n⚠️❗ ПРИЧИНА НЕИЗВЕСТНОГО ОТКЛЮЧЕНИЯ: ${reason || ''} >> $ connection || ''}`
}
const smsMainBot = () => {
return "ЭТО БЫЛО ОБНОВЛЕНО 'main.js' УСПЕШНО"
}

//_allantilink.js
const smsTextoYT = () => {
return '😻 ВАНИЛЬКА - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 '
}
const smsApagar = () => {
return '❌ДЕЗАКТИВИРОВАТЬ'
}
const smsEncender = () => {
return '✅АКТИВИРОВАТЬ'
}
const smsEnlaceTik = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ТИКТОК\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsEnlaceYt = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ЮТУБ\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsEnlaceTel = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ТЕЛЕГРАМ\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsEnlaceFb = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ФЕЙСБУК\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsEnlaceIg = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ИНСТАГРАМ\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsEnlaceTw = () => {
return `ОБНАРУЖЕНА ССЫЛКА НА ТВИТЕР\n\n ВЫ БУДИТЕ УДАЛЕНЫ `
}
const smsAllAdmin = () => {
return `МНЕ НУЖНА АДМИНКА ЧТОБ УДАЛЯТЬ НАРУШИТЕЛЕЙ`
}
const smsSoloOwner = () => {
return `СОЗДАТЕЛЬ ДОЛЖЕН АКТИВИРОВАТЬ ЭТУ ФУНКЦИЮ\n*#on ограничить*`
}

//handler.js
const smsCont1 = () => {
return `*🔴 команда неудачно 🔴*`
}
const smsCont2 = () => {
return `*⚠️ плагин:*`
}
const smsCont3 = () => {
return `*⚠️ пользователь:*`
}
const smsCont4 = () => {
return `*⚠️ команды:*`
}
const smsCont5 = () => {
return `*⚠️ ошибка:*`
}
const smsCont6 = () => {
return `*❗ СООБЩИТЕ ОБ ЭТОМ СООБЩЕНИИ С ПОМОЩЬЮ КОМАНДЫ #reporte ЧТОБЫ ЕЕ РЕШИТЬ*`
}
const smsCont7 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*у вас нет алмазов!! 💎 перейтите в магазин*`
}
const smsCont8 = () => {
return ` *алмазы 💎 USADO(S)*`
}
const smsCont9 = () => {
return `${global.lenguajeGB['smsAvisoAG']()}*НУЖЕН УРОВЕНЬ ➡️*`
}
const smsCont10 = () => {
return `*ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ. ВАШ ТЕКУЩИЙ УРОВЕНЬ ➡️*`
}
const smsCont11 = () => {
return `*ОБНОВИТЕ С ПОМОЩЬЮ КОМАНДЫ*`
}
const smsCont12 = () => {
return `КЛАССНАЯ ГРУППА!! 😼`
}
const smsCont13 = () => {
return `КТО-ТО ПРИСОЕДИНИЛСЯ!! 🥳`
}
const smsCont14 = () => {
return `КТО-ТО УШЕЛ!! 🧐`
}
const smsCont15 = () => {
return `ПРИВЕТ`
}
const smsCont16 = () => {
return `ВИДЕОЗВОНКИ 📲`
}
const smsCont17 = () => {
return `ЗВОНКИ 📞`
}
const smsCont18 = () => {
return `ЗВОНКИ ЗАПРЕЩЕНЫ\n\nМНЕ ПРИДЕТСЯ ВАС ЗАБЛОКИРОВАТЬ/𝘼 \n*${global.ig}*`
}
const smsCont19 = () => {
return `АНТИУДАЛЕНИЕ`
}
const smsCont20 = () => {
return `*┃✤ номер:*`
}
const smsCont21 = () => {
return `*┃✤Отправка удаленного сообщения...*`
}

//_anti-internacional.js
const smsInt1 = () => {
return `этот номер`
}
const smsInt2 = () => {
return `В ЭТОЙ ГГРУППЕ НЕЛЬЗЯ!!`
}

//_antilink.js
const smsAdwa = () => {
return `${global.lenguajeGB['smsAvisoEG']()}ВЫ АДМИН ГРУППЫ ВАС НЕ УДАЛЯТ`
}
const smsEnlaceWat = () => {
return `${lenguajeGB['smsAvisoAG']()}ОБНАРУЖЕНА ССЫЛКА\n\nЯ ВАС УДАЛЯЮ`
}

//_antilink2.js
const smsEnlaceWatt = () => {
return `${lenguajeGB['smsAvisoAG']()}ЗАПРЕЩЕНАЯ ССЫЛКА\n\nЯ ВАС УДАЛЯЮ`
}

//_antispam.js
const smsNoSpam = () => {
return `🤨 НЕ СПАМИТЬ ВЫ БУДИТЕ ЗАБЛОКИРОВАНЫ`
}

//_antispam_.js
const smsNoSpam2 = () => {
return `НЕ СПАМИТЬ ИНАЧЕ ВАС ЗАБЛОКИРУЮТ!!`
}

//Texto
const smsConMenu = () => {
return `☘️ МЕНЮ`
} //🟡 ПРОСТОЯТЬ

//Error
const smsMalError = () => {
return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``
}
const smsMalError2 = () => {
return `${lenguajeGB['smsAvisoFG']()}\`\`\`ВОЗНИКЛО НЕУДОБСТВО. ПОПРОБУЙТЕ ЕЩЕ РАЗ.\`\`\``
}
const smsMalError3 = () => {
return `${lenguajeGB['smsAvisoFG']()}\`\`\`ЧТО-ТО ПОШЛО НЕ ТАК, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ, ИСПОЛЬЗУЯ:\`\`\`\n`
}

//_antitoxic.js
const smsToxic1 = () => {
return `нет!!! 🤬 скажи это слово`
}
const smsToxic2 = () => {
return `не будте токсичными`
}
const smsToxic3 = () => {
return `*ПРЕДУПРЕЖДЕНИЕ*\n⚠️`
}
const smsToxic4 = () => {
return `😭 ИЗВЕНИТЕ`
} //🟡 НЕ ИЗМЕНЯТЬ
const smsToxic5 = () => {
return `☢️ отключить АНТИТОКСИЧНЫЙ`
} //🟡 НЕ ИЗМЕНЯТЬ
const smsToxic6 = () => {
return `Я ЖЕ ТЕБЯ ПРЕДУПРЕЖДАЛ!!`
}
const smsToxic7 = () => {
return `У ВАС 4ПРЕДУПРЕЖДЕНИЯ ВАС ИСКЛЮЧАТ 🙄`
}

//Tienda
const eExp = () => {
return '⚡ Опыт'
}
const eDiamante = () => {
return '💎 Алмазы'
}
const  eDiamantePlus = () => {
return '💎+ алмазы+'
}
const eToken = () => {
return '🪙 токен'
}
const eEsmeralda = () => {
return '💚Эсмеральда'
}
const eJoya = () => {
return '♦️ ДЖОЯ'
}
const eMagia = () => {
return '🌀 магия'
}
const eOro = () => {
return '👑Золото'
}
const eGataCoins = () => {
return '🐱 монетыs'
}
const eGataTickers = () => {
return '🎫Билеты в аэропорт Гата'
}
const eEnergia = () => {
return '✨ Энергия'
}
const ePocion = () => {
return '🥤Напиток'
}
const eAgua = () => {
return '💧 вода'
}
const eBasura = () => {
return '🗑 Мусор'
}
const eMadera = () => {
return '🪵Мадейра'
}
const eRoca = () => {
return '🪨Скала'
}
const ePiedra = () => {
return '🥌Камень'
}
const eCuerda = () => {
return '🕸️Веревка'
}
const eHierro = () => {
return '⛓️Железо'
}
const eCarbon = () => {
return '⚱️Уголь'
}
const eBotella = () => {
return '🍶 Бутылка'
}
const eLata = () => {
return '🥫 Жестяная банка'
}
const eCarton = () => {
return '🪧 Бумага'
}
const eEletric = () => {
return '💡 Электричество'
}
const eBarraOro = () => {
return '〽️Золотой слиток'
}
const eOroComun = () => {
return '🧭Обычное Золотоn'
}
const eZorroG = () => {
return '🦊🌫️ Большая Лиса'
}
const eBasuraG = () => {
return '🗑🌫️ Супер Мусор'
}
const eLoboG = () => {
return '🐺🌫️ Супер Волк'
}
const eMaderaG = () => {
return '🛷🌫️ Супер Дерево'
}
const eEspada = () => {
return '⚔️ Меч'
}
const eCarnada = () => {
return '🪱 Наживка'
}
const eBillete = () => {
return '💵Банкноты'
}
const ePinata = () => {
return '🪅Пиньята'
}
const eGancho = () => {
return '🪝Крюк'
}
const eCanaPescar = () => {
return '🎣удочка'
}
const eCComun = () => {
return '📦 Общая Касса'
}
const ePComun = () => {
return '🥡Необычная Коробка'
}
const eCMistica = () => {
return '🗳️Мифическая Коробка'
}
const eCMascota = () => {
return '📫 Ящик для домашних животных'
}
const eCJardineria = () => {
return '💐Коробка для садоводства'
}
const eClegendaria = () => {
return '🎁 Легендарная Коробка'
}
const eUva = () => {
return '🍇 ВИНОГРАД'
}
const eManzana = () => {
return '🍎 ЯБЛОКО'
}
const eNaranja = () => {
return '🍊 МАНДАРИН'
}
const eMango = () => {
return '🥭 МАНГО'
}
const ePlatano = () => {
return '🍌 БАНАНЫ'
}
const eSUva = () => {
return '🌾🍇 Виноградные косточки'
}
const eSManzana = () => {
return '🌾🍎 Семена яблока'
}
const eSNaranja = () => {
return '🌾🍊 СЕМЕНА МАНДАРИНА'
}
const eSMango = () => {
return '🌾🥭 СЕМЕНА МАНГО'
}
const eSPlatano = () => {
return '🌾🍌 СЕМЕНА БАНАНА'
}
const eCentauro = () => {
return '🐐Кентавр'
}
const eAve = () => {
return '🦅 Птица'
}
const eGato = () => {
return '🐈 КОТ'
}
const eDragon = () => {
return '🐉 ДРАКОН'
}
const eZorro = () => {
return '🦊 ЛИСА'
}
const eCaballo = () => {
return '🐎 КАБАН'
}
const eFenix = () => {
return '🕊️ ГОЛУБЬ'
}
const eLobo = () => {
return '🐺 ВОЛК'
}
const ePerro = () => {
return '🐶Собака'
}
const eAMascots = () => {
return '🍖Корм для домашних животных'
}
const eCCentauro = () => {
return '🐐🥩КОРМ ДЛЯ КЕНТАВРА'
}
const eCAve = () => {
return '🦅🥩 КОРМ ДЛЯ ПТИЦ'
}
const eCMagica = () => {
return '🌀🥩 Волшебная еда'
}
const eCDragon = () => {
return '🐉🥩 ЕДА ДРАКОНА'
}
const eACaballo = () => {
return '🐎🥩 ЕДА ДЛЯ КАБАНА'
}
const eCFenix = () => {
return '🕊️🥩 ЗЕРНО ДЛЯ ГОЛУБЯ'
}

//config-on y off.js
const smsWel1 = () => {
return `🎉 ЖЕЛАННАЯ`
}
const smsWel2 = () => {
return `Приветственное сообщение для новых участников в Группах`
}
const smsDete1 = () => {
return `🔔УВЕДОМЛЕНИЯ`
}
const smsDete2 = () => {
return `Уведомления о действиях внутри Группы`
}
const smsANivel1 = () => {
return `🆙 АВТОМАТИЧЕСКИЙ УРОВЕНЬO`
}
const smsANivel2 = () => {
return `Повышайте уровень всех автоматически; (Применяйте награды за повышение уровня)`
}
const smsRestri1 = () => {
return `⛔ RESTRINGIR`
}
const smsRestri2 = () => {
return `Включить функцию добавления или удаления людей в группах`
}
const smsLlamar1 = () => {
return `🚫 ANTI LLAMADAS`
}
const smsLlamar2 = () => {
return `Блокирует людей, совершающих звонки`
}
const smsAntiSp1 = () => {
return `🚯 ANTI SPAM`
}
const smsAntiSp2 = () => {
return `Запретить употребление закусок, когда кто-то рассылает какой-либо спам`
}
const smsModP1 = () => {
return `🌐 MODO PÚBLICO`
}
const smsModP2 = () => {
return `Включить функцию, чтобы каждый мог использовать GataBot`
}
const smsModAd1 = () => {
return `🛂 MODO ADMIN`
}
const smsModAd2 = () => {
return `Только администраторы смогут использовать GataBot в группах`
}
const smsLect1 = () => {
return `✅ LECTURA AUTOMÁTICA`
}
const smsLect2 = () => {
return `Оставлять сообщения или чаты прочитанными`
}
const smsTempo1 = () => {
return `🐈 BOT TEMPORAL`
}
const smsTempo2 = () => {
return `Функция, позволяющая временно оставаться в группах`
}
const smsStik1 = () => {
return `🎠 STICKERS`
}
const smsStik2 = () => {
return `Включить автоматическую отправку стикеров всем`
}
const smsStickA1 = () => {
return `🪄 STICKERS AUTOMÁTICOS`
}
const smsStickA2 = () => {
return `Видео, Gif-файлы, изображения, ссылки в формате jpg или jpeg; Они будут автоматически преобразованы в стикеры`
}
const smsReacc1 = () => {
return `🤡 REACCIÓN `
}
const smsReacc2 = () => {
return `Включить автоматическую отправку реакций на сообщения`
}
const smsAudi1 = () => {
return `🔊 AUDIOS`
}
const smsAudi2 = () => {
return `Включить автоматическую отправку аудио всем`
}
const smsModHor1 = () => {
return `🔞 MODO HORNY`
}
const smsModHor2 = () => {
return `Показывать контент для взрослых в чатах`
}
const smsAntitoc1 = () => {
return `☢️ ANTI TÓXICOS`
}
const smsAntitoc2 = () => {
return `Отправлять предупреждения тем людям, которые оскорбляют`
}
const smsModOb1 = () => {
return `👀 MODO OBSERVAR`
}
const smsModOb2 = () => {
return `Разрешить просмотр изображений, Gif-файлов и видео для всех`
}
const smsAntiEli1 = () => {
return `🗑️ ANTI ELIMINAR`
}
const smsAntiEli2 = () => {
return `Все удаленные сообщения будут перенаправлены в чат или группу`
}
const smsAntiInt1 = () => {
return `🌏 ANTI INTERNACIONAL`
}
const smsAntiInt2 = () => {
return `Удалить международные номера, которые считаются поддельными`
}
const smsAntiE1 = () => {
return `🔗 ANTI ENLACES`
}
const smsAntiE2 = () => {
return `Удалять людей, отправляющих ссылки из групп WhatsApp`
}
const smsAntiEE1 = () => {
return `🔗 ANTI ENLACES 2`
}
const smsAntiEE2 = () => {
return `Удалять людей, отправляющих ссылки, содержащие https`
}
const smsAntiTT1 = () => {
return `🔗 ANTI TIKTOK`
}
const smsAntiTT2 = () => {
return `Удалять людей, которые отправляют ссылки в TikTok`
}
const smsAntiYT1 = () => {
return `🔗 ANTI YOUTUBE`
}
const smsAntiYT2 = () => {
return `Удалять людей, которые отправляют ссылки на YouTube`
}
const smsAntiTEL1 = () => {
return `🔗 ANTI TELEGRAM`
}
const smsAntiTEL2 = () => {
return `Удалять людей, отправляющих ссылки в Telegram`
}
const smsAntiFB1 = () => {
return `🔗 АНТИ Facebbok`
}
const smsAntiFB2 = () => {
return `Удалять людей, отправляющих ссылки с Facebbok`
}
const smsAntiIG1 = () => {
return `🔗 АНТИ INSTAGRAM`
}
const smsAntiIG2 = () => {
return `Удалять людей, которые отправляют ссылки в Instagram`
}
const smsAntiTW1 = () => {
return `🔗 АНТИ-ТВИТТЕР `
}
const smsAntiTW2 = () => {
return `Удалять людей, отправляющих ссылки в Твиттере`
}
const smsSOLOP1 = () => {
return `⚜️ ТОЛЬКО ЧАСТНЫЕ`
}
const smsSOLOP2 = () => {
return `Разрешить использовать его только в личных чатах`
}
const smsSOLOG1 = () => {
return `⚜️ ТОЛЬКО ГРУППЫ`
}
const smsSOLOG2 = () => {
return `Разрешить использовать его только в групповых чатах`
}
const smsConfi1 = () => {
return `АРМАТУРА`
}
const smsConfi2 = () => {
return `*¡Привет!*`
}
const smsConfi3 = () => {
return `┃ *Выберите вариант из списка*`
}
const smsConfi4 = () => {
return `┃ *Чтобы начать настройку*`
}
const smsConfi5 = () => {
return `┃● *Уведомления о конфигурации:*`
}
const smsConfi6 = () => {
return `┃ ✅ ⇢ *Функция Включена*`
}
const smsConfi7 = () => {
return `┃ ❌ ⇢ *Функция Отключена*`
}
const smsConfi8 = () => {
return `┃ ⚠️ ⇢ *Этот чат не является группой*`
}
const smsConfi9 = () => {
return `┃ *Рекомендация: Для просмотра настроек*\n┃ *Завершите используйте это меню в группе*\n┃`
}
const smsConfi10 = () => {
return `*~ ЦЕНТР НАСТРОЕК*`
}
const smsParaAdmins = () => {
return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ: ГРУППЫ`
}
const smsParaAdYOw = () => {
return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЕЙ: ЧАТЫ`
}
const smsParaOw = () => {
return `ДЛЯ СОЗДАТЕЛЯ(А): ЧАТЫ`
}
const smsNoGg = () => {
return ` | ⚠️`
}
const smsMens1 = () => {
return `УПРАВЛЕНИЕ`
}
const smsMens2 = () => {
return `В НАСТОЯЩЕЕ ВРЕМЯ`
}
const smsMens3 = () => {
return `В ЭТОМ`
}
const smsMens4 = () => {
return `БОТ`
}
const smsMens5 = () => {
return `ЧАТ`
}

//Error2
const smsMensError1 = () => {
return `❕ КОМАНДА ОТЧЕТА ❕`
}
const smsMensError2 = () => {
return `Не выполняется следующая команда`
}

//_antiviewonce.js
const smsAntiView = () => {
return `*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝘿𝙊 𝘼𝙌𝙐Í* 😎`
}

//_autolevelup.js
const smsAutoLv1 = () => {
return `🎖️ НОВЫЙ УРОВЕНЬ🎖️`
}
const smsAutoLv2 = () => {
return `ПРЕДЫДУЩИЙ УРОВЕНЬ:`
}
const smsAutoLv3 = () => {
return `ТЕКУЩИЙ УРОВЕНЬ:`
}
const smsAutoLv4 = () => {
return `ДИАПАЗОН:`
}
const smsAutoLv5 = () => {
return `ДАТА:`
}
const smsAutoLv6 = () => {
return `Вы вышли на новый уровень!!!`
}
const smsAutoLv7 = () => {
return `🥳 НАГРАДА ЗА ВАШ НОВЫЙ УРОВЕНЬ`
}

//_autosticker.js
const smsAutoStik = () => {
return `${lenguajeGB['smsAvisoFG']()}*ПРОДОЛЖИТЕЛЬНОСТЬ ВИДЕО НЕ ДОЛЖНА ПРЕВЫШАТЬ 7 СЕКУНД.*`
}

//_expired.js
const smsBottem1 = () => {
return `*ОН ПОКИДАЕТ ГРУППУ!!! 🤝ЕСЛИ ВЫ ХОТИТЕ, ЧТОБЫ ОН ВЕРНУЛСЯ, ИСПОЛЬЗУЙТЕ КОМАНДУ _#bottemporal_, ЧТОБЫ ВЕРНУТЬ ЕГО В ГРУППУ!!*`
}
const smsBottem2 = () => {
return `*💕ПОДДЕРЖКА ПОЛЬЗОВАТЕЛЕЙ*\n*_${global.ig}_*\n`
}
const smsBottem3 = () => {
return `ДО СКОРОГО 💖`
}

//_premium.js
const smsPremI = () => {
return `*¡ТВОЕ ПРЕМИАЛЬНОЕ ВРЕМЯ ИСТЕКЛО!* 🎟️\n*ЧТОБЫ ПОЛУЧИТЬ НОВЫЙ ПРЕМИУМ-ПРОПУСК, ИСПОЛЬЗУЙТЕ КОМАНДУ:*\n*#премия pase*`
}

//afk-_afk.js
const smsAfkM1 = () => {
return `*ВЫ ПЕРЕСТАЛИ БЫТЬ НЕАКТИВНЫМ (А) АФК*`
}
const smsAfkM2 = () => {
return `\n*ПРИЧИНОЙ БЕЗДЕЙСТВИЯ БЫЛО:*\n`
}
const smsAfkM3 = () => {
return `⏳ *ВРЕМЯ ПРОСТОЯ:*`
}
const smsAfkM4 = () => {
return `*НЕ ОТМЕЧАЙТЕ ЭТОГО(А) ПОЛЬЗОВАТЕЛЯ(ОВ)!! НЕАКТИВЕН (А)*\n`
}
const smsAfkM5 = () => {
return `*ПРИЧИНА БЕЗДЕЙСТВИЯ АФК:*\n`
}
const smsAfkM6 = () => {
return `*ПРИЧИНА БЕЗДЕЙСТВИЯ АФК:\nВЫ НЕ УКАЗАЛИ ПРИЧИНУ БЕЗДЕЙСТВИЯ*`
}
const smsAfkTime = () => {
return [['día(s)'], ['hora(s)'], ['minuto(s)'], ['segundo(s)']]
}
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => {
return `${lenguajeGB['smsAvisoMG']()}*УКАЖИТЕ ПРИЧИНУ, ПО КОТОРОЙ ВЫ БУДЕТЕ НЕАКТИВНЫ (AFK)*\n\n*EJEMPLO:*\n*${usedPrefix + command}* Я собираюсь выполнить домашнее задание`
}
const smsAfkQ2 = () => {
return `${lenguajeGB['smsAvisoMG']()}*МИНИМУМ 10 СИМВОЛОВ ДОЛЖНО БЫТЬ ПРИЧИНОЙ*`
}
const smsAfkM1A = () => {
return `*НЕ ПОМЕЧАЙТЕ*`
}
const smsAfkM1B = () => {
return `*БУДЕТ НЕАКТИВЕН (А) АФК*\n\n*ПРИЧИНА БЕЗДЕЙСТВИЯ АФК:*`
}

//anonymous_chat.js
const smsChatAn1 = () => {
return `${lenguajeGB['smsAvisoFG']()}*ВЫ НЕ В АНОНИМНОМ ЧАТЕ*`
}
const smsChatAn2 = () => {
return `*ЕСЛИ ВЫ ХОТИТЕ НАЧАТЬ АНОНИМНЫЙ ЧАТ, ИСПОЛЬЗУЙТЕ КОМАНДУ #start ИЛИ НАЖМИТЕ КНОПКУ НИЖЕ*\n`
}
const smsChatAn3 = () => {
return `⚡ НАЧАТЬ АНОНИМНЫЙ ЧАТ`
}
const smsChatAn4 = () => {
return `${lenguajeGB['smsAvisoRG']()}🪐 *ВЫ УШЛИ ИЗ АНОНИМНОГО ЧАТА*`
}
const smsChatAn5 = () => {
return `${lenguajeGB['smsAvisoAG']()}*ДРУГОЙ ПОЛЬЗОВАТЕЛЬ ВЫШЕЛ ИЗ АНОНИМНОГО ЧАТА*`
}
const smsChatAn6 = () => {
return `*ЕСЛИ ВЫ ХОТИТЕ ПЕРЕЙТИ В ДРУГОЙ АНОНИМНЫЙ ЧАТ, ИСПОЛЬЗУЙТЕ КОМАНДУ #start ИЛИ НАЖМИТЕ КНОПКУ НИЖЕ*\n`
}
const smsChatAn7 = () => {
return `${lenguajeGB['smsAvisoAG']()}*ВЫ ВСЕ ЕЩЕ НАХОДИТЕСЬ В АНОНИМНОМ ЧАТЕ ИЛИ ЖДЕТЕ, ПОКА КТО-НИБУДЬ ПРИСОЕДИНИТСЯ К ЧАТУ*`
}
const smsChatAn8 = () => {
return `*ЕСЛИ ВЫ ХОТИТЕ ВЫЙТИ ИЗ АНОНИМНОГО ЧАТА, ИСПОЛЬЗУЙТЕ КОМАНДУ #leave ИЛИ ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КНОПКУ НИЖЕ*\n`
}
const smsChatAn9 = () => {
return `🍁 ВЫЙТИ ИЗ АНОНИМНОГО ЧАТА`
}
const smsChatAn10 = () => {
return `${lenguajeGB['smsAvisoEG']()}✨ *ТЕПЕРЬ ВЫ МОЖЕТЕ ОБЩАТЬСЯ В ЧАТЕ*`
}
const smsChatAn11 = () => {
return `*КТО-ТО ПРИСОЕДИНИЛСЯ К АНОНИМНОМУ ЧАТУ!!*`
}
const smsChatAn12 = () => {
return `❇️ ДРУГОЙ ПОЛЬЗОВАТЕЛЬ(А)`
}
const smsChatAn13 = () => {
return `${lenguajeGB['smsAvisoRG']()}🐈 *ОЖИДАЯ, ПОКА КТО-НИБУДЬ ПРИСОЕДИНИТСЯ К АНОНИМНОМУ ЧАТУ, ПОЖАЛУЙСТА, НАБЕРИТЕСЬ ТЕРПЕНИЯ*`
}

//Botones de Menú
const smsBotonM1 = () => {
return `⚡ МЕНЮ ПУСК ⚡`
}
const smsBotonM2 = () => {
return `💫 ПОЛНОЕ МЕНЮ 💫`
}
const smsBotonM3 = () => {
return `🎒 ПОЛЬЗОВUSUARIOSАТЕЛИ 🎒`
}
const smsBotonM4 = () => {
return `ПОЛЬЗОВАТЕЛИ`
}
const smsBotonM5 = () => {
return `ДИАПАЗОН`
}
const smsBotonM6 = () => {
return `УРОВЕНЬ`
}
const smsBotonM7 = () => {
return `ПРЕМИЯ`
}
const smsTex1 = () => {
return '*МЕНЮ ПОИСКА*'
}
const smsTex2 = () => {
return '*МОДИФИКАТОР ЗВУКА*'
}
const smsTex3 = () => {
return '*МЕНЮ +18*'
}
const smsTex4 = () => {
return '*ДИНАМИЧЕСКИЙ КОНТЕНТ*'
}
const smsTex5 = () => {
return '*ПОИСК И ЗАГРУЗКА*'
}
const smsTex6 = () => {
return '*МЕНЮ + 18 ПРЕМИУМ*'
}
const smsTex7 = () => {
return '⠇ *+ 18 изображений по качеству и разнообразию*\n⠇ *Видео +18 только для вас*\n⠇ *Доступно более 18 наклеек*'
}
const smsTex8 = () => {
return '*МЕНЮ ЗАГРУЗОК*'
}
const smsTex9 = () => {
return '*МЕНЮ ЗАГРУЗОК*'
}
const smsTex10 = () => {
return '*МЕНЮ ДИНАМИЧЕСКИХ ИГР*'
}
const smsTex11 = () => {
return '*МЕНЮ ДЛЯ ГРУПП*'
}
const smsTex12 = () => {
return '*МЕНЮ ИНСТРУМЕНТОВ*'
}
const smsTex13 = () => {
return '*MИНФОРМАЦИОННЫЙ ENU*'
}
const smsTex14 = () => {
return '*МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ*'
}
const smsTex15 = () => {
return '*МЕНЮ ЛОГОТИПОВ 2*'
}
const smsTex16 = () => {
return 'МЕНЮ АУДИО'
}
const smsTex17 = () => {
return '*НЕТ НЕОБХОДИМОСТИ ИСПОЛЬЗОВАТЬ ПРЕФИКС В АУДИО*'
}
const smsTex18 = () => {
return 'СПИСОК АУДИО'
}
const smsTex19 = () => {
return '*ВЫ МОЖЕТЕ ВЫБРАТЬ ЗВУК!!*'
}
const smsTex20 = () => {
return '*МЕНЮ ДЛЯ ВЛАДЕЛЬЦА(А)*'
}
const smsTex21 = () => {
return '*МЕНЮ RPG*'
}
const smsTex22 = () => {
return '*МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ*'
}
const smsTex23 = () => {
return '*МЕНЮ МЕМОВ И СЛУЧАЙНЫХ АНИМЕ*'
}

//info-grupos-lista.js
const smsLisA = () => {
return '_*ОН ВХОДИТ В ЭТИ ГРУППЫ:*_'
}
const smsLisB = () => {
return '*✦ Всего групп:*'
}
const smsLisC = () => {
return '*✦ Группа:*'
}
const smsLisD = () => {
return '*✦ ID:*'
}
const smsLisE = () => {
return '*✦ Участвующие:*'
}
const smsLisF = () => {
return '*✦ Администраторы:*'
}
const smsLisG = () => {
return '*✦ Ссылка:*'
}

//ad
const smsMalused = () => {
return '⚡ *ИСПОЛЬЗОВАТЬ КОМАНДУ СЛЕДУЮЩИМ ОБРАЗОМ:*\n'
}
const smsMalused2 = () => {
return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ, КАК В ЭТОМ ПРИМЕРЕ:*\n`
}
const smsMalused3 = () => {
return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ ИЛИ ОТВЕТИТЬ НА ЧЬЕ-ТО СООБЩЕНИЕ, КАК В ЭТОМ ПРИМЕРЕ:*\n`
}

//gc-config_time.js
const smsGrupoTime1 = () => {
return '🔓 *_ОТКРЫТЬ ГРУППУ ЧЕРЕЗ ЧАС_*'
}
const smsGrupoTime2 = () => {
return '🔒 *_ЗАКРЫТЬ ГРУППУ ЧЕРЕЗ ЧАС_*'
}
const smsGrupoTime3 = () => {
return 'ГРУППА'
}
const smsGrupoTime4 = () => {
return 'ЗАКРЫТО'
}
const smsGrupoTime5 = () => {
return 'ОТКРЫТЫЙ'
}
const smsGrupoTime6 = () => {
return 'НА'
}
const smsGrupoTime7 = () => {
return '🔒 *ГРУППА ЗАКРЫТА, ОТПРАВЛЯТЬ СООБЩЕНИЯ МОГУТ ТОЛЬКО АДМИНИСТРАТОРЫ*'
}
const smsGrupoTime8 = () => {
return '🔓 *ГРУППА ОТКРЫТА, КАЖДЫЙ МОЖЕТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*'
}
const smsGrupoTime9 = () => {
return '🔓 ОТКРЫТЬ ГРУППУ ВО ВРЕМЯ '
}
const smsGrupoTime10 = () => {
return '🔒 ЗАКРЫТЬ ГРУППУ ВО ВРЕМЯ '
}
const smsGrupoTime11 = () => {
return ' HORA'
}
const smsGrupoTime12 = () => {
return 'РАЗРЕШИТЬ ГРУППЕ РАСПОЛАГАТЬСЯ ПО '
}
const smsGrupoTime13 = () => {
return 'РАЗРЕШИТЬ ЗАКРЫТИЮ ГРУППЫ ПО '
}

//grupo-add.js
const smsAddB1 = () => {
return `${lenguajeGB['smsAvisoFG']()}*НЕВОЗМОЖНО ДОБАВИТЬ НОМЕР, ПОЖАЛУЙСТА, УБЕДИТЕСЬ, ЧТО ОН ПРАВИЛЬНЫЙ, ВОЗМОЖНО, ОН НЕДАВНО ВЫШЕЛ ИЛИ ВАША КОНФИДЕНЦИАЛЬНОСТЬ НАСТРОЕНА.*`
}
const smsAddB2 = () => {
return `${lenguajeGB['smsAvisoFG']()}*НЕВОЗМОЖНО ДОБАВИТЬ НОМЕР, ПОЖАЛУЙСТА, УБЕДИТЕСЬ, ЧТО ОН ПРАВИЛЬНЫЙ, ИЛИ ДОБАВЬТЕ ЕГО ВРУЧНУЮ.*`
}

//grupo-admins.js
const smsAddB3 = () => {
return `*УВЕДОМЛЕНИЕ ДЛЯ АДМИНИСТРАТОРОВ*`
}
const smsAddB4 = () => {
return `*НАЛИЧИЕ АДМИНИСТРАТОРОВ*`
}
const smsAddB5 = () => {
return `*СООБЩЕНИЕ:*`
}
const smsAddB6 = () => {
return `Я прошу администраторов, пожалуйста.`
}

//grupo-advertencia.js
const smsAdveu1 = () => {
return `${lenguajeGB['smsAvisoAG']()}*ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТОЛЬКО В ТОМ СЛУЧАЕ, ЕСЛИ ФУНКЦИЯ ВКЛЮЧЕНА:*\n`
}
const smsAdveu2 = () => {
return 'Причина'
}
const smsAdveu3 = () => {
return `${lenguajeGB['smsAvisoMG']()}*НЕ ЗАБУДЬТЕ УКАЗАТЬ ПРИЧИНУ ПРЕДУПРЕЖДЕНИЯ*\n`
}
const smsAdveu4 = () => {
return '*ВЫ ПОЛУЧИЛИ ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'
}
const smsAdveu5 = () => {
return 'ПРЕДУПРЕЖДЕНИЕ'
}
const smsAdveu6 = () => {
return '🎒 ИНВЕНТАРИЗАЦИЯ'
}
const smsAdveu7 = () => {
return '*Я ПРЕДУПРЕЖДАЛ ТЕБЯ НЕСКОЛЬКО РАЗ!!*'
}
const smsAdveu8 = () => {
return '*ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ (А)* 🙄'
}
const smsAdveu9 = () => {
return '😇 Большое спасибо'
}
const smsAdveu10 = () => {
return '*ВАМ БЫЛО УДАЛЕНО ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'
}
const smsAdveu11 = () => {
return 'Перед:'
}
const smsAdveu12 = () => {
return 'Теперь:'
}

//grupo-demote.js || grupo-promote.js
const smsDemott = () => {
return '*НОМЕР НЕДЕЙСТВИТЕЛЕН, ПОВТОРИТЕ ПОПЫТКУ ОТВЕТЬТЕ НА ЧЬЕ-НИБУДЬ СООБЩЕНИЕ ИЛИ ИСПОЛЬЗУЙТЕ, КАК В ЭТОМ ПРИМЕРЕ:*\n'
}
const smsDemott2 = () => {
return '*ТЕПЕРЬ У НЕГО ЕСТЬ ВЛАСТЬ В ГРУППЕ!!*'
}
const smsDemott3 = () => {
return '*У НЕГО БОЛЬШЕ НЕТ ВЛАСТИ В ГРУППЕ!!*'
}

//grupo-info.js
const smsGI1 = () => {
return '*ИНФОРМАЦИЯ О ГРУППЕ*'
}
const smsGI2 = () => {
return '*ИДЕНТИФИКАТОР ГРУППЫ*'
}
const smsGI3 = () => {
return '*НАЗВАНИЕ ГРУППЫ*'
}
const smsGI4 = () => {
return '*ОПИСАНИЕ ГРУППЫ*'
}
const smsGI5 = () => {
return '*НЕТ ОПИСАНИЯ*'
}
const smsGI6 = () => {
return '*КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ*'
}
const smsGI7 = () => {
return '*Пользователи*'
}
const smsGI8 = () => {
return '*СОЗДАТЕЛЬ(А) ГРУППЫ*'
}
const smsGI9 = () => {
return '*АДМИНИСТРАТОРЫ ГРУППЫ*'
}
const smsGI10 = () => {
return '⚙️ НАСТРОЙКИ ГРУППЫ'
}

//grupo-kick.js
const smskick1 = () => {
return `${lenguajeGB['smsAvisoAG']()}*ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ УДАЛИТЬ*\n\n*ПРИМЕР: `
}
const smskick2 = () => {
return `УДАЛЕНО (А) 😼🫵`
}
const smskick3 = () => {
return `Я НЕ МОГУ УДАЛИТЬ СОЗДАТЕЛЯ ГРУППЫ 😆🫵`
}
const smskick4 = () => {
return `ЕГО НЕТ В ЭТОЙ ГРУППЕ 👻`
}

//grupo-tagall.js
const smstagaa = () => {
return `⚡ ВЫЗОВ ГРУППЫ ⚡`
}

//grupo-setbye.js
const smsSetB = () => {
return `${lenguajeGB['smsAvisoEG']()}*ПРОЩАНИЕ С ГРУППОЙ БЫЛО НАСТРОЕНО*`
}
const smsSetB2 = () => {
return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ СООБЩЕНИЕ ОБ УВОЛЬНЕНИИA_*\n*_НЕОБЯЗАТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ОБОЗНАЧЕНО ЗНАКОМ"@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ::_*\n\n*⚡ @user (Упоминание пользователя (а))*\n\n*ПОМНИТЕ, ЧТО БУКВА " @ " НЕ ЯВЛЯЕТСЯ ОБЯЗАТЕЛЬНОЙ*`
}

//grupo-setwelcome.js
const smsSetW = () => {
return `${lenguajeGB['smsAvisoEG']()}*LA BIENVENIDA DEL GRUPO HA SIDO CONFIGURADA*`
}
const smsSetW2 = () => {
return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО ОБОЗНАЧЕНО ЗНАКОМ"@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание пользователя (а))*\n*⚡ @subject (Название группы)*\n*⚡ @desc (Описание группы)*\n\n*ПОМНИТЕ, ЧТО БУКВЫ " @ " НЕ ЯВЛЯЮТСЯ ОБЯЗАТЕЛЬНЫМИ*`
}

//grupo-setdesc.js
const smsDest = () => {
return `${lenguajeGB['smsAvisoEG']()}*ОПИСАНИЕ ГРУППЫ БЫЛО НАСТРОЕНО*`
}

//grupo-setname.js
const smsNam1 = () => {
return `${lenguajeGB['smsAvisoEG']()}*ИМЯ ГРУППЫ БЫЛО НАСТРОЕНО*`
}
const smsNam2 = () => {
return `${lenguajeGB['smsAvisoMG']()}*🙌 ВВЕДИТЕ НОВОЕ ИМЯ ГРУППЫ*`
}
const smsNam3 = () => {
return `${lenguajeGB['smsAvisoFG']()}*НАЗВАНИЕ ГРУППЫ НЕ ДОЛЖНО СОДЕРЖАТЬ БОЛЕЕ 25 СИМВОЛОВ*`
}

//grupo-restaurarEnlace.js
const smsRestGp = () => {
return `${lenguajeGB['smsAvisoEG']()}*ССЫЛКА НА ГРУППУ БЫЛА ВОССТАНОВЛЕНА*`
}

//Botón
const smsSig = () => {
return `➡️ СЛЕДУЮЩИЙ ➡️`
}
const smsSigPrem = () => {
return `❤️‍🔥 СЛЕДУЮЩИЙ ❤️‍🔥`
}
const smsCont18Porn = () => {
return `🔞 *СОДЕРЖИМОЕ* 🔞`
} //texto
const smsCont18Porn2 = () => {
return `🔞 СОДЕРЖИМОЕ 🔞`
} //texto
const smsCont18PornP = () => {
return `🌟 *СОДЕРЖИМОЕ ❤️‍🔥 ПРЕМИЯ* 🌟`
} //texto
const smsCont18PornP2 = () => {
return `СОДЕРЖИМОЕ ❤️‍🔥 ПРЕМИЯ`
} //texto

//propietario(a).js
const smsJoin = (user) => {
return `${packname}\n𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙌𝙐𝙀 𝙏𝙀 𝘼𝙔𝙐𝘿𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘿𝙄𝙁𝙀𝙍𝙀𝙉𝙏𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿𝙀𝙎 🪄 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 𝙊 𝙂𝙍𝙐𝙋𝙊 𝙔 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙏𝙀 𝙑𝘼𝙎 𝘼 𝘿𝙄𝙑𝙀𝙍𝙏𝙄𝙍 🎈 𝘾𝙊𝙉 𝙎𝙐𝙎 𝙈𝙐𝙇𝙏𝙄𝙋𝙇𝙀𝙎 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎, 𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼 𝘿𝙀 𝙂𝘼𝙏𝘼𝘽𝙊𝙏!!! 😸\n\n💖 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 𝙁𝙐𝙀 𝙄𝙉𝙑𝙄𝙏𝘼𝘿𝘼 𝙋𝙊𝙍:\n@${user}`
}
const smsJoin1 = (usedPrefix, command) => {
return lenguajeGB['smsAvisoMG']() + `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n*ПРИМЕР:*\n*${usedPrefix + command}* ${nna}`
}
const smsJoin2 = () => {
return lenguajeGB['smsAvisoEG']() + `${packname}\n*ОН ПРИСОЕДИНИЛСЯ К ГРУППЕ ✅*`
}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => {
return `*ОТВЕТЬТЕ НА СООБЩЕНИЕ ИЛИ ВВЕДИТЕ СООБЩЕНИЕ, ИСПОЛЬЗУЯ ${usedPrefix + command}*`
}
const smsBCMensaje2 = () => {
return `*ОТПРАВЛЯЯ ОФИЦИАЛЬНОЕ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*`
}
const smsBCMensaje3 = (totalPri, time) => {
return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО ПО АДРЕСУ ${totalPri} ПРИВАТНЫЙ ЧАТ(Ы)*\n\n*ОБЩЕЕ ВРЕМЯ ДОСТАВКИ: ${time}*\n${totalPri >= 3000 ? '\n*ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ ПЕРЕПОЛНЕНИЯ*' : ''}`
}

//propietario(a).js
const smsBCbot1 = () => {
return `✅ *ОТПРАВЛЕННОЕ СООБЩЕНИЕ:*`
}
const smsBCbot2 = () => {
return `ЧАСТНЫЙ`
}
const smsBCbot3 = () => {
return `ГРУППА`
}
const smsBCbot4 = () => {
return `ОБЩИЙ`
}
const smsBCbot5 = () => {
return `ОБЩЕЕ ВРЕМЯ ДОСТАВКИ:`
}
const smsBCbot6 = () => {
return `ОНИ БЫЛИ ОТПРАВЛЕНЫ НЕ ВО ВСЕ ЛИЧНЫЕ ЧАТЫ, ЧТОБЫ ИЗБЕЖАТЬ ПЕРЕПОЛНЕНИЯ`
}
const smsBCbot7 = () => {
return `✅ *ОФИЦИАЛЬНОЕ СООБЩЕНИЕ* ✅`
}

//propietario(a).js
const smsChatGP1 = () => {
return '*ОТПРАВЛЯЯ СООБЩЕНИЕ, ПОДОЖДИТЕ МИНУТКУ...*'
}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => {
return `✅ *ОФИЦИАЛЬНОЕ СООБЩЕНИЕ* ✅\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`
}
const smsChatGP3 = (totalGP) => {
return `✅ *СООБЩЕНИЕ БЫЛО ОТПРАВЛЕНО ПО АДРЕСУ ${totalGP} ГРУППА(И)*`
}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => {
return `${lenguajeGB['smsAvisoMG']()}*ОТМЕТЬТЕ КОГО-НИБУДЬ, ОТВЕТЬТЕ НА СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ИЛИ ВВЕДИТЕ НОМЕР, КОТОРЫЙ ВЫ ХОТИТЕ ЗАБЛОКИРОВАТЬ В КОМАНДАХ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} @${bot}*`
}
const smsPropban2 = (bot) => {
return `${lenguajeGB['smsAvisoFG']()}*@${bot} ВЫ НЕ МОЖЕТЕ БЫТЬ ЗАБЛОКИРОВАНЫ С ПОМОЩЬЮ ЭТОЙ КОМАНДЫ* 😹`
}
const smsPropban3 = (ownerNumber) => {
return `${lenguajeGB.smsAvisoIIG()}😳 *Я НЕ МОГУ ЗАБЛОКИРОВАТЬ ВЛАДЕЛЬЦА@${ownerNumber} DE ${packname}*`
}
const smsPropban4 = (number) => {
return `${lenguajeGB.smsAvisoIIG()}*НЕТ НЕОБХОДИМОСТИ ПОВТОРНО БЛОКИРОВАТЬ @${number} ЕСЛИ ОН УЖЕ ЕСТЬ* 😊`
}
const smsPropban5 = () => {
return `${lenguajeGB['smsAvisoEG']()}𝙀𝙇/𝙇𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊(𝘼) 🙀\n𝙉𝙊 𝙋𝙊𝘿𝙍𝘼 𝙐𝙎𝘼𝙍 𝘼 ${gt}`
}
const smsPropban6 = (number, usr) => {
return `${lenguajeGB.smsAvisoAG()}*@${number} ТЫ ЗАБЛОКИРОВАН ЗА @${usr} ВЫ НЕ МОЖЕТЕ ИСПОЛЬЗОВАТЬ КОМАНДЫ, ПОКА КТО-НИБУДЬ НЕ ОТМЕНИТ ЗАПРЕТ* 😿`
}
const smsPropban7 = (usedPrefix, command, number) => {
return `${lenguajeGB['smsAvisoFG']()}*ВОЗНИКЛА ОШИБКА, ВОЗМОЖНО, ПОЛЬЗОВАТЕЛЬ, КОТОРОГО НЕТ В МОЕЙ БАЗЕ ДАННЫХ, ПЫТАЕТСЯ ВВЕСТИ ${usedPrefix + command} ${number}*\n\`\`\`ЕСЛИ ОШИБКА ПО-ПРЕЖНЕМУ ВОЗНИКАЕТ, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ\`\`\``
}

//jadibot-serbot.js
const smsIniJadi = () => {
return `*⊹ • • • ミ★ ${gt} ミ★• • • ⊹*\n\n*ღ Versión de ${gt} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en losНаправляйтесь к трем точкам в правом верхнем углу tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`
}
const smsIniJadi2 = () => {
return `*⊹ • • • ミ★ ${gt} ミ★• • • ⊹*\n\n*ღ Versión de ${gt} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_НОВАЯ ФУНКЦИЯ ПРЕВРАЩЕНИЯ ВАС В СУБ-БОТА_* 🟢\n\n*1️⃣ Направляйтесь к трем точкам в правом верхнем углу*\n*2️⃣ Перейти к параметру Связанные устройства*\n*3️⃣ da click en vincular con codigo de teléfono*\n*4️⃣ pega el codigo a continuación*`
}
const smsSoloOwnerJB = () => {
return `${lenguajeGB['smsAvisoAG']()}*ЭТА КОМАНДА ОТКЛЮЧЕНА МОИМ ВЛАДЕЛЬЦЕМ(А)*`
}
const smsJBPrincipal = () => {
return `${lenguajeGB['smsAvisoAG']()}🔵 *ЧТОБЫ СТАТЬ ДОПОЛНИТЕЛЬНЫМ БОТОМ, ПЕРЕЙДИТЕ К ОСНОВНОМУ НОМЕРУ*\n*ღ Перейдите по следующей ссылке:*\n`
}
const smsreenvia = () => {
return `*🟢 ПЕРЕСЛАТЬ КОМАНДУ...*`
}
const smsJBConexion = () => {
return `${lenguajeGB['smsAvisoFG']()}🟡 *СОЕДИНЕНИЕ НЕОЖИДАННО ПРЕРВАЛОСЬ, МЫ ПОПЫТАЕМСЯ ВОССТАНОВИТЬ СОЕДИНЕНИЕ...*`
}
const smsJBConexionClose = () => {
return `${lenguajeGB['smsAvisoFG']()}🔴 *СОЕДИНЕНИЕ БЫЛО ЗАКРЫТО, ВАМ НУЖНО БУДЕТ ПОДКЛЮЧИТЬСЯ ВРУЧНУЮ С ПОМОЩЬЮ КОМАНДЫ #serbot И ПОВТОРНО ОТСКАНИРОВАТЬ НОВЫЙ QR-КОД*`
}
const smsJBConexionClose2 = () => {
return `${lenguajeGB['smsAvisoFG']()}🔴 *СОЕДИНЕНИЕ БЫЛО ЗАКРЫТО, ВАМ ПРИДЕТСЯ СНОВА ПОДКЛЮЧИТЬСЯ, ИСПОЛЬЗУЯ:*\n#deletesesion (Чтобы стереть данные и иметь возможность повторно ввести только QR-код или код)`
}
const smsJBConexionTrue = () => {
return `${lenguajeGB['smsAvisoEG']()}🟢 *УСПЕШНОЕ ПОДКЛЮЧЕНИЕ!!!*`
}
const smsJBConexionTrue2 = () => {
return `${lenguajeGB['smsAvisoEG']()}🟢 *ПОДКЛЮЧЕНИЕ УСПЕШНО!!! ВЫ МОЖЕТЕ ПОДКЛЮЧИТЬСЯ, ИСПОЛЬЗУЯ СВОЙ (ID), ИЛИ ИСПОЛЬЗОВАТЬ:*`
}
const smsJBCargando = () => {
return `${lenguajeGB['smsAvisoIIG']()}⚪ *ОН ПОДКЛЮЧЕН(А)!! ПОЖАЛУЙСТА, ПОДОЖДИТЕ, СООБЩЕНИЯ ЗАГРУЖАЮТСЯ...*\n\n♻️ *ДОСТУПНЫЕ ОПЦИИ:*\n*» #stop _(Остановить функцию вспомогательного бота)_*\n*» #eliminarsesion _(Стереть все следы суб-бота)_*\n*» #serbot _(Получить новый QR-код, чтобы стать суб-ботом)_*`
}
const smsJBInfo1 = () => {
return `💖 *ENLACE ÚTIL*`
}
const smsJBInfo2 = () => {
return `💖 *Функция стабильна, если есть какие-либо недостатки, пожалуйста, свяжитесь с нами по электронной почте: centergatabot@gmail.com*\n💝 *Вы можете сделать добровольное пожертвование через PayPal: ${global.paypal}*\n\n*Большое спасибо за поддержку${global.packname}*`
}

//jadibot-deleteSesion.js
const smsJBDel = () => {
return `${lenguajeGB['smsAvisoAG']()}*ИСПОЛЬЗУЙТЕ ТОЛЬКО КОМАНДУ*`
}
const smsJBAdios = () => {
return `${lenguajeGB['smsAvisoEG']()}*Я БУДУ СКУЧАТЬ По ТЕБЕ ${global.packname} ЧАОО!! 🥹*`
}
const smsJBCerrarS = () => {
return `${lenguajeGB['smsAvisoEG']()}*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ И СТЕРЛИ ВСЕ СЛЕДЫ*`
}
const smsJBErr = () => {
return `*ВЫ ВЫШЛИ ИЗ СИСТЕМЫ КАК ВСПОМОГАТЕЛЬНЫЙ БОТ* ♻️`
}

//comandos+18-adult.js
const smsContAdult = () => {
return `${lenguajeGB['smsAvisoAG']()}*КОМАНДЫ 🔞 ОТКЛЮЧЕНЫ, ЕСЛИ ВЫ ЯВЛЯЕТЕСЬ МОИМ СОЗДАТЕЛЕМ, ИСПОЛЬЗУЙТЕ #on modohorny*`
}

//comandos+18-menu.js
const smsList1 = () => {
return `Ему не хватает`
}
const smsList2 = () => {
return `\nНажмите здесь, чтобы купить `
}
const smsList3 = () => {
return `Доступный контент 😸`
}
const smsList4 = () => {
return `Контент недоступен 😿\nНажмите здесь, чтобы купить `
}
const smsList5 = () => {
return `*Выберите параметр*\n*из списка, чтобы увидеть*\n*содержимое* 😋`
}
const smsList6 = () => {
return `👀 ПРОСМОТРЕТЬ СПИСОК 👀`
}

//descargas-consejos.js
const smsConj = () => {
return `🍃 НОВЫЙ СОВЕТ`
}
const smsFras = () => {
return `🍃 НОВАЯ ФРАЗА`
}

//info-contacto.js
const smsContacto1 = () => {
return ' Есть ' + packname + ' бот WhatsApp, посвященный тому, чтобы помочь с тем, о чем вы меня просите 😎'
}
const smsContacto2 = () => {
return 'Я владелец ' + packname + ' если у вас есть какие-либо сомнения, вы можете мне об этом сказать ✌️'
}
const smsContacto3 = () => {
return '👑 Владелец'
}
const smsContacto4 = () => {
return 'Официальный контакт с GataBot 🐈'
}
const smsContacto5 = () => {
return '🐣 ¿Я могу вам чем-нибудь помочь?'
}
const smsContacto6 = () => {
return 'У меня нет почты 🙏'
}
const smsContacto7 = () => {
return '🌎 Глобальный'
}
const smsContacto8 = () => {
return 'Эта учетная запись-Бот 👀'
}

export default {
lenguaje,
smsConexioncerrar,
smsConexionperdida,
smsConexionreem,
smsConexionreinicio,
smsConexiontiem,
smsConexiondescon,
smsAvisoRG,
smsJoin,
smsJoin1,
smsJoin2,
smsPropban1,
smsPropban2,
smsPropban3,
smsPropban4,
smsPropban5,
smsPropban6,
smsPropban7,
smsLisA,
smsLisB,
smsLisC,
smsLisD,
smsLisE,
smsChatGP1,
smsChatGP2,
smsChatGP3,
smsBCMensaje,
smsBCMensaje2,
smsBCMensaje3,
smsAvisoAG,
smsAvisoIIG,
smsBCbot1,
smsBCbot2,
smsBCbot3,
smsBCbot4,
smsBCbot5,
smsBCbot6,
smsBCbot7,
smsAvisoFG,
smsAvisoMG,
smsAvisoEEG,
smsAvisoEG,
smsRowner,
smsOwner,
smsMods,
smsPremium,
smsGroup,
smsPrivate,
smsAdmin,
smsBotAdmin,
smsUnreg,
smsRestrict,
smsTime,
smsUptime,
smsVersion,
smsTotalUsers,
smsMode,
smsModePublic,
smsModePrivate,
smsBanChats,
smsBanUsers,
smsPareja,
smsResultPareja,
smsSaludo,
smsDia,
smsTarde,
smsTarde2,
smsNoche,
smsListaMenu,
smsLista1,
smsLista2,
smsLista3,
smsLista4,
smsLista5,
smsLista6,
smsLista7,
smsLista8,
smsLista9,
smsLista10,
smsLista11,
smsLista12,
smsLista13,
smsLista14,
smsLista15,
smsLista16,
smsLista17,
smsLista18,
smsLista19,
smsLista20,
smsLista21,
smsLista22,
smsLista23,
smsLista24,
smsLista25,
smsLista26,
smsLista27,
smsLista28,
smsLista29,
smsLista30,
smsLista31,
smsLista32,
smsLista33,
smsLista34,
smsLista35,
smsWelcome,
smsBye,
smsSpromote,
smsSdemote,
smsSdesc,
smsSsubject,
smsSicon,
smsSrevoke,
smsConexion,
smsClearTmp,
smsCargando,
smspurgeSession,
smspurgeOldFiles,
smspurgeSessionSB1,
smspurgeSessionSB2,
smspurgeSessionSB3,
smspurgeOldFiles1,
smspurgeOldFiles2,
smspurgeOldFiles3,
smspurgeOldFiles4,
smsTextoYT,
smsApagar,
smsEncender,
smsEnlaceTik,
smsEnlaceYt,
smsEnlaceTel,
smsEnlaceFb,
smsEnlaceIg,
smsEnlaceTw,
smsAllAdmin,
smsSoloOwner,
smsCont1,
smsCont2,
smsCont3,
smsCont4,
smsCont5,
smsCont6,
smsCont7,
smsCont8,
smsCont9,
smsCont10,
smsCont11,
smsCont12,
smsCont13,
smsCont14,
smsCont15,
smsCont16,
smsCont17,
smsCont18,
smsCont19,
smsCont20,
smsCont21,
smsInt1,
smsInt2,
smsAdwa,
smsEnlaceWat,
smsEnlaceWatt,
smsNoSpam,
smsNoSpam2,
smsConMenu,
smsMalError,
smsMalError2,
smsMalError3,
smsToxic1,
smsToxic2,
smsToxic3,
smsToxic4,
smsToxic5,
smsToxic6,
smsToxic7,
eExp,
eDiamante,
eDiamantePlus,
eToken,
eEsmeralda,
eJoya,
eMagia,
eOro,
eGataCoins,
eGataTickers,
eEnergia,
ePocion,
eAgua,
eBasura,
eMadera,
eRoca,
ePiedra,
eCuerda,
eHierro,
eCarbon,
eBotella,
eLata,
eCarton,
eEletric,
eBarraOro,
eOroComun,
eZorroG,
eBasuraG,
eLoboG,
eMaderaG,
eEspada,
eCarnada,
eBillete,
ePinata,
eGancho,
eCanaPescar,
eCComun,
ePComun,
eCMistica,
eCMascota,
eCJardineria,
eClegendaria,
eUva,
eManzana,
eNaranja,
eMango,
ePlatano,
eSUva,
eSManzana,
eSNaranja,
eSMango,
eSPlatano,
eCentauro,
eAve,
eGato,
eDragon,
eZorro,
eCaballo,
eFenix,
eLobo,
ePerro,
eAMascots,
eCCentauro,
eCAve,
eCMagica,
eCDragon,
eACaballo,
eCFenix,
smsWel1,
smsWel2,
smsParaAdmins,
smsDete1,
smsDete2,
smsANivel1,
smsANivel2,
smsParaAdYOw,
smsParaOw,
smsRestri1,
smsRestri2,
smsLlamar1,
smsLlamar2,
smsModP1,
smsModP2,
smsModAd1,
smsModAd2,
smsLect1,
smsLect2,
smsTempo1,
smsTempo2,
smsStik1,
smsStik2,
smsStickA1,
smsStickA2,
smsReacc1,
smsReacc2,
smsAudi1,
smsAudi2,
smsModHor1,
smsModHor2,
smsAntitoc1,
smsAntitoc2,
smsModOb1,
smsModOb2,
smsAntiEli1,
smsAntiEli2,
smsAntiInt1,
smsAntiInt2,
smsAntiE1,
smsAntiE2,
smsAntiEE1,
smsAntiEE2,
smsAntiTT1,
smsAntiTT2,
smsAntiYT1,
smsAntiYT2,
smsAntiTEL1,
smsAntiTEL2,
smsAntiFB1,
smsAntiFB2,
smsAntiIG1,
smsAntiIG2,
smsAntiTW1,
smsAntiTW2,
smsSOLOP1,
smsSOLOP2,
smsSOLOG1,
smsSOLOG2,
smsNoGg,
smsConfi1,
smsConfi2,
smsConfi3,
smsConfi4,
smsConfi5,
smsConfi6,
smsConfi7,
smsConfi8,
smsConfi9,
smsConfi10,
smsMens1,
smsMens2,
smsMens3,
smsMens4,
smsMens5,
smsMensError1,
smsMensError2,
smsAntiView,
smsAutoLv1,
smsAutoLv2,
smsAutoLv3,
smsAutoLv4,
smsAutoLv5,
smsAutoLv6,
smsAutoLv7,
smsAntiSp1,
smsAntiSp2,
smsAutoStik,
smsBottem1,
smsBottem2,
smsBottem3,
smsPremI,
smsAfkM1,
smsAfkM2,
smsAfkM3,
smsAfkM4,
smsAfkM5,
smsAfkM6,
smsAfkM1A,
smsAfkM1B,
smsChatAn1,
smsChatAn2,
smsChatAn3,
smsChatAn4,
smsChatAn5,
smsChatAn6,
smsChatAn7,
smsChatAn8,
smsChatAn9,
smsChatAn10,
smsChatAn11,
smsChatAn12,
smsChatAn13,
smsBotonM1,
smsBotonM2,
smsBotonM3,
smsBotonM4,
smsBotonM5,
smsBotonM6,
smsBotonM7,
smsTex1,
smsTex2,
smsTex3,
smsTex4,
smsTex5,
smsTex6,
smsTex7,
smsTex8,
smsTex9,
smsTex10,
smsTex11,
smsTex12,
smsTex13,
smsTex14,
smsTex15,
smsTex16,
smsTex17,
smsTex18,
smsTex19,
smsTex20,
smsTex21,
smsTex22,
smsTex23,
smsMalused,
smsGrupoTime1,
smsGrupoTime2,
smsGrupoTime3,
smsGrupoTime4,
smsGrupoTime5,
smsGrupoTime6,
smsGrupoTime7,
smsGrupoTime8,
smsGrupoTime9,
smsGrupoTime10,
smsGrupoTime11,
smsGrupoTime12,
smsGrupoTime13,
smsAddB1,
smsAddB2,
smsAddB3,
smsAddB4,
smsAddB5,
smsAddB6,
smsAdveu1,
smsMalused2,
smsAdveu2,
smsAdveu3,
smsAdveu4,
smsAdveu5,
smsAdveu6,
smsAdveu7,
smsAdveu8,
smsAdveu9,
smsMalused3,
smsAdveu10,
smsAdveu11,
smsAdveu12,
smsDemott,
smsDemott2,
smsDemott3,
smsGI1,
smsGI2,
smsGI3,
smsGI4,
smsGI5,
smsGI6,
smsGI7,
smsGI8,
smsGI9,
smsGI10,
smsLista22_1,
smsCodigoQR,
smsConexionOFF,
smskick1,
smskick2,
smskick3,
smskick4,
smstagaa,
smsSetB,
smsSetB2,
smsSetW,
smsSetW2,
smsDest,
smsNam1,
smsNam2,
smsNam3,
smsRestGp,
smsSig,
smsSigPrem,
smsCont18Porn,
smsCont18Porn2,
smsCont18PornP,
smsCont18PornP2,
smsIniJadi,
smsSoloOwnerJB,
smsJBPrincipal,
smsJBConexion,
smsJBConexionClose,
smsJBConexionTrue,
smsJBConexionTrue2,
smsJBCargando,
smsJBInfo1,
smsJBInfo2,
smsJBDel,
smsJBAdios,
smsJBCerrarS,
smsJBErr,
smsContAdult,
smsList1,
smsList2,
smsList3,
smsList4,
smsList5,
smsList6,
smsConj,
smsFras,
smsContacto1,
smsContacto2,
smsContacto3,
smsContacto4,
smsContacto5,
smsContacto6,
smsContacto7,
smsContacto8,
smsAfkQ1,
smsAfkQ2,
smsAfkTime,
smsAfkResultTime,
smsMainBot,
smsLisF,
smsLisG,
smsIniJadi2,
smsJBConexionClose2,
smsreenvia
}
