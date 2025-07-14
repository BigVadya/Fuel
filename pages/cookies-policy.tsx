import Page from 'components/Page';
import styled from 'styled-components';

export default function CookiesPolicyPage() {
  return (
    <Page title="Политика использования файлов cookies" canonical="https://railguard.ru/cookies-policy">
      <PolicyContainer>
        <h1>🍪 Политика использования файлов cookies</h1>
        <p>
          <b>Дата вступления в силу:</b> 24 июня 2025 г.
        </p>
        <p>Настоящая Политика cookies разъясняет, как сайт RailGuard использует файлы cookie и аналогичные технологии.</p>
        <h2>1. Что такое cookies</h2>
        <p>
          Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. Они позволяют распознавать
          ваше устройство и улучшать взаимодействие с Сайтом.
        </p>
        <h2>2. Какие cookies мы используем</h2>
        <p>На сайте могут использоваться следующие категории cookies:</p>
        <ul>
          <li>
            <b>Обязательные cookies</b> — обеспечивают базовую работу сайта (например, сессии, безопасность).
          </li>
          <li>
            <b>Функциональные cookies</b> — запоминают ваши настройки (язык, предпочтения).
          </li>
          <li>
            <b>Аналитические cookies</b> — используются для сбора обезличенной статистики (в данный момент не используются, но могут быть
            добавлены в будущем).
          </li>
        </ul>
        <h2>3. Как управлять cookies</h2>
        <p>
          Вы можете управлять cookies через настройки вашего браузера. Обратите внимание, что отключение некоторых cookies может повлиять на
          корректную работу сайта.
        </p>
        <h2>4. Хранение cookies</h2>
        <p>
          Cookies хранятся на вашем устройстве в течение времени, определённого в их параметрах (временные или постоянные), или до момента
          их удаления вами вручную.
        </p>
        <h2>5. Изменения в политике cookies</h2>
        <p>
          Мы можем время от времени обновлять настоящую Политику. Все изменения вступают в силу с момента публикации новой версии на Сайте.
        </p>
      </PolicyContainer>
    </Page>
  );
}

const PolicyContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: rgb(var(--background));
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  color: rgb(var(--text));
  font-size: 1.35rem;
  line-height: 2;
  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  h2 {
    font-size: 1.3rem;
    margin-top: 2.2rem;
    margin-bottom: 0.7rem;
    color: rgb(var(--primary));
  }
  ul {
    margin: 0 0 1.2rem 1.2rem;
    padding-left: 1.2rem;
    list-style: disc;
  }
  p {
    margin-bottom: 1.1rem;
  }
  a {
    color: rgb(var(--primary));
    text-decoration: underline;
  }
`;
