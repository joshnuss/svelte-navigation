<script>
  import {link} from 'svelte-routing';
  export let show = false;

  function hide() {
    show = false;
  }
</script>

<style>
  .container {
    top: 0px;
    position: absolute;
    height: 100%;
    width: 100%;
    background: #ccc;
    display: none;
  }
  .show {
    display: block;
  }
  nav {
    padding: 2em;
  }

  a {
    display: block;
    font-weight: 500;
    font-size: 1.4em;
    padding: 0.2em;
    color: #222;
  }

  button {
    cursor: pointer;
    padding: 0.5em 0.7em;
    margin: 10px;
    display: block;
    position: absolute;
    right: 0px;
    background: none;
    color: #444;
  }

  button:hover {
    color: #000;
  }

  svg {
    fill: currentColor;
  }
</style>

<div class="container" class:show>
  <button on:click|preventDefault={hide}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height=20><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>
  </button>
  <nav>
    <a href="/">Home</a>
    <a href="/settings" use:link>Settings</a>
    <a href="/account" use:link>Account</a>
  </nav>
</div>
