<template>
  <div class="app-shell">
    <header class="app-shell__header">
      <div>
        <p class="app-shell__eyebrow">Vue UI System</p>
        <h1 class="app-shell__title">Component Workspace</h1>
      </div>
      <nav class="app-shell__nav">
        <RouterLink to="/" class="app-shell__link">Home</RouterLink>
        <RouterLink to="/guide" class="app-shell__link">Guide</RouterLink>
      </nav>
    </header>

    <main class="app-shell__content">
      <RouterView />
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: { RouterLink, RouterView }
};
</script>

<style lang="scss">
@import "./styles/index.scss";

body {
  background: linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%);
  color: #111827;
}

#app {
  min-height: 100vh;
}

.app-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

.app-shell__header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbe4f0;
}

.app-shell__eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1f6feb;
  margin-bottom: 6px;
}

.app-shell__title {
  font-size: 32px;
  line-height: 1.1;
}

.app-shell__nav {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.app-shell__link {
  padding: 10px 14px;
  border-radius: 999px;
  color: #334155;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.app-shell__link.router-link-active {
  background: #1f6feb;
  color: #ffffff;
}

.app-shell__content {
  padding-top: 28px;
}

@media (max-width: 767px) {
  .app-shell__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .app-shell__title {
    font-size: 28px;
  }
}
</style>
