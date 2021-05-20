 {{-- <img src="/images/icon-on-light.png" height="auto" width="auto" alt="Claim Consulant Group"> --}}
<nav class="navbar" style="background: #292f3d;">
  <div class="navbar-brand">
    <a class="navbar-item" href="/apply">
      <img src="/images/icon.png" height="auto" width="auto" alt="Claim Consulant Group">
    </a>

    <div class="navbar-burger burger" data-target="userMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="userMenu" class="navbar-menu">
    <div class="navbar-start">
      @if (Auth::user()->hasRole('administrator'))
        <search claims-count="2037" users-count="1,239"></search>
        <role-switcher v-on:role-switched="switchRole" :current-role="currentRole"></role-switcher>
      @endif
    </div>

    <div class="navbar-end">
          @guest
            <a class="navbar-item" href="{{ route('login') }}">Login</a>
            <a class="navbar-item" href="{{ route('register') }}">Register</a>
          @else
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/profile">
                @if(isset(Auth::user()->avatar))
                <img 
                  class="avatar"
                  src="{{ Auth::user()->avatar->path }}" 
                  alt="{{ Auth::user()->name}}" 
                  height="auto" width="auto"
                  style="width: 1.75rem; height: 1.75rem; border-radius: 1.75rem; border: 1px solid #ccc; cursor: pointer; margin-right: 1rem;"
                  >
                @endif
                  <span id="username" style="width: 100%">{{ Auth::user()->name }}</span>
              </a>
              <div class="navbar-dropdown is-right">
                @if(Auth::user()->applied)<a href="/profile/#/" class="navbar-item">My Profile</a>@endif
                @if (Auth::user()->hasRole('administrator'))
                  <a href="/dashboard/#/" class="navbar-item">My Dashboard</a>
                  <hr class="dropdown-divider">
                  <a href="/claims/#/" class="navbar-item">Claims</a>
                  <hr class="dropdown-divider">
                  <a href="/users/dashboard/#" class="navbar-item">Users Dashboard</a>
                  <a href="/users/#/" class="navbar-item">Filter Users</a>
                  <a href="/roles/#/" class="navbar-item">Manage Roles</a>
                @endif
                 <hr class="dropdown-divider">
                 <a v-on:click="showSupport = !showSupport" class="navbar-item">Support</a>
                  <hr class="dropdown-divider">
                <a 
                  class="navbar-item" 
                  href="{{ route('logout') }}"
                  onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                >
                    Signout
                     <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                      {{ csrf_field() }}
                    </form>
                </a>

              </div>
            </div>
          
          @endguest
         
      </div>

    </div>

  </div>
</nav>