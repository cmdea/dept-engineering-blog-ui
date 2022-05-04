export interface StringKeyObjectMap {
  [key: string]: string
}

export interface KeyObjectMap {
  [key: string]: StringKeyObjectMap
}

export const lang: KeyObjectMap = {
  en: {
    A_COLLECTION_OF: `A collection of`,
    BY: `by`,
    BY_THIS_AUTHOR: `by this author`,
    GOTO_FRONT_PAGE: `Get back to home`,
    LATEST_POSTS: `Latest Posts`,
    IS_REQUIRED: `is required`,
    MIN_READ: `min read`,
    MORE_IN: `More in`,
    MORE_POSTS: `More posts`,
    MORE_POSTS_SM: `more posts`,
    NEXT: `Next`,
    NO_POSTS: `No posts`,
    PAGE_NOT_FOUND: `Sorry, we can’t find that page. But don’t worry, we can get you back to the homepage in no time.`,
    POST: `post`,
    POSTS: `posts`,
    PREVIOUS: `Previous`,
    READ: `Read`,
    SEE_ALL: `See all`,
    SUBSCRIBED_TO: `You've successfully subscribed to`,
    WEBSITE: `Website`,
    MULTIPLE_AUTHORS: `Multiple authors`,
    CHECK_YOUR_INBOX: `Check your inbox and click the link to confirm your subscription`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Please enter a valid email address`,
    GREAT: `Great`,
    SUBSCRIBE: `Subscribe`,
    SUBSCRIBE_OVERLAY: `Get all the latest updates to the DEPT® Engineering blog by signing up here.`,
    SUBSCRIBE_SECTION: `Get the latest posts delivered right to your inbox`,
    SUBSCRIBE_TO: `Subscribe to`,
    SUBSCRIBED_FAILED: `Could not sign up! Invalid sign up link.`,
    YOUR_EMAIL: `Email address`,
    AT_LEAST: `at least`,
    CHARACTERS_LONG: `characters long`,
    CHARACTERS_OR_LESS: `characters or less`,
    EMAIL_ADDRESS: `Email Address`,
    EMAIL_IS_REQUIRED: `Email is required`,
    FULL_NAME: `Full Name`,
    FULL_NAME_REQUIRED: `Full Name is required`,
    FULL_NAME_MUST_BE: `Full Name must be`,
    INVALID_EMAIL_ADDRESS: `Invalid email address`,
    MESSAGE_MUST_BE: `Your message must be`,
    MESSAGE_SENT: `Thank you, your message has been sent!`,
    MESSAGE_TEXT_IS_REQUIRED: `A message text is required`,
    ONE_SECOND: `One second please...`,
    SENDING_FAILED: `Oops :-( sending failed. Error`,
    PLEASE_SELECT: `Please select...`,
    PLEASE_SELECT_SUBJECT: `Please select one subject`,
    SUBMIT: `Submit`,
    YOUR_MESSAGE: `Your message`,
    TABLE_OF_CONTENTS: `Table of Contents`,
  },
  de: {
    A_COLLECTION_OF: `Zu diesem Thema gibt es`,
    BY: `von`,
    BY_THIS_AUTHOR: `von diesem Autor`,
    GOTO_FRONT_PAGE: `Gehe zur Startseite`,
    LATEST_POSTS: `Neueste Artikel`,
    IS_REQUIRED: `ist erforderlich`,
    MIN_READ: `min Lesezeit`,
    MORE_IN: `Mehr von`,
    MORE_POSTS: `Weitere Artikel`,
    MORE_POSTS_SM: `weitere Artikel`,
    NEXT: `Weiter`,
    NO_POSTS: `Keine weiteren Artikel`,
    PAGE_NOT_FOUND: `Seite nicht gefunden`,
    POST: `Artikel`,
    POSTS: `Artikel`,
    PREVIOUS: `Zurück`,
    READ: `Lese`,
    SEE_ALL: `Alle`,
    SUBSCRIBED_TO: `Du hast dich erfolgreich angemeldet bei`,
    WEBSITE: `Webseite`,
    MULTIPLE_AUTHORS: `Mehrere Autoren`,
    CHECK_YOUR_INBOX: `Öffne dein Postfach und klicke auf den Bestätigungs-Link`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Bitte eine richtige Email Adresse eingeben`,
    GREAT: `Super`,
    SUBSCRIBE: `Anmelden`,
    SUBSCRIBE_OVERLAY: `Bleib auf dem Laufenden! Erhalte die neuesten Artikel direkt in dein Postfach`,
    SUBSCRIBE_SECTION: `Erhalte die neuesten Artikel direkt in dein Postfach`,
    SUBSCRIBE_TO: `Abboniere`,
    SUBSCRIBED_FAILED: `Anmeldung gescheitert! Ungültiger Anmeldelink.`,
    YOUR_EMAIL: `deinemail@example.de`,
    AT_LEAST: `wenigstens`,
    CHARACTERS_LONG: `Zeichen lang`,
    CHARACTERS_OR_LESS: `Zeichen oder weniger`,
    EMAIL_ADDRESS: `Email Adresse`,
    EMAIL_IS_REQUIRED: `Email ist erforderlich`,
    FULL_NAME: `Vollständiger Name`,
    FULL_NAME_REQUIRED: `Name ist nicht vollständig`,
    FULL_NAME_MUST_BE: `Vollständiger Name muss`,
    INVALID_EMAIL_ADDRESS: `Fehlerhafte Email Adresse`,
    MESSAGE_MUST_BE: `Deine Nachricht muss`,
    MESSAGE_SENT: `Danke, deine Nachricht wurde versendet!`,
    MESSAGE_TEXT_IS_REQUIRED: `Eine Nachricht ist erforderlich`,
    ONE_SECOND: `Einen Moment bitte...`,
    SENDING_FAILED: `Senden abgebrochen. Fehler`,
    PLEASE_SELECT: `Bitte auswählen...`,
    PLEASE_SELECT_SUBJECT: `Bitte ein Thema wählen`,
    SUBMIT: `Abschicken`,
    YOUR_MESSAGE: `Deine Nachricht`,
    TABLE_OF_CONTENTS: `Inhaltsverzeichnis`,
  },
  es: {
    A_COLLECTION_OF: `Una colección de`,
    BY: `de`,
    BY_THIS_AUTHOR: `de este autor`,
    GOTO_FRONT_PAGE: `Ir a la página principal`,
    LATEST_POSTS: `Entradas recientes`,
    IS_REQUIRED: `es obligatorio`,
    MIN_READ: `min. de lectura`,
    MORE_IN: `Más de`,
    MORE_POSTS: `Más entradas`,
    MORE_POSTS_SM: `más entradas`,
    NEXT: `Siguiente`,
    NO_POSTS: `No existen entradas`,
    PAGE_NOT_FOUND: `Página no encontrada`,
    POST: `entrada`,
    POSTS: `entradas`,
    PREVIOUS: `Anterior`,
    READ: `Leer`,
    SEE_ALL: `Ver las`,
    SUBSCRIBED_TO: `Te has suscrito correctamente a`,
    WEBSITE: `Web`,
    MULTIPLE_AUTHORS: `Varios autores`,
    CHECK_YOUR_INBOX: `Revisa tu bandeja de entrada y haz clic en el enlace que encontrarás`,
    EMAIL: `Correo electrónico`,
    ENTER_VALID_EMAIL: `Introduzca una dirección de correo válida`,
    GREAT: `Genial`,
    SUBSCRIBE: `Suscribirse`,
    SUBSCRIBE_OVERLAY: `¡Mantente al día! Recibe las entradas más recientes en tu correo electrónico`,
    SUBSCRIBE_SECTION: `Recibe las entradas más recientes en tu correo electrónico`,
    SUBSCRIBE_TO: `Suscribirse a`,
    SUBSCRIBED_FAILED: `No fue posible finalizar el registro, el enlace no es válido.`,
    YOUR_EMAIL: `tucorreo@ejemplo.com`,
    AT_LEAST: `al menos`,
    CHARACTERS_LONG: `caracteres`,
    CHARACTERS_OR_LESS: `caracteres o menos`,
    EMAIL_ADDRESS: `Correo electrónico`,
    EMAIL_IS_REQUIRED: `Es necesaria una dirección`,
    FULL_NAME: `Nombre completo`,
    FULL_NAME_REQUIRED: `Introduzca un nombre completo`,
    FULL_NAME_MUST_BE: `El nombre debe tener`,
    INVALID_EMAIL_ADDRESS: `Correo electrónico no válido`,
    MESSAGE_MUST_BE: `El mensaje ha de contener`,
    MESSAGE_SENT: `Tu mensaje ha sido enviado, ¡Gracias!`,
    MESSAGE_TEXT_IS_REQUIRED: `El contenido del mensaje es obligatorio`,
    ONE_SECOND: `Un segundo por favor...`,
    SENDING_FAILED: `Oops :-( no se pudo enviar. Error`,
    PLEASE_SELECT: `Seleccione...`,
    PLEASE_SELECT_SUBJECT: `Por favor, introduzca un asunto`,
    SUBMIT: `Enviar`,
    YOUR_MESSAGE: `Tu mensaje`,
    TABLE_OF_CONTENTS: `Tabla de contenidos`,
  },
  ru: {
    A_COLLECTION_OF: `В коллекции`,
    BY: `от`,
    BY_THIS_AUTHOR: `этого автора`,
    GOTO_FRONT_PAGE: `Перейти на главную страницу`,
    LATEST_POSTS: `Последние посты`,
    IS_REQUIRED: `требуется для`,
    MIN_READ: `мин чтения`,
    MORE_IN: `Больше в`,
    MORE_POSTS: `Больше постов`,
    MORE_POSTS_SM: `больше постов`,
    NEXT: `Следующий`,
    NO_POSTS: `Нет постов`,
    PAGE_NOT_FOUND: `Страница не найдена`,
    POST: `пост`,
    POSTS: `постов`,
    PREVIOUS: `Предыдущий`,
    READ: `Читать`,
    SEE_ALL: `Смотреть все`,
    SUBSCRIBED_TO: `Вы успешно подписались на`,
    WEBSITE: `Вебсайт`,
    MULTIPLE_AUTHORS: `Несколько авторов`,
    CHECK_YOUR_INBOX: `Проверьте свой почтовый ящик и нажмите на ссылку, чтобы подтвердить подписку`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Пожалуйста, введите действительный адрес электронной почты`,
    GREAT: `Отлично`,
    SUBSCRIBE: `Подписка`,
    SUBSCRIBE_OVERLAY: `Будьте в курсе! Получайте все самые свежие и лучшие сообщения прямо на ваш почтовый ящик`,
    SUBSCRIBE_SECTION: `Получайте самые свежие сообщения прямо на ваш почтовый ящик`,
    SUBSCRIBE_TO: `Подписаться на`,
    SUBSCRIBED_FAILED: `Не удалось зарегистрироваться! Неверная ссылка для регистрации.`,
    YOUR_EMAIL: `youremail@example.com`,
    AT_LEAST: `по крайней мере`,
    CHARACTERS_LONG: `символов`,
    CHARACTERS_OR_LESS: `символов или меньше`,
    EMAIL_ADDRESS: `Email Адрес`,
    EMAIL_IS_REQUIRED: `Требуется Email`,
    FULL_NAME: `Полное Имя`,
    FULL_NAME_REQUIRED: `Требуется полное имя`,
    FULL_NAME_MUST_BE: `Полное имя должно быть`,
    INVALID_EMAIL_ADDRESS: `Неверный адрес электронной почты`,
    MESSAGE_MUST_BE: `Ваше сообщение должно быть`,
    MESSAGE_SENT: `Спасибо! Ваше сообщение было отправлено!`,
    MESSAGE_TEXT_IS_REQUIRED: `Требуется текст сообщения`,
    ONE_SECOND: `Одну секунду пожалуйста...`,
    SENDING_FAILED: `Упс :-( отправка не удалась. Ошибка`,
    PLEASE_SELECT: `Пожалуйста выберите...`,
    PLEASE_SELECT_SUBJECT: `Пожалуйста, выберите одну тему`,
    SUBMIT: `Отправить`,
    YOUR_MESSAGE: `Ваше сообщение`,
    TABLE_OF_CONTENTS: `Содержание`,
  },
}
