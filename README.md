# trackerman

Здравствуйте! 🖖

## Тип проекта
trackerman - это pet-проект

## В чём суть проекта

В отслеживании цен на определённые товары

## Для кого

Изначально проект разрабатывал для себя, поэтому пока в "открытую сеть" заливать не планирую 

## Как это работает

Очень просто:

1. Через визуальный интерфейс добавляется ссылка на интересующий товар, которая отправляется на сервер для сбора необходимых данных со страницы.
2. Сервер отправляет собранные данные обратно и ожидает получения значения от пользователя, которое будет являться целевой-отслеживаемой.
3. В интерфейс добавляется карточка отслеживаемого товара, а сервер начинает ~поминутную (настраивается) проверку изменения цены.
4. Если цена изменилась до целевой или ниже, то в телеграм-чат от бота поступит сообщение с информацией о изменении.

## Какие особенности
- Поддерживается пока только одна торговая площадка
- Сервер приватный и располагается локально без возможности, на текущий момент, определиться удалённо

## Интерфейс

На текущий момент можно выполнять следующие действия:

- Добавлять/удалять карточки товара
- Взаимодействовать с модальными окнами

Несмотря на такой маленький список "дозволенного", этого достаточно, чтобы начать отслеживать целевое значение 😊

## Используемые технологии

- JavaScript
- React
- Redux toolkit
- Material UI
- styled-components

## Установка и начало работы

```
git clone https://github.com/Lehano-A/trackerman    <-- клонируем проект
cd [folder project]    <-- переходим внутрь папки проекта
npm install    <-- устанавливаем зависимости
npm start    <-- запускаем проект
```

## Контакты

Telegram - @lehano
