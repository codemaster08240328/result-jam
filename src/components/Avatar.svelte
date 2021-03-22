<script script lang="ts">
  import { ordNum } from "../lib/helper";

  import type { TUser } from "$types/user.type";
  import Image from "./Image.svelte";
  export let size: number = 3;
  export let photo: string = "/images/default-avatar.png";
  export let hasOnline: boolean | undefined = undefined;
  export let hasPlace: boolean = false;
  export let user: TUser;
  let className = "";
  export { className as class };
  $: url = !!user ? (!!user.photo ? user.photo : photo) : photo;
</script>

<div
  class="relative inline-block"
  style={`width: ${size}rem; height: ${size}rem;`}
>
  {#if hasPlace}
    <div class="place-wrapper">{ordNum(user.place)}</div>
  {/if}
  {#if hasOnline}
    <div class="online-sign bg-green-450" />
  {/if}
  <div
    class={`shell rounded-full overflow-hidden transition-all duration-200 avatar flex-none ${className}`}
    style={`width: ${size}rem; height: ${size}rem;`}
  >
    <Image
      url={`${url}${
        url.includes("resultjam")
          ? `?w=${size * 16}&h=${size * 16}&crop=faces,center&fit=crop`
          : ""
      }`}
      base={photo}
    />
  </div>
</div>

<style>
  .place-wrapper {
    @apply text-bluegray-800
      bg-white
      rounded-full
      w-11
      h-11
      absolute
      flex
      justify-center
      italic
      text-lg
      items-center
      font-semibold
      right-2
      -top-2;
  }
  .online-sign {
    @apply w-5
      h-5
      rounded-full
      border-white
      border-2
      absolute
      bottom-1
      right-6;
  }
</style>
