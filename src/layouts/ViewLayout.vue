<script setup lang="ts"></script>

<template>
  <div class="content">
    <aside class="aside">
      <div class="title-container">
        <h1>Sidebar</h1>
      </div>
      <ul class="aside-list">
        <li class="aside-list-item"></li>
      </ul>
    </aside>

    <main class="main">
      <slot name="main"></slot>
    </main>

    <footer class="footer">
      <h1>footer</h1>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-areas:
    "aside main main"
    "aside main main"
    "footer footer footer";

  .aside {
    grid-area: aside;
    background: blue;
  }

  .main {
    grid-area: main;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .footer {
    grid-area: footer;
    background: green;
  }
}
</style>
