export default [
	{ label: 'Relative Date', property: 'created_at', model: 'user',  removable: true },
	{ label: 'Xactnet Address', property: 'xactnet_address', model: 'profile', removable: true},
	{ label: 'Priority', property: 'priority', model: 'user', removable: true},
	{ label: 'Notes', property: 'notes', model: 'user', removable: true},
	{ label: 'Street', property: 'street', model: 'profile', removable: true},
	{ label: 'City', property: 'city', model: 'profile', removable: true},
	{ label: 'State', property: 'state', model: 'profile', removable: true},
	{ label: 'zip', property: 'zip', model: 'profile', removable: true},
	{ label: 'Phone', property: 'phone', model: 'profile', removable: true},
	{ label: 'Software', property:'type', model:'software_experiences', removable: true },
	{ label: 'Res. Exp (mo)', property: 'residential_experience', model: 'work_history',  removable: true},
	{ label: 'Res. Claims', property: 'residential_claims', model: 'work_history',  removable: true},
	{ label: 'Com. Exp (mo)', property: 'commercial_experience', model: 'work_history',  removable: true},
	{ label: 'Com. Claims', property: 'commercial_claims', model: 'work_history',  removable: true},
	{ label: 'Auto Exp (mo)', property: 'auto_experience', model: 'work_history',  removable: true},
	{ label: 'Auto Claims', property: 'auto_claims', model: 'work_history',  removable: true},
	{ label: 'Inland Marine Exp', property: 'inland_marine_experience', model: 'work_history',  removable: true},
	{ label: 'Inland Marine Claims', property: 'inland_marine_claims', model: 'work_history',  removable: true},
	{ label: 'Casulty Exp', property: 'casualty_experience', model: 'work_history',  removable: true},
	{ label: 'Casulty Claims', property: 'casualty_claims', model: 'work_history',  removable: true},
	{ label: 'Large Loss Exp', property: 'large_loss_experience', model: 'work_history',  removable: true},
	{ label: 'Large Loss Claims', property: 'large_loss_claims', model: 'work_history',  removable: true},
	{ label: 'Environmental Exp', property: 'environmental_experience', model: 'work_history',  removable: true},
	{ label: 'Environmental Claims', property: 'environmental_claims', model: 'work_history',  removable: true},
	{ label: 'Flood Exp', property: 'flood_experience', model: 'work_history',  removable: true},
	{ label: 'Flood Claims', property: 'flood_claims', model: 'work_history',  removable: true},	
	{ label: 'Earthquake Exp', property: 'earthquake_experience', model: 'work_history',  removable: true},
	{ label: 'Earthquake Claims', property: 'earthquake_claims', model: 'work_history',  removable: true},
	{ label: 'Applied ?', property: 'applied', model: 'user',  removable: true },
	{ label: 'Desk Exp (mo)', property: 'desk_experience', model: 'work_history',  removable: true },
]