<role-manager
	v-on:role-added="updateRoles"
	:roles="roles"
	:user-roles="user.roles"
	:user-id="user.id"
	endpoint="roles"
>
	Assign Roles
</role-manager>

<priority 
	v-on:text-changed="updatePriority" 
	:text="user.priority ? user.priority : 'Nothing yet'" 
	:user-id="user.id"
	endpoint="priority"
>
	Priority
</priority>

<notes
	v-on:text-changed="updateNotes"
	:text="user.notes ? user.notes : 'Nothing yet'" 
	endpoint="notes"
	:user-id="user.id"
>
	Notes
</notes>