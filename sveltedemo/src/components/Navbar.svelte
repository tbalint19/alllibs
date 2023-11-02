<script lang="ts">
  import { loggedInUser, logout } from "../stores/user";
</script>

<nav>
  Hello { $loggedInUser?.username }
  <button on:click={logout} >Logout</button>
</nav>