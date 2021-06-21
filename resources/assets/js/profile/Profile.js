import Vue from 'vue';
import PersonalInformation from './PersonalInformation';
import Licenses from './Licenses';
import Documents from './Documents';
import Certifications from './Certifications';
import WorkHistory from './WorkHistory';
import Search from '../components/Search';
import Avatar from './Avatar';
import Form from '../structur/src/form/Form';
import editableTextCard from './components/EditableTextCard';

const Profile = new Vue({
	name: 'Profile',
	el: '#profile',
	components: {
		PersonalInformation,
		Licenses,
		Documents,
		Certifications,
		WorkHistory,
		Search,
		Avatar,
		priority: editableTextCard,
		notes: editableTextCard,
	},
	mounted() {
		this.user = window.userData;
		this.roles = window.roles;
		this.availablePermissions = window.availablePermissions;
	},
	data() {
		return {
			user: {avatar:{path: '#'}},
			authUser: {avatar:{path: '#'}},
			avatarCropper: null,
			showAvatarButton: false,
			addingAvatar: false,
			imgLoaded: false,
			google: {},
			roles: [],
			availablePermissions: [],
		}
	},
	computed: {
		userHasAvatar() {
			return  this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
		},
	},
	methods: {
		updateAvailability(availability){
			return this.user.available = availability;
		},
		updatePriority(priority){
			return this.user.priority = priority;
		},
		updateNotes(note) {
			return this.user.notes = note;
		},
		updateRoles(roles){
			this.user.roles = roles;
		},
		grantPermission(permission) {
			return this.user.permissions.push(permission);
		},
		revokePermission(permission) {
			const idx = this.user.permissions.indexOf(permission)
			return this.user.permissions.splice(idx, 1);
		},
		getAvatarPath() {
			if (this.userHasAvatar) {
				return this.user.avatar.path;
			}
			return "#";
		}
	}
}).$mount('#profile');