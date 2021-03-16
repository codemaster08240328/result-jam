<script context="module">
  export async function load({fetch, page, session}) {
    const {id} = page.params
    return {props: {id}}
  }
</script>

<script>
  import UserProfile from '../../components/UserProfile.svelte'
  import {board} from '../../lib/board'

  export let id
</script>

<div class="mt-20">
  <UserProfile user={board.users[id]} />
</div>
