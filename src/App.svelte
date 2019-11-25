<script>
  import { onMount } from 'svelte'
  import { Router, Route } from 'svelte-routing'
  import { globalHistory } from 'svelte-routing/src/history'
  import Navbar from './components/Navbar.svelte'
  import Sidebar from './components/Sidebar.svelte'
  import Home from './pages/Home.svelte'
  import Settings from './pages/Settings.svelte'
  import Account from './pages/Account.svelte'

  let showSidebar = false;

  onMount(() => {
    return globalHistory.listen(() => {
      showSidebar = false
    })
  })

</script>

<Router>
  <Navbar bind:sidebar={showSidebar}/>
  <Sidebar bind:show={showSidebar}/>

  <main>
    <Route path="/" component={Home}/>
    <Route path="/account" component={Account}/>
    <Route path="/settings" component={Settings}/>
  </main>
</Router>
