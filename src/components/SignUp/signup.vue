<template>
  <div class="signup light-block">
    <h2>Welcome to MyWorkStatus</h2>
    <form @submit.prevent="submit"
          class="signup-form">
      <div>
        <input v-model="username"
               type="text"
               placeholder="username...">
      </div>
      <div>
        <button class="btn signup-btn"
                @click="submit"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script src="./signup.js"></script>
<style src="./signup.scss" lang="scss" scoped></style>
