<script lang="ts">
  import type { TUser } from "$types/user.type";
  import type { TCardItem } from "$types/global.type";
  import { CARD_DATA_DEMO } from "../lib/board";
  import Avatar from "$components/Avatar.svelte";
  import Button from "$components/Button.svelte";
  import ProgressBar from "$components/ProgressBar.svelte";
  import Card from "./Card.svelte";
  export let user: TUser;

  $: btnDisabled = (user: TUser) => {
    return true;
  };
</script>

{#if !!user}
  <div class="text-center">
    <div class="bg-profile-banner bg-contain bg-no-repeat bg-bottom  pt-9 mt-5">
      <Avatar {user} size={10} hasPlace hasOnline />
      <h1
        class="text-center text-3xxl font-display font-medium mt-6 text-black">
        {user.firstName}
        {user.lastName}
      </h1>
      <span class="text-sm text-bluegray-800 mt-1 font-normal">
        Boca Raton, FL, USA
      </span>
      <p class="text-base mt-4 text-black font-normal">
        Empower and educate people everywhere so that
        <br />
        they can imporve their lives and achieve their goals.
      </p>
    </div>
    <Button className="mt-6" disabled={btnDisabled(user)}>
      <div slot="icon">
        {#if btnDisabled(user)}
          <svg
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd" />
          </svg>
        {/if}
      </div>
      <span slot="label" class="ml-2">MESSAGE</span>
    </Button>
    <p class="mt-2 text-bluegray-800 text-xs font-light">
      Complete the
      <span class="text-green-650"> Step 2: Setup Your Tools</span>
      <br />
      to be ablet to message
      {user.firstName}
    </p>

    <ProgressBar className="mt-36 w-2/3 inline-block" {user} />

    <div class="w-2/3 flex mx-auto mt-8">
      {#each CARD_DATA_DEMO as { title, contents }, index}
        <Card {title} {contents} />
      {/each}
    </div>
  </div>
{/if}
