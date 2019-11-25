<script>
  import { onMount } from 'svelte';
  import { loading } from '../loading';

  let isLoading = false;
  let index = 0;
  let direction = 'forward';

  loading.subscribe(value => isLoading = value)

  onMount(() => {
    const timer = setInterval(() => {
      if (direction == 'forward') {
        index = index + 1

        if (index > 4) {
          index = 3
          direction = 'reverse'
        }
      } else {
        index = index - 1

        if (index < 0) {
          index = 0
          direction = 'forward'
        }
      }
    }, 100)

    return () => clearInterval(timer)
  })
</script>

<style>
  .container {
    backdrop-filter: blur(4px);
    top: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    height: 100px;
  }

  svg rect {
    fill: #fff4;
    width: 10px;
    height: 20px;
  }

  svg rect.active {
    fill: white;
  }
</style>

{#if isLoading}
  <div class="container">
    <svg viewBox="0 0 90 20">
      <rect x="10" y="0" alignment-baseline=middle class:active={index == 0}/>
      <rect x="25" y="0" alignment-baseline=center class:active={index == 1}/>
      <rect x="40" y="0" alignment-baseline=center class:active={index == 2}/>
      <rect x="55" y="0" alignment-baseline=middle class:active={index == 3}/>
      <rect x="70" y="0" alignment-baseline=middle class:active={index == 4}/>
    </svg>
  </div>
{/if}
