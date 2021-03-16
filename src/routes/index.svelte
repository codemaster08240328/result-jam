<script>
  import UserProfile from '../components/UserProfile.svelte'
  import Sheet from '../components/Sheet.svelte'
  import Avatar from '../components/Avatar.svelte'
  import {board} from '../lib/board'

  let user = false
</script>

<div class="flex flex-col mx-auto w-136 mt-24 space-y-4">
  {#each board.users as u, i}
    <div class="flex items-center w-full justify-between">
      <div class="flex items-center space-x-3">
        <Avatar user={u} size="2.5" />
        <span>{u.firstName} {u.lastName}</span>
      </div>
      <div class="flex space-x-3">
        <button
          class="p-2 border-0 bg-green text-white"
          on:click={() => (user = u)}>Slide Up</button
        >
        <a href={`/user/${i}`} class="p-2 border-0 bg-green text-white">Go</a>
      </div>
    </div>
  {/each}
</div>

{#if user}
  <Sheet bind:open={user}>
    <UserProfile {user} />
  </Sheet>
{/if}
<div class="sheets" />
