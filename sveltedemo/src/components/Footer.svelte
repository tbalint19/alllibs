<script lang="ts">
    import { loggedInUser, logout } from "../stores/user";
</script>

<div>
  logged in as { $loggedInUser?.username }
  <button on:click={logout}>Logout</button>
</div>