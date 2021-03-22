<script lang="ts">
  import type { TSubmission } from "$types/user.type";
  import { handleMoment } from "../lib/helper";
  import Image from "./Image.svelte";
  export let events: Array<TSubmission> = [];

  $: getFormattedDate = (date: string) => handleMoment(date);
</script>

<div class="flex flex-col-reverse sm:w-1/2 mx-auto">
  {#each events as event, index (index)}
    <div
      class={`flex min-h-132 ${
        index % 2 === 0
          ? "sm:flex-row-reverse flex-col-reverse sm:items-stretch items-center"
          : "sm:flex-row flex-col-reverse sm:items-stretch items-center"
      }`}
    >
      <div
        class="flex-1 flex flex-col sm:border-solid border-none mx-4 border border-l-0 border-r-0 border-b-0 border-bluegray-700 sm:text-left text-center py-4 sm:mt-7 mt-0"
      >
        <span class="font-normal text-xs text-bluegray-800"
          >{`${
            event.status === "complete" ? "Completed a Step" : event.status
          }`}</span
        >
        <span class="text-black font-semibold text-sm">{event.title}</span>
        {#if !!event.img}
          <Image
            url={event.img}
            base="/images/mock-img.png"
            className="mt-2 w-60"
          />
        {/if}
      </div>
      <div class="flex-0 w-fit flex sm:flex-col flex-col-reverse items-center">
        <div
          class="w-14 h-14 inline-flex justify-center items-center text-bluegray-800 bg-bluegray flex-col rounded-full"
        >
          <span class="text-base font-semibold"
            >{getFormattedDate(event.date).d}</span
          >
          <span class="text-xs font-semibold"
            >{getFormattedDate(event.date).m}</span
          >
        </div>
        <div class="w-0.25 sm:flex-1 h-7 bg-bluegray-700" />
      </div>
      <div class="flex-grow mx-4 sm:block hidden" />
    </div>
  {/each}
</div>

<style></style>
