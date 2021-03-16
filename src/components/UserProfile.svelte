<script>
  export let user
</script>

{#if user}
  <div>
    <h1 class="text-center text-4xl font-display font-semibold">
      {user.firstName}
      {user.lastName}
    </h1>
  </div>
{/if}
