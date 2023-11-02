<script lang="ts">
  import { loggedInUser } from "../stores/user";
</script>

<aside>
  Sidebar ({ $loggedInUser?.username })
</aside>