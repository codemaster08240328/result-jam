<script lang="ts">
  import type { TUser } from "$types/user.type";
  import { CARD_DATA_DEMO } from "../lib/board";
  import { getUserSubmissions, handleMoment } from "../lib/helper";
  import Avatar from "$components/Avatar.svelte";
  import Button from "$components/Button.svelte";
  import ProgressBar from "$components/ProgressBar.svelte";
  import SubmissionTracker from "$components/SubmissionTracker.svelte";
  import Card from "./Card.svelte";
  import Image from "./Image.svelte";
  export let user: TUser;

  $: btnDisabled = (user: TUser) => {
    return true;
  };

  $: events = getUserSubmissions(user);

  $: formattedDate = (date: string) => handleMoment(date);
</script>

{#if !!user}
  <div class="text-center overflow-hidden">
    <div class="bg-white bg-bluegray-gradient sm:pb-16 pb-8 relative">
      <div
        class="sm:bg-profile-banner bg-profile-banner-mob bg-contain bg-no-repeat bg-bottom  pt-9 mt-5 px-8"
      >
        <Avatar {user} size={10} hasPlace hasOnline />
        <h1
          class="text-center sm:text-3xxl text-2xl font-display font-medium mt-6 text-black"
        >
          {user.firstName}
          {user.lastName}
        </h1>
        <span class="text-sm text-bluegray-800 mt-1 font-normal">
          Boca Raton, FL, USA
        </span>
        <p
          class="text-base mt-4 text-black font-normal max-w-screen-sm sm:px-28 mx-auto"
        >
          Empower and educate people everywhere so that they can imporve their
          lives and achieve their goals.
        </p>
      </div>
      <div class="px-8">
        <Button className="mt-6 sm:w-36 w-full" disabled={btnDisabled(user)}>
          <div slot="icon">
            {#if btnDisabled(user)}
              <svg
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            {/if}
          </div>
          <span slot="label" class="ml-2">MESSAGE</span>
        </Button>
      </div>
      <p class="mt-2 text-bluegray-800 text-xs font-light">
        Complete the
        <span class="text-green-650 font-medium cursor-pointer">
          Step 2: Setup Your Tools</span
        >
        <br />
        to be ablet to message
        {user.firstName}
      </p>

      <div class="px-9">
        <ProgressBar className="mt-36 sm:w-3/5 w-full inline-block" {user} />
      </div>

      <div
        class="sm:w-3/5 flex sm:mx-auto mt-8 sm:flex-row flex-col mx-6 divide-y divide-bluegray-700 divide-solid sm:divide-y-0 sm:border-none border-solid border border-r-0 border-l-0 border-bluegray-700"
      >
        {#each CARD_DATA_DEMO as { title, img1, img2, contents }, index}
          <div
            class={`w-full ${
              index === 0 ? "sm:mr-2 sm:m-0 mb-2" : "sm:ml-2 sm:mt-0 mt-2"
            }`}
          >
            <Card {contents}>
              <div slot="header" class="flex items-center font-medium text-2xl">
                <Image className="flex-none w-1/5" url={img1} />
                <span class="flex-grow -ml-2">{title}</span>
                <Image className="flex-none w-2/5" url={img2} />
              </div>
            </Card>
          </div>
        {/each}
      </div>
    </div>
    <div class="bg-white pb-10">
      <SubmissionTracker {events} />
      <div class="mt-2">
        <div
          class="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
        >
          <Image url="/images/flag-1.png" className="w-fit object-contain" />
        </div>
        <span class="font-normal text-xs text-bluegray-800 mt-2.5"
          >{`${formattedDate(user.joined).m} ${formattedDate(user.joined).d}, ${
            formattedDate(user.joined).y
          } (${formattedDate(user.joined).delta} days ago)`}</span
        >
        <p class="text-black font-semibold text-sm">
          Joined the Fast Start Academy
        </p>
      </div>
    </div>
  </div>
{/if}
