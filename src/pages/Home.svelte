<script>
  import {pushSuccess, pushError} from '../toasts';
</script>

<h1>ACME Corporation</h1>

<button on:click|preventDefault={() => pushSuccess("Great success!")}>Toast Success</button>
<button on:click|preventDefault={() => pushError("Oops. We screwed up.")}>Toast Error</button>
