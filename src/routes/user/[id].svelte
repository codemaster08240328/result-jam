<script context="module">
  export async function load({ fetch, page, session }) {
    const { id } = page.params;
    return { props: { id } };
  }
</script>

<script>
  import UserProfile from "../../components/UserProfile.svelte";
  import { board } from "../../lib/board";

  export let id;
</script>

<div class="sm:pt-20 pt-8 bg-bluegray">
  <UserProfile user={board.users[id]} />
</div>
