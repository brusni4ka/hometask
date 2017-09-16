<template>
  <div class="vacation light-block">
    <img class="logo" src="../../assets/logo.png">
    <h2>Hello {{user.username}}, you are {{userStatusTitle}}</h2>
    <div class="mystatus-block">
      <p>Update my Current Status</p>
      <select v-model="status" @change="updateStatus">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <hr/>
    <div class="filter">
      <input v-model="username"
               type="text"
               placeholder="Search by name...">
      </input>
      <select v-model="filterStatus">
        <option value="all">Filter by status</option>
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="employees">
      <p v-show="!usersList.length">No users found</p>
      <div class="user-list">
        <ul>
          <li v-for="user in filteredUsers" :class="{ active: user.status === 'vacation' }">
            {{ user.username }} ({{ user.status }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./vacation.js"></script>
<style src="./vacation.scss" lang="scss" scoped></style>
