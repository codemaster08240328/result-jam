<script lang="ts">
  import Avatar from "$components/Avatar.svelte";
  import Tooltip from "$components/Tooltip.svelte";
  import type { TUser } from "$types/user.type";
  import type { TPosition } from "$types/global.type";
  import { CUR_USER } from "../lib/board";
  import { getLastSubmission } from "../lib/helper";
  export let className: string | undefined;
  export let user: TUser;

  $: getCompletePercent = (user: TUser): number => {
    return user.percentComplete;
  };

  $: getPosition = (user: TUser): TPosition => {
    if (user.percentComplete > 85) return "left";
    if (user.percentComplete < 15) return "right";

    return "middle";
  };

  $: getCurStep = (user: TUser) => getLastSubmission(user);

  $: delta = user.numStepsComplete - CUR_USER.numStepsComplete;
</script>

<div class={`relative ${className}`}>
  <div class="bg-bar polygon-clip-path-4">
    <div
      class="progress-bar polygon-clip-path-4"
      style={`width: ${getCompletePercent(user)}%`}
    >
      <div class="w-full bg-stripe-piece h-10" />
    </div>
  </div>
  <div
    class="cur_user-wrapper"
    style={`width: ${getCompletePercent(CUR_USER)}%`}
  >
    <Avatar
      user={CUR_USER}
      size={2}
      class="border-solid border-2 border-white"
    />
  </div>
  <div class="tar_user-wrapper" style={`width: ${getCompletePercent(user)}%`}>
    <Tooltip position={getPosition(user)} show>
      <div slot="tooltip-content">
        <span class="text-bluegray-800 font-bold text-xxs">
          STEP
          {user.numStepsComplete}
        </span>
        <p class="font-semibold text-black text-sm mt-2">
          {getCurStep(user).title}
        </p>
        <div class="text-black font-normal text-xs flex mt-1">
          <div class="bg-green w-5 h-4 polygon-clip-path-1" />
          <span class="ml-1.5"
            >{`${Math.abs(delta)} Step${Math.abs(delta) > 1 ? "s" : ""} ${
              delta > 0 ? "ahead of" : "prior to"
            } you`}
          </span>
        </div>
      </div>
      <Avatar
        slot="tooltip-target"
        {user}
        size={2}
        class="border-solid border-2 border-white"
      />
    </Tooltip>
    <span class="ml-1.5 text-white italic text-xl font-bold"
      >{getCompletePercent(user)}%</span
    >
  </div>
</div>

<style>
  .bg-bar {
    @apply bg-bluegray-600
    w-full;
  }

  .progress-bar {
    @apply bg-gradient-to-r
      from-green-550
      to-green-500;
  }

  .cur_user-wrapper {
    @apply flex
      justify-end
      h-10
      items-center
      absolute
      top-0;
  }

  .tar_user-wrapper {
    @apply flex
      items-center
      absolute
      top-0
      px-4
      justify-end
      h-10;
  }
</style>
