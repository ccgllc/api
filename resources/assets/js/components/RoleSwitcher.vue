<template>
	 <div class="navbar-item">
        <div class="field">
            <div class="select">
              <select @change="switchRole" v-model="role" style="background-color: #4A5268; color: #7683a2; border-color:#48526a;">
                <option value="0">Act As...</option>
                <option value="administrator">Admin</option>
                <option value="dispatch">Dispatch</option>
                <option value="adjuster">Adjuster</option>
                <option value="reviewer">Reviewer</option>
              </select>
            </div>
          </div>
        </div>
</template>

<script>
	export default {
		name: 'RoleSwitcher',
		props: ['currentRole'],
		computed: {
			//
		},
		data() {
			return {
				role: this.currentRole
			}
		},
		methods: {
			switchRole() {
				return this.role == 0
					? null
					: this.$emit('role-switched', this.role) ;
			},
		}
	}
</script>

